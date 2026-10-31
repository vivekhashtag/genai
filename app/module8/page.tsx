import Link from "next/link";

export default function Module8() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 dark:from-gray-950 dark:via-slate-900 dark:to-sky-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-600/20"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-300/30 blur-3xl delay-700 dark:bg-cyan-600/20"></div>
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-pulse rounded-full bg-blue-300/20 blur-3xl delay-1000 dark:bg-blue-700/20"></div>
      </div>

      <main className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-sky-700 shadow-sm backdrop-blur-sm transition-all hover:bg-sky-50 dark:border-sky-700 dark:bg-gray-800/80 dark:text-sky-300">
            ← Back to Course Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 block w-fit mx-auto rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
            Module 08
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-sky-300 dark:via-cyan-300 dark:to-blue-200 sm:text-6xl lg:text-7xl">
            AI Observability, Evaluation & Tracing
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            You cannot improve what you cannot measure. This module covers the complete discipline of monitoring, evaluating, and debugging AI systems in production — across LangSmith, Azure, AWS, GCP, and open-source stacks.
          </p>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
            {["Traces","Metrics","Evals","LangSmith","Azure AI","AWS Bedrock","GCP Vertex","Langfuse","Finance Compliance"].map((tag) => (
              <span key={tag} className="rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">{tag}</span>
            ))}
          </div>
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="mb-16 rounded-3xl border border-sky-200/60 bg-white/70 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/70">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">What You Will Learn</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "Why AI Observability is Different", desc: "Non-determinism, probabilistic outputs, cost visibility, regulatory requirements" },
              { num: "02", title: "The Three Pillars", desc: "Traces, metrics, and logs — how they work together in AI systems" },
              { num: "03", title: "Evaluation (Evals)", desc: "Types, metrics, LLM-as-judge, golden sets, regression testing" },
              { num: "04", title: "LangSmith Deep Dive", desc: "Tracing, datasets, eval runs, annotation queues, production monitoring" },
              { num: "05", title: "Azure AI Observability", desc: "AI Foundry evaluators, Azure Monitor, Prompt Flow, compliance logging" },
              { num: "06", title: "AWS Bedrock Observability", desc: "CloudWatch, X-Ray, SageMaker Clarify, BFSI patterns" },
              { num: "07", title: "GCP Vertex AI", desc: "Vertex Evaluation Service, Cloud Trace, Model Monitoring, BigQuery" },
              { num: "08", title: "Open-Source Tools", desc: "Langfuse, W&B Weave, Phoenix, Helicone, OpenTelemetry for AI" },
              { num: "09", title: "Finance-Specific Requirements", desc: "PII in logs, SR 11-7 evidence, audit trails, cost attribution, drift alerts" },
              { num: "10", title: "Production Monitoring Dashboard", desc: "Key metrics, alert thresholds, drift detection, incident response" },
            ].map((s) => (
              <div key={s.num} className="flex gap-3 rounded-2xl bg-sky-50/60 p-4 dark:bg-sky-900/20">
                <span className="mt-0.5 text-2xl font-black text-sky-300 dark:text-sky-700">{s.num}</span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{s.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════ SECTION 1: WHY OBSERVABILITY ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">1</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why AI Observability is Different</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">Traditional software observability answers: "Did it crash? Is it slow?" AI observability must answer: "Is the output <em>any good</em>? Is it getting worse over time? Is it leaking data? Is it hallucinating more than last week?"</p>
            <div className="mb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="bg-sky-100 dark:bg-sky-900/40">
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">Traditional Software</th>
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">AI Systems</th>
                </tr></thead>
                <tbody className="divide-y divide-sky-100 dark:divide-sky-900/30">
                  {[
                    ["Success = no error thrown","Success = output is accurate, grounded, safe, and on-task"],
                    ["Same input → same output (deterministic)","Same input → different output each time (probabilistic) — need many runs"],
                    ["Bugs are binary (crash or not)","Quality is a spectrum — need continuous measurement"],
                    ["Monitoring: CPU, memory, latency, error rate","Monitoring: hallucination rate, groundedness, relevancy, cost per query, injection detection hits"],
                    ["Regressions caused by code changes","Regressions caused by code changes, prompt changes, model updates, data drift"],
                    ["Test once before deploy","Test continuously — vendor model updates happen silently"],
                  ].map(([traditional, ai]) => (
                    <tr key={traditional} className="bg-white dark:bg-gray-900/30">
                      <td className="p-3 text-gray-600 dark:text-gray-400">{traditional}</td>
                      <td className="p-3 text-sky-700 dark:text-sky-400">{ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { reason: "Quality is invisible without measurement", desc: "A model can be wrong 20% of the time and no alert fires. You need evals running continuously to catch this." },
                { reason: "Cost can spiral silently", desc: "An agent loop with no step limit can consume $10,000 in API credits overnight. Token-level cost attribution is essential." },
                { reason: "Regulatory mandate", desc: "SR 11-7 requires ongoing monitoring evidence. EU AI Act requires human oversight documentation. RBI guidelines expect audit trails." },
                { reason: "Model drift is external", desc: "Your vendor updates the underlying model. Your code didn't change. Your prompts didn't change. But behaviour changed. You need to detect this." },
              ].map((r) => (
                <div key={r.reason} className="rounded-2xl bg-sky-50/60 border border-sky-100 p-4 dark:bg-sky-900/20 dark:border-sky-800/40">
                  <div className="mb-1 font-bold text-sky-700 dark:text-sky-400 text-sm">{r.reason}</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ SECTION 2: THREE PILLARS ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">2</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Three Pillars: Traces, Metrics & Logs</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              {[
                { pillar: "Traces", icon: "🔍", color: "sky", desc: "The end-to-end journey of one request through your AI pipeline. A trace contains spans — each span is one step (embedding query, vector search, LLM call, tool call). Traces let you see the full picture: what went into the model, what came out, which step was slow.", finance: "A compliance check trace shows: user query → retrieval of 5 regulation chunks (which ones?) → LLM call (which prompt version? what temperature?) → guardrail check → response. If it's wrong, you can see exactly why." },
                { pillar: "Metrics", icon: "📊", color: "cyan", desc: "Quantitative measurements aggregated over time. Unlike traces (per-request), metrics tell you about trends: is accuracy declining? Is cost per query rising? Are injection attempts increasing?", finance: "Track: hallucination rate on regulatory Q&A (target <5%), average latency (target <3s), cost per compliance check ($), guardrail hit rate (injection attempts detected)." },
                { pillar: "Logs", icon: "📋", color: "blue", desc: "Structured records of events — prompts, responses, tool arguments, errors. More detail than metrics, more queryable than traces. In finance, logs are the audit trail. They must be stored securely, with PII redacted, and retained per policy.", finance: "Every prompt and response is logged to a SIEM (Sentinel, Splunk) with: user ID, app ID, timestamp, token count, cost, verdict (allowed/blocked), PII redacted text." },
              ].map((p) => (
                <div key={p.pillar} className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 dark:border-sky-800/40 dark:bg-sky-900/20">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-3xl">{p.icon}</span>
                    <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400">{p.pillar}</h3>
                  </div>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                  <div className="rounded-xl bg-white p-3 dark:bg-gray-800">
                    <p className="text-xs text-sky-700 dark:text-sky-400 italic">{p.finance}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trace anatomy */}
            <h3 className="mb-4 text-xl font-bold text-sky-700 dark:text-sky-400">Anatomy of an LLM Trace</h3>
            <div className="rounded-xl bg-gray-900 p-5 font-mono text-xs text-green-400 overflow-x-auto mb-4">
              <pre>{`Trace: compliance_check  [total: 2.3s | $0.0042 | verdict: allowed]
│
├── span: retrieve_context         [180ms]
│   ├── input: "What are RBI KYC requirements for NRIs?"
│   ├── filter: user_id=u123, classification≤confidential
│   ├── results: 5 chunks from rbi_master_direction_kyc.pdf
│   └── scores: [0.92, 0.88, 0.85, 0.81, 0.79]
│
├── span: prompt_assembly          [5ms]
│   ├── system: "You are a compliance assistant..."  (cached ✓)
│   ├── context: [chunk_1, chunk_2, chunk_3, chunk_4, chunk_5]
│   └── user: "What are RBI KYC requirements for NRIs?"
│
├── span: llm_call                 [1.9s | 2,840 tokens | $0.0038]
│   ├── model: claude-sonnet-4-6
│   ├── temperature: 0.1
│   └── output: "According to RBI Master Direction on KYC..."
│
├── span: guardrail_output         [95ms]
│   ├── pii_scan: no PII detected
│   ├── groundedness: 0.94 (pass)
│   └── verdict: allowed
│
└── span: log_audit                [12ms]
    ├── stored: siem_sentinel (redacted)
    └── cost_tag: team=compliance, app=kyc_assistant`}</pre>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 3: EVALUATION ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">3</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Evaluation (Evals) — The Core Discipline</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">Evals answer the question: "How good is this AI system on the tasks it actually needs to do?" Not in theory — measurably, on real-world inputs, at a specific point in time.</p>

            <h3 className="mb-4 text-xl font-bold text-sky-700 dark:text-sky-400">Types of Evals</h3>
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              {[
                { type: "Offline Evals (pre-deployment)", desc: "Run against a fixed dataset before any change goes to production. Fast, cheap, reproducible. Your first gate before a prompt change or model upgrade ships.", example: "500 financial Q&A pairs with known correct answers. Run nightly. Fail the CI build if accuracy drops >2%." },
                { type: "Online Evals (in production)", desc: "Sample live traffic and score it in real time (or near real time). Catches drift that offline evals miss — real user queries are always messier than your test set.", example: "Score 5% of live compliance queries for groundedness. Alert if 7-day rolling average drops below 0.85." },
                { type: "Human Evals", desc: "Domain experts review a sample of outputs and label them. The ground truth — but slow and expensive. Use for calibrating automated metrics and for high-stakes decisions.", example: "Weekly: compliance officers review 20 flagged outputs. Their labels feed back into the golden dataset." },
                { type: "LLM-as-Judge", desc: "Use a separate, more capable model to evaluate outputs at scale. Much faster and cheaper than human eval. Can be biased — always calibrate against human labels before trusting it.", example: "Use Claude Opus to score whether a credit analysis output correctly identifies all material risks. Calibrated on 200 human-labelled examples first." },
              ].map((e) => (
                <div key={e.type} className="rounded-2xl border border-sky-100 bg-sky-50/50 p-5 dark:border-sky-800/40 dark:bg-sky-900/20">
                  <div className="mb-2 font-bold text-sky-700 dark:text-sky-400">{e.type}</div>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">{e.desc}</p>
                  <p className="text-xs text-cyan-700 dark:text-cyan-400 italic">{e.example}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-4 text-xl font-bold text-sky-700 dark:text-sky-400">Key Evaluation Metrics</h3>
            <div className="mb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="bg-sky-100 dark:bg-sky-900/40">
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">Metric</th>
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">What It Measures</th>
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">Finance Use</th>
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">Tool</th>
                </tr></thead>
                <tbody className="divide-y divide-sky-100 dark:divide-sky-900/30">
                  {[
                    ["Groundedness / Faithfulness","Is the answer supported by the provided sources? No hallucinated facts.","Regulatory Q&A, compliance checks — wrong citations are dangerous","Azure AI Content Safety, RAGAS, DeepEval"],
                    ["Answer Relevancy","Does the answer actually address the question asked?","Advisor chatbot — off-topic responses frustrate clients","RAGAS, LangSmith evaluators"],
                    ["Context Recall","Did RAG retrieve all the information needed to answer correctly?","Missed a regulatory clause = material risk","RAGAS"],
                    ["Hallucination Rate","What fraction of outputs contain factual errors?","Credit analysis — a wrong number in a memo is a compliance failure","DeepEval HallucinationMetric, custom judges"],
                    ["Task Success Rate","Did the agent complete the task as specified?","Trade break investigation — did it correctly identify the break cause?","Custom eval harness with expected outcomes"],
                    ["Toxicity / Safety Score","Does the output contain harmful, biased, or inappropriate content?","Client-facing chatbots — regulatory and reputational risk","Azure AI Content Safety, Llama Guard, DeepEval"],
                    ["Latency P95","95th percentile response time — what slow users experience","Advisor tools need sub-3s; real-time trading systems need sub-500ms","APM tools, LangSmith, custom dashboards"],
                    ["Cost per Query","Token cost per request — for budget management and chargeback","High-volume compliance monitoring needs cost attribution per team","Gateway logs, LangSmith, Helicone"],
                  ].map(([metric,what,finance,tool]) => (
                    <tr key={metric} className="bg-white dark:bg-gray-900/30">
                      <td className="p-3 font-bold text-gray-900 dark:text-white text-xs">{metric}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">{what}</td>
                      <td className="p-3 text-sky-700 dark:text-sky-400 text-xs">{finance}</td>
                      <td className="p-3 text-gray-500 dark:text-gray-500 text-xs">{tool}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mb-4 text-xl font-bold text-sky-700 dark:text-sky-400">LLM-as-Judge Pattern</h3>
            <div className="rounded-xl bg-gray-900 p-5 font-mono text-xs text-green-400 overflow-x-auto">
              <pre>{`# LLM-as-Judge: evaluating compliance answer quality
import anthropic

JUDGE_PROMPT = """You are a senior compliance officer evaluating an AI assistant's response.

Question asked: {question}
AI Response: {response}
Source documents used: {sources}

Evaluate on these dimensions (score 1-5 each):
1. Accuracy: Is the information factually correct based on the sources?
2. Completeness: Are all material obligations mentioned?
3. Citation quality: Are specific regulation sections cited?
4. Risk: Does it identify any compliance risks?

Output JSON: {{"accuracy": X, "completeness": X, "citation": X, "risk": X, "overall": X, "issues": ["..."]}}"""

def evaluate_response(question, response, sources):
    client = anthropic.Anthropic()
    judge_response = client.messages.create(
        model="claude-opus-4-8",   # use best model as judge
        max_tokens=500,
        messages=[{
            "role": "user",
            "content": JUDGE_PROMPT.format(
                question=question,
                response=response,
                sources=sources
            )
        }]
    )
    return json.loads(judge_response.content[0].text)`}</pre>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 4: LANGSMITH ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">4</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">LangSmith — Deep Dive</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">LangSmith is LangChain's observability and evaluation platform. It integrates natively with LangChain and LangGraph but works with any Python code via its SDK. It is the most widely adopted LLM observability tool as of 2026.</p>

            <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { feature: "Tracing", desc: "Automatic tracing of every LangChain/LangGraph call. Manual tracing for any code via @traceable decorator. See full prompt, response, latency, cost, token count per span." },
                { feature: "Datasets", desc: "Upload golden test sets, capture production traces as examples, curate via annotation queues. Version-controlled. The foundation of all eval runs." },
                { feature: "Eval Runs", desc: "Run evaluators (built-in or custom LLM-as-judge) against a dataset. Compare two prompt versions. Track scores over time. Regression detection built in." },
                { feature: "Annotation Queues", desc: "Route interesting or edge-case traces to human reviewers (domain experts, compliance officers). Their labels feed back into datasets automatically." },
                { feature: "Monitoring", desc: "Production dashboard: live metrics, charts for latency/cost/quality over time, alert rules, feedback integration." },
                { feature: "Prompt Hub", desc: "Centralised prompt management — versioning, tags, pull prompts by version in code. Integrates with eval runs (test prompt v3 vs v4)." },
              ].map((f) => (
                <div key={f.feature} className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4 dark:border-sky-800/40 dark:bg-sky-900/20">
                  <div className="mb-1 font-bold text-sky-700 dark:text-sky-400 text-sm">{f.feature}</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-3 text-lg font-bold text-sky-700 dark:text-sky-400">Setup & Integration</h3>
            <div className="rounded-xl bg-gray-900 p-5 font-mono text-xs text-green-400 overflow-x-auto mb-4">
              <pre>{`# 1. Install and configure
pip install langsmith
export LANGCHAIN_API_KEY="ls__..."
export LANGCHAIN_TRACING_V2="true"
export LANGCHAIN_PROJECT="finance-compliance-bot"

# 2. Automatic tracing — LangChain code traces with zero changes
from langchain_anthropic import ChatAnthropic
llm = ChatAnthropic(model="claude-sonnet-4-6")
response = llm.invoke("Summarise this 10-K...")  # → auto-traced

# 3. Manual tracing for any code
from langsmith import traceable

@traceable(name="compliance_check", tags=["compliance", "kyc"])
def check_kyc_compliance(client_data: dict) -> dict:
    # your custom logic — fully traced
    result = run_kyc_pipeline(client_data)
    return result

# 4. Eval run — compare prompt versions
from langsmith.evaluation import evaluate

results = evaluate(
    target=my_rag_pipeline,          # function to evaluate
    data="kyc-golden-set-v3",        # dataset name in LangSmith
    evaluators=[
        groundedness_evaluator,
        answer_relevancy_evaluator,
    ],
    experiment_prefix="kyc-prompt-v4-vs-v3",
)`}</pre>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 5: AZURE ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">5</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Azure AI Observability</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">Azure provides a layered observability stack for AI — from built-in safety evaluators in AI Foundry to enterprise-grade monitoring via Azure Monitor. Most Indian and global banks running on Azure use this stack.</p>
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  layer: "Azure AI Foundry — Built-in Evaluators",
                  desc: "AI Foundry (formerly Azure AI Studio) includes built-in evaluators you run directly on your data, no code needed.",
                  items: ["Groundedness — is the response supported by the provided context?","Coherence — is the response logically structured and clear?","Fluency — is the language natural and well-formed?","Relevance — does the response address the query?","Similarity — how close to a reference answer?","Safety evaluators — violence, self-harm, sexual content, hate — all scored by severity"],
                },
                {
                  layer: "Azure Monitor + Application Insights",
                  desc: "Standard Azure monitoring extended for LLM workloads. Captures custom metrics, traces, and logs from your AI gateway.",
                  items: ["Custom metrics: emit token_count, cost, quality_score as App Insights custom events","Distributed tracing: correlate LLM spans with upstream HTTP requests via X-Correlation-ID","Alert rules: fire when hallucination_rate > 0.1 or latency_p95 > 5s","Workbooks: pre-built dashboards for LLM cost and quality trends","Log Analytics: KQL queries over all prompt/response logs (PII redacted)"],
                },
                {
                  layer: "Azure AI Content Safety Monitoring",
                  desc: "Real-time monitoring of content safety decisions across all apps using your gateway.",
                  items: ["Prompt Shield hit rate — how often injection attacks are detected","Harm category distribution — which categories are being triggered","False positive tracking — which legitimate queries are being blocked","Trend alerts — spike in injection attempts may indicate active attack"],
                },
                {
                  layer: "Microsoft Purview — Data Lineage for AI",
                  desc: "Tracks where data flows through your AI system — essential for compliance and right-to-be-forgotten.",
                  items: ["Sensitivity label propagation — if source doc is Confidential, the RAG chunk is Confidential","Data lineage: trace which source documents fed which model responses","DLP integration — alert when data classified as MNPI reaches an unauthorised AI app","Audit reports for regulators: where did this client's data go?"],
                },
              ].map((layer) => (
                <div key={layer.layer} className="rounded-2xl border border-sky-100 bg-sky-50/50 p-5 dark:border-sky-800/40 dark:bg-sky-900/20">
                  <h3 className="mb-2 font-bold text-sky-700 dark:text-sky-400">{layer.layer}</h3>
                  <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">{layer.desc}</p>
                  <ul className="space-y-1">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-gray-900 p-5 font-mono text-xs text-green-400 overflow-x-auto">
              <pre>{`# Azure AI Foundry evaluation — Python SDK
from azure.ai.evaluation import evaluate, GroundednessEvaluator

groundedness_eval = GroundednessEvaluator(
    model_config={
        "azure_endpoint": os.environ["AZURE_OPENAI_ENDPOINT"],
        "azure_deployment": "gpt-4o",
    }
)

results = evaluate(
    data="kyc_test_cases.jsonl",          # dataset with question/answer/context
    evaluators={"groundedness": groundedness_eval},
    output_path="./eval_results.json",
    azure_ai_project={                     # log results to AI Foundry
        "subscription_id": "...",
        "resource_group_name": "...",
        "project_name": "finance-ai-platform",
    },
)`}</pre>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 6: AWS ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">6</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">AWS Bedrock Observability</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              {[
                { service: "Amazon Bedrock Model Invocation Logging", desc: "Enable per-model-deployment. Logs every request/response to S3 or CloudWatch Logs. Configurable — log full prompts, or metadata only (for PII-sensitive workloads). Queryable via Athena for cost analysis." },
                { service: "AWS CloudWatch — LLM Metrics", desc: "Custom metrics from Bedrock: InvocationLatency, InputTokenCount, OutputTokenCount. Build dashboards and alarms. Cost alert: alarm when daily_tokens > budget. Latency alert: alarm when p95 latency > 4s." },
                { service: "AWS X-Ray — Distributed Tracing", desc: "Trace requests across Lambda → Bedrock → DynamoDB → S3 in one trace. See the full request path including the LLM call. Identify which part of your agent pipeline is slow or failing." },
                { service: "Amazon SageMaker Clarify", desc: "Bias and explainability monitoring for ML models (including fine-tuned models deployed on SageMaker). Monitors for data drift and model drift over time. More relevant for fine-tuned/traditional ML models than Bedrock-hosted LLMs." },
                { service: "Amazon Bedrock Guardrails Monitoring", desc: "Bedrock Guardrails (AWS's content filtering layer) provides built-in metrics: how many requests triggered PII filters, topic restrictions, grounding checks. Dashboard in AWS console, metrics in CloudWatch." },
                { service: "AWS Security Lake — AI Audit Trail", desc: "Centralise Bedrock invocation logs, CloudTrail API calls, and GuardDuty findings into Security Lake (OCSF format). Full audit trail for compliance. Query with Athena. Forward to third-party SIEM if needed." },
              ].map((s) => (
                <div key={s.service} className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4 dark:border-sky-800/40 dark:bg-sky-900/20">
                  <div className="mb-1 font-bold text-sky-700 dark:text-sky-400 text-sm">{s.service}</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ SECTION 7: GCP ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">7</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">GCP Vertex AI Observability</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              {[
                { service: "Vertex AI Evaluation Service", desc: "Built-in evaluators for Gemini models and custom models: summarisation quality, QA accuracy, grounding, text generation quality. Run against datasets stored in BigQuery. Results stored in BigQuery for trend analysis." },
                { service: "Cloud Trace", desc: "Distributed tracing for all GCP services. Capture LLM call latency, token counts as custom attributes on spans. Integrate with OpenTelemetry for vendor-neutral instrumentation." },
                { service: "Cloud Monitoring + Cloud Logging", desc: "Emit custom metrics (token counts, quality scores, cost) from your Vertex AI apps. Build dashboards. Set alerting policies. Cloud Logging stores all LLM request/response logs — query with log-based metrics." },
                { service: "Vertex AI Model Monitoring", desc: "Monitor deployed models for training-serving skew and prediction drift. Most relevant for fine-tuned models and traditional ML models deployed on Vertex. Gemini API monitoring is handled separately via Cloud Monitoring." },
                { service: "BigQuery for Eval Storage", desc: "Store all eval results, trace data, and quality metrics in BigQuery. Run SQL analysis over months of eval history. Create Looker dashboards for business-facing quality reporting. Cost-effective at scale." },
                { service: "GCP Audit Logs (Cloud Audit Logs)", desc: "All Vertex AI API calls are captured in Admin Activity and Data Access audit logs. Essential for compliance: who called which model, with what data, when. Forward to Chronicle SIEM for security analysis." },
              ].map((s) => (
                <div key={s.service} className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4 dark:border-sky-800/40 dark:bg-sky-900/20">
                  <div className="mb-1 font-bold text-sky-700 dark:text-sky-400 text-sm">{s.service}</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ SECTION 8: OPEN SOURCE ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">8</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Open-Source & Platform-Agnostic Tools</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <div className="mb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="bg-sky-100 dark:bg-sky-900/40">
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">Tool</th>
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">What It Is</th>
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">Hosting</th>
                  <th className="p-3 text-left font-bold text-sky-800 dark:text-sky-300">Best For Finance</th>
                </tr></thead>
                <tbody className="divide-y divide-sky-100 dark:divide-sky-900/30">
                  {[
                    ["Langfuse","Open-source LangSmith alternative. Tracing, datasets, evals, prompt management, human annotation.","Self-host (Docker/Kubernetes) or cloud","Firms that can't send prompt data to a third-party SaaS. Full data sovereignty."],
                    ["Weights & Biases / Weave","W&B is the ML experiment tracker. Weave is their new LLM observability layer — traces, evals, datasets.","W&B cloud or self-host","Teams already using W&B for ML model training — natural extension to LLM monitoring"],
                    ["Arize Phoenix","Open-source LLM observability and eval platform. Strong on embedding drift detection and RAG evaluation.","Self-host or Arize cloud","Detecting embedding drift in RAG pipelines; visualising retrieval quality over time"],
                    ["Helicone","Lightweight LLM proxy with built-in analytics. One-line integration — change your API base URL.","Cloud or self-host","Quick setup; good for teams that want immediate cost and latency visibility with minimal code"],
                    ["OpenTelemetry for AI","Emerging standard semantic conventions for LLM observability spans (gen_ai.* attributes). Vendor-neutral.","Instrument once, export anywhere","Long-term: instrument code once and ship to Datadog, Grafana, Jaeger, or any OTEL-compatible backend"],
                    ["Promptfoo","Eval and red-team framework. YAML-driven test cases. CI/CD integration.","Open source, run anywhere","Security-focused evals, regression testing in CI — see also Module 6 (Security)"],
                  ].map(([tool,what,host,finance]) => (
                    <tr key={tool} className="bg-white dark:bg-gray-900/30">
                      <td className="p-3 font-bold text-gray-900 dark:text-white">{tool}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">{what}</td>
                      <td className="p-3 text-gray-500 dark:text-gray-400 text-xs">{host}</td>
                      <td className="p-3 text-sky-700 dark:text-sky-400 text-xs">{finance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 dark:bg-amber-900/20 dark:border-amber-700/40">
              <p className="font-bold text-amber-800 dark:text-amber-300 mb-2">Self-Host Decision for Finance</p>
              <p className="text-sm text-amber-900 dark:text-amber-200">If your prompts contain client data, MNPI, or anything classified above Internal — use Langfuse or Phoenix self-hosted. Sending those prompts to a third-party SaaS (LangSmith, Helicone) adds a data residency risk you need a DPA and legal review to accept. The self-host path gives you all the features with full data sovereignty.</p>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 9: FINANCE-SPECIFIC ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">9</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Finance-Specific Requirements</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 dark:border-sky-800/40 dark:bg-sky-900/20">
                <h3 className="mb-4 font-bold text-sky-700 dark:text-sky-400">PII in Logs — Non-Negotiable</h3>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">Every prompt and response that goes through your AI system is a potential log. Logs are stored, indexed, and accessed by operations teams, vendors, and regulators. PII must be redacted before logging.</p>
                <div className="rounded-xl bg-gray-900 p-4 font-mono text-xs text-green-400 overflow-x-auto">
                  <pre>{`# Redact before logging — use Presidio
from presidio_analyzer import AnalyzerEngine
from presidio_anonymizer import AnonymizerEngine

def redact_for_logging(text: str) -> str:
    results = analyzer.analyze(text, language="en")
    return anonymizer.anonymize(
        text=text,
        analyzer_results=results,
    ).text

# In your gateway — redact prompt BEFORE logging
def audit_log(prompt, response, metadata):
    log_entry = {
        "prompt": redact_for_logging(prompt),
        "response": redact_for_logging(response),
        "metadata": metadata,
        "timestamp": datetime.utcnow().isoformat(),
    }
    siem_client.send(log_entry)`}</pre>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "SR 11-7 Evidence Package", desc: "Model validators need: eval results over time (accuracy, groundedness, task success rate), red-team reports, change log (every prompt/model change), monitoring alerts and responses, ongoing performance metrics. Your observability system generates most of this automatically — design it with validators in mind." },
                  { label: "Audit Trail Structure", desc: "Every AI-assisted decision must be traceable: which model made it, on which data, using which prompt version, reviewed by which human, at what timestamp. Retention: 7 years minimum for most financial records." },
                  { label: "Cost Attribution (Chargeback)", desc: "Tag every LLM call with: team, app, use_case, data_classification. Report monthly cost by team. This creates accountability — teams that build expensive agent loops feel the cost. Standard in mature AI programs." },
                  { label: "Information Barrier Monitoring", desc: "If your firm has information barriers (investment banking vs trading), AI logs must confirm no cross-wall data access occurred. Tag every query with the side it originated from; alert if a response contains data from the other side." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-sky-50/50 border border-sky-100 p-4 dark:bg-sky-900/20 dark:border-sky-800/40">
                    <div className="font-bold text-sky-700 dark:text-sky-400 text-sm mb-1">{item.label}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════ SECTION 10: DASHBOARD ══════ */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-lg">10</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Production Monitoring Dashboard</h2>
          </div>
          <div className="rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/80">
            <p className="mb-6 text-gray-700 dark:text-gray-300">Every AI system in production needs a dashboard. Here are the panels every financial AI monitoring dashboard should have.</p>
            <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { panel: "Quality Over Time", metrics: "Groundedness rate, task success rate, hallucination rate — 7-day rolling average with trend line. Alert threshold line marked.", alert: "Alert if groundedness drops below 0.85 for 2 consecutive days" },
                { panel: "Cost & Volume", metrics: "Daily token spend by team/app, cost per query, total monthly spend vs budget, query volume trend.", alert: "Alert if daily cost > 120% of 7-day average" },
                { panel: "Latency Distribution", metrics: "P50, P90, P95, P99 latency. Breakdown by step (retrieval, LLM call, guardrail). Trend over time.", alert: "Alert if P95 latency > 5 seconds for 10+ minutes" },
                { panel: "Safety & Security", metrics: "Guardrail hit rate, injection detection rate, PII detection rate, off-topic refusal rate. Spike detection.", alert: "Alert on any spike >3 sigma above baseline — may indicate active attack" },
                { panel: "Human Review Queue", metrics: "Items pending human review, SLA compliance (reviewed within 48h), annotation throughput, disagreement rate with automated scores.", alert: "Alert if queue depth > 200 items (review team capacity)" },
                { panel: "Drift Detection", metrics: "Track 10 canonical test questions weekly. Plot score trends. Model vendor updates show up here before users notice.", alert: "Alert if any canonical question score drops >15% from baseline" },
              ].map((p) => (
                <div key={p.panel} className="rounded-2xl border border-sky-100 bg-sky-50/50 p-5 dark:border-sky-800/40 dark:bg-sky-900/20">
                  <div className="mb-2 font-bold text-sky-700 dark:text-sky-400">{p.panel}</div>
                  <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">{p.metrics}</p>
                  <p className="text-xs text-amber-700 dark:text-amber-400 italic">{p.alert}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 p-6 text-white">
              <p className="font-bold text-lg mb-2">The Maturity Ladder</p>
              <div className="grid gap-3 md:grid-cols-4">
                {[
                  { level: "Level 1", desc: "Basic logging — prompts and responses stored somewhere." },
                  { level: "Level 2", desc: "Metrics — latency and cost tracked per app." },
                  { level: "Level 3", desc: "Quality evals — automated scoring against golden sets, run in CI." },
                  { level: "Level 4", desc: "Full observability — traces, drift detection, human review queues, chargeback, SR 11-7 evidence package generated automatically." },
                ].map((l) => (
                  <div key={l.level} className="rounded-xl bg-white/20 p-3">
                    <div className="font-bold text-sm mb-1">{l.level}</div>
                    <p className="text-sky-100 text-xs">{l.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-between rounded-3xl border border-sky-200/60 bg-white/70 p-6 shadow-xl backdrop-blur-sm dark:border-sky-700/40 dark:bg-gray-800/70">
          <Link href="/module7" className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-medium text-sky-700 shadow-sm transition-all hover:bg-sky-50 dark:border-sky-700 dark:bg-gray-800 dark:text-sky-300">
            ← Module 07: AI Frontier
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105">
            Course Home →
          </Link>
        </div>
      </main>
    </div>
  );
}
