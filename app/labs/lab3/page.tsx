import Link from "next/link";

const NOTEBOOK_PATH = "/labs/lab3_regulatory_rag.ipynb";
const COLAB_URL =
  "https://colab.research.google.com/github/vivekhashtag/genai/blob/main/public/labs/lab3_regulatory_rag.ipynb";

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

const exercises: Exercise[] = [
  {
    num: "0",
    title: "Choose your LLM provider",
    why: "The rest of the lab calls one function, ask_llm(). You pick the provider once, and nothing else changes. This lets the same lab run on Ollama, Groq or Anthropic.",
    does: "Builds ask_llm(system, user) for the provider you set. Ollama and Groq both use the OpenAI-style API, so they share code. Anthropic uses its own SDK.",
    terms: [
      "Provider: the service that runs the model (Ollama locally, Groq or Anthropic hosted).",
      "Temperature 0: asks the model for the most repeatable answer, which makes results easier to compare.",
    ],
    expected:
      "A short greeting. An authentication or connection error means your key is wrong (Groq, Anthropic) or Ollama is not running with the model pulled.",
    notice:
      "Ollama runs on your own computer, and Google Colab cannot reach it. If you choose Ollama, run the notebook locally. Model names change over time, so update MODEL if one is rejected.",
    code: `PROVIDER = "groq"   # "ollama" | "groq" | "anthropic"

def ask_llm(system: str, user: str) -> str:
    ...  # routes to the provider you selected
print(ask_llm("Be brief.", "Say hello in five words."))`,
  },
  {
    num: "1",
    title: "Load the documents",
    why: "RAG quality starts with clean source text. We keep the page number with every piece of text so answers can cite it later.",
    does: "load_pdf reads each PDF page with pypdf and returns (page_number, text) pairs. We then print the page and character count of each document.",
    terms: ["Corpus: your collection of documents."],
    expected:
      "One line per PDF with page and character counts. The SEBI memo has 6 pages. A PDF with almost no characters is a scanned image and needs OCR.",
    notice:
      "Real PDFs contain headers, page numbers and odd line breaks. That noise ends up inside your chunks and can affect retrieval.",
    finance:
      "Regulatory text is only useful if you can point back to the exact page. Keeping page numbers from the start is what makes that possible.",
    code: `def load_pdf(path):
    return [(i + 1, (p.extract_text() or ""))
            for i, p in enumerate(PdfReader(path).pages)]`,
  },
  {
    num: "2",
    title: "Chunk the text two ways",
    why: "A model cannot read a whole document for every question, and one embedding of a whole document is too vague to search. We split text into chunks, and the splitting method strongly affects retrieval quality (Module 3, section 5).",
    does: "chunk_fixed cuts every 800 characters with a 150-character overlap. You complete chunk_sentences, which packs whole sentences into chunks of up to 800 characters.",
    terms: [
      "Fixed-size chunking: cut every N characters. Simple, but can cut a sentence in half.",
      "Overlap: characters repeated between neighbouring chunks, so a cut sentence still appears whole once.",
      "Sentence chunking: group whole sentences up to a size limit, so no sentence is split.",
    ],
    expected:
      "A count of fixed chunks and sentence chunks, plus one sample of each. Fixed samples often start or end mid-sentence.",
    notice:
      "Sentence chunks read more cleanly but vary in length. Neither is always better, which is why Exercise 5 measures them.",
    finance:
      "A split clause such as 'the entity shall not ... unless' can reverse its meaning if the second half is lost.",
    code: `for s in sentences:
    # YOUR CODE HERE: if current + s fits in size, append it;
    # otherwise save current and start a new chunk with s.
    pass`,
  },
  {
    num: "3",
    title: "Embed and store in ChromaDB",
    why: "An embedding turns text into a list of numbers so that similar meanings sit close together. A vector database stores those numbers and finds the nearest ones to a question.",
    does: "Creates one Chroma collection per chunking strategy so we can compare them. Chroma's built-in local embedding model is used, so no API key is needed. It downloads a small model the first time.",
    terms: [
      "Embedding: a vector (list of numbers) representing the meaning of text.",
      "Collection: a named set of stored chunks in Chroma.",
      "Metadata: extra fields stored with each chunk, here the document name and page.",
    ],
    expected: "A line saying how many chunks were stored.",
    notice:
      "The metadata travels with each chunk. That is how the answer step will later show where each passage came from.",
    finance:
      "Because embedding runs locally, document text is not sent to an embedding service. That matters for confidential client documents.",
    code: `col = client.get_or_create_collection(name)
col.add(ids=[...], documents=[c["text"] for c in chunks],
        metadatas=[{"doc": c["doc"], "page": c["page"]} for c in chunks])`,
  },
  {
    num: "4",
    title: "Retrieve and answer with citations",
    why: "This is the retrieval and generation half of RAG. We fetch the most relevant chunks, put them in the prompt, and tell the model to answer only from them.",
    does: "retrieve asks Chroma for the top-k closest chunks. answer numbers them as sources, instructs the model to cite like [1], and tells it to reply 'Not found in the provided documents.' when the sources do not contain the answer.",
    terms: [
      "Top-k: how many chunks to retrieve (here 4).",
      "Grounding: forcing the answer to rely on supplied text rather than the model's memory.",
    ],
    expected:
      "An answer citing [1], [2] and so on, saying regulated entities remain responsible for AI tool output, followed by the document and page of each retrieved chunk. Wording varies by model, so check each citation against the printed pages.",
    notice:
      "Ask something the documents do not cover, such as 'What is the repo rate?'. A well-grounded system says it was not found rather than guessing. Smaller models follow this rule less reliably.",
    finance:
      "Citations and a 'not found' rule make an answer auditable, which is the requirement in Module 2, section 7.",
    code: `SYSTEM = ("You answer using ONLY the numbered sources. Cite like [1]. "
          "If the answer is not in the sources, reply exactly: "
          "'Not found in the provided documents.'")`,
  },
  {
    num: "5",
    title: "Compare chunking strategies",
    why: "You will measure which chunking retrieves better instead of guessing.",
    does: "For each test question you give a keyword that a correct chunk must contain. hit_rate is the share of questions where at least one top-k chunk contains that keyword. You write four more test questions from your own documents.",
    terms: [
      "Recall@k: how often the right passage appears in the top-k results. hit_rate here is a crude proxy for it.",
    ],
    expected:
      "Two scores between 0 and 1, one per strategy. The numbers will differ by documents and questions.",
    notice:
      "With only five questions the scores are noisy, and a one-question difference is not conclusive. Try changing size, overlap and k, then re-run and see what moves.",
    finance:
      "Retrieval that misses the right clause produces confident but wrong answers. Measuring retrieval separately from answer quality tells you which part to fix.",
    code: `TESTS = [
    ("Who is solely responsible for AI tool output?", "responsib"),
    # YOUR CODE HERE: add 4 more (question, keyword) pairs
]`,
  },
];

