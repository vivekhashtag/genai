import Link from "next/link";

const NOTEBOOK_PATH = "/labs/lab7_observability_evals.ipynb";
const COLAB_URL =
  "https://colab.research.google.com/github/vivekhashtag/genai/blob/main/public/labs/lab7_observability_evals.ipynb";

const card =
  "rounded-3xl border border-amber-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-amber-700/40 dark:bg-gray-800/80";
const codeBox =
  "mt-4 overflow-x-auto rounded-2xl bg-gray-900 p-4 font-mono text-xs leading-relaxed text-amber-100";
const chip =
  "rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300";

type Exercise = {
  num: string;
  title: string;
  why: string;
  does: string;
  terms?: string[];
  expected: string;
  notice: string;
  finance?: string;
  code: string;
};

const pipeline = [
  "Question",
  "Trace starts",
  "Retrieve span",
  "Generate span",
  "Trace ends",
  "Golden-set scores",
  "Release gates",
];

const exercises: Exercise[] = [
  {
    num: "0",
    title: "Choose your model provider",
    why: "The same provider setup as Labs 4 and 6. This lab makes about 40 model calls per run (20 answers and 20 judgements), so a free tier with tight limits may slow you down.",
    does: "Defines chat(messages), then an ask(system, user) helper with a few retries and a short wait, because rate-limit errors are common when many calls run in a row. LIMIT and PAUSE let you run fewer questions or slow down.",
    expected: "A short greeting from the model when the setup cell runs, and no errors.",
    notice:
      "Ollama must run locally, since Colab cannot reach it. Model names change, so edit MODEL if one is rejected.",
    code: `LIMIT = 20    # how many golden questions to run
PAUSE = 0.5   # seconds between questions (raise on strict free tiers)

def ask(system, user, retries=3):
    ...  # chat() with back-off on errors`,
  },
  {
    num: "1",
    title: "Build the assistant (recap of Lab 3)",
    why: "You need something to observe. This is a compact version of Lab 3: download the SEBI memo, chunk it, store it in ChromaDB, retrieve, and answer from the retrieved text only.",
    does: "retrieve_chunks returns the top matching chunks with page numbers. generate builds a prompt from them and asks the model, replying 'Not found in the provided documents.' when the context lacks the answer. It returns both the answer and the prompt, because the next exercise estimates tokens from the prompt.",
    terms: ["Token: the unit models read and are billed in, roughly three-quarters of an English word."],
    expected:
      "An answer mentioning 2019 with a page citation. If it says 'Not found', check that chunks were stored and try a stronger model.",
    notice: "Keep this assistant simple. The interesting part is how we watch and measure it.",
    code: `def retrieve_chunks(question, k=4): ...
def generate(question, chunks):
    ...
    return {"answer": ask(SYSTEM, prompt), "prompt": SYSTEM + "\\n" + prompt}`,
  },
  {
    num: "2",
    title: "Add tracing",
    why: "When an answer is wrong or slow you need to know where: did retrieval fail, or did generation? A trace records one request from start to finish, and each step inside it is a span with its own timing and details (Module 8, section 2).",
    does: "The Trace class records spans. Its span() context manager times whatever runs inside the with block. finish() adds up time, estimated tokens and estimated cost. You complete rag_answer so it records a retrieve span and a generate span, storing token estimates in the generate span.",
    terms: [
      "Trace: the full record of one request.",
      "Span: one timed step inside a trace.",
      "Estimated tokens: about 4 characters per token. These are estimates, not billed numbers. Your provider's usage fields are exact (a stretch goal).",
    ],
    expected:
      "The answer, then one line per span with its name, milliseconds and details. The generate span is almost always far slower than retrieve.",
    notice:
      "That gap tells you where optimisation would pay off. If retrieve were the slow step you would tune the database, not the model. Set PRICE_IN_PER_M and PRICE_OUT_PER_M from your provider's current pricing page, or leave them at 0 for free tiers.",
    finance:
      "A trace is also an audit record: which question, which sources, which model, and when (Module 8, section 9).",
    code: `def rag_answer(question, k=4):
    trace = Trace("rag_answer", question)
    # YOUR CODE HERE:
    # with trace.span("retrieve", k=k) as s: ...
    # with trace.span("generate", model=MODEL) as s: ...
    #   set s["in_tok"], s["out_tok"] with est_tokens(...)
    # trace.finish(answer); return {...}
    raise NotImplementedError`,
  },
  {
    num: "3",
    title: "The golden set",
    why: "You cannot measure quality without a fixed set of questions with known right answers. Running the same set after every change shows whether you made things better or worse, which is a regression test.",
    does: "20 questions written from the SEBI memo. 18 have answers in the document. 2 do not, because the memo excises the number of comments received and states no penalty, so the correct behaviour there is to say 'Not found'. Each item has keys: a list of groups, and an answer passes if at least one alternative from every group appears in it. You add two questions of your own after checking the memo text.",
    terms: [
      "Golden set: a fixed set of questions with known good answers.",
      "Regression test: re-running the golden set after a change to see if anything got worse.",
    ],
    expected: "The line '20 golden questions, 18 answerable', or more if you added your own.",
    notice:
      "The fact check is strict about wording, and a correct answer phrased in an unexpected way would fail it. That is why we also use an LLM judge, and why some failures deserve a human look. A set of 20 is enough to teach the idea and catch big regressions, but far too small to detect small quality changes. Real teams grow it from production failures.",
    finance:
      "Testing that the system says 'not found' matters in finance, where an assistant that always answers is dangerous.",
    code: `{"q": "What is the date of the SEBI consultation paper on this proposal?",
 "answerable": True,
 "keys": [["november 13, 2024", "13 november 2024", "13th november 2024"]]}`,
  },
  {
    num: "4",
    title: "Evaluate with an LLM judge",
    why: "The fact check tells you whether key facts are present. It does not tell you whether the answer invented anything else. Groundedness asks whether every claim in the answer is supported by the retrieved text. An answer can be correct yet partly invented, and in finance that matters (Module 8, section 3).",
    does: "An LLM judge is a second model call that reads the sources and the answer and gives 1 (fully supported) or 0 (some unsupported claim). You write groundedness(context, answer): a judge prompt ending in SCORE: 1 or SCORE: 0, then a regular expression to parse it. evaluate runs every golden question and records correctness, groundedness, latency and cost.",
    terms: [
      "LLM-as-judge: using a model to grade another model's output.",
      "Groundedness (faithfulness): the answer sticks to the supplied sources.",
    ],
    expected:
      "One line per question marked ok or FAIL. Most should pass, and a few FAIL lines are normal. They are the point.",
    notice:
      "Read two or three failing answers in full and decide whether each is a real error, a retrieval miss, a too-strict fact check or a judge mistake, because each needs a different fix. Judges are imperfect: they can be lenient with fluent text, and a judge that is the same model as the generator tends to favour its own style. Use a different, stronger judge when you can, and spot-check by hand.",
    code: `def groundedness(context: str, answer: str) -> int:
    # YOUR CODE HERE:
    # 1. judge prompt: is every claim supported by the context?
    # 2. reply format: 'SCORE: 1' or 'SCORE: 0', then 'REASON: ...'
    # 3. re.search(r"SCORE:\\s*([01])", reply) -> int, or 0 if no match
    raise NotImplementedError`,
  },
  {
    num: "5",
    title: "Summary, gates and a regression test",
    why: "Twenty rows are hard to act on. A production dashboard reduces them to a few numbers with thresholds, so a person or a CI job can say ship or do not ship (Module 8, section 10).",
    does: "You write summarise(rows) to compute correctness rate, groundedness rate, median and 95th-percentile latency, and cost per query. gates compares them with thresholds and prints PASS or FAIL for each. You then re-run with k=1 instead of 4, which simulates a cost-saving change someone might ship untested, and compare the two runs side by side.",
    terms: [
      "p50 / p95 latency: half / 95% of requests finish faster than this. p95 shows the slow tail users notice.",
      "Gate: a pass/fail threshold that blocks a release.",
    ],
    expected:
      "A side-by-side table of baseline and candidate. With one chunk, correctness usually drops because questions needing several parts of the memo suffer, while latency and cost may improve slightly.",
    notice:
      "Without the golden set you would see only the lower cost and think the change was free. With 20 questions, treat small differences as noise and big drops as real. The thresholds in the notebook are illustrative: set yours from your own risk appetite and review them with your risk team.",
    finance:
      "This before-and-after table is the validation evidence model-risk reviewers expect for any change to a model-driven process (Module 5, section 2; Module 8, section 9).",
    code: `def summarise(rows):
    # YOUR CODE HERE: return a dict with
    # correctness, groundedness, p50_ms, p95_ms, cost_per_query
    raise NotImplementedError

THRESHOLDS = {"correctness": 0.80, "groundedness": 0.90,
              "p95_ms": 8000, "cost_per_query": 0.01}   # illustrative`,
  },
  {
    num: "6",
    title: "Send traces to Langfuse (optional)",
    why: "Your Trace class teaches what a trace is. In practice you use a tool that stores traces, draws them as a timeline, and lets you search and compare them. Langfuse is an open-source option (Module 8, section 8).",
    does: "Reads your keys, then wraps the existing retrieve_chunks and generate functions with Langfuse's observe decorator. Because rag_answer calls them, each question appears as a trace with nested retrieve and generate steps. With no keys set, the cell skips itself.",
    terms: [
      "Langfuse Cloud: hosted by Langfuse. Works on Colab, but traces leave your machine.",
      "Self-hosted Langfuse: runs on your machine with Docker, so data stays with you.",
    ],
    expected: "'Sent 3 traces', and the Traces page in Langfuse showing three entries with their timing.",
    notice:
      "Compare Langfuse's timeline with the spans your own Trace recorded. Your class already stores the same facts, and the tool adds storage, search, dashboards and team sharing. The Langfuse SDK changes between versions: this cell was written for the v3 Python SDK, so check the current docs if an import fails. The rest of the lab does not depend on it.",
    finance:
      "Traces include question text, which can contain personal data. With Langfuse Cloud, never send real client data. Redact before logging (reuse redact from Lab 6) and check your retention and residency rules.",
    code: `from langfuse import observe, get_client

retrieve_chunks = observe(name="retrieve")(retrieve_chunks)
generate = observe(name="generate")(generate)
rag_answer("...")           # now appears as a trace
get_client().flush()`,
  },
];

