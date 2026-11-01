import LabPage, { Exercise } from "../_components/LabPage";

const exercises: Exercise[] = [
  {
    num: "0",
    title: "Setup",
    why: "We need a PDF reader, a language-processing library (spaCy), a machine-learning library for TF-IDF (scikit-learn) and a plotting library.",
    does: "Installs the packages, downloads spaCy's small English model (about 12 MB), and downloads two real SEBI PDFs into a data/ folder: a February 2025 circular on retail algorithmic trading and a December 2024 board memo on AI tools.",
    terms: ["spaCy: an open-source library that splits text into tokens and tags words with grammar and entity information."],
    expected: "A list with the two PDF file names.",
    notice: "No API key and no paid service is needed anywhere in this lab.",
    code: `nlp = spacy.load("en_core_web_sm")
SOURCES = {"sebi_retail_algo_circular_feb2025.pdf": "https://www.sebi.gov.in/...",
           "sebi_ai_responsibility_memo_dec2024.pdf": "https://www.sebi.gov.in/..."}`,
  },
  {
    num: "1",
    title: "Load and clean the text",
    why: "Text pulled from a PDF is not the text you see on screen. It contains page headers, bullet symbols that come out as strange characters, curly quotes and broken line breaks. Cleaning makes later steps reliable (Module 0, section 2).",
    does: "load_pages reads each page into (page_number, raw_text). You first count the odd characters, then write clean_text, which removes 'Page 3 of 6' markers, replaces the bullet character with '- ', replaces curly quotes with straight quotes, and collapses all whitespace into single spaces.",
    expected:
      "A readable opening paragraph with no line breaks, and 0 for both leftovers (page markers and bullet characters).",
    notice:
      "The odd-character counter shows exactly what needed fixing: always inspect your data before writing cleaning rules. Some words in these PDFs are split by the extraction itself (for example 'mech anisms'), which simple cleaning cannot fix reliably. That is a known limit of PDF text extraction.",
    finance:
      "A stray bullet or quote character can break a table lookup or a search for a clause. Clean input is the cheapest way to reduce downstream errors.",
    code: `def clean_text(text: str) -> str:
    # YOUR CODE HERE: remove 'Page x of y', replace the bullet,
    # straighten curly quotes, collapse whitespace
    raise NotImplementedError`,
  },
  {
    num: "2",
    title: "Tokenise and normalise",
    why: "Computers need text split into units and reduced to a standard form, so that 'regulation', 'regulations' and 'regulated' can be treated as related (Module 0, section 2).",
    does: "spaCy turns a sentence into tokens, and each token carries its lemma (dictionary form) and flags such as 'is a stop word'. A table compares lemmatisation with stemming, a cruder method that chops word endings. You write normalise(text), returning lowercase lemmas of alphabetic, non-stop-word tokens.",
    terms: [
      "Token: one unit of text, usually a word or punctuation mark.",
      "Stop word: a very common word such as 'the' or 'of' that carries little meaning.",
      "Lemma: the dictionary form of a word ('brokers' becomes 'broker').",
      "Stem: a chopped-off root that may not be a real word ('regulation' becomes 'regul').",
    ],
    expected:
      "A word count roughly halving to a smaller number of terms, and a list of lowercase content words such as circular, algorithmic, retail, investor. The exact list depends on the spaCy model version.",
    notice: "Lemmas are always real words, while stems are not. Stemming is faster but rougher, and lemmatisation usually gives more readable results.",
    code: `def normalise(text: str):
    # YOUR CODE HERE: lowercase lemmas of alphabetic,
    # non-stop-word tokens
    raise NotImplementedError`,
  },
  {
    num: "3",
    title: "Find entities",
    why: "Extracting who, when, how much and which rule turns paragraphs into data you can search and check (Module 0, section 4).",
    does: "Two approaches side by side. spaCy's statistical NER labels organisations, dates, money and so on, and handles varied wording but can miss domain-specific items. Regular expressions are exact for formats you know, such as circular numbers like CIR/MRD/DP/09/2012, but only find what you describe. You write regex_entities, returning circular references, dates and rupee amounts.",
    terms: [
      "NER: named-entity recognition, labelling things such as people, organisations and dates.",
      "Regular expression: a compact pattern for matching text shapes.",
    ],
    expected:
      "Circular references including SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/0000013 and CIR/MRD/DP/09/2012, dates such as February 4, 2025 and March 30, 2012, and the two rupee amounts from the test sentence. The circulars contain few rupee amounts, which is why the test sentence is there.",
    notice:
      "Compare the dates from spaCy with those from your pattern. Rules are precise for known formats and the model is more flexible. Real pipelines use both, and a circular reference number is something no general model will recognise.",
    finance:
      "Pulling out amounts, dates and reference numbers is the first step of KYC checks, loan-document review and regulatory tracking (Module 0, section 7).",
    code: `def regex_entities(text: str) -> dict:
    # YOUR CODE HERE: return {"circular_refs": [...],
    #   "dates": [...], "amounts": [...]}
    raise NotImplementedError`,
  },
  {
    num: "4",
    title: "TF-IDF: which terms are distinctive?",
    why: "A word that appears everywhere ('SEBI', 'shall') tells you little about one page. A word that appears often on one page and rarely elsewhere is distinctive. TF-IDF scores exactly that (Module 0, section 3).",
    does: "Treats each page as a small document and scores every term. TF (term frequency) rewards words repeated on a page. IDF (inverse document frequency) penalises words found on many pages. The product is the TF-IDF score. You write top_terms, returning the highest-scoring terms for a page, and plot one page as a bar chart.",
    terms: [
      "Vectoriser: a tool that turns text into numeric scores.",
      "Bigram: a two-word phrase such as 'retail investors'.",
    ],
    expected:
      "A short list of distinctive terms for each of three pages and a bar chart. Terms specific to a page's topic rank high, and terms used on every page do not.",
    notice:
      "The same word can be common on one page and unremarkable overall. With only about a dozen small documents the scores are rough, and TF-IDF gets more reliable with more text.",
    code: `def top_terms(row: int, n: int = 8):
    # YOUR CODE HERE: the n highest-scoring (term, score)
    # pairs for page \`row\` of the TF-IDF matrix
    raise NotImplementedError`,
  },
  {
    num: "5",
    title: "Produce structured output for Lab 3",
    why: "The point of preprocessing is to hand later steps something clean and structured. You combine everything into one JSON file with a record per page.",
    does: "You write process_page, which returns a record with the document name, page number, cleaned text, entities (from spaCy and from your rules) and keywords (from TF-IDF). The cell then saves all records to processed_documents.json.",
    expected:
      "A record count equal to the number of pages kept, and a sample record showing keywords and the circular reference found on page 1.",
    notice:
      "Open processed_documents.json. Every field came from a method you used in this lab, and this is the shape of data that search, RAG and review workflows prefer. As a stretch, change Lab 3's loader to read the text field from this file and compare retrieval on cleaned versus raw text.",
    code: `def process_page(row: int) -> dict:
    # YOUR CODE HERE: {"doc", "page", "text", "entities", "keywords"}
    raise NotImplementedError`,
  },
];

