# Hands-On Labs — Implementation Plan

**Status:** Planned — not yet built  
**Priority:** High — biggest remaining gap in the course  
**Last Updated:** 2026-10-31

---

## Core Concept: One Capstone, Built Incrementally

Not isolated exercises — one coherent project built layer by layer across 8 labs. By Lab 7, learners have a complete, production-grade financial AI system they built themselves.

**The Capstone:** "Financial Intelligence Assistant"  
A RAG-powered, agent-augmented, guardrailed, observable AI system for financial document analysis.

---

## Lab Overview

| Lab | Module | What You Build | Time | Platform |
|---|---|---|---|---|
| Lab 0 | Module 0 | Document Preprocessor (NLP pipeline on SEBI circular) | 45 min | Google Colab |
| Lab 1 | Module 1 | Model Comparison Bench (Claude vs GPT-4o vs Gemini) | 30 min | Claude Console + Playgrounds |
| Lab 2 | Module 2 | Financial Prompt Library (5 templates + caching) | 60 min | Claude API + Colab |
| **Lab 3** | **Module 3** | **Regulatory Document RAG** ← Start here | **90 min** | **Colab + Chroma + Anthropic** |
| Lab 4 | Module 4 | Financial Research Agent (ReAct + 3 tools + HITL) | 90 min | Colab + LangGraph + Anthropic |
| Lab 5 | Module 5 | Bias Audit + Model Card (governance documentation) | 60 min | Colab + SHAP + scikit-learn |
| Lab 6 | Module 6 | Security Guardrail Layer (Presidio + Garak + LLM Guard) | 75 min | Colab + Presidio + Garak |
| Lab 7 | Module 8 | Full Observability Stack (Langfuse + evals + dashboard) | 90 min | Langfuse Docker + DeepEval |

**Build order:** Lab 3 → Lab 4 → Lab 6 → Lab 7 → Labs 0, 1, 2, 5

---

## Detailed Lab Specs

### Lab 0 — NLP Foundations: Document Preprocessor
- Load a real SEBI circular or RBI master direction (PDF)
- Run text cleaning, tokenisation, named entity recognition (organisations, amounts, dates)
- Visualise TF-IDF vectors — which terms are most distinctive?
- Output: clean, structured text ready for Lab 3

### Lab 1 — Foundation Models: Model Comparison Bench
- Send the same financial analysis task to Claude, GPT-4o, and Gemini
- Compare outputs: accuracy, tone, hallucination rate, citation quality
- Run the same prompt at temperature 0 vs 0.7 — observe variance
- Output: understanding of which model fits which finance task

### Lab 2 — Prompt Engineering: Financial Prompt Library
- Build 5 production-ready prompt templates: earnings summary, credit analysis, regulatory Q&A, risk flag extraction, executive brief
- Compare zero-shot vs few-shot vs CoT on a credit memo task
- Set up prompt caching — measure token cost before/after
- Output: reusable prompt library (JSON file)

### Lab 3 — Embeddings & RAG: Regulatory Document RAG ⭐ PRIORITY
- Chunk and embed 3 real documents: RBI circular, SEBI guideline, company 10-K
- Load into ChromaDB (local, no paid vector DB needed)
- Build a query interface: ask questions, get grounded answers with citations
- Test retrieval quality: fixed-size vs sentence chunking comparison
- Output: working RAG system on real financial documents

### Lab 4 — AI Agents: Financial Research Agent
- Add 3 tools to the Lab 3 RAG: `search_documents`, `calculate_ratio`, `summarise_section`
- Implement ReAct loop — agent decides which tool to call
- Test: "What is HDFC Bank's current ratio and how does it compare to the RBI minimum?"
- Add basic human-in-the-loop checkpoint for high-stakes answers
- Output: agent layer on top of Lab 3

### Lab 5 — Governance: Bias Audit & Model Card
- Run bias audit on a mock credit scoring dataset (dataset provided)
- Calculate demographic parity and equal opportunity metrics
- Generate SHAP values for feature importance
- Fill out a model card template for the financial assistant
- Output: governance documentation for the system

### Lab 6 — Security: Guardrail Layer
- Add Presidio PII detection to the input pipeline (test with realistic client data)
- Implement spotlighting on retrieved documents
- Run Garak against your own system endpoint — see what attacks succeed
- Add injection detection check using LLM Guard
- Output: secured version of the Lab 4 agent

### Lab 7 — Observability: Full Observability Stack
- Set up Langfuse locally (Docker — one command)
- Instrument the Lab 4/6 agent — every trace visible in Langfuse dashboard
- Build a golden test set of 20 financial Q&A pairs
- Run eval suite: groundedness score, latency, cost per query
- Output: monitored, evaluated, production-ready system

---

## Site Structure

```
/labs                    — Labs Hub page (overview of all 8 labs)
/labs/lab0               — NLP Preprocessor
/labs/lab1               — Model Comparison Bench
/labs/lab2               — Financial Prompt Library
/labs/lab3               — Regulatory Document RAG  ← build first
/labs/lab4               — Financial Research Agent
/labs/lab5               — Governance Audit
/labs/lab6               — Security Guardrail Layer
/labs/lab7               — Full Observability Stack
```

Each lab page contains:
- What you'll build (screenshot/diagram)
- Prerequisites (earlier labs + API keys needed)
- Time estimate (honest)
- Concepts practised (linking back to module sections)
- Open in Colab button
- Step-by-step walkthrough (inline on page)
- Expected output (what correct looks like)
- Stretch goals (2-3 optional extensions)
- Common errors (top 3 + fixes)

---

## Build Progress

