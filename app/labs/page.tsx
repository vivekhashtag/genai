import Link from "next/link";

const labs = [
  {
    number: "0",
    title: "Document Preprocessor",
    module: "Module 0 · NLP Foundations",
    build: "NLP pipeline on a real regulatory circular: cleaning, tokenisation, NER, TF-IDF.",
    time: "45 min",
    platform: "Google Colab",
    link: "/labs/lab0",
    status: "Available",
  },
  {
    number: "1",
    title: "Model Comparison Bench",
    module: "Module 1 · Foundation Models",
    build: "Run one financial task across Claude, GPT-4o and Gemini; compare accuracy, tone and variance at temperature 0 vs 0.7.",
    time: "30 min",
    platform: "Provider consoles / playgrounds",
    link: "/labs/lab1",
    status: "Available",
  },
  {
    number: "2",
    title: "Financial Prompt Library",
    module: "Module 2 · Prompt Engineering",
    build: "Five production-ready prompt templates, zero-shot vs few-shot vs CoT, and prompt caching cost measurement.",
    time: "60 min",
    platform: "Claude API + Colab",
    link: "/labs/lab2",
    status: "Available",
  },
  {
    number: "3",
    title: "Regulatory Document RAG",
    module: "Module 3 · Embeddings & Vector Stores",
    build: "Chunk and embed three public documents into ChromaDB, then answer questions with citations. Start here.",
    time: "90 min",
    platform: "Colab + Chroma + Anthropic",
    link: "/labs/lab3",
    status: "Available",
    featured: true,
  },
  {
    number: "4",
    title: "Financial Research Agent",
    module: "Module 4 · AI Agents",
    build: "Add three tools and a ReAct loop on top of Lab 3, with a human-in-the-loop checkpoint for high-stakes answers.",
    time: "90 min",
    platform: "Colab + LangGraph + Anthropic",
    link: "/labs/lab4",
    status: "Available",
  },
  {
    number: "5",
    title: "Bias Audit & Model Card",
    module: "Module 5 · Governance",
    build: "Audit a mock credit-scoring dataset, compute fairness metrics and SHAP values, then write a model card.",
    time: "60 min",
    platform: "Colab + SHAP + scikit-learn",
    link: "/labs/lab5",
    status: "Available",
  },
  {
    number: "6",
    title: "Security Guardrail Layer",
    module: "Module 6 · AI & GenAI Security",
    build: "Harden the Lab 4 agent: Presidio PII detection, spotlighting, LLM Guard injection checks, and a Garak attack run.",
    time: "75 min",
    platform: "Colab + Presidio + Garak",
    link: "/labs/lab6",
    status: "Available",
  },
  {
    number: "7",
    title: "Full Observability Stack",
    module: "Module 8 · Observability & Evals",
    build: "Trace the agent in Langfuse, build a 20-question golden set, and report groundedness, latency and cost per query.",
    time: "90 min",
    platform: "Langfuse (Docker) + DeepEval",
    link: "/labs/lab7",
    status: "Available",
  },
];

// Add a lab number here once its page exists; only these cards become clickable.
const AVAILABLE_LABS: string[] = ["0", "1", "2", "3", "4", "5", "6", "7"];

const capstoneLayers = [
  { label: "RAG", lab: "Lab 3" },
  { label: "Agent", lab: "Lab 4" },
  { label: "Guardrails", lab: "Lab 6" },
  { label: "Observability", lab: "Lab 7" },
];

