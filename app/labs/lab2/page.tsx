import LabPage, { Exercise } from "../_components/LabPage";

const exercises: Exercise[] = [
  {
    num: "0",
    title: "Choose your provider",
    why: "All exercises share one helper, ask(system, user), so the provider is a single setting.",
    does: "Defines chat_with(...), which returns the reply plus token usage for six providers, and ask(...), which returns just the text. You set PROVIDER and enter its key when asked.",
    expected: "A short greeting. An error means a wrong key, a retired model name, or, for Ollama, a server that is not running.",
    notice:
      "The caching exercise needs Anthropic or OpenAI. Every other exercise works with any provider. Model names and limits change, so edit PROVIDERS if a model is rejected.",
    code: `PROVIDER = "groq"   # ollama | groq | gemini | openrouter | openai | anthropic
def ask(system, user, temperature=0.0):
    return chat_with(PROVIDER, system, user, temperature)[0]`,
  },
  {
    num: "1",
    title: "Build the template library",
    why: "A template with named blanks such as $text turns a one-off prompt into a reusable tool. Storing it with a version and an owner makes it auditable (Module 2, section 6).",
    does: "The library LIB is a dictionary. Each entry has a version, an owner, a system prompt, a template with $variables and the list of variables it needs. Three templates are provided: earnings summary, credit analysis and regulatory Q&A. You write the risk-flag template (JSON only), the executive-brief template (at most 120 words, three bullets, a 'Decision needed:' line) and render, which fills a template and refuses to run if a variable is missing.",
    terms: [
      "System prompt: standing instructions that set the model's role and rules.",
      "Template variable: a named blank such as $text, replaced when the template is used.",
      "string.Template: Python's tool for filling $name blanks. JSON braces in a template need no escaping with it.",
    ],
    expected:
      "'library OK' with five template names, the filled-in Q&A prompt, and a clear error for the missing text variable.",
    notice:
      "Failing loudly on a missing variable prevents the worst template bug: a prompt sent with $text still in it.",
    finance:
      "version and owner mean that when an output is questioned you can say which wording produced it and who is accountable for it (Module 5, section 2).",
    code: `LIB["risk_flags"] = {
    "version": "1.0", "owner": "risk", "vars": ["text"],
    "system": "",     # YOUR CODE HERE
    "template": "",   # YOUR CODE HERE: JSON list of {flag, severity, evidence}; include $text
}
def render(name, **values):
    # YOUR CODE HERE: raise ValueError for a missing variable;
    # return (system_prompt, user_prompt)
    raise NotImplementedError`,
  },
  {
    num: "2",
    title: "Run all five templates",
    why: "A template is only trusted once it has been run on realistic input. We run each one on a small sample and check that the output has the right shape.",
    does: "SAMPLES holds a short fictional or public input for each template, and run_template renders and runs one. The risk-flag template must return valid JSON, so you write parse_json, which tolerates the code fences models often add.",
    expected:
      "Five outputs. The risk flags should parse as a JSON list with the keys flag, severity and evidence. The brief should be close to 120 words or fewer, and the Q&A answer should quote the 'solely responsible' wording.",
    notice:
      "Check each output against its instructions. Which template does the model follow least reliably? That is the one to tighten first and to add a test for. Models sometimes break format rules, so never pass model output into other code without validating it.",
    finance:
      "The Q&A template's exact 'Not found' reply gives an auditable way to say the document does not say. Try it with a question the context cannot answer.",
    code: `def parse_json(text: str):
    # YOUR CODE HERE: remove optional code fences around \`text\`,
    # then return json.loads(...)
    raise NotImplementedError`,
  },
  {
    num: "3",
    title: "Zero-shot, few-shot or chain-of-thought?",
    why: "You can often make a model better at a task by how you ask. You test three styles on one credit-rating task and measure accuracy, length and speed (Module 2, section 3).",
    does: "Eight fictional borrowers are rated LOW, MEDIUM or HIGH from two numbers, DSCR (cash available divided by debt payments due) and debt to EBITDA (leverage). The bank's house policy is described in words, with no numbers. You write three prompt builders: zero-shot (question only), few-shot (plus five solved examples) and chain-of-thought (reason step by step, then a final RATING line).",
    terms: [
      "Zero-shot: just the question and the policy in words.",
      "Few-shot (in-context learning): the same plus a few solved examples.",
      "Chain-of-thought: asking the model to reason step by step before answering.",
    ],
    expected:
      "Three lines. Usually few-shot scores best because the examples reveal thresholds the policy only describes, chain-of-thought produces far more output tokens and is slower and dearer, and zero-shot is cheapest but least reliable. Strong models may score well on all three.",
    notice:
      "More reasoning is not always better: if the numeric rule were in the prompt, all three styles would likely score well and the cheapest would win. With only eight cases, one wrong answer moves accuracy by 12.5 points, so treat differences of one or two cases as noise. The notebook reveals the hidden rule after you run the test.",
    finance:
      "A rating produced this way is advisory. In a real process the numeric policy should be applied by code, and the model should explain or draft, not decide (Module 4, section 8).",
    code: `def few_shot(case):
    # YOUR CODE HERE: POLICY + each solved example in EXAMPLES
    # + the new borrower; ask for one word
    raise NotImplementedError`,
  },
  {
    num: "4",
    title: "Prompt caching: what does it save?",
    why: "Many finance prompts start with the same long material, such as a policy or a filing, followed by a short changing question. Prompt caching lets the provider remember the long shared start so you pay less, and wait less, for repeats.",
    does: "Builds a long shared context from two real SEBI documents, then asks three different short questions against it and records how many input tokens were served from cache. You write cached_share, the fraction of input tokens served from cache on the later calls. With Anthropic you mark the shared part (the notebook does this) and the first call writes the cache. OpenAI caches automatically for long enough prompts that start identically. Other providers are skipped.",
    terms: [
      "Prompt caching: the provider remembers a repeated prompt prefix and charges less for it.",
      "Cached tokens: input tokens served from that memory instead of processed again.",
    ],
    expected:
      "On Anthropic, call 1 shows cached=0 (it wrote the cache) and calls 2 and 3 show a large cached figure. On OpenAI the later calls show cached tokens if the prompt was long enough. If you see cached=0 everywhere, the prompt may be below the model's minimum length, the calls may have been too far apart, or the provider may not report it.",
    notice:
      "The answers are the same with or without caching, and only cost and speed change. Caches apply above a minimum prompt length that varies by model and expire after a short time. The first call can cost slightly more while the cache is written. Enter your provider's current prices in PRICE_IN_PER_M and CACHED_PRICE_FRACTION, because prices and discount sizes change.",
    finance:
      "Caching a long policy or filing across many analyst questions is an easy cost control, but check the provider's data-retention terms for cached content before using it with confidential material.",
    code: `def cached_share(usages):
    # YOUR CODE HERE: ignore the first call; return
    # sum(cached) / sum(in) over the remaining calls
    raise NotImplementedError`,
  },
  {
    num: "5",
    title: "Save and reload the library",
    why: "The library is only useful if others can use the same versions. A JSON file can live in a shared repository, be reviewed like code, and be loaded by any application.",
    does: "You write save_library and load_library with json.dump and json.load. The cell saves the library, reloads it, checks it is identical, and renders one template from the reloaded copy to prove it still works.",
    expected: "'round-trip identical: True', the five template names, and the start of a rendered prompt.",
    notice:
      "Open prompt_library.json in a text editor to see exactly what a teammate would receive. Treat a prompt change like a code change: bump the version, run the Exercise 2 checks, and record who approved it.",
    code: `def save_library(path):
    # YOUR CODE HERE: write LIB to path as readable utf-8 JSON
    raise NotImplementedError

def load_library(path):
    # YOUR CODE HERE
    raise NotImplementedError`,
  },
];

