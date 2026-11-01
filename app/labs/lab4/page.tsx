import Link from "next/link";

const NOTEBOOK_PATH = "/labs/lab4_research_agent.ipynb";
const COLAB_URL =
  "https://colab.research.google.com/github/vivekhashtag/genai/blob/main/public/labs/lab4_research_agent.ipynb";

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

const providers = [
  { name: "Ollama", cost: "Free, local", note: "Run the notebook locally (Colab cannot reach your machine). Pick a model tagged \"tools\" in the Ollama library, for example llama3.1:8b. Small models call tools less reliably." },
  { name: "Groq", cost: "Free tier", note: "Fast hosted open models such as llama-3.3-70b-versatile. Rate-limited, and every agent step is a request." },
  { name: "Google Gemini", cost: "Free tier", note: "Key from Google AI Studio, used through Google's OpenAI-compatible endpoint. Use gemini-2.5-flash; newer Gemini versions need extra fields this notebook does not handle." },
  { name: "OpenRouter", cost: "Free models, small limits", note: "One key, many models. The openrouter/free router picks a free model that supports tools. Free daily limits are small, so keep max_steps low." },
  { name: "OpenAI", cost: "Paid", note: "gpt-4o-mini is a cheap default with reliable tool calling." },
  { name: "Anthropic Claude", cost: "Paid", note: "Reliable tool use. The notebook converts messages into Anthropic's format for you." },
];

