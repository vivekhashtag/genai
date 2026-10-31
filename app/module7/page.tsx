import Link from "next/link";

export default function Module7() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50 to-fuchsia-50 dark:from-gray-950 dark:via-slate-900 dark:to-violet-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-600/20"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse rounded-full bg-fuchsia-300/30 blur-3xl delay-700 dark:bg-fuchsia-600/20"></div>
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-pulse rounded-full bg-purple-300/20 blur-3xl delay-1000 dark:bg-purple-700/20"></div>
      </div>

      <main className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-violet-700 shadow-sm backdrop-blur-sm transition-all hover:bg-violet-50 dark:border-violet-700 dark:bg-gray-800/80 dark:text-violet-300">
            ← Back to Course Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100 px-4 py-1.5 text-xs font-semibold text-violet-700 dark:border-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Live — Updated Continuously
          </div>
          <div className="mt-3 mb-4 block w-fit mx-auto rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
            Module 07
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-violet-700 via-fuchsia-600 to-purple-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-violet-300 dark:via-fuchsia-300 dark:to-purple-200 sm:text-6xl lg:text-7xl">
            AI Frontier
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            The state of the art in 2025–2026 — cross-cutting developments that span every module, reshaping how AI is built, deployed, and governed in financial services.
          </p>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
            {["Multimodal AI","On-Device AI","AI in Production","Agentic Internet","Open vs Closed","AI & Jobs","What's Next"].map((tag) => (
              <span key={tag} className="rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">{tag}</span>
            ))}
          </div>
        </div>

        {/* Intro */}
        <div className="mb-16 rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            This module covers developments that don't fit neatly into one topic — they <em>cut across</em> foundation models, agents, security, and governance simultaneously. It is updated as the field moves, so check back regularly. Each section notes its most recent update.
          </p>
        </div>

        {/* ══════ SECTION 1: MULTIMODAL AI ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">1</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Multimodal AI — The New Default</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">Multimodality is no longer a feature — it is the baseline. Every frontier model now handles text plus images, and several handle audio, video, and code execution in the same model.</p>
            <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { modality: "Text + Vision", models: "All frontier models", finance: "Read earnings slides, scanned contracts, portfolio charts, handwritten notes" },
                { modality: "Text + Audio (real-time)", models: "GPT-4o Real-Time, Gemini 2.0 Live", finance: "Voice-enabled advisor assistant; live client call analysis; instant transcription + summary" },
                { modality: "Text + Video", models: "Gemini 2.0/2.5, GPT-4o", finance: "Analyse recorded board meetings, analyse trading floor footage for compliance" },
                { modality: "Text + Code Execution", models: "Claude (Analysis), ChatGPT Advanced Data Analysis", finance: "Upload CSV of transactions; model writes, runs, and explains the analysis — no manual coding" },
                { modality: "Native Audio Generation", models: "GPT-4o Audio, Gemini", finance: "Generate audio risk briefings, multilingual client communications" },
                { modality: "Document AI (native)", models: "GPT-4o, Claude, Gemini", finance: "Process PDFs/Excel natively — layout, tables, footnotes preserved; no OCR pipeline" },
              ].map((m) => (
                <div key={m.modality} className="rounded-2xl border border-violet-100 bg-violet-50/50 p-5 dark:border-violet-800/40 dark:bg-violet-900/20">
                  <div className="mb-1 font-bold text-violet-700 dark:text-violet-400 text-sm">{m.modality}</div>
                  <div className="mb-2 text-xs text-gray-500 dark:text-gray-400">{m.models}</div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">{m.finance}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-5 text-white">
              <p className="font-bold mb-1">The Practical Shift</p>
              <p className="text-violet-100 text-sm">In 2023, processing a scanned regulatory document required: OCR → text cleaning → chunking → embedding → RAG. In 2026, you pass the PDF page as an image and ask your question. Finance teams that still maintain complex text extraction pipelines should question whether they are over-engineering.</p>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 2: ON-DEVICE AI ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">2</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">On-Device AI — The Privacy-First Architecture</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">Small but capable models now run entirely on the device — no data leaves the endpoint. This is not a compromise; for many financial use cases, it is the preferred architecture.</p>
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">Models That Run On-Device</h3>
                <div className="space-y-2">
                  {[
                    { model: "Apple Intelligence (on-device)", hw: "iPhone 16, MacBook with M-series", note: "Processes personal data on-chip. Cloud model only for complex queries via Private Cloud Compute." },
                    { model: "Microsoft Phi-4 (14B)", hw: "Modern laptops with NPU", note: "Near-frontier quality at 14B params. Runs in Windows AI Studio, Ollama, LM Studio." },
                    { model: "Google Gemma 3 (27B)", hw: "GPU workstation or NPU laptop", note: "Open weights from Google. Competitive with early GPT-4 on many benchmarks." },
                    { model: "Meta Llama 3.2 (3B / 11B)", hw: "Mobile / edge devices", note: "Officially supports on-device deployment. Multimodal (11B handles images)." },
                  ].map((m) => (
                    <div key={m.model} className="rounded-xl border border-violet-100 bg-violet-50/50 p-3 dark:border-violet-800/40 dark:bg-violet-900/20">
                      <div className="font-bold text-violet-700 dark:text-violet-400 text-xs">{m.model}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{m.hw}</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{m.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">Why Finance Should Care</h3>
                <div className="space-y-3">
                  {[
                    { label: "MNPI handling", desc: "Material Non-Public Information never leaves the building. Critical for investment banking, M&A desks, research teams with information barriers." },
                    { label: "Data residency compliance", desc: "RBI data localisation, EU GDPR, DPDP Act 2023 — on-device means zero cross-border data transfer risk." },
                    { label: "Audit trail simplicity", desc: "No prompt logging at a third-party provider. Simpler evidence for SR 11-7 model validation." },
                    { label: "Offline capability", desc: "Works in secure rooms, on trading floors with restricted internet, or in low-connectivity markets." },
                    { label: "Cost at scale", desc: "High-volume, low-complexity tasks (classification, PII detection, document tagging) can be zero marginal cost with on-device models." },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-fuchsia-50 p-3 dark:bg-fuchsia-900/20">
                      <div className="font-bold text-fuchsia-700 dark:text-fuchsia-400 text-xs mb-0.5">{item.label}</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 3: AI IN PRODUCTION ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">3</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI in Production — What Mature Teams Do Differently</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">The gap between a demo and a production system in 2026 is wider than ever. Here is what separates teams shipping real value from teams stuck in POC loops.</p>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Evals as the Core Discipline",
                  desc: "The teams shipping fastest have invested heavily in evaluation pipelines — not just unit tests, but automated measurement of output quality on domain-specific benchmarks. 'Does it work?' has been replaced by 'What is the task success rate on our golden set?'",
                  tools: "LangSmith, Braintrust, promptfoo, DeepEval, custom pytest suites",
                },
                {
                  title: "Model Routing & Cascading",
                  desc: "Production systems don't use one model for everything. Route simple, high-volume tasks to fast/cheap models (Haiku, o4-mini, Gemini Flash), escalate complex tasks to frontier models. Reduces cost 60–80% with minimal quality loss.",
                  tools: "LiteLLM, custom routers, OpenRouter, Azure AI Model Catalog",
                },
                {
                  title: "Observability as a Requirement",
                  desc: "Every prompt, every response, every tool call, every latency and cost number is logged — with PII redacted. You can't improve what you can't measure. Finance adds compliance logging on top: audit trails for every AI-assisted decision.",
                  tools: "LangSmith, Weights & Biases, Langfuse, Helicone, custom SIEM integration",
                },
                {
                  title: "Prompt Version Control",
                  desc: "Prompts are code. They live in Git, go through code review, are tested before deployment, and have rollback procedures. A prompt change is treated the same as a model weight change under SR 11-7 model risk management.",
                  tools: "Langfuse, PromptLayer, custom Git workflows, CI/CD gates",
                },
                {
                  title: "Human-in-the-Loop by Design",
                  desc: "Mature systems don't try to automate everything end-to-end on day one. They identify exactly which steps require human review (regulatory filings, client communications, credit decisions) and build that into the workflow from the start.",
                  tools: "LangGraph (interrupt nodes), custom approval UIs, email/Slack approval flows",
                },
                {
                  title: "Cost Accountability",
                  desc: "AI costs are tracked per team, per use case, per model. Chargeback mechanisms ensure teams that build expensive agent loops feel the cost. Budget alerts, token quotas, and monthly cost forecasts are standard.",
                  tools: "LLM Gateway with cost attribution, Azure Cost Management, custom dashboards",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-violet-100 bg-violet-50/40 p-5 dark:border-violet-800/30 dark:bg-violet-900/10">
                  <h3 className="mb-2 font-bold text-violet-700 dark:text-violet-400 text-sm">{item.title}</h3>
                  <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">{item.desc}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400"><strong>Tools:</strong> {item.tools}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 dark:bg-amber-900/20 dark:border-amber-700/40">
              <p className="font-bold text-amber-800 dark:text-amber-300 mb-2">The 2026 Production Stack (Finance)</p>
              <div className="grid gap-2 sm:grid-cols-2 text-xs text-amber-900 dark:text-amber-200">
                {["LLM Gateway (Azure APIM + FastAPI) — central policy enforcement","Presidio at gateway — PII redaction on every prompt","LangSmith / Langfuse — full observability with PII redacted logs","LangGraph — agent orchestration with interrupt nodes for HITL","Pinecone / Azure AI Search — hybrid search with security trimming","Garak + promptfoo in CI — automated security testing on every merge","Azure Key Vault + Managed Identity — zero secrets in code","Sentinel SIEM — AI audit trail alongside traditional security logs"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600"></span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 4: OPEN vs CLOSED ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">4</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Open vs Closed Models — The 2026 Decision Framework</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">The gap between open and closed models has narrowed dramatically. DeepSeek-R1 and Llama 4 compete directly with frontier closed models on many benchmarks. The decision is now strategic, not purely technical.</p>

            <div className="mb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="bg-violet-100 dark:bg-violet-900/40">
                  <th className="p-3 text-left font-bold text-violet-800 dark:text-violet-300">Dimension</th>
                  <th className="p-3 text-left font-bold text-violet-800 dark:text-violet-300">Closed (GPT-4o, Claude, Gemini)</th>
                  <th className="p-3 text-left font-bold text-violet-800 dark:text-violet-300">Open (Llama 4, DeepSeek, Mistral)</th>
                </tr></thead>
                <tbody className="divide-y divide-violet-100 dark:divide-violet-900/30">
                  {[
                    ["Data privacy","Data sent to vendor; strong contractual protections; no training on customer data (Azure OpenAI, Claude API)","Runs in your VPC or on-premise; data never leaves; strongest for MNPI and regulated data"],
                    ["Quality (general)","Still ahead on complex reasoning, nuanced understanding, edge cases","Rapidly closing gap; Llama 4 Maverick near GPT-4o on most benchmarks"],
                    ["Cost","API pricing per token; high volume = expensive","Self-hosted: pay for compute, not tokens; cost-efficient at scale"],
                    ["Customisation","Fine-tuning available but limited; model weights not accessible","Full weights: fine-tune, distil, quantize, merge with domain data"],
                    ["Latency","Network round-trip; provider SLA","Self-hosted: control your own infrastructure; can be faster for high throughput"],
                    ["Vendor risk","Dependent on vendor pricing, availability, model updates","No vendor lock-in; community supported; forkable"],
                    ["Compliance evidence","Vendor SOC 2/ISO 27001; DPAs available; limited interpretability","Full control of model lifecycle; easier SR 11-7 documentation"],
                    ["Indian market fit","Azure OpenAI in India Central; data residency options","Self-host in Indian data centres; meets RBI data localisation requirements"],
                  ].map(([dim,closed,open]) => (
                    <tr key={dim} className="bg-white dark:bg-gray-900/30">
                      <td className="p-3 font-semibold text-gray-900 dark:text-white text-xs">{dim}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">{closed}</td>
                      <td className="p-3 text-violet-700 dark:text-violet-400 text-xs">{open}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl bg-violet-50 border border-violet-200 p-5 dark:bg-violet-900/20 dark:border-violet-700/40">
              <p className="font-bold text-violet-800 dark:text-violet-300 mb-2">The Emerging Pattern: Tiered Architecture</p>
              <p className="text-sm text-violet-900 dark:text-violet-200">Most mature financial AI programs use a tiered approach: open models on-premise for highly sensitive data (MNPI, client PII) and high-volume low-complexity tasks; closed frontier models via private endpoints for complex reasoning on non-sensitive data; small on-device models for the most sensitive edge-case workflows. Not either/or — a portfolio of models matched to task and data sensitivity.</p>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 5: AGENTIC INTERNET ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">5</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Agentic Internet — AI Acting in the World</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">We are entering an era where AI agents don't just answer questions — they take actions in the world: browsing, filling forms, making API calls, orchestrating other agents, and executing multi-hour autonomous workflows.</p>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-violet-100 bg-violet-50/40 p-6 dark:border-violet-800/30 dark:bg-violet-900/10">
                <h3 className="mb-3 font-bold text-violet-700 dark:text-violet-400">What's Already Happening</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {[
                    "Agents booking meetings, ordering supplies, filing expense reports — fully autonomously",
                    "Software agents writing code, running tests, submitting pull requests (GitHub Copilot Workspace, Devin 2.0)",
                    "Research agents: given a question, spend 30 minutes searching, reading, synthesizing — deliver a cited report",
                    "Sales agents: qualify leads, personalise outreach, book demos without human involvement",
                    "Compliance agents: monitor transactions in real time, flag anomalies, draft SAR reports for human review",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-500"></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-violet-100 bg-violet-50/40 p-6 dark:border-violet-800/30 dark:bg-violet-900/10">
                <h3 className="mb-3 font-bold text-violet-700 dark:text-violet-400">Finance-Specific Agent Workflows (2026)</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {[
                    "Trade break investigation: agent reads the ticket, queries settlement systems, identifies the cause, drafts a fix — human approves",
                    "Regulatory filing: agent reads the circular, maps obligations, updates the compliance calendar, flags gaps to the team",
                    "Client onboarding: agent orchestrates KYC checks across multiple databases, drafts the account opening recommendation",
                    "Research synthesis: given an investment thesis, agent reads 50 earnings transcripts, builds a comparison table, flags outliers",
                    "Fund reconciliation: nightly agent reconciles NAV across custodians, flags discrepancies for human review by 6am",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-fuchsia-500"></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-red-50 border border-red-200 p-5 dark:bg-red-900/20 dark:border-red-700/40">
              <p className="font-bold text-red-800 dark:text-red-300 mb-2">The Governance Challenge</p>
              <p className="text-sm text-red-900 dark:text-red-200">As agents gain autonomy, accountability becomes critical. Who is responsible when an agent makes a wrong trade or sends a wrong communication? Current regulatory frameworks (SR 11-7, EU AI Act, FCA guidance) are being extended to cover agentic systems — but the frameworks lag the technology. Banks are establishing Agent Governance Committees and requiring human-in-the-loop for all consequential financial actions.</p>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 6: AI & JOBS ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">6</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI & the Finance Workforce — Honest Assessment</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">The question everyone is asking but few answer clearly. Here is the honest picture as of 2026.</p>
            <div className="mb-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  category: "Roles being automated (tasks, not jobs)",
                  color: "red",
                  items: ["First-pass document review (contracts, regulatory filings)","Data extraction from reports (manual copy-paste)","Routine client query answering (FAQ, account status)","Basic financial modelling templates","Meeting summaries and action item capture","First-draft report writing"],
                },
                {
                  category: "Roles being augmented (more productive)",
                  color: "amber",
                  items: ["Research analysts (AI handles data gathering, human handles judgment)","Compliance officers (AI monitors, human adjudicates)","Relationship managers (AI drafts, human personalises and builds trust)","Risk managers (AI identifies, human decides appetite)","Software developers (AI writes code, engineer reviews and architects)","Regulators (AI spots patterns, regulator sets policy)"],
                },
                {
                  category: "New roles emerging",
                  color: "green",
                  items: ["AI/ML Engineers in finance (high demand, significant pay premium)","Prompt engineers / AI product managers","AI compliance officers (AI governance specialist)","AI red teamers and security engineers","AI model validators (SR 11-7 for LLMs)","Data curators for fine-tuning and RAG pipelines"],
                },
              ].map((c) => (
                <div key={c.category} className={`rounded-2xl p-5 ${c.color === 'red' ? 'bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-700/40' : c.color === 'amber' ? 'bg-amber-50 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-700/40' : 'bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-700/40'}`}>
                  <h3 className={`mb-3 font-bold text-sm ${c.color === 'red' ? 'text-red-700 dark:text-red-400' : c.color === 'amber' ? 'text-amber-700 dark:text-amber-400' : 'text-green-700 dark:text-green-400'}`}>{c.category}</h3>
                  <ul className="space-y-1">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${c.color === 'red' ? 'bg-red-500' : c.color === 'amber' ? 'bg-amber-500' : 'bg-green-500'}`}></span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-violet-50 border border-violet-200 p-5 dark:bg-violet-900/20 dark:border-violet-700/40">
              <p className="font-bold text-violet-800 dark:text-violet-300 mb-2">The Skill That Protects Your Career</p>
              <p className="text-sm text-violet-900 dark:text-violet-200">The professionals thriving in 2026 are not those who resist AI, nor those who blindly delegate to it. They are the ones who understand what AI can and cannot do, direct it precisely, verify its outputs critically, and take responsibility for the outcome. Domain expertise + AI fluency = the 10× professional.</p>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 7: WHAT'S NEXT ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">7</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What's Next — Signals to Watch</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">These are the developments most likely to reshape financial AI in the next 12–18 months. Not predictions — signals based on current research and product roadmaps.</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { signal: "Physical AI (Robotics + LLM)", horizon: "12–24 months", desc: "LLMs controlling physical systems — not just software. JPMorgan and others experimenting with AI for data centre operations. Watch for AI in trading floor operations, vault management, physical compliance checks." },
                { signal: "AI Scientists & Autonomous R&D", horizon: "Now → 2027", desc: "Models like Google AlphaFold 3 and DeepMind AlphaProof solve research problems autonomously. Finance application: AI discovering new risk factors, generating novel hedging strategies, autonomously back-testing." },
                { signal: "Regulatory AI Requirements", horizon: "2026–2027", desc: "EU AI Act high-risk obligations kick in fully. RBI and SEBI expected to issue binding AI guidelines. FCA expanding AI in finance guidance. Expect mandatory red-teaming, bias reporting, and human oversight documentation for all client-facing AI." },
                { signal: "AI-Native Financial Products", horizon: "Now", desc: "Financial products designed around AI from the ground up — AI-managed ETFs, AI-driven insurance underwriting, AI credit products. The AI is not a tool used by humans; it is the decision-maker with human oversight." },
                { signal: "Standardised AI Auditing", horizon: "2026–2028", desc: "ISO 42001 certification starting to be required by large enterprises from their AI vendors. Big 4 firms building AI audit practices. Expect AI audit to become as standard as financial audit within 5 years." },
                { signal: "Multimodal Foundation Models for Finance", horizon: "2026–2027", desc: "Finance-specific models trained on market data, regulatory text, earnings transcripts, and financial tables simultaneously. Bloomberg's second-generation models, JPMorgan's internal models, and open alternatives." },
              ].map((s) => (
                <div key={s.signal} className="rounded-2xl border border-violet-100 bg-violet-50/40 p-5 dark:border-violet-800/30 dark:bg-violet-900/10">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-bold text-violet-700 dark:text-violet-400 text-sm">{s.signal}</h3>
                    <span className="rounded-full bg-violet-200 px-2 py-0.5 text-xs font-semibold text-violet-700 dark:bg-violet-800 dark:text-violet-300">{s.horizon}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ SECTION 8: HARNESS ENGINEERING ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">8</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Harness Engineering — Scaffolding Around AI Models</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">A <strong>harness</strong> is the systematic scaffolding you build <em>around</em> a model — not the model itself. The model is the engine; the harness is the chassis, the dashboard, the safety systems, and the test rig. Most production AI failures happen in the harness, not the model.</p>

            {/* DSPy */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 dark:border-violet-700/40 dark:from-violet-900/20 dark:to-fuchsia-900/20">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold text-white">Stanford 2024</span>
                <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400">DSPy — Programming LMs Instead of Prompting Them</h3>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">DSPy (Declarative Self-improving Python) from Stanford treats prompts as <em>learnable parameters</em>, not hardcoded strings. You write a program that describes <em>what</em> you want — DSPy automatically finds the best prompts, few-shot examples, and chain-of-thought strategies using gradient-free optimisation (like a compiler for LM programs).</p>
              <div className="mb-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Traditional approach:</p>
                  <div className="rounded-xl bg-gray-900 p-4 font-mono text-xs text-green-400">
                    <pre>{`# Hand-craft every prompt variation
# Manually test & tweak
# Breaks when model updates
prompt = """You are a financial analyst.
Analyse this report and extract:
1. Revenue growth...
2. Margin trends..."""`}</pre>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">DSPy approach:</p>
                  <div className="rounded-xl bg-gray-900 p-4 font-mono text-xs text-green-400">
                    <pre>{`import dspy

class FinancialAnalyser(dspy.Signature):
    """Extract key metrics from a report."""
    report = dspy.InputField()
    metrics = dspy.OutputField(
      desc="revenue, margins, risks"
    )

analyser = dspy.Predict(FinancialAnalyser)
# DSPy compiles optimal prompt automatically`}</pre>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Optimisers", desc: "BootstrapFewShot, MIPRO, BayesianSignatureOptimizer — automatically find best prompts and examples from your training data" },
                  { label: "Modules", desc: "Predict, ChainOfThought, ReAct, Retrieve — composable building blocks that replace hand-crafted prompt chains" },
                  { label: "Finance use", desc: "Compile an optimal credit analysis prompt from 50 labelled examples — automatically, without manual prompt engineering" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white p-4 dark:bg-gray-800">
                    <div className="font-bold text-violet-700 dark:text-violet-400 text-xs mb-1">{item.label}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eval Harnesses */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-violet-700 dark:text-violet-400">Evaluation Harnesses — Systematic Model Testing</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">An eval harness is a framework for running structured, repeatable tests against a model or pipeline. The difference between "does it work?" and "how well does it work on category X, across 500 cases, at temperature 0.7?" — that requires a harness.</p>
              <div className="mb-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="bg-violet-100 dark:bg-violet-900/40">
                    <th className="p-3 text-left font-bold text-violet-800 dark:text-violet-300">Harness</th>
                    <th className="p-3 text-left font-bold text-violet-800 dark:text-violet-300">What It Does</th>
                    <th className="p-3 text-left font-bold text-violet-800 dark:text-violet-300">Best For</th>
                  </tr></thead>
                  <tbody className="divide-y divide-violet-100 dark:divide-violet-900/30">
                    {[
                      ["EleutherAI LM Eval Harness","Standardised benchmarks: MMLU, HellaSwag, TruthfulQA, BIG-bench. Run any model against any benchmark.","Comparing open models; validating fine-tuned models against base model"],
                      ["promptfoo","YAML-driven test cases for your specific prompts and pipelines. CI/CD integration with pass/fail gates.","Production prompt testing; security evals mapped to OWASP/ATLAS"],
                      ["Braintrust","Dataset management, eval runs, scoring, human annotation, regression tracking — all in one platform.","Teams that need full eval lifecycle management"],
                      ["RAGAS","Evaluation framework specifically for RAG pipelines: faithfulness, answer relevancy, context recall.","Validating RAG quality before and after changes"],
                      ["DeepEval","Pytest-style evals with 14+ built-in metrics (G-Eval, hallucination, toxicity, bias, summarisation).","Python-native teams wanting eval as code in CI"],
                    ].map(([harness,what,best]) => (
                      <tr key={harness} className="bg-white dark:bg-gray-900/30">
                        <td className="p-3 font-bold text-gray-900 dark:text-white text-xs">{harness}</td>
                        <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">{what}</td>
                        <td className="p-3 text-violet-700 dark:text-violet-400 text-xs">{best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-2xl bg-gray-900 p-5 font-mono text-xs text-green-400 overflow-x-auto">
                <pre>{`# DeepEval: eval as code in CI/CD — finance example
from deepeval import evaluate
from deepeval.metrics import (
    AnswerRelevancyMetric,
    HallucinationMetric,
    FaithfulnessMetric,
)
from deepeval.test_case import LLMTestCase

test_case = LLMTestCase(
    input="What is the repo rate set by RBI in Q3 2025?",
    actual_output=model_response,
    expected_output="6.50%",
    retrieval_context=retrieved_chunks,
)

evaluate(
    test_cases=[test_case],
    metrics=[
        AnswerRelevancyMetric(threshold=0.8),
        HallucinationMetric(threshold=0.1),   # max 10% hallucination
        FaithfulnessMetric(threshold=0.9),    # grounded in sources
    ],
)`}</pre>
              </div>
            </div>

            {/* Prompt Management */}
            <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-violet-700 dark:text-violet-400">Prompt Management — Treating Prompts as Code</h3>
              <p className="mb-3 text-gray-700 dark:text-gray-300">A prompt change is a model behaviour change. In regulated environments, it needs the same governance as a code change: version control, review, testing, staged rollout, rollback.</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  {[
                    { step: "Version control", desc: "Every prompt in Git. Diffs are reviewable. History is auditable. SR 11-7 requires documentation of what changed and when." },
                    { step: "Staged rollout", desc: "Canary deploy to 5% of traffic → measure quality metrics → full rollout. Same discipline as software releases." },
                    { step: "A/B testing", desc: "Run prompt A and B in parallel, measure quality scores, latency, cost, user satisfaction. Pick the winner on data, not intuition." },
                    { step: "Rollback capability", desc: "When a model vendor silently updates their model and your prompt's behaviour changes, you need to roll back your prompt instantly." },
                  ].map((s) => (
                    <div key={s.step} className="rounded-xl bg-violet-50 p-3 dark:bg-violet-900/20">
                      <div className="font-bold text-violet-700 dark:text-violet-400 text-xs mb-0.5">{s.step}</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tools:</p>
                  <div className="space-y-2">
                    {[
                      { name: "Langfuse", desc: "Open-source prompt management + versioning + linked to traces" },
                      { name: "PromptLayer", desc: "Version control for prompts with analytics" },
                      { name: "LangSmith", desc: "Prompt hub integrated with eval runs" },
                      { name: "Azure AI Foundry", desc: "Prompt management built into Azure's LLM platform" },
                      { name: "Custom Git + CI", desc: "Many teams manage prompts as YAML files in the same repo as code, with CI gates that run evals on every PR" },
                    ].map((t) => (
                      <div key={t.name} className="flex gap-2 text-xs">
                        <span className="font-bold text-violet-700 dark:text-violet-400 shrink-0">{t.name}:</span>
                        <span className="text-gray-600 dark:text-gray-400">{t.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 9: LOOP ENGINEERING ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">9</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Loop Engineering — Making Models Think, Refine & Improve</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">Loop engineering is the design of iterative AI processes — structuring how a model reasons, critiques, refines, and improves over multiple steps. It is the engineering discipline behind reasoning models, self-improving pipelines, and high-quality agent outputs.</p>

            {/* Test-Time Compute */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 dark:border-violet-700/40 dark:from-violet-900/20 dark:to-fuchsia-900/20">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-fuchsia-600 px-3 py-1 text-xs font-bold text-white">The Paradigm Shift</span>
                <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400">Test-Time Compute Scaling</h3>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">The insight behind o1, o3, and DeepSeek-R1: <strong>spending more compute at inference time</strong> (thinking longer) yields better answers — sometimes dramatically so. This shifts the question from "how big is the model?" to "how long should it think?"</p>
              <div className="mb-4 grid gap-4 md:grid-cols-3">
                {[
                  { title: "Sequential thinking", desc: "The model generates a long chain of thought before answering — reasoning step by step through the problem. Internally done in o1/o3/R1. More tokens spent thinking = better final answer.", finance: "Multi-step credit risk: analyse collateral → assess macro conditions → evaluate management quality → produce rating" },
                  { title: "Best-of-N sampling", desc: "Generate N answers independently, use a verifier/judge to pick the best one. Simple but powerful — more compute buys more quality.", finance: "Generate 5 regulatory interpretations, use a compliance LLM-as-judge to select the most accurate and conservative one" },
                  { title: "Process Reward Models (PRM)", desc: "A separate model scores each reasoning step (not just the final answer). The main model searches for paths where each step is rewarded — like a chess engine evaluating board positions.", finance: "Validate each step of a derivatives pricing calculation, not just the final price" },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl bg-white p-4 dark:bg-gray-800">
                    <div className="font-bold text-violet-700 dark:text-violet-400 text-sm mb-2">{item.title}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{item.desc}</p>
                    <p className="text-xs text-fuchsia-700 dark:text-fuchsia-400 italic">{item.finance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Self-Refinement */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-violet-700 dark:text-violet-400">Self-Refinement Loops</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">A class of techniques where the model critiques and improves its own output — without human feedback, using the model's own knowledge as the critic.</p>
              <div className="mb-4 grid gap-4 md:grid-cols-2">
                {[
                  {
                    name: "Self-Refine",
                    steps: ["1. Generate initial answer", "2. Critique: what is wrong or incomplete?", "3. Refine: produce improved answer based on critique", "4. Repeat until quality threshold met or N iterations"],
                    finance: "Draft a client investment proposal → critique for regulatory compliance gaps → refine → check again",
                  },
                  {
                    name: "Constitutional AI (Anthropic)",
                    steps: ["1. Model generates a response", "2. Model critiques it against a set of principles ('the constitution')", "3. Model revises based on its own critique", "4. Used in Claude's training — but also usable at inference time"],
                    finance: "Define a 'financial advice constitution' — principles like 'never recommend leverage above X' — and have the model self-check against it",
                  },
                  {
                    name: "Reflexion",
                    steps: ["1. Agent attempts a task", "2. Evaluator scores the outcome", "3. Agent reflects on the failure in natural language", "4. Reflection stored as memory for next attempt", "5. Repeat — agent improves across episodes"],
                    finance: "Compliance checking agent learns from each missed obligation, stores reflections, improves on subsequent documents",
                  },
                  {
                    name: "Multi-Agent Debate",
                    steps: ["1. Two or more agents produce independent answers", "2. Agents see each other's answers and critique them", "3. Multiple rounds of debate", "4. Final answer is the consensus or judged winner"],
                    finance: "Bull agent vs Bear agent debate on a stock — forces both sides of an investment thesis, reduces anchoring bias",
                  },
                ].map((item) => (
                  <div key={item.name} className="rounded-xl bg-violet-50/50 border border-violet-100 p-5 dark:bg-violet-900/10 dark:border-violet-800/30">
                    <div className="mb-3 font-bold text-violet-700 dark:text-violet-400">{item.name}</div>
                    <ul className="mb-3 space-y-1">
                      {item.steps.map((step) => (
                        <li key={step} className="text-xs text-gray-700 dark:text-gray-300">{step}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-fuchsia-700 dark:text-fuchsia-400 italic">{item.finance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Reasoning Structures */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-violet-700 dark:text-violet-400">Advanced Reasoning Structures</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    name: "Tree of Thought (ToT)",
                    desc: "Instead of one linear chain of thought, explore multiple reasoning branches simultaneously. Evaluate each branch, prune dead ends, continue promising ones — like a search tree.",
                    when: "Complex problems with multiple valid approaches: M&A deal structuring, portfolio optimisation under constraints",
                  },
                  {
                    name: "Graph of Thought (GoT)",
                    desc: "Extends ToT to arbitrary graph structures — reasoning branches can merge, loop, and recombine. More flexible than trees for problems with interdependencies.",
                    when: "Regulatory mapping (rules reference other rules), multi-factor risk analysis where factors interact",
                  },
                  {
                    name: "Skeleton of Thought",
                    desc: "Generate an outline (skeleton) first, then fill in each section in parallel. Reduces latency while preserving structure.",
                    when: "Generating long structured reports (investment memos, regulatory submissions) where sections are largely independent",
                  },
                ].map((item) => (
                  <div key={item.name} className="rounded-xl bg-violet-50 p-4 dark:bg-violet-900/20">
                    <div className="font-bold text-violet-700 dark:text-violet-400 text-sm mb-2">{item.name}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{item.desc}</p>
                    <p className="text-xs text-fuchsia-700 dark:text-fuchsia-400"><strong>Finance when:</strong> {item.when}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Loops */}
            <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-violet-700 dark:text-violet-400">Training-Time Loops — How Models Are Aligned</h3>
              <p className="mb-3 text-gray-700 dark:text-gray-300">Understanding training loops matters for two reasons: it explains <em>why</em> models behave as they do, and it determines what fine-tuning approaches are appropriate for financial use cases.</p>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "RLHF", full: "Reinforcement Learning from Human Feedback", desc: "Humans rank model outputs → reward model trained → main model fine-tuned via PPO to maximise reward. Powers ChatGPT and Claude's initial alignment.", finance: "Can be adapted for financial preference data: ranking credit analysis outputs by accuracy" },
                  { name: "DPO", full: "Direct Preference Optimisation", desc: "Simpler alternative to RLHF — no separate reward model. Directly trains on human preference pairs (preferred vs rejected response). Less compute, easier to implement.", finance: "Fine-tune a compliance model on labelled pairs of compliant vs non-compliant advisory language" },
                  { name: "GRPO", full: "Group Relative Policy Optimisation", desc: "Used in DeepSeek-R1. Groups of outputs are compared, relative rewards assigned within the group — no separate reward model needed, more stable training.", finance: "Used to train R1-style reasoning on financial problem-solving datasets" },
                  { name: "RLVR", full: "Reinforcement Learning with Verifiable Rewards", desc: "Reward is given only for verifiably correct answers (math, code, logic). No human judges needed — correctness is the reward signal. Key innovation behind DeepSeek-R1's reasoning.", finance: "Train on financial calculations with known correct answers: NAV calculation, duration, convexity" },
                ].map((item) => (
                  <div key={item.name} className="rounded-xl bg-violet-50/50 border border-violet-100 p-4 dark:bg-violet-900/10 dark:border-violet-800/30">
                    <div className="mb-1">
                      <span className="font-mono font-bold text-violet-700 dark:text-violet-400 text-sm">{item.name}</span>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.full}</div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{item.desc}</p>
                    <p className="text-xs text-fuchsia-700 dark:text-fuchsia-400 italic">{item.finance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 10: DEEP AGENTS ══════ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl font-black text-white shadow-lg">10</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Deep Agents — Long-Horizon Autonomous AI</h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">Updated Oct 2026</span>
            </div>
          </div>
          <div className="rounded-3xl border border-violet-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/80">

            {/* Intro */}
            <p className="mb-4 text-gray-700 dark:text-gray-300">Module 4 covered the fundamentals of AI agents — the loop, tools, ReAct, frameworks. <strong>Deep Agents</strong> are what happens when those fundamentals are pushed to their limit: agents that run for hours or days, handle complex multi-stage goals, recover from their own failures, and coordinate entire workflows end-to-end with minimal human intervention.</p>
            <div className="mb-8 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-5 text-white">
              <p className="font-bold mb-1">The Core Distinction</p>
              <div className="grid gap-4 md:grid-cols-2 text-sm">
                <div className="rounded-xl bg-white/20 p-3">
                  <p className="font-semibold mb-1">Standard Agent</p>
                  <ul className="space-y-1 text-violet-100 text-xs">
                    <li>• Single well-defined task (summarise this document)</li>
                    <li>• Seconds to minutes to complete</li>
                    <li>• Fixed set of tools known upfront</li>
                    <li>• Fails gracefully, asks user for help</li>
                    <li>• Human reviews every output</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white/20 p-3">
                  <p className="font-semibold mb-1">Deep Agent</p>
                  <ul className="space-y-1 text-violet-100 text-xs">
                    <li>• Complex, open-ended goal (research this company, build this feature)</li>
                    <li>• Minutes to hours to days to complete</li>
                    <li>• Dynamically discovers what tools/steps are needed</li>
                    <li>• Self-diagnoses failures, retries, replans</li>
                    <li>• Human reviews key checkpoints, not every step</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Deep Research Agents */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold text-white">Production Now</span>
                <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400">Deep Research Agents</h3>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">The most widely deployed class of deep agents today. Given a research question, the agent autonomously searches, reads, synthesises, and produces a cited report — in 5 to 30 minutes — at a depth that would take a human analyst hours or days.</p>
              <div className="mb-4 grid gap-4 md:grid-cols-3">
                {[
                  { product: "OpenAI Deep Research", detail: "GPT-4o/o3 based. Browses the web autonomously, reads full articles, synthesises across 20–50 sources. Produces a multi-page cited report. Launched Jan 2025 — immediately became the benchmark.", finance: "Research a target company for M&A: financials, news, regulatory filings, competitor landscape — in 20 minutes." },
                  { product: "Gemini Deep Research", detail: "Google's equivalent using Gemini 2.0. Integrates natively with Google Search and Scholar. Strong on finding recent news and academic sources.", finance: "Monitor regulatory changes across 15 jurisdictions overnight. Deliver a morning briefing on what changed." },
                  { product: "Perplexity Deep Research", detail: "Research-focused platform. Faster than OpenAI/Google — lighter synthesis but strong real-time web search. API available for integration.", finance: "Daily market intelligence brief: synthesise overnight news across equities, rates, and macro in under 5 minutes." },
                ].map((p) => (
                  <div key={p.product} className="rounded-xl bg-violet-50 p-4 dark:bg-violet-900/20">
                    <div className="mb-1 font-bold text-violet-700 dark:text-violet-400 text-sm">{p.product}</div>
                    <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">{p.detail}</p>
                    <p className="text-xs text-fuchsia-700 dark:text-fuchsia-400 italic">{p.finance}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-gray-900 p-5 font-mono text-xs text-green-400 overflow-x-auto">
                <pre>{`# Build your own Deep Research agent — finance edition
import anthropic

client = anthropic.Anthropic()

RESEARCH_SYSTEM = """You are a senior financial research analyst.
Given a research question, you will:
1. Break it down into specific sub-questions
2. Search for information on each sub-question
3. Read and synthesise the results
4. Identify gaps and search again if needed
5. Produce a structured report with citations

Always cite sources. Flag uncertainty explicitly.
Never fabricate data — if you can't find it, say so."""

def deep_research(question: str, max_iterations: int = 10) -> str:
    messages = [{"role": "user", "content": question}]
    tools = [web_search_tool, read_page_tool, calculator_tool]

    for iteration in range(max_iterations):
        response = client.messages.create(
            model="claude-opus-4-8",         # use most capable model
            max_tokens=8096,
            system=RESEARCH_SYSTEM,
            tools=tools,
            messages=messages,
        )

        if response.stop_reason == "end_turn":
            # Agent decided it has enough — extract final report
            return extract_report(response)

        # Agent wants to use tools — execute and continue
        tool_results = execute_tools(response.content)
        messages.extend([
            {"role": "assistant", "content": response.content},
            {"role": "user", "content": tool_results},
        ])

    return "Research incomplete — max iterations reached"

# Finance example
report = deep_research(
    "Analyse HDFC Bank's credit quality trends Q3 2025: "
    "NPA ratios, provision coverage, sector concentration, "
    "and management guidance versus analyst consensus."
)`}</pre>
              </div>
            </div>

            {/* Agentic Coding */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-fuchsia-600 px-3 py-1 text-xs font-bold text-white">2025 Breakthrough</span>
                <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400">Agentic Coding — Software Engineering Agents</h3>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Agents that don't just write code snippets — they understand an entire codebase, plan multi-file changes, write tests, run them, debug failures, and iterate until the task is complete. The 2025 step-change from Copilot (autocomplete) to autonomous engineering.</p>
              <div className="mb-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Claude Code", vendor: "Anthropic", desc: "Full terminal access, reads entire repos, writes and runs code, runs tests, commits. Used in agentic mode for multi-hour tasks." },
                  { name: "Devin 2.0", vendor: "Cognition AI", desc: "First commercially deployed 'AI software engineer'. Given a GitHub issue, it plans, implements, tests, and raises a PR. Works across many hours." },
                  { name: "GitHub Copilot Workspace", vendor: "GitHub/Microsoft", desc: "Given a GitHub issue, generates a plan and full implementation across multiple files. Reviewed by developer before merge." },
                  { name: "OpenAI Codex (API)", vendor: "OpenAI", desc: "Cloud-based agentic coding — runs in a sandboxed environment, can execute code, install packages, and iterate." },
                ].map((p) => (
                  <div key={p.name} className="rounded-xl bg-fuchsia-50 p-4 dark:bg-fuchsia-900/20">
                    <div className="font-bold text-fuchsia-700 dark:text-fuchsia-400 text-sm">{p.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{p.vendor}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{p.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 dark:bg-amber-900/20 dark:border-amber-700/40">
                <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm mb-1">Finance Applications</p>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-amber-900 dark:text-amber-200">
                  {[
                    "Build and test risk calculation modules — agent writes code, runs against historical data, fixes failures",
                    "Automate regulatory report generation — agent reads spec, writes the report generator, validates output format",
                    "Migrate legacy COBOL/mainframe logic — agent reads old code, understands business logic, rewrites in Python",
                    "Build data pipelines — agent reads data schema, writes ingestion + transformation + validation code end-to-end",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600"></span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Self-Healing Agents */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-violet-700 dark:text-violet-400">Self-Healing Agents — Autonomous Error Recovery</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">A critical capability for long-horizon tasks: the agent detects when something went wrong, diagnoses the failure, and replans — without human intervention. This is what separates agents that are genuinely useful for multi-hour workflows from those that get stuck at the first obstacle.</p>
              <div className="mb-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Self-healing patterns:</p>
                  <div className="space-y-3">
                    {[
                      { pattern: "Exception catching + replan", desc: "When a tool call fails (API timeout, invalid data), the agent catches the exception, reasons about why it failed, and tries an alternative approach — different tool, different query, different source." },
                      { pattern: "Output validation loop", desc: "Agent generates output, runs a validation check (schema check, sanity check, completeness check). If validation fails, the agent understands the failure message and self-corrects." },
                      { pattern: "Checkpoint + resume", desc: "For very long tasks, the agent saves progress at key milestones. If interrupted or if a step fails, it resumes from the last good checkpoint rather than starting over." },
                      { pattern: "Escalation with context", desc: "When the agent genuinely can't resolve an issue after N retries, it escalates to a human — but with a full summary of what it tried and why it failed. Not 'error occurred' — 'I tried X, Y, Z; each failed because...; I need you to resolve W'." },
                    ].map((p) => (
                      <div key={p.pattern} className="rounded-xl bg-violet-50 p-3 dark:bg-violet-900/20">
                        <div className="font-bold text-violet-700 dark:text-violet-400 text-xs mb-1">{p.pattern}</div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-gray-900 p-5 font-mono text-xs text-green-400 overflow-x-auto">
                  <pre>{`# Self-healing agent pattern
async def run_with_recovery(agent, task, max_retries=3):
    context = {"task": task, "attempts": [], "errors": []}

    for attempt in range(max_retries):
        try:
            result = await agent.run(task, context=context)

            # Validate output before returning
            if not validate_result(result):
                error = f"Validation failed: {get_validation_error(result)}"
                context["errors"].append(error)
                # Agent sees its own validation failure
                task = f"{task}\n\nPrevious attempt failed: {error}\nPlease fix."
                continue

            return result  # success

        except ToolCallError as e:
            # Tool failed — let agent know and replan
            context["errors"].append(str(e))
            context["attempts"].append(attempt + 1)
            task = f"{task}\n\nTool '{e.tool}' failed: {e.reason}\nUse an alternative approach."

        except Exception as e:
            context["errors"].append(str(e))

    # All retries exhausted — escalate with context
    return escalate_to_human(task, context)`}</pre>
                </div>
              </div>
            </div>

            {/* Long-horizon patterns */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-violet-700 dark:text-violet-400">Long-Horizon Agent Patterns</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    pattern: "Plan-Verify-Execute",
                    desc: "Before starting a long task, the agent produces a complete plan and submits it for human approval. Once approved, executes step by step. Human reviews at key gates, not every step.",
                    finance: "Fund NAV reconciliation: agent plans all steps → compliance officer approves → agent executes overnight → delivers exception report by 6am",
                    steps: ["1. Generate plan with expected outputs at each step","2. Human reviews and approves plan (not implementation)","3. Agent executes, checkpointing progress","4. Human reviews final output and exceptions only"],
                  },
                  {
                    pattern: "Parallel Sub-Agent Swarms",
                    desc: "Decompose a large task into independent subtasks, spin up parallel sub-agents for each, aggregate results. Dramatically reduces wall-clock time for research and analysis tasks.",
                    finance: "Due diligence on 20 target companies simultaneously — one sub-agent per company, parallel execution, orchestrator synthesises",
                    steps: ["1. Orchestrator decomposes task into N independent sub-tasks","2. N sub-agents run in parallel","3. Each reports back structured results","4. Orchestrator synthesises across all results"],
                  },
                  {
                    pattern: "Persistent Task Agents",
                    desc: "Agents that run continuously in the background — monitoring, checking conditions, taking action when triggered. Not single-shot — they persist across time.",
                    finance: "Compliance monitoring agent: watches transaction feeds 24/7, flags anomalies in real time, drafts SAR reports when threshold breached",
                    steps: ["1. Agent deployed with a goal + trigger conditions","2. Runs continuously, polling data sources","3. Acts when conditions are met","4. Logs every action for audit"],
                  },
                ].map((p) => (
                  <div key={p.pattern} className="rounded-xl bg-violet-50/50 border border-violet-100 p-5 dark:bg-violet-900/10 dark:border-violet-800/30">
                    <div className="mb-2 font-bold text-violet-700 dark:text-violet-400">{p.pattern}</div>
                    <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">{p.desc}</p>
                    <div className="mb-3 space-y-1">
                      {p.steps.map((s) => (
                        <div key={s} className="text-xs text-gray-500 dark:text-gray-400">{s}</div>
                      ))}
                    </div>
                    <p className="text-xs text-fuchsia-700 dark:text-fuchsia-400 italic">{p.finance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Finance Deep Agent Use Cases */}
            <div className="mb-8 rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-700/40 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-violet-700 dark:text-violet-400">Deep Agent Use Cases in Financial Services (2026)</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Autonomous Due Diligence", who: "Investment Banking", desc: "Given a target company, agent reads 10-Ks, earnings transcripts, news, court records, competitor filings. Produces a structured DD report with flagged risks. Human partners review and validate.", time: "20 min vs 2 days" },
                  { title: "Regulatory Change Monitoring", who: "Compliance", desc: "Persistent agent monitors SEBI, RBI, IRDAI, SEC, FCA, ECB publications. When a relevant circular is published, agent reads it, maps obligations, updates the compliance calendar, and sends a briefing to the team.", time: "Real-time vs weekly review" },
                  { title: "Automated Loan Underwriting", who: "Retail/SME Banking", desc: "Agent gathers data from bureau, bank statements, GST filings, property records. Calculates ratios. Assesses risk against policy. Produces a recommendation with supporting evidence. Underwriter reviews and decides.", time: "10 min vs 5 days" },
                  { title: "Portfolio Stress Testing", who: "Risk Management", desc: "Agent runs portfolio through 50 stress scenarios, calculates VaR, CVaR, drawdowns under each. Identifies top risk concentrations. Generates the regulatory stress test report. Quant reviews outputs.", time: "Overnight vs week" },
                  { title: "Trade Break Investigation", who: "Operations", desc: "Agent reads the break ticket, queries settlement systems, reconciles trade records across counterparties, identifies the root cause, drafts a proposed fix. Ops team approves the fix.", time: "15 min vs 4 hours" },
                  { title: "Client Onboarding KYC", who: "Wealth/Retail", desc: "Agent orchestrates checks across bureau, sanctions databases, PEP lists, adverse media, GST portal. Generates risk rating. Compliance reviews the consolidated report and makes the final decision.", time: "1 hour vs 3 days" },
                ].map((uc) => (
                  <div key={uc.title} className="rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 p-4 dark:from-violet-900/10 dark:to-fuchsia-900/10 dark:border-violet-800/30">
                    <div className="font-bold text-violet-700 dark:text-violet-400 text-sm mb-0.5">{uc.title}</div>
                    <div className="text-xs text-fuchsia-600 dark:text-fuchsia-400 mb-2">{uc.who}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{uc.desc}</p>
                    <div className="rounded-lg bg-green-50 border border-green-200 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/20 dark:border-green-700/40 dark:text-green-400">{uc.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance */}
            <div className="rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 p-6 dark:from-red-900/20 dark:to-rose-900/20 dark:border-red-700/40">
              <h3 className="mb-4 text-xl font-bold text-red-700 dark:text-red-400">Governing Deep Agents — The Hard Part</h3>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">Deep agents introduce governance challenges that standard agents don't have. The longer the horizon, the more consequential a mistake, and the harder it is to trace accountability.</p>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { challenge: "Explainability across 100+ steps", solution: "Full trace logging of every step, decision, and tool call. Not just the final output — the entire reasoning chain must be stored and queryable for audit." },
                  { challenge: "Cascading errors compound", solution: "Early checkpoint gates with human review. If step 3 of 50 has a bad assumption, the agent carries that error through 47 more steps. Catch it early." },
                  { challenge: "Legal accountability", solution: "Every consequential action (payment, data access, external communication) must have an explicit human approval in the audit trail. The human is always accountable, not the agent." },
                  { challenge: "Scope creep — agent goes beyond task", solution: "Strict tool allowlists per task type. Agent cannot acquire new tools mid-task. Read-only by default; write actions require explicit per-task authorisation." },
                  { challenge: "Persistent agents and data retention", solution: "Define clear memory and data retention policies. Agent memory is personal data under GDPR/DPDP. Right-to-delete applies. Scope memory to task duration, expire it." },
                  { challenge: "Prompt injection in long contexts", solution: "Deep research agents read many external documents — each is a potential injection vector. Spotlighting + Prompt Shields on every document chunk retrieved. Dual-LLM pattern for high-risk tasks." },
                ].map((g) => (
                  <div key={g.challenge} className="rounded-xl bg-white p-4 dark:bg-gray-800">
                    <div className="font-bold text-red-700 dark:text-red-400 text-xs mb-1">{g.challenge}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{g.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-between rounded-3xl border border-violet-200/60 bg-white/70 p-6 shadow-xl backdrop-blur-sm dark:border-violet-700/40 dark:bg-gray-800/70">
          <Link href="/module6" className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-5 py-2.5 text-sm font-medium text-violet-700 shadow-sm transition-all hover:bg-violet-50 dark:border-violet-700 dark:bg-gray-800 dark:text-violet-300">
            ← Module 06: AI Security
          </Link>
          <Link href="/module8" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105">
            Module 08: Observability →
          </Link>
        </div>
      </main>
    </div>
  );
}