const providers = [
  { name: "Ollama", note: "Local and free. Run the notebook locally, not on Colab. Pull a model first, for example llama3.1:8b." },
  { name: "Groq", note: "Hosted free tier with rate limits. Works on Colab. Needs a Groq API key." },
  { name: "Anthropic", note: "Hosted and paid. Works on Colab. Needs an API key with billing enabled." },
];

export default function Lab3() {
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

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 block w-fit rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
            Lab 3
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-amber-300 dark:via-yellow-300 dark:to-orange-200 sm:text-6xl">
            Regulatory Document RAG
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Build a question-answering system over real regulatory documents. It retrieves the relevant passages and
            answers with citations. This is the foundation that Labs 4, 6 and 7 extend.
          </p>
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3">
            {["90 min", "ChromaDB", "Ollama / Groq / Anthropic", "Module 3"].map((t) => (
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
            The Colab button reads the notebook from the GitHub repository, so it works once the latest changes are
            pushed. Until then use the download.
          </p>
        </div>

        {/* Overview */}
        <div className={`mb-10 ${card}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">What you will build</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            A pipeline in five steps: load PDFs, split them into chunks, embed the chunks into ChromaDB, retrieve the
            best matches for a question, and have an LLM answer only from them with citations. You then compare two
            chunking strategies by measuring retrieval.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
            {["PDFs", "Chunks", "Embeddings", "ChromaDB", "Top-k retrieval", "LLM answer + citations"].map((s, i, a) => (
              <span key={s} className="flex items-center gap-2">
                <span className="rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-900/30">{s}</span>
                {i < a.length - 1 && <span className="text-amber-400">→</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className={`mb-10 ${card}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Prerequisites</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Read <Link href="/module3" className="font-semibold text-amber-700 underline dark:text-amber-300">Module 3</Link> sections 1 to 6 (embeddings, RAG, chunking). Module 2 section 7 helps for grounding.</span></li>
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Python basics. No earlier lab is required.</span></li>
            <li className="flex gap-3"><span className="text-amber-500">▸</span><span>Access to one LLM provider (below). Embeddings need no key.</span></li>
          </ul>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {providers.map((p) => (
              <div key={p.name} className="rounded-2xl bg-amber-50/70 p-4 dark:bg-amber-900/20">
                <div className="mb-1 font-bold text-gray-900 dark:text-white">{p.name}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">{p.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className={`mb-12 ${card}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Documents and sources</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            All documents are public. Put the PDFs in a <code className="rounded bg-amber-100 px-1.5 py-0.5 text-sm dark:bg-amber-900/40">data/</code> folder next to the notebook.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-100 dark:bg-amber-900/40">
                  <th className="p-3 text-left font-bold text-amber-800 dark:text-amber-300">Document</th>
                  <th className="p-3 text-left font-bold text-amber-800 dark:text-amber-300">Publisher</th>
                  <th className="p-3 text-left font-bold text-amber-800 dark:text-amber-300">How to get it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 text-gray-700 dark:divide-amber-900/30 dark:text-gray-300">
                <tr>
                  <td className="p-3">Board memorandum on assigning responsibility for AI tool use (Dec 2024). A proposal paper, not a final circular.</td>
                  <td className="p-3">SEBI</td>
                  <td className="p-3">The notebook downloads it for you from <a className="underline" href="https://www.sebi.gov.in/sebi_data/meetingfiles/dec-2024/1735042007618_1.pdf" target="_blank" rel="noopener noreferrer">sebi.gov.in</a>, or <a className="underline" href="/lab-data/sebi-ai-responsibility-board-memo-dec2024.pdf">get a copy here</a>.</td>
                </tr>
                <tr>
                  <td className="p-3">Master Direction on IT Governance, Risk, Controls and Assurance Practices, 2023.</td>
                  <td className="p-3">RBI</td>
                  <td className="p-3">Download in your browser from the <a className="underline" href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12562" target="_blank" rel="noopener noreferrer">RBI Master Directions page</a>. RBI blocks scripted downloads.</td>
                </tr>
                <tr>
                  <td className="p-3">Integrated Annual Report 2024-25 (large, optional).</td>
                  <td className="p-3">HDFC Bank</td>
                  <td className="p-3">Download from the bank&apos;s <a className="underline" href="https://www.hdfcbank.com/personal/about-us/investor-relations/annual-reports" target="_blank" rel="noopener noreferrer">investor relations page</a>. Pick the 2024-25 report.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            The SEBI file was downloaded on 2026-10-31. The RBI and HDFC links are the publishers&apos; pages. Document
            versions on those sites can change, so check you have the current one.
          </p>
        </div>

        {/* Exercises */}
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

        {/* Stretch + errors */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className={card}>
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Stretch goals</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Add the RBI and HDFC documents and ask questions that span more than one.</li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span>Use Chroma metadata filtering (<code>where=&#123;&quot;doc&quot;: ...&#125;</code>) to limit a query to one document.</li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span>OCR a scanned PDF and add it to the corpus.</li>
            </ul>
          </div>
          <div className={card}>
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Common errors</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>ModuleNotFoundError:</strong> re-run the install cell, then restart the runtime.</span></li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>Connection refused (Ollama):</strong> run <code>ollama serve</code> and pull the model. Use a local notebook, not Colab.</span></li>
              <li className="flex gap-2"><span className="text-amber-500">▸</span><span><strong>Rate limit (Groq free tier):</strong> wait a minute or lower k. Limits change, so check Groq&apos;s documentation.</span></li>
            </ul>
          </div>
        </div>

        {/* Next */}
        <div className="flex flex-wrap justify-between gap-4">
          <Link href="/labs" className="rounded-full border border-amber-300 bg-white/80 px-6 py-3 font-semibold text-amber-700 dark:border-amber-600 dark:bg-gray-800/80 dark:text-amber-300">
            ← All Labs
          </Link>
          <Link href="/module4" className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 font-semibold text-white shadow-lg">
            Next: Module 4, AI Agents (Lab 4 coming) →
          </Link>
        </div>
      </main>
    </div>
  );
}
