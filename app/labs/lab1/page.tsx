import LabPage, { Exercise } from "../_components/LabPage";

const exercises: Exercise[] = [
  {
    num: "0",
    title: "Choose your models",
    why: "To compare models you need access to more than one. The notebook supports six providers through one function, and you pick at least two.",
    does: "Defines chat_with(provider, system, user, temperature), which returns the reply and a token-usage record. You list your chosen providers in CONTESTANTS and enter their keys when asked.",
    terms: [
      "Ollama: free, runs on your own machine, so run this notebook locally.",
      "Groq, Gemini, OpenRouter: free tiers with limits.",
      "OpenAI, Anthropic: paid.",
    ],
    expected: "One line per chosen provider with the model name that will be used.",
    notice:
      "Model names and free limits change. If a model is rejected, edit its entry in PROVIDERS. Some reasoning-style models reject a custom temperature, so pick a standard chat model for this lab.",
    code: `CONTESTANTS = ["groq", "gemini"]     # two or more from PROVIDERS
for p in CONTESTANTS:
    ensure_key(p)`,
  },
  {
    num: "1",
    title: "Define the task",
    why: "A fair comparison needs one fixed task with a known right answer. Ours is a typical analyst job: pull facts out of a results note.",
    does: "Defines a short fictional results note and a prompt asking for four figures and for the company's revenue guidance. The note contains no guidance, deliberately. A trustworthy model should say so, and a model that makes up a number is hallucinating. You write FACTS, a list of groups where a reply passes if at least one alternative from every group appears in it.",
    terms: [
      "Hallucination: a fluent statement that is not supported by the source.",
      "Trap question: a question whose honest answer is 'not stated', used to test for invention.",
    ],
    expected: "No output yet. The next exercises use FACTS and the prompt.",
    notice:
      "The four facts to check are revenue of 1,250 crore, growth of 8 percent, net profit of 96 crore and debt-to-equity of 0.9. Allow common spellings, for example ['1,250', '1250'].",
    code: `FACTS = [
    # YOUR CODE HERE: four groups, e.g. [["1,250", "1250"], ...]
]`,
  },
  {
    num: "2",
    title: "Run the same task on every model",
    why: "Same prompt, same text, same settings. Only the model changes, so any difference is down to the model.",
    does: "You write run_all, which loops over CONTESTANTS, times each call, and stores the answer, the time in seconds and the token usage for each provider.",
    expected:
      "Each model's answer to the five items, with timing and token counts. Wording and layout differ between models even when the facts agree.",
    notice:
      "Read each answer yourself before looking at any score. Style, length and tone differ, and they matter for different jobs, such as a client email versus an internal data pull.",
    code: `def run_all(temperature=0.0):
    results = {}
    for p in CONTESTANTS:
        # YOUR CODE HERE: time chat_with(p, SYSTEM, PROMPT, temperature)
        pass
    return results`,
  },
  {
    num: "3",
    title: "Score the answers",
    why: "Reading is slow and subjective. A simple automatic score lets you compare many runs the same way each time.",
    does: "You write score(answer), which returns facts (how many of the four facts appear), honest (1 if the model admitted that guidance is not stated) and invented (1 if the model seems to have made up guidance). The invented check is crude: it looks for the word 'guidance' with a number on the same line, without a 'not stated' phrase.",
    expected:
      "A small table. Most capable models score 4 of 4 on facts with honest = 1. A weaker or over-eager model may score invented = 1, which is the most important failure to catch.",
    notice:
      "With one prompt this is an anecdote, not a benchmark, and changing the note or the question can change the ranking. String checks can be wrong in both directions, so spot-check the scores against your own reading. To compare models properly you need many prompts, as in Lab 7's golden set.",
    finance:
      "Inventing a number the source never gave is the most costly error in analyst work. Weigh invented far above speed or style.",
    code: `def score(answer: str) -> dict:
    # YOUR CODE HERE: {"facts": int, "honest": 0/1, "invented": 0/1}
    raise NotImplementedError`,
  },
  {
    num: "4",
    title: "Temperature and consistency",
    why: "Temperature controls how random the choice of each next word is. At 0 the model is nearly deterministic, and at higher values it varies more. Variation helps brainstorming and hurts a number that goes into a report.",
    does: "Runs the same prompt three times at temperature 0 and at 0.7 and measures how different the answers are. You write variability(answers): one minus the average pairwise text similarity from difflib.SequenceMatcher. 0 means identical answers, and larger means more variation.",
    terms: ["Temperature: a setting that controls how random the model's word choices are."],
    expected:
      "Variability near 0 at temperature 0 and higher at 0.7, often 0.1 to 0.4. Some models are more sensitive to temperature than others.",
    notice:
      "This measures wording variation, so also check whether the facts changed between runs. Stable facts with changing wording is much safer than changing facts. Even at temperature 0 some providers are not perfectly repeatable. Every extra run uses tokens and free-tier limits, so RUNS = 3 keeps it small.",
    code: `def variability(answers):
    # YOUR CODE HERE: 1 - mean pairwise SequenceMatcher ratio
    raise NotImplementedError`,
  },
  {
    num: "5",
    title: "Decide which model fits which job",
    why: "The point of a comparison is a decision. Different finance tasks weigh the measures differently.",
    does: "A written exercise, with no code. You fill in a table for four tasks: extracting figures, drafting a client summary, answering a compliance question from a policy, and bulk-classifying emails cheaply. For each, say which measure matters most and which tested model you would pick, with one sentence of evidence from your own results.",
    expected: "A completed decision table. If you only tested one provider on a task, write down the extra test you would run.",
    notice:
      "Weigh accuracy and honesty, speed, cost and consistency. Also weigh data sensitivity: a hosted model sends your text to a third party, while a local model keeps it on your machine, which can outweigh a small quality gap (Module 1, open versus closed models). Context window size was not tested here.",
    finance:
      "Model choice for a regulated workflow is a governance decision as well as a technical one, and it should be recorded with its evidence (Module 5, section 2).",
    code: `| Task                                    | Matters most | Model | Evidence |
| Extract figures from a results note     |              |       |          |
| Draft a client-facing summary           |              |       |          |
| Answer a compliance question            |              |       |          |
| Bulk-classify thousands of emails       |              |       |          |`,
  },
];