- ✅ `/app/labs/page.tsx` — Labs Hub (amber theme `from-amber-500 to-yellow-500`), linked from homepage banner; homepage stats now show 8 Labs
- ✅ `/app/labs/lab3/page.tsx` + `public/labs/lab3_regulatory_rag.ipynb`
- ✅ `/app/labs/lab4/page.tsx` + `public/labs/lab4_research_agent.ipynb` (6 providers: Ollama, Groq, Gemini, OpenRouter, OpenAI, Anthropic)
- ✅ `/app/labs/lab6/page.tsx` + `public/labs/lab6_security_guardrails.ipynb` (in-memory docs; Presidio + custom Indian PII recognizers, spotlighting, rules + optional LLM Guard, attack suite with ablation; garak left as stretch because its REST config format varies by version)
- ✅ `/app/labs/lab7/page.tsx` + `public/labs/lab7_observability_evals.ipynb` (own Trace/span class, 20-question golden set from the SEBI memo, LLM-judge groundedness, p50/p95/cost gates, k=4 vs k=1 regression test, optional Langfuse via v3 SDK). Deviations from the original spec: DeepEval is a stretch goal instead of core (the hand-built judge teaches the mechanism with no extra dependency); Langfuse is optional with Cloud and Docker paths because self-hosting is not a one-command setup. Token and cost figures are estimates.
- ✅ Labs 0, 1, 2 and 5 built using a shared `app/labs/_components/LabPage.tsx` (Labs 3, 4, 6, 7 still use their own standalone page files and could be migrated to it).
  - Lab 0 (`lab0_document_preprocessor.ipynb`): cleans/NER/TF-IDF on two real SEBI PDFs (adds `public/lab-data/sebi-retail-algo-trading-circular-feb2025.pdf`); no API key.
  - Lab 1 (`lab1_model_comparison.ipynb`): fictional results note with a trap question, fact/honesty/invention scoring, temperature variability; includes a no-code route.
  - Lab 2 (`lab2_prompt_library.ipynb`): five templates via `string.Template`, zero/few-shot/CoT on 8 credit cases with a hidden house rule, caching demo (Anthropic/OpenAI only), JSON library.
  - Lab 5 (`lab5_bias_audit_model_card.ipynb`): synthetic data with planted bias (seed 42), 80% rule + equal-opportunity gap, SHAP (permutation fallback), reweighing, model card. Deviation: data generated in-notebook rather than shipped as a CSV.
- ⏳ Remaining: commit/push so Colab links work; migrate Labs 3/4/6/7 to the shared component (optional); fix stale CLAUDE.md sections.
- Colab links use `github/vivekhashtag/genai/blob/main/public/labs/...` (git root is genai-website). They 404 until the files are committed and pushed.
- Lab pages 0–7 are linked from the hub but not built yet (they 404 until created)

## Explanation Standard (decided)

Every exercise in every lab must be explained well enough to be followed without outside help. For each exercise, the lab page and the Colab notebook include:

1. **Why we do this:** the goal, and the module concept it practises (link to the module section).
2. **What the code does:** a plain-language walkthrough of each block, written before the code, not just comments inside it.
3. **Key terms:** any new term defined on first use.
4. **Expected output:** what correct looks like, and what to do if yours differs.
5. **What to notice:** one or two observations to take away (e.g. why a chunk size changed retrieval quality).
6. **Finance link:** why it matters in a regulated setting.

Starter code with `# YOUR CODE HERE` blocks must carry a hint for each blank, plus a collapsible full solution.

---

## Provider Options (decided)

Labs must work with any of: **Ollama** (local, free), **Groq** (hosted free tier, OpenAI-compatible API), **Anthropic Claude** (paid). Design rule: provider is one config cell at the top of each Colab notebook (a small `get_llm()` wrapper), and the rest of the code is provider-agnostic. Embeddings use Chroma's local default model so no key is needed. Agent labs (4, 6, 7) need a model with tool-calling support, so verify the chosen Ollama/Groq model supports it and name a tested default for each. Lab 1 is multi-provider by design.

---

## Lab 3 Public Documents (sources to record on the lab page)

Use only publicly published documents, and record the exact URL and download date for each when the files are fetched. Not yet downloaded or verified.

| Role | Candidate | Publisher |
|---|---|---|
| RBI circular | An RBI Master Direction or circular on digital lending / IT governance / model risk | rbi.org.in (Notifications) |
| SEBI guideline | A SEBI circular on AI/ML usage or cybersecurity framework | sebi.gov.in (Legal > Circulars) |
| Company report | Annual report of a listed Indian bank (e.g. HDFC Bank), which includes CRAR / LCR disclosures | Bank investor relations page |

Decision: use an Indian bank annual report instead of a US 10-K, and change the Lab 4 test question from "current ratio" to CRAR or LCR vs the RBI minimum.

---

## Starter Resources to Prepare

- **3 pre-selected public documents** (RBI circular, SEBI guideline, public company annual report) — stored in `/public/lab-data/`
- **Google Colab notebooks** — hosted on GitHub repo, linked from each lab page
- **Starter code** — pre-filled with setup + `# YOUR CODE HERE` blocks
- **API key setup guide** — one page explaining how to get Claude/OpenAI keys for free tier

---

## Linking Strategy

- Add **"Try the Lab →"** callout box at end of each module page
- Add **"Labs"** link to course homepage navigation
- Update homepage stats: "9 Modules · 8 Labs · Finance-Focused"

---

## Next Session: What to Build First

1. Create `/app/labs/page.tsx` — Labs Hub overview page
2. Create `/app/labs/lab3/page.tsx` — RAG lab (most important)
3. Create Colab notebook for Lab 3
4. Add "Try Lab 3 →" callout to end of Module 3 page
5. Repeat for Lab 4 (Agent)

---

*This document is the planning reference — update it as labs are built.*