const exercises: Exercise[] = [
  {
    num: "0",
    title: "Choose your model provider",
    why: "An agent needs a model that supports tool calling: instead of plain text, the model replies with a request such as 'call calculate_ratio with these numbers'. Not every model does this well, so the choice of model matters more here than in Lab 3.",
    does: "Defines one chat(messages, tools) function that works with six providers and always returns the reply in the same shape. Five providers share the OpenAI-style API. Anthropic has its own API, so a small adapter converts the messages.",
    terms: [
      "Tool calling (function calling): the model asks for a named tool with arguments, and your program runs it.",
      "OpenAI-compatible API: many providers copy OpenAI's request format, so one code path serves them all.",
    ],
    expected:
      "A short greeting. An authentication or connection error means a wrong key or, for Ollama, that the server is not running or the model is not pulled.",
    notice:
      "Model names and free-tier limits change often. If a model is rejected, check the provider's current list and edit MODEL. Limits count every model call, and an agent makes several per question.",
    code: `PROVIDER = "groq"   # ollama | groq | gemini | openrouter | openai | anthropic

def chat(messages, tools=None):
    ...  # returns {"role": "assistant", "content": str, "tool_calls": [...]}`,
  },
  {
    num: "1",
    title: "Rebuild the Lab 3 index (recap)",
    why: "The agent's first tool searches documents, so it needs the same ChromaDB index as Lab 3. The notebook is self-contained, so you do not need the Lab 3 notebook open.",
    does: "Downloads the SEBI memo, reads each page, cuts it into overlapping chunks, and stores them in Chroma with document and page metadata. It also keeps the raw text of every page in PAGES, because the third tool needs whole pages.",
    expected:
      "The document names and a chunk count. If PAGES is empty, no PDF was found in the data/ folder.",
    notice:
      "Any extra PDF you place in data/ (for example the RBI Master Direction from Lab 3) is loaded automatically.",
    code: `PAGES = {}   # {file name: {page number: text}}
col = chromadb.Client().get_or_create_collection("lab4")
col.add(ids=ids, documents=docs, metadatas=metas)`,
  },
  {
    num: "2",
    title: "Define three tools",
    why: "A tool is an ordinary Python function plus a short description the model can read. The model never runs code. It only asks for a tool by name, and your program runs it. The description is how the model decides which tool fits (Module 4, section 2).",
    does: "search_documents looks up passages in the index. calculate_ratio does exact arithmetic in Python, because models are unreliable at arithmetic. summarise_section fetches one whole page and asks the model to summarise it. You write run_tool, which runs a tool by name and returns its result, or an error message instead of crashing.",
    terms: [
      "Tool schema: the JSON description (name, purpose, parameters) sent to the model.",
      "Deterministic: the same input always gives the same output, like calculate_ratio.",
    ],
    expected:
      "Running the three checks prints 13.50%, then an error about a zero denominator, then an error about an unknown tool. The errors come back as text and are not raised.",
    notice:
      "Returning errors as text lets the model read them and try something else, instead of the whole agent crashing.",
    finance:
      "calculate_ratio keeps every number reproducible. An auditor can re-run the exact calculation, which a model's mental arithmetic does not allow.",
    code: `def run_tool(name: str, arguments: str) -> str:
    # YOUR CODE HERE:
    # 1. Map tool names to the functions above.
    # 2. json.loads the arguments, call the function, return str(result).
    # 3. Unknown name or any exception -> return "Error: ..."
    raise NotImplementedError`,
  },
  {
    num: "3",
    title: "The ReAct loop",
    why: "ReAct means reason, act, observe, repeat (Module 4, section 4). The model works out what it needs, requests a tool, sees the result, and decides whether it can answer or needs another tool.",
    does: "Keeps a growing messages list. Each round it asks the model what to do. If the reply contains tool calls, the loop runs each one and appends the result as a tool message. If the reply has no tool calls, that reply is the final answer. max_steps stops the loop if the model never finishes.",
    terms: [
      "Step limit: a hard cap on rounds. It prevents infinite loops and runaway cost.",
      "Trace: the printed record of each tool call and its result.",
    ],
    expected:
      "A trace showing a search_documents call and then a final answer citing the SEBI memo. The exact query the model writes will vary.",
    notice:
      "The model chose to search without being told to. Ask for a capital adequacy ratio from two numbers and you should see calculate_ratio instead, with no search. A model that answers without any tool call, or writes the call as plain text, does not support tool calling well. Try a larger model or another provider.",
    finance:
      "The step limit is also a cost control. Each round is a paid or rate-limited model call (Module 4, section 8).",
    code: `for step in range(1, max_steps + 1):
    msg = chat(messages, TOOLS)
    messages.append(msg)
    if not msg.get("tool_calls"):
        return msg["content"]          # final answer
    for call in msg["tool_calls"]:     # act, then observe
        result = run_tool(call["function"]["name"], call["function"]["arguments"])
        messages.append({"role": "tool", "tool_call_id": call["id"], "content": result})`,
  },
  {
    num: "4",
    title: "Human-in-the-loop checkpoint",
    why: "Some answers should not go out without a person checking them. In finance that includes anything that looks like a compliance conclusion, an approval or a recommendation (Module 4, section 8, autonomy and control).",
    does: "is_high_stakes flags a question using keywords. You write run_with_approval, which runs the agent and, for flagged questions, shows the draft and asks a human to approve before returning it. A rejected answer is withheld.",
    expected:
      "A normal question returns straight away. A flagged question prints the draft and waits for you to type y or n.",
    notice:
      "A keyword list is a crude screen. It will miss some high-stakes questions and flag harmless ones. Real systems use risk tiers, classifiers and policy review. This is the simplest possible version of the idea.",
    finance:
      "A human sign-off creates the accountability record that regulators expect for AI-assisted decisions (Module 5, sections 2 and 6).",
    code: `def run_with_approval(question: str) -> str:
    # YOUR CODE HERE:
    # draft = run_agent(question)
    # if not high-stakes: return draft
    # else show draft, ask input("Approve? (y/n)"), return draft only on y
    raise NotImplementedError`,
  },
  {
    num: "5",
    title: "Test the agent",
    why: "Agents fail in new ways: picking the wrong tool, looping, or answering without evidence. You run three different tasks and read the trace each time.",
    does: "Runs three questions: a document question that should use search, a capital adequacy calculation that should use calculate_ratio and then pause for approval, and a page summary that should use summarise_section.",
    expected:
      "Question 1 uses search. Question 2 uses calculate_ratio (13.50%) and asks for your approval. Question 3 uses summarise_section. If a different tool is chosen, read the tool descriptions, because they are what the model relies on.",
    notice:
      "Make one tool description vague and re-run. Tool selection usually gets worse, which shows how much the description matters. The 9% minimum in question 2 is supplied in the question: check the real figure against the RBI's Basel III capital regulations before relying on it.",
    code: `tests = [
    "According to the SEBI memo, who is responsible for the output of AI tools?",
    "A bank has total capital of 1,350 and risk-weighted assets of 10,000. What is its capital adequacy ratio, and does it meet a 9% minimum?",
    "Summarise page 3 of the SEBI memo (file sebi_ai_memo.pdf).",
]`,
  },
];