export default function Lab1() {
  return (
    <LabPage
      number="1"
      title="Model Comparison Bench"
      intro="Send the same financial task to two or more models and compare them on correctness, honesty about missing information, speed and consistency. Then decide which model fits which job."
      tags={["30 min", "2+ providers", "Hallucination test", "Temperature", "Module 1"]}
      notebookFile="lab1_model_comparison.ipynb"
      build="You define one fixed analyst task with a built-in trap (the note never gives revenue guidance), run it on every model you chose, score each answer for facts, honesty and invention, measure how much the answers vary at temperature 0 versus 0.7, and finish with a decision table for four finance tasks."
      flow={["Same task", "Several models", "Score answers", "Test temperature", "Decide by job"]}
      callout={{
        title: "No-code route",
        text: "You can do the core of this lab without writing code. Open two or three chat or playground pages (for example the Claude console, the OpenAI playground, Google AI Studio and Groq's playground), paste the same prompt from Exercise 1 into each, and record the answer, whether it invented the missing guidance, and how long it took. For the temperature test, use a playground that exposes a temperature setting and run each prompt three times at 0 and three times at 0.7. Then fill in the Exercise 5 table by hand.",
      }}
      read={{ href: "/module1", label: "Module 1", sections: "(model landscape, open versus closed models, context windows and token economics)" }}
      prerequisites={[
        "Access to at least two model providers, or the no-code route above. Free tiers are fine (Groq, Gemini, OpenRouter, or Ollama locally).",
        "No earlier lab is required. The task text is fictional, so there is no document to download.",
        "Each run makes about 20 model calls in total. On a free tier, lower RUNS or test one provider at a time.",
      ]}
      exercises={exercises}
      stretch={[
        "Add a second trap question, for example the dividend payout date, and see which models invent a date.",
        "Run the same task with a very long prompt (paste several pages) and compare speed and token counts.",
        "Compare two sizes of the same model family, for example a small and a large model.",
      ]}
      errors={[
        { term: "NotImplementedError, or empty results", text: "you have not completed that function yet." },
        { term: "Model not found or 404", text: "the model name has changed. Check the provider's current list and edit PROVIDERS." },
        { term: "Temperature rejected", text: "use a standard chat model instead of a reasoning-style one." },
        { term: "429 or rate limit", text: "wait, lower RUNS, or test one provider at a time." },
        { term: "Connection refused (Ollama)", text: "run ollama serve and pull the model. Use a local notebook, not Colab." },
      ]}
      prev={{ href: "/labs/lab0", label: "Lab 0" }}
      next={{ href: "/labs/lab2", label: "Lab 2" }}
    />
  );
}
