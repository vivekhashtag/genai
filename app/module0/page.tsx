import Link from "next/link";

export default function Module0() {
  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-teal-950 dark:to-cyan-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="mb-4 inline-block text-sm font-medium text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            ← Back to Course Home
          </Link>

          <div className="mb-4 block w-fit rounded-full bg-linear-to-r from-teal-500 to-cyan-500 px-4 py-1 text-sm font-bold text-white">
            MODULE 00
          </div>

          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
            NLP Foundations
          </h1>

          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            From text to understanding - the bridge to modern AI. Learn the fundamentals of Natural Language Processing that laid the groundwork for today's powerful language models.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Section 1: Introduction to NLP */}
          <section className="rounded-3xl border border-teal-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-teal-700/50 dark:bg-gray-800/90 md:p-12">
            <div className="mb-8 inline-block rounded-2xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-3">
              <h2 className="text-3xl font-bold text-white">
                1. Introduction to Natural Language Processing
              </h2>
            </div>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Natural Language Processing (NLP) is the field of AI that enables computers to understand, interpret, and generate human language. Before we had powerful foundation models like GPT and Claude, NLP researchers spent decades developing techniques to make sense of text.
            </p>

            {/* What is NLP? */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                What is Natural Language Processing?
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                NLP sits at the intersection of <strong>computer science</strong>, <strong>linguistics</strong>, and <strong>artificial intelligence</strong>. Its goal: enable machines to process and understand human language in a way that is both meaningful and useful.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-950">
                  <h4 className="mb-3 text-lg font-bold text-teal-900 dark:text-teal-300">
                    📖 Natural Language Understanding (NLU)
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Extracting meaning from text. Examples: sentiment analysis, named entity recognition, question answering.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-950">
                  <h4 className="mb-3 text-lg font-bold text-cyan-900 dark:text-cyan-300">
                    ✍️ Natural Language Generation (NLG)
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Producing human-like text. Examples: report generation, summarization, machine translation.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                  <h4 className="mb-3 text-lg font-bold text-blue-900 dark:text-blue-300">
                    🔄 Natural Language Interaction (NLI)
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Conversational AI. Examples: chatbots, virtual assistants, dialogue systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Why is NLP Hard? */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                Why is NLP So Hard?
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Human language is incredibly complex. Unlike structured data or images, language has <strong>ambiguity, context-dependency, and cultural nuance</strong> that make it challenging for machines to understand.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-950/30">
                  <h4 className="mb-2 text-lg font-bold text-red-900 dark:text-red-300">
                    1. Ambiguity
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    The same word can have different meanings depending on context:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>"Bank"</strong> → financial institution or river bank?</li>
                    <li><strong>"Interest"</strong> → financial interest or curiosity?</li>
                    <li><strong>"Apple"</strong> → fruit or tech company?</li>
                  </ul>
                </div>

                <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-950/30">
                  <h4 className="mb-2 text-lg font-bold text-orange-900 dark:text-orange-300">
                    2. Context Dependency
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Meaning changes based on surrounding words:
                  </p>
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">
                    "The <strong>company reported strong earnings</strong>, but <strong>investors remain cautious</strong>."
                  </p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    → Positive fundamentals, negative sentiment. Understanding requires reading the full sentence.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-6 dark:bg-yellow-950/30">
                  <h4 className="mb-2 text-lg font-bold text-yellow-900 dark:text-yellow-300">
                    3. Sarcasm & Figurative Language
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Literal meaning ≠ intended meaning:
                  </p>
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">
                    "Oh great, another market crash. Just what we needed!" 😒
                  </p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    → Clearly negative, but uses the word "great" (positive). Machines struggle with this.
                  </p>
                </div>

                <div className="rounded-xl border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-950/30">
                  <h4 className="mb-2 text-lg font-bold text-green-900 dark:text-green-300">
                    4. Domain-Specific Language
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Financial jargon requires specialized understanding:
                  </p>
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">
                    "The Fed's hawkish stance on inflation has led to a flight to quality, with investors rotating from growth to value stocks."
                  </p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    → Requires knowledge of monetary policy, market dynamics, and investment strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Evolution of NLP */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                The Evolution of NLP: From Rules to Transformers
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                NLP has gone through several paradigm shifts over the past 60+ years. Understanding this evolution helps us appreciate why modern foundation models are so powerful.
              </p>

              <div className="space-y-6">
                <div className="rounded-xl border-2 border-purple-200 bg-linear-to-br from-purple-50 to-pink-50 p-6 dark:border-purple-800 dark:from-purple-950 dark:to-pink-950">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-full bg-purple-600 px-3 py-1 text-sm font-bold text-white">
                      1950s-1980s
                    </div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-300">
                      Rule-Based NLP
                    </h4>
                  </div>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Hand-crafted rules and expert systems. Linguists manually wrote grammar rules and patterns.
                  </p>
                  <p className="text-sm italic text-gray-600 dark:text-gray-400">
                    <strong>Example:</strong> "If sentence contains 'not' before a positive word, classify as negative."
                  </p>
                  <p className="mt-3 text-sm font-semibold text-red-700 dark:text-red-400">
                    ⚠️ Problem: Doesn't scale. Too many exceptions and edge cases.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-cyan-50 p-6 dark:border-blue-800 dark:from-blue-950 dark:to-cyan-950">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                      1990s-2000s
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 dark:text-blue-300">
                      Statistical NLP
                    </h4>
                  </div>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Machine learning on large text corpora. Models learned patterns from data using probabilistic methods (Hidden Markov Models, Naive Bayes, etc.).
                  </p>
                  <p className="text-sm italic text-gray-600 dark:text-gray-400">
                    <strong>Example:</strong> "In financial news, 'earnings beat' appears 87% of the time with positive sentiment."
                  </p>
                  <p className="mt-3 text-sm font-semibold text-green-700 dark:text-green-400">
                    ✓ Better generalization, but still limited by feature engineering.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-indigo-200 bg-linear-to-br from-indigo-50 to-purple-50 p-6 dark:border-indigo-800 dark:from-indigo-950 dark:to-purple-950">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-bold text-white">
                      2010s
                    </div>
                    <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-300">
                      Neural NLP
                    </h4>
                  </div>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Deep learning with word embeddings (Word2Vec, GloVe) and neural networks (RNNs, LSTMs). Models learned to represent words as dense vectors.
                  </p>
                  <p className="text-sm italic text-gray-600 dark:text-gray-400">
                    <strong>Example:</strong> "Revenue" and "sales" have similar vector representations because they appear in similar contexts.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-green-700 dark:text-green-400">
                    ✓ Automatic feature learning, but still struggled with long-range dependencies.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-teal-200 bg-linear-to-br from-teal-50 to-cyan-50 p-6 dark:border-teal-800 dark:from-teal-950 dark:to-cyan-950">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-full bg-teal-600 px-3 py-1 text-sm font-bold text-white">
                      2017-Present
                    </div>
                    <h4 className="text-xl font-bold text-teal-900 dark:text-teal-300">
                      Transformer Era
                    </h4>
                  </div>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Attention mechanisms and Transformers revolutionized NLP. Models can attend to any part of the input, handling long-range dependencies effortlessly.
                  </p>
                  <p className="text-sm italic text-gray-600 dark:text-gray-400">
                    <strong>Example:</strong> BERT, GPT, Claude - models that understand context across entire documents.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-green-700 dark:text-green-400">
                    ✓ State-of-the-art across all NLP tasks. This is where we are today.
                  </p>
                </div>
              </div>
            </div>

            {/* NLP in Financial Services */}
            <div className="rounded-3xl border-4 border-teal-200 bg-linear-to-br from-teal-100 to-cyan-100 p-8 dark:border-teal-800 dark:from-teal-950 dark:to-cyan-950">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                💼 NLP Challenges in Financial Services
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Finance has unique NLP challenges that make it particularly interesting (and difficult):
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="mb-1 font-bold text-gray-900 dark:text-white">
                      Numerical Data Mixed with Text
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "$1.2B revenue, up 15% YoY" - numbers carry critical meaning
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <h4 className="mb-1 font-bold text-gray-900 dark:text-white">
                      Regulatory Language
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Dense, formal, precise language with legal implications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔤</span>
                  <div>
                    <h4 className="mb-1 font-bold text-gray-900 dark:text-white">
                      Domain-Specific Jargon
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      P/E ratios, EBITDA, alpha, beta - specialized vocabulary
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <h4 className="mb-1 font-bold text-gray-900 dark:text-white">
                      Temporal Context Matters
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "Fed raised rates" - when? Pre-2022 or post-2022? Huge difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Text Preprocessing & Tokenization */}
          <section className="rounded-3xl border border-teal-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-teal-700/50 dark:bg-gray-800/90 md:p-12">
            <div className="mb-8 inline-block rounded-2xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-3">
              <h2 className="text-3xl font-bold text-white">
                2. Text Preprocessing & Tokenization
              </h2>
            </div>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Before we can analyze text, we need to <strong>clean and transform</strong> it into a format machines can process. This step is critical - garbage in, garbage out!
            </p>

            {/* What is Preprocessing? */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                What is Text Preprocessing?
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Text preprocessing involves cleaning and normalizing raw text to make it suitable for analysis. The goal: reduce noise and standardize the input.
              </p>

              <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-950">
                <h4 className="mb-4 text-lg font-bold text-cyan-900 dark:text-cyan-300">
                  Common Preprocessing Steps
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-cyan-600 px-2 py-0.5 text-xs font-bold text-white">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Lowercasing
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        "Apple" and "apple" should be treated the same (usually)
                      </p>
                      <code className="mt-1 block rounded bg-gray-800 p-2 text-xs text-green-400">
                        text = text.lower()  # "Apple Inc." → "apple inc."
                      </code>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-cyan-600 px-2 py-0.5 text-xs font-bold text-white">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Removing Punctuation
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Strip special characters (but be careful with financial data!)
                      </p>
                      <code className="mt-1 block rounded bg-gray-800 p-2 text-xs text-green-400">
                        import re{'\n'}text = re.sub(r'[^\w\s]', '', text)
                      </code>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-cyan-600 px-2 py-0.5 text-xs font-bold text-white">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Removing Stopwords
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Remove common words like "the", "is", "and" (low information)
                      </p>
                      <code className="mt-1 block rounded bg-gray-800 p-2 text-xs text-green-400">
                        from nltk.corpus import stopwords{'\n'}stops = set(stopwords.words('english'))
                      </code>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-cyan-600 px-2 py-0.5 text-xs font-bold text-white">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Normalization
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Handle contractions, unicode, special characters
                      </p>
                      <code className="mt-1 block rounded bg-gray-800 p-2 text-xs text-green-400">
                        "won't" → "will not" | "café" → "cafe"
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tokenization */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                Tokenization: Breaking Text into Units
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Tokenization</strong> is the process of splitting text into smaller units called <strong>tokens</strong> (words, subwords, or characters). This is the first step in any NLP pipeline.
              </p>

              <div className="mb-8 rounded-xl border-2 border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-950">
                <h4 className="mb-4 text-lg font-bold text-teal-900 dark:text-teal-300">
                  Example: Tokenizing a Financial Sentence
                </h4>

                <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Input:
                </p>
                <code className="mb-4 block rounded bg-gray-800 p-3 text-sm text-green-400">
                  "Apple Inc.'s Q4 revenue reached $90.1B, up 8% YoY."
                </code>

                <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Word Tokenization:
                </p>
                <code className="block rounded bg-gray-800 p-3 text-xs text-green-400">
                  ['Apple', 'Inc', '.', "'s", 'Q4', 'revenue', 'reached', '$', '90.1', 'B', ',', 'up', '8', '%', 'YoY', '.']
                </code>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border-2 border-purple-200 bg-linear-to-br from-purple-50 to-pink-50 p-6 dark:border-purple-800 dark:from-purple-950 dark:to-pink-950">
                  <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                    Word Tokenization
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Split by whitespace and punctuation
                  </p>
                  <p className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                    Example:
                  </p>
                  <code className="block rounded bg-gray-800 p-2 text-xs text-green-400">
                    "Hello world"{'\n'}→ ["Hello", "world"]
                  </code>
                  <p className="mt-3 text-xs text-green-700 dark:text-green-400">
                    ✓ Simple, interpretable
                  </p>
                  <p className="mt-1 text-xs text-red-700 dark:text-red-400">
                    ✗ Large vocabulary, out-of-vocabulary words
                  </p>
                </div>

                <div className="rounded-xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-cyan-50 p-6 dark:border-blue-800 dark:from-blue-950 dark:to-cyan-950">
                  <h4 className="mb-3 text-lg font-bold text-blue-900 dark:text-blue-300">
                    Subword Tokenization
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Split into smaller meaningful units (BPE, WordPiece)
                  </p>
                  <p className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                    Example:
                  </p>
                  <code className="block rounded bg-gray-800 p-2 text-xs text-green-400">
                    "unhappiness"{'\n'}→ ["un", "happiness"]
                  </code>
                  <p className="mt-3 text-xs text-green-700 dark:text-green-400">
                    ✓ Handles rare words, smaller vocab
                  </p>
                  <p className="mt-1 text-xs text-yellow-700 dark:text-yellow-400">
                    ~ Used by GPT, BERT
                  </p>
                </div>

                <div className="rounded-xl border-2 border-green-200 bg-linear-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800 dark:from-green-950 dark:to-emerald-950">
                  <h4 className="mb-3 text-lg font-bold text-green-900 dark:text-green-300">
                    Character Tokenization
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Split into individual characters
                  </p>
                  <p className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                    Example:
                  </p>
                  <code className="block rounded bg-gray-800 p-2 text-xs text-green-400">
                    "Hi"{'\n'}→ ["H", "i"]
                  </code>
                  <p className="mt-3 text-xs text-green-700 dark:text-green-400">
                    ✓ No out-of-vocabulary issues
                  </p>
                  <p className="mt-1 text-xs text-red-700 dark:text-red-400">
                    ✗ Very long sequences
                  </p>
                </div>
              </div>
            </div>

            {/* Stemming vs Lemmatization */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                Stemming vs Lemmatization
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Both techniques reduce words to their base form, but they work differently:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-orange-200 bg-linear-to-br from-orange-50 to-red-50 p-6 dark:border-orange-800 dark:from-orange-950 dark:to-red-950">
                  <h4 className="mb-4 text-xl font-bold text-orange-900 dark:text-orange-300">
                    Stemming
                  </h4>
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Crude heuristic process that chops off word endings. Fast but imprecise.
                  </p>

                  <div className="rounded-lg bg-gray-800 p-4">
                    <p className="mb-2 text-xs font-semibold text-gray-400">
                      Examples:
                    </p>
                    <code className="block text-xs text-green-400">
                      "running" → "run"{'\n'}
                      "runner" → "run"{'\n'}
                      "running" → "run"{'\n'}
                      "studies" → "studi" ⚠️{'\n'}
                      "studying" → "study"
                    </code>
                  </div>

                  <p className="mt-4 text-sm font-semibold text-orange-700 dark:text-orange-400">
                    Popular Algorithm: Porter Stemmer
                  </p>
                </div>

                <div className="rounded-xl border-2 border-indigo-200 bg-linear-to-br from-indigo-50 to-purple-50 p-6 dark:border-indigo-800 dark:from-indigo-950 dark:to-purple-950">
                  <h4 className="mb-4 text-xl font-bold text-indigo-900 dark:text-indigo-300">
                    Lemmatization
                  </h4>
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Uses vocabulary and morphological analysis. Returns actual dictionary words.
                  </p>

                  <div className="rounded-lg bg-gray-800 p-4">
                    <p className="mb-2 text-xs font-semibold text-gray-400">
                      Examples:
                    </p>
                    <code className="block text-xs text-green-400">
                      "running" → "run"{'\n'}
                      "better" → "good"{'\n'}
                      "was" → "be"{'\n'}
                      "studies" → "study" ✓{'\n'}
                      "studying" → "study"
                    </code>
                  </div>

                  <p className="mt-4 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                    Popular Tool: spaCy, WordNet Lemmatizer
                  </p>
                </div>
              </div>
            </div>

            {/* Financial Text Preprocessing */}
            <div className="rounded-3xl border-4 border-cyan-200 bg-linear-to-br from-cyan-100 to-blue-100 p-8 dark:border-cyan-800 dark:from-cyan-950 dark:to-blue-950">
              <h3 className="mb-6 text-2xl font-bold text-cyan-900 dark:text-cyan-300">
                💼 Preprocessing Financial Documents
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Financial text has special considerations - you can't just apply standard preprocessing blindly!
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950/30">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <h4 className="mb-1 font-bold text-yellow-900 dark:text-yellow-300">
                      Don't Remove All Numbers!
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "$1.2B" and "15%" carry critical meaning in finance. Instead, normalize them: "$1.2B" → "MONEY_1.2B" or keep as-is.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/30">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <h4 className="mb-1 font-bold text-red-900 dark:text-red-300">
                      Be Careful with Stopwords
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "not" is a stopword, but "not profitable" vs "profitable" have opposite meanings! Consider context before removing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
                  <span className="text-xl">✓</span>
                  <div>
                    <h4 className="mb-1 font-bold text-green-900 dark:text-green-300">
                      Preserve Financial Entities
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Company names, tickers, dates, amounts - these are gold. Consider using Named Entity Recognition (NER) to protect them during preprocessing.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-800 p-4">
                  <p className="mb-2 text-sm font-semibold text-gray-300">
                    Example: Financial Text Preprocessing Pipeline
                  </p>
                  <code className="block text-xs leading-relaxed text-green-400">
                    import re{'\n'}
                    from spacy import load{'\n'}
                    {'\n'}
                    nlp = load("en_core_web_sm"){'\n'}
                    {'\n'}
                    def preprocess_financial_text(text):{'\n'}
                    {'    '}# 1. Normalize currency{'\n'}
                    {'    '}text = re.sub(r'\$(\d+\.?\d*)(B|M|K)?', r'MONEY_\1\2', text){'\n'}
                    {'    '}{'\n'}
                    {'    '}# 2. Normalize percentages{'\n'}
                    {'    '}text = re.sub(r'(\d+\.?\d*)%', r'PERCENT_\1', text){'\n'}
                    {'    '}{'\n'}
                    {'    '}# 3. Tokenization with spaCy (preserves entities){'\n'}
                    {'    '}doc = nlp(text){'\n'}
                    {'    '}{'\n'}
                    {'    '}# 4. Lemmatize but keep financial terms{'\n'}
                    {'    '}tokens = [token.lemma_ for token in doc if not token.is_stop]{'\n'}
                    {'    '}{'\n'}
                    {'    '}return tokens
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Text Representation */}
          <section className="rounded-3xl border border-teal-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-teal-700/50 dark:bg-gray-800/90 md:p-12">
            <div className="mb-8 inline-block rounded-2xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-3">
              <h2 className="text-3xl font-bold text-white">
                3. Text Representation: From Words to Numbers
              </h2>
            </div>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Machines only understand numbers. To process text, we need to <strong>represent words as numerical vectors</strong>. The question is: how do we capture meaning in numbers?
            </p>

            {/* Bag of Words */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                Bag of Words (BoW): The Simplest Approach
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Bag of Words</strong> represents text as a vector of word counts. Simple, but loses word order and context.
              </p>

              <div className="mb-8 rounded-xl border-2 border-purple-200 bg-linear-to-br from-purple-50 to-pink-50 p-6 dark:border-purple-800 dark:from-purple-950 dark:to-pink-950">
                <h4 className="mb-4 text-lg font-bold text-purple-900 dark:text-purple-300">
                  Example: BoW for Financial Sentences
                </h4>

                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Sentence 1: "Company revenue increased significantly"
                    </p>
                    <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Sentence 2: "Revenue increased slightly"
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-800 p-4">
                    <p className="mb-2 text-xs font-semibold text-gray-400">
                      Vocabulary: [company, revenue, increased, significantly, slightly]
                    </p>
                    <code className="block text-xs text-green-400">
                      Sentence 1: [1, 1, 1, 1, 0]{'\n'}
                      Sentence 2: [0, 1, 1, 0, 1]
                    </code>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Each position represents a word from the vocabulary. The number is the count of that word in the sentence.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/30">
                    <p className="mb-2 text-sm font-bold text-green-900 dark:text-green-300">
                      ✓ Advantages
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Simple to implement</li>
                      <li>• Interpretable</li>
                      <li>• Works for short texts</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
                    <p className="mb-2 text-sm font-bold text-red-900 dark:text-red-300">
                      ✗ Disadvantages
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Loses word order</li>
                      <li>• Ignores context</li>
                      <li>• Sparse, high-dimensional vectors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* TF-IDF */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                TF-IDF: Weighting Words by Importance
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>TF-IDF (Term Frequency-Inverse Document Frequency)</strong> improves on BoW by giving more weight to rare, informative words and less weight to common words.
              </p>

              <div className="mb-6 rounded-xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                <h4 className="mb-4 text-lg font-bold text-blue-900 dark:text-blue-300">
                  The Formula
                </h4>

                <div className="rounded-lg bg-gray-800 p-4">
                  <code className="block text-sm text-green-400">
                    TF-IDF(word, document) = TF(word, document) × IDF(word){'\n'}
                    {'\n'}
                    TF = (# times word appears in doc) / (# total words in doc){'\n'}
                    IDF = log(# total documents / # documents containing word)
                  </code>
                </div>

                <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                  <strong>Intuition:</strong> If a word appears often in one document but rarely across all documents, it's probably important to that specific document.
                </p>
              </div>

              <div className="mb-8 rounded-xl border-2 border-cyan-200 bg-linear-to-br from-cyan-50 to-blue-50 p-6 dark:border-cyan-800 dark:from-cyan-950 dark:to-blue-950">
                <h4 className="mb-4 text-lg font-bold text-cyan-900 dark:text-cyan-300">
                  💼 Example: TF-IDF in Financial Documents
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Analyzing 3 earnings call transcripts:
                </p>

                <div className="space-y-3">
                  <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                    <p className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Document 1 (Tech Company):
                    </p>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300">
                      "Our <span className="font-bold text-blue-600">cloud</span> revenue grew 40% while <span className="font-bold text-blue-600">AI</span> investments increased."
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                    <p className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Document 2 (Retail Company):
                    </p>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300">
                      "Revenue grew 5% driven by <span className="font-bold text-green-600">store</span> expansion."
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                    <p className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Document 3 (Bank):
                    </p>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300">
                      "Revenue grew 3% as <span className="font-bold text-purple-600">loan</span> volumes increased."
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-gray-800 p-4">
                  <p className="mb-2 text-xs font-semibold text-gray-400">
                    TF-IDF Scores:
                  </p>
                  <code className="block text-xs text-green-400">
                    "revenue" (appears in all 3) → Low TF-IDF (common){'\n'}
                    "cloud" (only in Doc 1) → High TF-IDF (distinctive){'\n'}
                    "store" (only in Doc 2) → High TF-IDF (distinctive){'\n'}
                    "loan" (only in Doc 3) → High TF-IDF (distinctive)
                  </code>
                </div>

                <p className="mt-4 text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                  → TF-IDF helps identify what makes each company unique!
                </p>
              </div>
            </div>

            {/* Word Embeddings */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                Word Embeddings: Capturing Semantic Meaning
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                BoW and TF-IDF treat words as independent units. <strong>Word embeddings</strong> represent words as dense vectors where <strong>similar words have similar vectors</strong>.
              </p>

              <div className="mb-8 rounded-xl border-2 border-indigo-200 bg-linear-to-br from-indigo-50 to-purple-50 p-6 dark:border-indigo-800 dark:from-indigo-950 dark:to-purple-950">
                <h4 className="mb-4 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                  The Big Idea: Distributional Semantics
                </h4>

                <p className="mb-4 text-center text-xl font-bold italic text-indigo-700 dark:text-indigo-400">
                  "You shall know a word by the company it keeps"
                </p>

                <p className="mb-6 text-sm text-gray-700 dark:text-gray-300">
                  Words that appear in similar contexts tend to have similar meanings. Embeddings learn these relationships from data.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Example 1:
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "The <strong>company</strong> reported strong earnings."
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "The <strong>firm</strong> reported strong earnings."
                    </p>
                    <p className="mt-2 text-xs text-green-700 dark:text-green-400">
                      → "company" and "firm" appear in similar contexts
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Example 2:
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "<strong>Revenue</strong> increased by 10%."
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "<strong>Sales</strong> increased by 10%."
                    </p>
                    <p className="mt-2 text-xs text-green-700 dark:text-green-400">
                      → "revenue" and "sales" are interchangeable
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-orange-200 bg-linear-to-br from-orange-50 to-red-50 p-6 dark:border-orange-800 dark:from-orange-950 dark:to-red-950">
                  <h4 className="mb-4 text-xl font-bold text-orange-900 dark:text-orange-300">
                    Word2Vec (2013)
                  </h4>
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Predicts context words from target word (Skip-gram) or target from context (CBOW). Learns 100-300 dimensional vectors.
                  </p>

                  <div className="rounded-lg bg-gray-800 p-3">
                    <p className="mb-2 text-xs font-semibold text-gray-400">
                      Famous example:
                    </p>
                    <code className="block text-xs text-green-400">
                      king - man + woman ≈ queen{'\n'}
                      Paris - France + Germany ≈ Berlin
                    </code>
                  </div>

                  <p className="mt-3 text-xs text-orange-700 dark:text-orange-400">
                    → Vector arithmetic captures relationships!
                  </p>
                </div>

                <div className="rounded-xl border-2 border-green-200 bg-linear-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800 dark:from-green-950 dark:to-emerald-950">
                  <h4 className="mb-4 text-xl font-bold text-green-900 dark:text-green-300">
                    GloVe (2014)
                  </h4>
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Global Vectors. Uses word co-occurrence statistics. Pre-trained on Wikipedia, Common Crawl.
                  </p>

                  <div className="rounded-lg bg-gray-800 p-3">
                    <p className="mb-2 text-xs font-semibold text-gray-400">
                      Financial example:
                    </p>
                    <code className="block text-xs text-green-400">
                      revenue - sales ≈ 0{'\n'}
                      (very similar vectors){'\n'}
                      {'\n'}
                      revenue - expense ≠ 0{'\n'}
                      (different concepts)
                    </code>
                  </div>

                  <p className="mt-3 text-xs text-green-700 dark:text-green-400">
                    → Captures semantic relationships
                  </p>
                </div>
              </div>
            </div>

            {/* Limitations of Static Embeddings */}
            <div className="rounded-3xl border-4 border-teal-200 bg-linear-to-br from-teal-100 to-cyan-100 p-8 dark:border-teal-800 dark:from-teal-950 dark:to-cyan-950">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                ⚠️ Limitation: Static Embeddings
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Word2Vec and GloVe give each word a <strong>single, fixed vector</strong> regardless of context. This is a problem!
              </p>

              <div className="mb-6 rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
                <h4 className="mb-3 text-lg font-bold text-red-900 dark:text-red-300">
                  Example: The Word "Bank"
                </h4>

                <div className="space-y-3">
                  <div className="rounded-lg bg-white p-3 dark:bg-gray-900">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Sentence 1: "The <strong>bank</strong> approved my loan." (financial institution)
                    </p>
                  </div>

                  <div className="rounded-lg bg-white p-3 dark:bg-gray-900">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Sentence 2: "I sat by the river <strong>bank</strong>." (riverbank)
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold text-red-700 dark:text-red-400">
                  → Word2Vec/GloVe assign the SAME vector to both uses of "bank"! 😕
                </p>
              </div>

              <p className="text-lg font-semibold text-teal-700 dark:text-teal-400">
                This is where <strong>contextual embeddings</strong> (BERT, ELMo) and eventually <strong>Transformers</strong> came in! We'll explore this in Module 1. 🚀
              </p>
            </div>
          </section>

          {/* Section 4: Core NLP Tasks */}
          <section className="rounded-3xl border border-teal-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-teal-700/50 dark:bg-gray-800/90 md:p-12">
            <div className="mb-8 inline-block rounded-2xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-3">
              <h2 className="text-3xl font-bold text-white">
                4. Core NLP Tasks
              </h2>
            </div>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              NLP encompasses many different tasks, each solving a specific problem. Understanding these tasks helps you recognize when and how to apply NLP in finance.
            </p>

            {/* Named Entity Recognition */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                1. Named Entity Recognition (NER)
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Named Entity Recognition</strong> identifies and classifies named entities (people, organizations, locations, dates, amounts) in text.
              </p>

              <div className="mb-6 rounded-xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-cyan-50 p-6 dark:border-blue-800 dark:from-blue-950 dark:to-cyan-950">
                <h4 className="mb-4 text-lg font-bold text-blue-900 dark:text-blue-300">
                  💼 Financial NER Example
                </h4>

                <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Input Text:
                </p>
                <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">
                    "<span className="font-bold text-purple-600">JPMorgan Chase</span> CEO <span className="font-bold text-orange-600">Jamie Dimon</span> announced a <span className="font-bold text-green-600">$2.5 billion</span> investment in <span className="font-bold text-blue-600">AI technology</span> on <span className="font-bold text-red-600">January 15, 2024</span>."
                  </p>
                </div>

                <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  NER Output:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded bg-purple-100 px-2 py-1 font-mono text-purple-800 dark:bg-purple-900 dark:text-purple-300">ORGANIZATION</span>
                    <span className="text-gray-700 dark:text-gray-300">JPMorgan Chase</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded bg-orange-100 px-2 py-1 font-mono text-orange-800 dark:bg-orange-900 dark:text-orange-300">PERSON</span>
                    <span className="text-gray-700 dark:text-gray-300">Jamie Dimon</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded bg-green-100 px-2 py-1 font-mono text-green-800 dark:bg-green-900 dark:text-green-300">MONEY</span>
                    <span className="text-gray-700 dark:text-gray-300">$2.5 billion</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded bg-red-100 px-2 py-1 font-mono text-red-800 dark:bg-red-900 dark:text-red-300">DATE</span>
                    <span className="text-gray-700 dark:text-gray-300">January 15, 2024</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-teal-50 p-6 dark:bg-teal-950">
                <h4 className="mb-3 text-lg font-bold text-teal-900 dark:text-teal-300">
                  Financial Use Cases
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>Extracting companies and executives</strong> from earnings transcripts</li>
                  <li>• <strong>Identifying monetary amounts</strong> in contracts</li>
                  <li>• <strong>Finding dates</strong> of financial events</li>
                  <li>• <strong>Regulatory compliance</strong>: detecting mentions of regulated entities</li>
                </ul>
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                2. Sentiment Analysis
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Sentiment Analysis</strong> determines the emotional tone of text: positive, negative, or neutral.
              </p>

              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                  <p className="mb-2 text-sm font-semibold text-green-900 dark:text-green-300">
                    ✓ Positive
                  </p>
                  <p className="text-xs italic text-gray-700 dark:text-gray-300">
                    "Strong earnings beat expectations, revenue up 25%"
                  </p>
                  <p className="mt-2 text-xs font-mono text-green-700 dark:text-green-400">
                    Score: +0.85
                  </p>
                </div>

                <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">
                    ○ Neutral
                  </p>
                  <p className="text-xs italic text-gray-700 dark:text-gray-300">
                    "The company maintained its dividend at $0.50 per share"
                  </p>
                  <p className="mt-2 text-xs font-mono text-gray-700 dark:text-gray-400">
                    Score: 0.00
                  </p>
                </div>

                <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
                  <p className="mb-2 text-sm font-semibold text-red-900 dark:text-red-300">
                    ✗ Negative
                  </p>
                  <p className="text-xs italic text-gray-700 dark:text-gray-300">
                    "Profit warnings issued as costs spiral out of control"
                  </p>
                  <p className="mt-2 text-xs font-mono text-red-700 dark:text-red-400">
                    Score: -0.72
                  </p>
                </div>
              </div>

              <div className="rounded-xl border-2 border-cyan-200 bg-linear-to-br from-cyan-50 to-blue-50 p-6 dark:border-cyan-800 dark:from-cyan-950 dark:to-blue-950">
                <h4 className="mb-4 text-lg font-bold text-cyan-900 dark:text-cyan-300">
                  💼 Financial Sentiment Analysis Use Cases
                </h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      📰 News Sentiment
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Track sentiment of news articles about stocks to predict price movements
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      📊 Earnings Call Analysis
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Analyze tone of management commentary to gauge confidence
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      💬 Social Media Monitoring
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Track public sentiment on Twitter/Reddit for trading signals
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      📝 Analyst Reports
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Quantify bullish/bearish tone in research reports
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Classification */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                3. Text Classification
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Text Classification</strong> assigns predefined categories to documents.
              </p>

              <div className="rounded-xl border-2 border-purple-200 bg-linear-to-br from-purple-50 to-pink-50 p-6 dark:border-purple-800 dark:from-purple-950 dark:to-pink-950">
                <h4 className="mb-4 text-lg font-bold text-purple-900 dark:text-purple-300">
                  💼 Example: Classifying Financial Documents
                </h4>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg bg-white p-3 dark:bg-gray-900">
                    <div className="rounded bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
                      10-K
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "This annual report provides information about our business, risk factors, and financial condition..."
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg bg-white p-3 dark:bg-gray-900">
                    <div className="rounded bg-green-600 px-2 py-0.5 text-xs font-bold text-white">
                      8-K
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "Current report: Material event disclosure regarding acquisition of XYZ Corp..."
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg bg-white p-3 dark:bg-gray-900">
                    <div className="rounded bg-orange-600 px-2 py-0.5 text-xs font-bold text-white">
                      S-1
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      "Registration statement for initial public offering. We intend to offer..."
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold text-purple-700 dark:text-purple-400">
                  → Automatically route documents to appropriate teams based on type
                </p>
              </div>
            </div>

            {/* Question Answering */}
            <div className="rounded-3xl border-4 border-teal-200 bg-linear-to-br from-teal-100 to-cyan-100 p-8 dark:border-teal-800 dark:from-teal-950 dark:to-cyan-950">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                4. Question Answering
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Question Answering (QA)</strong> systems extract answers from text given a question.
              </p>

              <div className="mb-4 rounded-xl bg-white p-6 dark:bg-gray-900">
                <p className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  Context (from 10-K):
                </p>
                <p className="mb-4 text-sm italic text-gray-700 dark:text-gray-300">
                  "Our total revenue for fiscal year 2023 was $125.3 billion, representing a 12% increase from the prior year. Operating income reached $45.2 billion with an operating margin of 36%."
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="mb-1 text-sm font-semibold text-teal-700 dark:text-teal-400">
                      Q: What was the total revenue in 2023?
                    </p>
                    <p className="rounded-lg bg-green-50 p-2 text-sm text-gray-800 dark:bg-green-950 dark:text-gray-300">
                      A: <strong>$125.3 billion</strong>
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-sm font-semibold text-teal-700 dark:text-teal-400">
                      Q: What was the operating margin?
                    </p>
                    <p className="rounded-lg bg-green-50 p-2 text-sm text-gray-800 dark:bg-green-950 dark:text-gray-300">
                      A: <strong>36%</strong>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                → Modern QA systems power chatbots that can answer questions about financial documents!
              </p>
            </div>
          </section>

          {/* Section 5: Traditional ML for NLP */}
          <section className="rounded-3xl border border-teal-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-teal-700/50 dark:bg-gray-800/90 md:p-12">
            <div className="mb-8 inline-block rounded-2xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-3">
              <h2 className="text-3xl font-bold text-white">
                5. Traditional Machine Learning for NLP
              </h2>
            </div>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Before deep learning dominated NLP, traditional ML algorithms (Naive Bayes, SVM, Logistic Regression) were the go-to methods. They still have their place today!
            </p>

            {/* Feature Engineering */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                Feature Engineering for Text
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Traditional ML requires <strong>manual feature engineering</strong> - converting text into numerical features that capture important patterns.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                  <h4 className="mb-3 text-lg font-bold text-blue-900 dark:text-blue-300">
                    Statistical Features
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Word counts, character counts</li>
                    <li>• Average word length</li>
                    <li>• Sentence length distribution</li>
                    <li>• Presence of specific keywords</li>
                    <li>• Punctuation patterns</li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                  <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                    Linguistic Features
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Part-of-speech tags</li>
                    <li>• Named entity counts</li>
                    <li>• Dependency parse features</li>
                    <li>• Readability scores</li>
                    <li>• Sentiment lexicon matches</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Classic ML Algorithms */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                Classic ML Algorithms for Text
              </h3>

              <div className="space-y-6">
                <div className="rounded-xl border-2 border-green-200 bg-linear-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800 dark:from-green-950 dark:to-emerald-950">
                  <h4 className="mb-3 text-xl font-bold text-green-900 dark:text-green-300">
                    1. Naive Bayes
                  </h4>
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Probabilistic classifier based on Bayes' theorem. Assumes features are independent (naive assumption).
                  </p>

                  <div className="rounded-lg bg-gray-800 p-4">
                    <code className="block text-xs text-green-400">
                      from sklearn.naive_bayes import MultinomialNB{'\n'}
                      from sklearn.feature_extraction.text import TfidfVectorizer{'\n'}
                      {'\n'}
                      # Vectorize text{'\n'}
                      vectorizer = TfidfVectorizer(){'\n'}
                      X = vectorizer.fit_transform(documents){'\n'}
                      {'\n'}
                      # Train classifier{'\n'}
                      clf = MultinomialNB(){'\n'}
                      clf.fit(X, labels)  # labels: [0=negative, 1=positive]
                    </code>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-green-700 dark:text-green-400">
                    ✓ Fast, works well with small datasets, good for spam detection and sentiment analysis
                  </p>
                </div>

                <div className="rounded-xl border-2 border-orange-200 bg-linear-to-br from-orange-50 to-red-50 p-6 dark:border-orange-800 dark:from-orange-950 dark:to-red-950">
                  <h4 className="mb-3 text-xl font-bold text-orange-900 dark:text-orange-300">
                    2. Support Vector Machines (SVM)
                  </h4>
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Finds the optimal hyperplane that separates classes with maximum margin. Powerful for high-dimensional data (like text).
                  </p>

                  <div className="rounded-lg bg-gray-800 p-4">
                    <code className="block text-xs text-green-400">
                      from sklearn.svm import LinearSVC{'\n'}
                      {'\n'}
                      # SVM with linear kernel{'\n'}
                      clf = LinearSVC(){'\n'}
                      clf.fit(X_train, y_train){'\n'}
                      predictions = clf.predict(X_test)
                    </code>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-orange-700 dark:text-orange-400">
                    ✓ Effective for text classification, especially with TF-IDF features
                  </p>
                </div>

                <div className="rounded-xl border-2 border-indigo-200 bg-linear-to-br from-indigo-50 to-purple-50 p-6 dark:border-indigo-800 dark:from-indigo-950 dark:to-purple-950">
                  <h4 className="mb-3 text-xl font-bold text-indigo-900 dark:text-indigo-300">
                    3. Logistic Regression
                  </h4>
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Despite the name, it's a classification algorithm. Models probability of class membership.
                  </p>

                  <div className="rounded-lg bg-gray-800 p-4">
                    <code className="block text-xs text-green-400">
                      from sklearn.linear_model import LogisticRegression{'\n'}
                      {'\n'}
                      clf = LogisticRegression(max_iter=1000){'\n'}
                      clf.fit(X_train, y_train){'\n'}
                      {'\n'}
                      # Get probability scores{'\n'}
                      probabilities = clf.predict_proba(X_test)
                    </code>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                    ✓ Interpretable, outputs probabilities, good baseline for text classification
                  </p>
                </div>
              </div>
            </div>

            {/* When Traditional ML Still Works */}
            <div className="rounded-3xl border-4 border-cyan-200 bg-linear-to-br from-cyan-100 to-blue-100 p-8 dark:border-cyan-800 dark:from-cyan-950 dark:to-blue-950">
              <h3 className="mb-6 text-2xl font-bold text-cyan-900 dark:text-cyan-300">
                When Traditional ML Still Makes Sense
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Deep learning isn't always the answer! Traditional ML still shines in certain scenarios:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg bg-white p-4 dark:bg-gray-900">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">
                      Small Datasets
                    </h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Less than 10,000 examples? Traditional ML often outperforms deep learning which needs more data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white p-4 dark:bg-gray-900">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">
                      Interpretability Required
                    </h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Can inspect feature weights to understand why model made a decision. Critical for regulated finance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white p-4 dark:bg-gray-900">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">
                      Low Cost/Latency
                    </h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Fast inference, no GPU required. Can run on edge devices or in real-time systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white p-4 dark:bg-gray-900">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">
                      Simple Tasks
                    </h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Spam detection, basic sentiment - don't need a sledgehammer for a nail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Neural Networks for NLP */}
          <section className="rounded-3xl border border-teal-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-teal-700/50 dark:bg-gray-800/90 md:p-12">
            <div className="mb-8 inline-block rounded-2xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-3">
              <h2 className="text-3xl font-bold text-white">
                6. Neural Networks for NLP
              </h2>
            </div>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              The 2010s brought a revolution: <strong>deep learning</strong>. Neural networks, especially those designed for sequences (RNNs, LSTMs), transformed NLP. Then came <strong>attention mechanisms</strong> - the breakthrough that led to Transformers and modern LLMs.
            </p>

            {/* RNNs and LSTMs */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                Recurrent Neural Networks (RNNs)
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Unlike traditional neural networks that process fixed inputs, <strong>RNNs</strong> can handle sequences of variable length by maintaining a "memory" of previous inputs.
              </p>

              <div className="mb-6 rounded-xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-cyan-50 p-6 dark:border-blue-800 dark:from-blue-950 dark:to-cyan-950">
                <h4 className="mb-4 text-lg font-bold text-blue-900 dark:text-blue-300">
                  How RNNs Work (Intuition)
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  At each time step, an RNN takes:
                </p>

                <ol className="mb-4 ml-6 list-decimal space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>Current input</strong> (e.g., the current word)</li>
                  <li><strong>Hidden state</strong> (memory from previous words)</li>
                  <li>Produces: new hidden state + output</li>
                </ol>

                <div className="rounded-lg bg-gray-800 p-4">
                  <code className="block text-xs text-green-400">
                    Input: "Revenue", "increased", "by", "25%"{'\n'}
                    {'\n'}
                    Step 1: "Revenue" → h1 (hidden state 1){'\n'}
                    Step 2: "increased" + h1 → h2{'\n'}
                    Step 3: "by" + h2 → h3{'\n'}
                    Step 4: "25%" + h3 → h4 → Final prediction
                  </code>
                </div>

                <p className="mt-4 text-sm font-semibold text-blue-700 dark:text-blue-400">
                  → The hidden state "remembers" earlier words in the sentence!
                </p>
              </div>

              <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
                <h4 className="mb-3 text-lg font-bold text-red-900 dark:text-red-300">
                  ⚠️ Problem: Vanishing Gradients
                </h4>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                  RNNs struggled with <strong>long-range dependencies</strong>. By the time the network processed word #50, it had "forgotten" word #1.
                </p>
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  Example: "The company, which was founded in 1995 and operates in 47 countries, <strong>reported</strong> strong earnings."
                </p>
                <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                  → RNN struggles to connect "company" with "reported" due to long distance.
                </p>
              </div>
            </div>

            {/* LSTMs */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                Long Short-Term Memory (LSTM)
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>LSTMs</strong> solved the vanishing gradient problem with a more sophisticated memory mechanism: <strong>gates</strong> that control what to remember and forget.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                  <h4 className="mb-2 text-sm font-bold text-green-900 dark:text-green-300">
                    Forget Gate
                  </h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Decides what information to discard from cell state
                  </p>
                </div>

                <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
                  <h4 className="mb-2 text-sm font-bold text-blue-900 dark:text-blue-300">
                    Input Gate
                  </h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Decides what new information to add to cell state
                  </p>
                </div>

                <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
                  <h4 className="mb-2 text-sm font-bold text-purple-900 dark:text-purple-300">
                    Output Gate
                  </h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Decides what to output based on cell state
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm font-semibold text-teal-700 dark:text-teal-400">
                ✓ LSTMs could handle longer sequences, powering machine translation, speech recognition, and more!
              </p>
            </div>

            {/* Attention Mechanism */}
            <div className="rounded-3xl border-4 border-yellow-200 bg-linear-to-br from-yellow-100 to-orange-100 p-8 dark:border-yellow-800 dark:from-yellow-950 dark:to-orange-950">
              <h3 className="mb-6 text-2xl font-bold text-yellow-900 dark:text-yellow-300">
                🌟 The Attention Mechanism: The Game Changer
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Attention</strong> (2014-2017) was the breakthrough that revolutionized NLP. Instead of compressing the entire input sequence into a fixed vector, attention lets the model <strong>focus on relevant parts</strong> of the input dynamically.
              </p>

              <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-900">
                <h4 className="mb-4 text-lg font-bold text-orange-900 dark:text-orange-300">
                  How Attention Works (Simplified)
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  When translating "The company reported strong revenue growth":
                </p>

                <ol className="ml-6 list-decimal space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    To translate "reported", the model <strong>attends to</strong> (pays attention to) the words "company" and "reported" more than "the" or "strong"
                  </li>
                  <li>
                    To translate "growth", it attends to "revenue" and "growth"
                  </li>
                  <li>
                    Each output word gets a <strong>weighted combination</strong> of all input words, with weights learned by the model
                  </li>
                </ol>

                <div className="mt-4 rounded-lg bg-gray-800 p-4">
                  <p className="mb-2 text-xs font-semibold text-gray-400">
                    Attention Weights Visualization:
                  </p>
                  <code className="block text-xs text-green-400">
                    When generating "reported":{'\n'}
                    "The" → 0.05{'\n'}
                    "company" → 0.40 ← high attention{'\n'}
                    "reported" → 0.45 ← high attention{'\n'}
                    "strong" → 0.05{'\n'}
                    "revenue" → 0.03{'\n'}
                    "growth" → 0.02
                  </code>
                </div>
              </div>

              <p className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">
                → Attention solved the long-range dependency problem and became the foundation for <strong>Transformers</strong> (which we'll cover in Module 1)!
              </p>
            </div>
          </section>

          {/* Section 7: NLP in Financial Services */}
          <section className="rounded-3xl border border-teal-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-teal-700/50 dark:bg-gray-800/90 md:p-12">
            <div className="mb-8 inline-block rounded-2xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-3">
              <h2 className="text-3xl font-bold text-white">
                7. NLP in Financial Services: Real-World Applications
              </h2>
            </div>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Let's see how NLP techniques we've learned are applied in finance today. These are production systems running at major financial institutions!
            </p>

            {/* Use Case 1: Sentiment Analysis */}
            <div className="mb-8">
              <div className="mb-6 rounded-xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-cyan-50 p-6 dark:border-blue-800 dark:from-blue-950 dark:to-cyan-950">
                <h3 className="mb-4 text-2xl font-bold text-blue-900 dark:text-blue-300">
                  1. Sentiment Analysis on Earnings Calls
                </h3>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  <strong>Problem:</strong> Analyzing thousands of earnings call transcripts manually is impossible. Can we automatically detect management sentiment?
                </p>

                <p className="mb-3 text-sm font-semibold text-blue-700 dark:text-blue-400">
                  NLP Pipeline:
                </p>

                <ol className="mb-4 ml-6 list-decimal space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>Preprocessing:</strong> Extract Q&A section, remove filler words</li>
                  <li><strong>Feature extraction:</strong> TF-IDF or BERT embeddings</li>
                  <li><strong>Classification:</strong> LSTM or Transformer for sentiment (positive/neutral/negative)</li>
                  <li><strong>Signal generation:</strong> High negativity → sell signal</li>
                </ol>

                <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                  ✓ Hedge funds use this to make trading decisions within minutes of earnings releases!
                </p>
              </div>
            </div>

            {/* Use Case 2: Document Classification */}
            <div className="mb-8">
              <div className="mb-6 rounded-xl border-2 border-purple-200 bg-linear-to-br from-purple-50 to-pink-50 p-6 dark:border-purple-800 dark:from-purple-950 dark:to-pink-950">
                <h3 className="mb-4 text-2xl font-bold text-purple-900 dark:text-purple-300">
                  2. Automated Document Routing
                </h3>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  <strong>Problem:</strong> Banks receive thousands of documents daily (contracts, invoices, regulatory filings). How to route them to the right department?
                </p>

                <p className="mb-3 text-sm font-semibold text-purple-700 dark:text-purple-400">
                  NLP Solution:
                </p>

                <ul className="mb-4 ml-6 list-disc space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>Extract text</strong> from PDFs using OCR</li>
                  <li><strong>Classify</strong> document type (10-K, contract, invoice, KYC doc)</li>
                  <li><strong>Extract entities</strong> (company name, date, amount)</li>
                  <li><strong>Route automatically</strong> to appropriate team</li>
                </ul>

                <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                  ✓ Reduces manual processing time by 80%!
                </p>
              </div>
            </div>

            {/* Use Case 3: Named Entity Recognition */}
            <div className="mb-8">
              <div className="mb-6 rounded-xl border-2 border-green-200 bg-linear-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800 dark:from-green-950 dark:to-emerald-950">
                <h3 className="mb-4 text-2xl font-bold text-green-900 dark:text-green-300">
                  3. Regulatory Compliance Monitoring
                </h3>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  <strong>Problem:</strong> Monitor news and communications for mentions of sanctioned entities or potential money laundering patterns.
                </p>

                <p className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
                  NLP Techniques:
                </p>

                <ul className="mb-4 ml-6 list-disc space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>NER</strong> to extract company names, people, locations</li>
                  <li><strong>Entity linking</strong> to match against watchlists</li>
                  <li><strong>Relationship extraction</strong> to find connections between entities</li>
                  <li><strong>Alert generation</strong> for suspicious patterns</li>
                </ul>

                <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                  → Critical for AML (Anti-Money Laundering) and KYC (Know Your Customer) compliance
                </p>
              </div>
            </div>

            {/* Use Case 4: Question Answering */}
            <div className="rounded-xl border-2 border-orange-200 bg-linear-to-br from-orange-50 to-red-50 p-6 dark:border-orange-800 dark:from-orange-950 dark:to-red-950">
              <h3 className="mb-4 text-2xl font-bold text-orange-900 dark:text-orange-300">
                4. Chatbots for Customer Support
              </h3>

              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                <strong>Problem:</strong> Customers ask the same questions repeatedly. Can we automate responses while maintaining accuracy?
              </p>

              <p className="mb-3 text-sm font-semibold text-orange-700 dark:text-orange-400">
                Modern Approach:
              </p>

              <ul className="mb-4 ml-6 list-disc space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>RAG (Retrieval-Augmented Generation):</strong> Retrieve relevant policy docs, feed to LLM</li>
                <li><strong>Intent classification:</strong> Understand what customer wants</li>
                <li><strong>Entity extraction:</strong> Account number, transaction ID, etc.</li>
                <li><strong>Response generation:</strong> LLM generates personalized answer</li>
              </ul>

              <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                ✓ 60-70% of customer queries can be automated with high accuracy!
              </p>
            </div>
          </section>

          {/* Section 8: From NLP to Foundation Models */}
          <section className="rounded-3xl border border-teal-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-teal-700/50 dark:bg-gray-800/90 md:p-12">
            <div className="mb-8 inline-block rounded-2xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-3">
              <h2 className="text-3xl font-bold text-white">
                8. From NLP to Foundation Models: The Bridge Forward
              </h2>
            </div>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We've covered the evolution of NLP from simple Bag of Words to sophisticated attention mechanisms. Now let's connect this to the <strong>Transformer revolution</strong> that birthed modern foundation models.
            </p>

            {/* Limitations of Traditional NLP */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                What Traditional NLP Still Couldn't Do
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/30">
                  <h4 className="mb-2 text-sm font-bold text-red-900 dark:text-red-300">
                    1. Task-Specific Models
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Every task (sentiment, NER, classification) required training a separate model from scratch. No knowledge transfer.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950/30">
                  <h4 className="mb-2 text-sm font-bold text-orange-900 dark:text-orange-300">
                    2. Limited Context Understanding
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Even LSTMs struggled with paragraphs or documents. Context window was limited.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950/30">
                  <h4 className="mb-2 text-sm font-bold text-yellow-900 dark:text-yellow-300">
                    3. Data Hungry
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Required thousands of labeled examples for each new task. Expensive and time-consuming.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
                  <h4 className="mb-2 text-sm font-bold text-blue-900 dark:text-blue-300">
                    4. Sequential Processing
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    RNNs/LSTMs processed words one at a time. Couldn't be parallelized. Slow training on long sequences.
                  </p>
                </div>
              </div>
            </div>

            {/* The Transformer Revolution */}
            <div className="mb-12 rounded-3xl border-4 border-purple-200 bg-linear-to-br from-purple-100 to-pink-100 p-8 dark:border-purple-800 dark:from-purple-950 dark:to-pink-950">
              <h3 className="mb-6 text-3xl font-bold text-purple-900 dark:text-purple-300">
                🚀 The Transformer: "Attention Is All You Need" (2017)
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Transformer architecture, introduced by Google researchers in 2017, changed everything. It threw away recurrence entirely and relied <strong>purely on attention mechanisms</strong>.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-6 dark:bg-gray-900">
                  <h4 className="mb-3 text-lg font-bold text-green-900 dark:text-green-300">
                    ✓ What Transformers Solved
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>✓ <strong>Parallel processing:</strong> Process all words simultaneously → 10x faster training</li>
                    <li>✓ <strong>Long-range dependencies:</strong> Attention to any word, regardless of distance</li>
                    <li>✓ <strong>Scalability:</strong> Can be trained on billions of words</li>
                    <li>✓ <strong>Transfer learning:</strong> Pre-train once, fine-tune for many tasks</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-900">
                  <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                    🔑 Key Innovation: Self-Attention
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Each word attends to every other word in the sentence, learning which words are most relevant to each other.
                  </p>
                  <p className="text-xs italic text-gray-600 dark:text-gray-400">
                    "The bank approved my loan."
                  </p>
                  <p className="mt-2 text-xs text-gray-700 dark:text-gray-300">
                    → "bank" attends strongly to "approved" and "loan" to understand it's a financial institution, not a riverbank.
                  </p>
                </div>
              </div>
            </div>

            {/* Evolution Timeline */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-teal-900 dark:text-teal-300">
                From Transformers to Foundation Models
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                    2017
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-900 dark:text-white">
                      Transformer (Google)
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Original architecture for machine translation. "Attention Is All You Need" paper.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">
                    2018
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-900 dark:text-white">
                      BERT (Google) & GPT-1 (OpenAI)
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      First pre-trained Transformer models. BERT: bidirectional, GPT: autoregressive (predict next word).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-600 px-3 py-1 text-sm font-bold text-white">
                    2019-2020
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-900 dark:text-white">
                      GPT-2, GPT-3
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Scaling up: 1.5B → 175B parameters. Few-shot learning emerged. "Foundation model" era begins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-600 px-3 py-1 text-sm font-bold text-white">
                    2022-Present
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-900 dark:text-white">
                      ChatGPT, GPT-4, Claude, Gemini
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Instruction-tuned, RLHF-aligned models. Multimodal capabilities. The era we're in now!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="rounded-3xl border-4 border-teal-200 bg-linear-to-br from-teal-100 to-cyan-100 p-8 text-center dark:border-teal-800 dark:from-teal-950 dark:to-cyan-950">
              <h3 className="mb-4 text-3xl font-bold text-teal-900 dark:text-teal-300">
                🎯 You're Ready for Module 1!
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                You've now learned the <strong>foundations of NLP</strong>: from basic text preprocessing to sophisticated neural architectures. You understand what problems Transformers solved and why modern foundation models are so powerful.
              </p>
              <p className="text-xl font-bold text-teal-700 dark:text-teal-400">
                In Module 1, we'll dive deep into <strong>Foundation Models</strong> themselves - GPT, Claude, BERT - and understand how they're revolutionizing finance. Let's go! 🚀
              </p>
            </div>
          </section>

        {/* Navigation Footer */}
        <div className="mt-16 flex items-center justify-between rounded-3xl border border-gray-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/60">
            <a
              href="/"
              className="flex items-center font-semibold text-gray-600 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              ← Back to Course Home
            </a>
            <a
              href="/module1"
              className="flex items-center font-semibold text-gray-600 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
            >
              Next: Foundation Models →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