export default function LabsHub() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50 to-yellow-50 dark:from-gray-950 dark:via-slate-900 dark:to-amber-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-600/20"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse rounded-full bg-yellow-300/30 blur-3xl delay-700 dark:bg-yellow-600/20"></div>
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-pulse rounded-full bg-orange-300/20 blur-3xl delay-1000 dark:bg-orange-700/20"></div>
      </div>

      <main className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-amber-700 shadow-sm backdrop-blur-sm transition-all hover:bg-amber-50 dark:border-amber-700 dark:bg-gray-800/80 dark:text-amber-300"
          >
            ← Back to Course Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 block w-fit rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
            Hands-On Labs
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-amber-300 dark:via-yellow-300 dark:to-orange-200 sm:text-6xl lg:text-7xl">
            Build It Yourself
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Eight labs, one project. You build a{" "}
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              Financial Intelligence Assistant
            </span>{" "}
            layer by layer: a RAG system, then an agent, then guardrails, then full observability.
          </p>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
            {["8 Labs", "~8 hours total", "Real public documents", "Colab-ready", "Finance-focused"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Capstone */}
        <div className="mb-16 rounded-3xl border border-amber-200/60 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-amber-700/40 dark:bg-gray-800/70">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">The Capstone</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            The labs are not isolated exercises. Each one extends the previous build, so by Lab 7 you own a
            RAG-powered, agent-augmented, guardrailed and observable system for financial document analysis.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {capstoneLayers.map((layer, i) => (
              <div key={layer.label} className="flex items-center gap-3">
                <div className="rounded-2xl bg-amber-50 px-5 py-3 text-center dark:bg-amber-900/20">
                  <div className="text-sm font-bold text-amber-800 dark:text-amber-300">{layer.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{layer.lab}</div>
                </div>
                {i < capstoneLayers.length - 1 && (
                  <span className="text-xl text-amber-400 dark:text-amber-600">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Labs 0, 1, 2 and 5 feed the capstone (clean text, model choice, prompts, governance documentation)
            and can be done on their own.
          </p>
        </div>

        {/* Lab Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {labs.map((lab) => {
            const available = AVAILABLE_LABS.includes(lab.number);
            const cardClass = `group relative overflow-hidden rounded-3xl border bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 dark:bg-gray-800/80 ${
                available ? "hover:scale-[1.02] hover:shadow-2xl" : "cursor-default opacity-90"
              } ${
                lab.featured
                  ? "border-amber-400 ring-2 ring-amber-300/60 dark:border-amber-500 dark:ring-amber-600/40"
                  : "border-gray-200/50 dark:border-gray-700/50"
              }`;
            const inner = (
              <>
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  Lab {lab.number}
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    lab.featured
                      ? "bg-amber-500 text-white"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {lab.status}
                </span>
              </div>
              <h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">{lab.title}</h2>
              <p className="mb-4 text-sm font-medium italic text-amber-700 dark:text-amber-400">{lab.module}</p>
              <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500"></div>
              <p className="mb-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{lab.build}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                  ⏱ {lab.time}
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                  🛠 {lab.platform}
                </span>
              </div>
              {available && (
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"></div>
              )}
              </>
            );
            return available ? (
              <Link key={lab.number} href={lab.link} className={cardClass}>
                {inner}
              </Link>
            ) : (
              <div key={lab.number} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Provider Options */}
        <div className="mb-16 rounded-3xl border border-amber-200/60 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-amber-700/40 dark:bg-gray-800/70">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Choose Your LLM Provider</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Every lab is written so the model provider is a single setting. Pick whichever fits your budget and your
            data-privacy needs, and the rest of the code stays the same.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Ollama",
                tag: "Local · free",
                points: [
                  "Runs open models on your own machine, so no data leaves it",
                  "No API key and no rate limits",
                  "Needs a decent laptop (8 GB+ RAM) and a model download",
                  "Best for privacy-sensitive financial data",
                ],
              },
              {
                name: "Groq",
                tag: "Hosted · free tier",
                points: [
                  "Fast hosted open models via an API key",
                  "Free tier is rate-limited; check current limits",
                  "OpenAI-compatible API, so setup is easy on Colab",
                  "Best when your laptop is too small for Ollama",
                ],
              },
              {
                name: "Anthropic Claude",
                tag: "Hosted · paid",
                points: [
                  "Strongest results for long documents and tool use",
                  "Needs an API key with billing enabled",
                  "Costs for the whole lab series are small but not zero",
                  "Best for the closest match to the module examples",
                ],
              },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl bg-amber-50/70 p-5 dark:bg-amber-900/20">
                <div className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{p.name}</div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                  {p.tag}
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-amber-500">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Lab 4 adds three more options: Google Gemini (free tier), OpenRouter (free models with small limits) and OpenAI (paid). Embeddings in Labs 3 and 4 run locally with a small open model through ChromaDB, so they need no key on any
            path. Lab 1 compares several providers by design, so it uses more than one. Results and quality will differ
            between providers; expected outputs on each lab page note where that matters.
          </p>
        </div>

        {/* Before you start */}
        <div className="rounded-3xl border border-amber-200/60 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-amber-700/40 dark:bg-gray-800/70">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Before You Start</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="text-amber-500">▸</span>
              <span>
                <strong>Accounts:</strong> a Google account for Colab, plus access to <em>one</em> LLM provider from the
                table below. You do not need a paid API key to complete the labs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500">▸</span>
              <span>
                <strong>Order:</strong> read the matching module first, then do the lab. Labs 3, 4, 6 and 7 build on one
                another, so do them in sequence.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500">▸</span>
              <span>
                <strong>Data:</strong> every lab uses publicly available documents, with sources listed on each lab page.
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