export default function Lab7() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50 to-yellow-50 dark:from-gray-950 dark:via-slate-900 dark:to-amber-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-600/20"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse rounded-full bg-yellow-300/30 blur-3xl dark:bg-yellow-600/20"></div>
      </div>

      <main className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="mb-8">
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-amber-700 shadow-sm backdrop-blur-sm transition-all hover:bg-amber-50 dark:border-amber-700 dark:bg-gray-800/80 dark:text-amber-300"
          >
            ← Back to Labs
          </Link>
        </div>

        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 block w-fit rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
            Lab 7
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-amber-300 dark:via-yellow-300 dark:to-orange-200 sm:text-6xl">
            Observability &amp; Evaluation Stack
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Make a RAG assistant observable, so you can see what it did and how long it took, and evaluated, so you can
            measure whether it is correct, grounded, fast and affordable. Then use those numbers as a release gate.
          </p>
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3">
            {["90 min", "Traces & spans", "Golden set", "LLM judge", "Langfuse", "Module 8"].map((t) => (
              <span key={t} className={chip}>{t}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={COLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-7 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              Open in Colab
            </a>
            <a
              href={NOTEBOOK_PATH}
              download
              className="rounded-full border border-amber-300 bg-white/80 px-7 py-3 font-semibold text-amber-700 shadow-sm transition-all hover:bg-amber-50 dark:border-amber-600 dark:bg-gray-800/80 dark:text-amber-300"
            >
              Download notebook (.ipynb)
            </a>
          </div>
          <p className="mx-auto mt-3 max-w-xl text-xs text-gray-500 dark:text-gray-400">
            The Colab button loads the notebook from the public GitHub repository, so it works only after the notebook
            is pushed there. Until then, download it and use Colab&apos;s File &gt; Upload notebook. Run the cells in
            order, and complete each YOUR CODE HERE blank before running the cells after it.
          </p>
        </div>

        <div className={`mb-10 ${card}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">What you will build</h2>
          <p className="mb-5 text-gray-700 dark:text-gray-300">
            An LLM system can fail silently. It does not crash, it gives a fluent wrong answer. Without traces and evals
            you find out from a customer. In this lab you trace every question, run a golden set of 20, score each
            answer with an LLM judge, summarise latency, estimated cost and quality, and apply pass/fail gates. You then
            make a small change and watch the numbers catch it.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
            {pipeline.map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                <span className="rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-900/30">{s}</span>
                {i < pipeline.length - 1 && <span className="text-amber-400">→</span>}
              </span>
            ))}
          </div>
        </div>

        <div className={`mb-12 ${card}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Prerequisites</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Read <Link href="/module8" className="font-semibold text-amber-700 underline dark:text-amber-300">Module 8</Link> sections 2 (traces, metrics, logs), 3 (evals), 8 (open-source tools) and 10 (production dashboard).</span></li>
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Labs 3 and 4 are recommended but not required. This notebook rebuilds a small RAG assistant itself.</span></li>
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Any model provider from Lab 4: Ollama, Groq, Gemini, OpenRouter, OpenAI or Anthropic. One run makes about 40 model calls, plus about 40 more for the regression test, so on a free tier lower LIMIT or raise PAUSE.</span></li>
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Only for the optional Langfuse exercise: a free Langfuse Cloud account, or Docker installed on your machine for self-hosting.</span></li>
          </ul>
        </div>

        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Exercises</h2>
        <div className="mb-12 space-y-8">
          {exercises.map((ex) => (
            <section key={ex.num} className={card}>
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 text-xl font-black text-white shadow-lg">
                  {ex.num}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{ex.title}</h3>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p><strong className="text-amber-700 dark:text-amber-400">Why we do this: </strong>{ex.why}</p>
                <p><strong className="text-amber-700 dark:text-amber-400">What the code does: </strong>{ex.does}</p>
                {ex.terms && (
                  <div>
                    <strong className="text-amber-700 dark:text-amber-400">Key terms</strong>
                    <ul className="mt-2 space-y-1">
                      {ex.terms.map((t) => (
                        <li key={t} className="flex gap-2 text-sm"><span className="text-amber-500">▸</span><span>{t}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <pre className={codeBox}><code>{ex.code}</code></pre>
              <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong className="text-amber-700 dark:text-amber-400">Expected output: </strong>{ex.expected}</p>
                <p><strong className="text-amber-700 dark:text-amber-400">What to notice: </strong>{ex.notice}</p>
                {ex.finance && (
                  <p className="rounded-2xl bg-amber-50 p-4 text-sm dark:bg-amber-900/20"><strong className="text-amber-700 dark:text-amber-400">Finance link: </strong>{ex.finance}</p>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className={card}>
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Stretch goals</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Use your provider&apos;s exact token counts instead of the 4-characters-per-token estimate, and compare the two.</li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Use a different, stronger model as judge and see how many judgements change.</li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Try DeepEval or RAGAS, open-source evaluation libraries, and compare their faithfulness scores with your judge.</li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Redact personal data from traces before logging them.</li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Make a script exit with a non-zero code when a gate fails, so a CI pipeline can block a release.</li>
            </ul>
          </div>
          <div className={card}>
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Common errors</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>NotImplementedError:</strong> you have not completed rag_answer, groundedness or summarise yet. Complete them in order.</span></li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>Rate limit or 429:</strong> raise PAUSE, lower LIMIT, or use a provider with higher limits. Each question uses two model calls.</span></li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>Groundedness is 0 for everything:</strong> the judge reply is probably not in the SCORE: 1 format. Print one raw reply and adjust the prompt or regular expression.</span></li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>Langfuse import errors:</strong> the SDK changes between versions. Check the current docs, or skip Exercise 6.</span></li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>Scores change between runs:</strong> expected. Repeat the run before drawing conclusions.</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4">
          <Link href="/labs/lab6" className="rounded-full border border-amber-300 bg-white/80 px-6 py-3 font-semibold text-amber-700 dark:border-amber-600 dark:bg-gray-800/80 dark:text-amber-300">
            ← Lab 6
          </Link>
          <Link href="/labs" className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 font-semibold text-white shadow-lg">
            All Labs →
          </Link>
        </div>
      </main>
    </div>
  );
}