export default function Lab4() {
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
            Lab 4
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-amber-300 dark:via-yellow-300 dark:to-orange-200 sm:text-6xl">
            Financial Research Agent
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Turn the Lab 3 RAG system into an agent that decides for itself which tool to use, then pauses for human
            approval on high-stakes answers.
          </p>
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3">
            {["90 min", "3 tools", "ReAct loop", "6 provider options", "Module 4"].map((t) => (
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
            is pushed there. Until then, download it and use Colab&apos;s File &gt; Upload notebook.
          </p>
        </div>

        <div className={`mb-10 ${card}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">What you will build</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            An agent with three tools. It reads a question, decides whether to search the documents, calculate a ratio or
            summarise a page, looks at what the tool returned, and repeats until it can answer. For high-stakes
            questions a person must approve the answer before it is returned.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
            {["Question", "Model picks a tool", "Tool runs", "Result back to model", "Final answer", "Human approval if high-stakes"].map((s, i, a) => (
              <span key={s} className="flex items-center gap-2">
                <span className="rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-900/30">{s}</span>
                {i < a.length - 1 && <span className="text-amber-400">→</span>}
              </span>
            ))}
          </div>
        </div>

        <div className={`mb-10 ${card}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Prerequisites</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Read <Link href="/module4" className="font-semibold text-amber-700 underline dark:text-amber-300">Module 4</Link> sections 1, 2, 4 and 8 (agents, tools, ReAct, controls).</span></li>
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Lab 3 is recommended. Its index is rebuilt inside this notebook, so you can still start here.</span></li>
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Access to one model provider that supports tool calling (below).</span></li>
          </ul>
        </div>

        <div className={`mb-12 ${card}`}>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Pick a model provider</h2>
          <p className="mb-5 text-gray-700 dark:text-gray-300">
            Only the model changes between providers. The tools, the loop and the approval step are identical. Free
            options exist, but free tiers have rate limits and their terms change, so check each provider&apos;s current
            page.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {providers.map((p) => (
              <div key={p.name} className="rounded-2xl bg-amber-50/70 p-5 dark:bg-amber-900/20">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="font-bold text-gray-900 dark:text-white">{p.name}</span>
                  <span className="rounded-full bg-amber-200/70 px-3 py-0.5 text-xs font-semibold text-amber-900 dark:bg-amber-800/50 dark:text-amber-200">{p.cost}</span>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">{p.note}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
            Tip: agents depend on reliable tool calling. If a small free model keeps ignoring the tools, that is the
            model, not your code. Move up to a larger one.
          </p>
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
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Add a fourth tool, such as list_documents(), and see whether the agent uses it.</li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Add the RBI Master Direction and ask a question that needs both documents.</li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Count tool calls and rough token use per question to estimate cost.</li>
            </ul>
          </div>
          <div className={card}>
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Common errors</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>The model never calls a tool:</strong> use a model tagged &quot;tools&quot; (Ollama) or switch provider.</span></li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>400 error about tools or thought signatures (Gemini):</strong> use gemini-2.5-flash.</span></li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>429 or rate limit:</strong> wait, or lower max_steps. Each round is one request.</span></li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>NotImplementedError:</strong> you have not completed run_tool or run_with_approval yet.</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4">
          <Link href="/labs/lab3" className="rounded-full border border-amber-300 bg-white/80 px-6 py-3 font-semibold text-amber-700 dark:border-amber-600 dark:bg-gray-800/80 dark:text-amber-300">
            ← Lab 3
          </Link>
          <Link href="/labs" className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 font-semibold text-white shadow-lg">
            All Labs →
          </Link>
        </div>
      </main>
    </div>
  );
}
