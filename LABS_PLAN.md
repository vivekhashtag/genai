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