export default function Lab0() {
  return (
    <LabPage
      number="0"
      title="Document Preprocessor"
      intro="Turn a real regulatory PDF into clean, structured text with entities and keywords, ready to feed into Lab 3. This lab uses the classic NLP toolkit from Module 0 and needs no API key."
      tags={["45 min", "spaCy", "TF-IDF", "No API key", "Module 0"]}
      notebookFile="lab0_document_preprocessor.ipynb"
      build="You take two real SEBI documents, a circular on retail algorithmic trading and a board memo on AI tools, clean the text, tokenise and normalise it, pull out entities with both a trained model and your own rules, find the most distinctive terms on each page, and save everything as structured JSON. Every step comes from Module 0."
      flow={["Raw PDF", "Clean text", "Tokens & lemmas", "Entities", "TF-IDF keywords", "Structured JSON"]}
      read={{ href: "/module0", label: "Module 0", sections: "sections 2 (preprocessing and tokenisation), 3 (text representation) and 4 (core NLP tasks)" }}
      prerequisites={[
        "Python basics. No earlier lab is required, and this lab needs no API key or paid service.",
        "Runs on free Google Colab or on your own machine. The spaCy model download is about 12 MB.",
      ]}
      exercises={exercises}
      stretch={[
        "Fix the broken words ('mech anisms') by checking joined fragments against spaCy's vocabulary.",
        "Add a rule that finds regulation names such as 'Intermediaries Regulations, 2008'.",
        "Compare TF-IDF keywords with the keywords an LLM suggests for the same page. Which are more useful for search?",
      ]}
      errors={[
        { term: "NotImplementedError", text: "you have not completed that exercise's function yet." },
        { term: "spaCy model not found", text: "re-run the setup cell, then restart the runtime." },
        { term: "A download fails (SEBI site)", text: "retry, or download the PDFs in your browser and place them in data/ under the same names." },
        { term: "Entity lists look different from the page", text: "spaCy models are statistical and change between versions. That is normal." },
      ]}
      next={{ href: "/labs/lab1", label: "Lab 1" }}
    />
  );
}