export default function Lab2() {
  return (
    <LabPage
      number="2"
      title="Financial Prompt Library"
      intro="Build five reusable, versioned prompt templates for finance, test which prompting style works best on a credit task, measure what prompt caching saves, and save it all as a JSON library your team can reuse."
      tags={["60 min", "5 templates", "Few-shot vs CoT", "Prompt caching", "Module 2"]}
      notebookFile="lab2_prompt_library.ipynb"
      build="Five templates (earnings summary, credit analysis, regulatory Q&A, risk-flag extraction, executive brief), each with a version and owner. You run them on realistic samples, compare zero-shot, few-shot and chain-of-thought on a credit-rating task, measure prompt caching on a long shared context, and save the whole library as JSON."
      flow={["Templates", "Render + validate", "Run on samples", "Compare styles", "Measure caching", "Save as JSON"]}
      read={{ href: "/module2", label: "Module 2", sections: "sections 2 (anatomy of a prompt), 3 (techniques), 6 (prompt patterns for finance) and 7 (hallucinations and grounding)" }}
      prerequisites={[
        "One model provider. Free tiers are fine for every exercise except caching, which needs Anthropic or OpenAI.",
        "No earlier lab is required. Exercise 4 downloads two public SEBI PDFs.",
        "Exercise 3 makes 24 model calls and Exercise 2 makes five. On a free tier, run them one at a time.",
      ]}
      exercises={exercises}
      stretch={[
        "Add an automatic test per template (for example, 'the brief is at most 120 words') and run them whenever a version changes.",
        "Add a changelog field to each template and write a short entry when you improve one.",
        "Test the three prompt styles on a different task, such as sentiment on earnings headlines, and see whether the ranking changes.",
        "Put prompt_library.json in a Git repository and review a template change as a pull request.",
      ]}
      errors={[
        { term: "NotImplementedError or 'template is still blank'", text: "you have not completed that exercise's code or one of the two templates yet." },
        { term: "KeyError or ValueError when rendering", text: "a variable name in the template does not match the vars list or the values you passed." },
        { term: "JSONDecodeError in Exercise 2", text: "the model added prose around the JSON. Tighten the template ('Return only the JSON') and check parse_json handles code fences." },
        { term: "Caching shows cached=0 everywhere", text: "the prompt must be long, the calls close together, and the provider must report it. See Exercise 4." },
        { term: "429 or rate limit", text: "wait, use a provider with higher limits, or shorten CASES." },
      ]}
      prev={{ href: "/labs/lab1", label: "Lab 1" }}
      next={{ href: "/labs/lab3", label: "Lab 3" }}
    />
  );
}
