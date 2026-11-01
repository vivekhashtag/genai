import Link from "next/link";

export default function Home() {
  const modules = [
    {
      number: "00",
      title: "NLP Foundations",
      subtitle: "From text to understanding - the bridge to modern AI",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      icon: "📖",
      link: "/module0",
      topics: [
        "Introduction to NLP & its evolution",
        "Text preprocessing, tokenization, and feature engineering",
        "Text representation: Bag of Words, TF-IDF, Word embeddings",
        "Core NLP tasks: NER, sentiment analysis, classification",
        "Traditional ML vs Neural approaches for NLP",
        "RNNs, LSTMs, and the Attention mechanism",
        "Real-world financial NLP applications",
        "The bridge from NLP to Transformers and Foundation Models",
      ],
    },
    {
      number: "01",
      title: "Foundation Models",
      subtitle: 'Understanding the "engine" behind Gen AI',
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      icon: "🧠",
      link: "/module1",
      topics: [
        "What are Foundation Models (Transformers, attention mechanism - intuition only)",
        "Pre-training vs Fine-tuning vs RLHF",
        "Model landscape: GPT, Claude, Gemini, Llama, Mistral",
        "Open vs Closed models - implications for financial institutions",
        "Context windows & token economics",
        "Finance angle: Bloomberg GPT, FinGPT, domain-specific models",
        "Demo: Comparing outputs across models for a financial task",
      ],
    },
    {
      number: "02",
      title: "Prompt Engineering",
      subtitle: "The skill layer - getting reliable outputs",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      icon: "✍️",
      link: "/module2",
      topics: [
        "Anatomy of a prompt (role, context, task, format, constraints)",
        "Techniques: Zero-shot, Few-shot, Chain-of-thought",
        "System prompts & guardrails",
        "Prompt patterns for finance",
        "Handling hallucinations & factual grounding",
        "Hands-on: Build a prompt library for financial use cases",
      ],
    },
    {
      number: "03",
      title: "Embeddings & Vector Stores",
      subtitle: "Building knowledge systems with your data",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      icon: "🔍",
      link: "/module3",
      topics: [
        "What are embeddings (intuition + visualization)",
        "Text → Vector → Similarity search",
        "Vector databases: Pinecone, Weaviate, Chroma, FAISS",
        "RAG architecture (Retrieval Augmented Generation)",
        "Chunking strategies for financial documents",
        "Finance angle: Building RAG on annual reports, circulars, policy docs",
        "Hands-on: Build a simple RAG on financial PDFs",
      ],
    },
    {
      number: "04",
      title: "AI Agents",
      subtitle: "Autonomous AI that takes action",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      icon: "🤖",
      link: "/module4",
      topics: [
        "What are AI agents (perception → reasoning → action)",
        "Agent architectures: ReAct, Tool-use, Multi-agent",
        "Function calling & tool integration",
        "Agent frameworks: LangChain, CrewAI, AutoGen",
        "Finance use cases: Research analyst, Compliance monitoring, Portfolio rebalancing",
        "Risks: Autonomy, control, audit trails",
        "Hands-on: Build a simple financial research agent",
      ],
    },
    {
      number: "05",
      title: "Governance, Ethics & Regulation",
      subtitle: "Deploying responsibly in regulated environments",
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      icon: "⚖️",
      link: "/module5",
      topics: [
        "AI Transparency frameworks (IFATS!)",
        "Explainability requirements for financial AI",
        "Model risk management (SR 11-7 equivalent for AI)",
        "RBI/SEBI/IRDAI emerging guidelines",
        "Bias, fairness & audit mechanisms",
        "Data privacy & consent in AI systems",
      ],
    },
    {
      number: "06",
      title: "AI & GenAI Security",      subtitle: "Securing LLM systems from attack to governance",
      color: "from-rose-600 to-red-500",
      bgColor: "bg-rose-50 dark:bg-rose-950/20",
      icon: "🛡️",
      link: "/module6",
      topics: [
        "OWASP Top 10 for LLM Applications (2025) — all 10 risks with bank examples",
        "Prompt injection deep dive: attack techniques and 8-layer defenses",
        "Adversarial ML & MITRE ATLAS: evasion, poisoning, model extraction",
        "Guardrails, content safety & the enterprise LLM gateway",
        "Data privacy: PII protection, tenant isolation, data residency",
        "Securing RAG pipelines & AI agents: permission-aware retrieval, MCP security",
        "Governance: NIST AI RMF, ISO 42001, EU AI Act, SR 11-7",
        "AI red teaming with PyRIT, Garak, promptfoo — CI/CD security pipelines",
      ],
    },
    {
      number: "07",
      title: "AI Frontier",
      subtitle: "State of the art — updated continuously",
      color: "from-violet-600 to-fuchsia-500",
      bgColor: "bg-violet-50 dark:bg-violet-950/20",
      icon: "🚀",
      link: "/module7",
      topics: [
        "Multimodal AI — the new default across text, vision, audio, video",
        "On-device AI: privacy-first architecture for sensitive financial data",
        "AI in production: evals, model routing, observability, cost accountability",
        "Open vs closed models — 2026 decision framework for finance",
        "The agentic internet: autonomous workflows and governance challenges",
        "AI & the finance workforce — honest assessment of what changes",
        "What's next: signals to watch in the next 12–18 months",
      ],
    },
    {
      number: "08",
      title: "AI Observability, Evaluation & Tracing",
      subtitle: "Measure, monitor, and improve AI in production",
      color: "from-sky-600 to-cyan-500",
      bgColor: "bg-sky-50 dark:bg-sky-950/20",
      icon: "📡",
      link: "/module8",
      topics: [
        "The three pillars: traces, metrics, and logs for AI systems",
        "Evaluation (evals): types, LLM-as-judge, golden sets, regression testing",
        "LangSmith: tracing, datasets, eval runs, annotation queues",
        "Azure AI Foundry evaluators, Azure Monitor, Prompt Flow",
        "AWS Bedrock: CloudWatch, X-Ray, SageMaker Clarify",
        "GCP Vertex AI Evaluation Service and Cloud Monitoring",
        "Open-source: Langfuse, W&B Weave, Phoenix, Helicone, OpenTelemetry",
        "Finance: PII in logs, SR 11-7 evidence, audit trails, cost attribution",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Animated Background Shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-600/20"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-300/30 blur-3xl delay-700 dark:bg-blue-600/20"></div>
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-pulse rounded-full bg-indigo-300/30 blur-3xl delay-1000 dark:bg-indigo-600/20"></div>
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-block animate-pulse rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            Master Gen AI for Finance
          </div>
          <h1 className="mb-6 bg-linear-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent dark:from-white dark:via-blue-200 dark:to-indigo-200 sm:text-7xl lg:text-8xl">
            Gen AI Course
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-300 sm:text-2xl">
            Master the fundamentals of Generative AI with a focus on{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              financial applications
            </span>
          </p>

          {/* Stats Bar */}
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">9</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400">8</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Labs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">40+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">∞</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Author Section */}
        <div className="mx-auto mb-16 max-w-3xl rounded-3xl border border-blue-200/50 bg-white/60 p-8 text-center shadow-xl backdrop-blur-sm dark:border-blue-700/50 dark:bg-gray-800/60">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Course Author
          </div>
          <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Vivek Dhandapani
          </h3>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Researcher and practitioner specializing in <strong>Generative AI</strong> and <strong>Multimodal AI systems</strong>, with a focus on real-world applications in financial services and enterprise environments.
          </p>
          <a
            href="https://www.linkedin.com/in/vivekdhandapani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        {/* Modules Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Link
              key={index}
              href={module.link}
              className={`group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:border-gray-700/50 dark:bg-gray-800/80 ${module.bgColor}`}
            >
              {/* Icon & Number */}
              <div className="mb-6 flex items-center justify-between">
                <div className="text-5xl">{module.icon}</div>
                <div className={`rounded-full bg-linear-to-r ${module.color} px-4 py-1.5 text-xs font-bold text-white shadow-lg`}>
                  Module {module.number}
                </div>
              </div>

              {/* Module Title */}
              <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                {module.title}
              </h2>

              {/* Module Subtitle */}
              <p className="mb-6 text-sm font-medium italic text-gray-600 dark:text-gray-400">
                {module.subtitle}
              </p>

              {/* Divider */}
              <div className={`mb-6 h-1 w-16 rounded-full bg-linear-to-r ${module.color}`}></div>

              {/* Topics List */}
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                {module.topics.slice(0, 3).map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start">
                    <span className={`mr-3 mt-1.5 h-2 w-2 shrink-0 rounded-full bg-linear-to-r ${module.color}`}></span>
                    <span className="leading-relaxed">{topic}</span>
                  </li>
                ))}
                {module.topics.length > 3 && (
                  <li className={`ml-5 font-semibold bg-linear-to-r ${module.color} bg-clip-text text-transparent`}>
                    +{module.topics.length - 3} more topics →
                  </li>
                )}
              </ul>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-1 -z-10 rounded-3xl bg-linear-to-r ${module.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}></div>
            </Link>
          ))}
        </div>

        {/* Labs Banner */}
        <Link
          href="/labs"
          className="group mx-auto mt-16 flex max-w-3xl flex-col items-center gap-3 rounded-3xl border border-amber-300/60 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 text-center shadow-xl transition-all hover:scale-[1.02] dark:border-amber-600/40 dark:from-amber-950/30 dark:to-yellow-950/30 sm:flex-row sm:text-left"
        >
          <div className="text-4xl">🧪</div>
          <div className="flex-1">
            <div className="text-lg font-bold text-gray-900 dark:text-white">Hands-On Labs</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Build one Financial Intelligence Assistant across 8 labs: RAG, agents, guardrails, observability.
            </div>
          </div>
          <span className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            Explore Labs →
          </span>
        </Link>

        {/* Footer Section */}
        <div className="mt-20 rounded-3xl border border-gray-200/50 bg-white/60 p-12 text-center shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/60">
          <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Ready to Transform Your AI Skills?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Dive deep into the world of Generative AI and discover how to leverage cutting-edge technologies in the financial sector.
          </p>
          <Link
            href="/module0"
            className="inline-block rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Start Learning
          </Link>
        </div>
      </main>
    </div>
  );
}
