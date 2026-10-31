export default function Module1() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-50 via-pink-50 to-slate-50 dark:from-gray-950 dark:via-purple-950 dark:to-slate-900">
      {/* Animated Background Shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-96 w-96 animate-pulse rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-600/10"></div>
        <div className="absolute right-0 top-1/3 h-80 w-80 animate-pulse rounded-full bg-pink-300/20 blur-3xl delay-700 dark:bg-pink-600/10"></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-pulse rounded-full bg-purple-300/20 blur-3xl delay-1000 dark:bg-purple-600/10"></div>
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <a
            href="/"
            className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            ← Back to Course Home
          </a>
          <div className="mb-4 block w-fit rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-6 py-2 text-sm font-bold text-white shadow-lg">
            Module 01
          </div>
          <h1 className="mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent dark:from-purple-400 dark:to-pink-400 sm:text-6xl">
            Foundation Models
          </h1>
          <p className="text-xl italic text-gray-600 dark:text-gray-300">
            Understanding the "engine" behind Gen AI
          </p>
        </div>

        <div className="space-y-16">
          {/* Section: Introduction to Language Models */}
          <section className="rounded-3xl border border-purple-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-purple-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-purple-600 dark:text-purple-400">
              Introduction to Language Models
            </h2>

            {/* The Challenge: Understanding Language */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                The Challenge: Teaching Machines to Understand Language
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Human language is incredibly complex. Unlike images or
                structured data, language has sequential dependencies, context,
                ambiguity, and nuance. How do we teach machines to understand
                that "bank" means different things in "river bank" versus
                "savings bank"? Or that "I didn't say she stole my money" has
                seven different meanings depending on which word you emphasize?
              </p>

              <div className="rounded-2xl border-2 border-purple-200 bg-purple-50/50 p-8 dark:border-purple-800 dark:bg-purple-950/30">
                <h4 className="mb-4 text-xl font-bold text-purple-600 dark:text-purple-400">
                  Key Challenges in Natural Language Processing
                </h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border-l-4 border-purple-500 bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-2 flex items-center font-bold text-gray-900 dark:text-white">
                      <span className="mr-3 text-2xl">🔗</span>
                      Sequential Dependencies
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Words depend on context from earlier in the sentence. "She
                      couldn't fit the trophy in the suitcase because it was too
                      big" - what is "it"?
                    </p>
                  </div>
                  <div className="rounded-xl border-l-4 border-pink-500 bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-2 flex items-center font-bold text-gray-900 dark:text-white">
                      <span className="mr-3 text-2xl">🎭</span>
                      Ambiguity & Context
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Same words mean different things in different contexts.
                      "Apple" could be a fruit, a company, or even a record
                      label.
                    </p>
                  </div>
                  <div className="rounded-xl border-l-4 border-purple-500 bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-2 flex items-center font-bold text-gray-900 dark:text-white">
                      <span className="mr-3 text-2xl">📏</span>
                      Variable Length
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Sentences can be 3 words or 300 words. Models need to
                      handle any length gracefully.
                    </p>
                  </div>
                  <div className="rounded-xl border-l-4 border-pink-500 bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-2 flex items-center font-bold text-gray-900 dark:text-white">
                      <span className="mr-3 text-2xl">🌐</span>
                      Long-Range Dependencies
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Critical information might be separated by many words or
                      sentences. Models must "remember" context across long
                      distances.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Early Approaches: Sequence-to-Sequence Models */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Early Approaches: Sequence-to-Sequence Models
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Before transformers, the dominant approach was Recurrent Neural
                Networks (RNNs) and their sequence-to-sequence (seq2seq)
                architecture. Let's understand why they were revolutionary - and
                why they ultimately fell short.
              </p>

              {/* RNN Architecture */}
              <div className="mb-8 rounded-2xl border-2 border-purple-300 bg-gradient-br from-purple-50 to-pink-50 p-8 dark:border-purple-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  Recurrent Neural Networks (RNNs)
                </h4>

                {/* RNN Diagram */}
                <div className="mb-6 rounded-xl bg-white p-8 dark:bg-gray-800">
                  <div className="flex items-center justify-center space-x-4 overflow-x-auto">
                    {["The", "cat", "sat", "on", "mat"].map((word, idx) => (
                      <div key={idx} className="flex shrink-0 items-center">
                        <div className="text-center">
                          <div className="mb-2 rounded-lg border-2 border-purple-400 bg-purple-100 px-6 py-3 font-semibold text-purple-700 dark:bg-purple-950/50 dark:text-purple-300">
                            {word}
                          </div>
                          <div className="my-2 text-2xl">↓</div>
                          <div className="relative">
                            <div className="rounded-lg border-2 border-pink-400 bg-pink-100 p-4 dark:bg-pink-950/50">
                              <div className="text-xs font-bold text-pink-700 dark:text-pink-300">
                                RNN Cell
                              </div>
                            </div>
                            {idx > 0 && (
                              <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl text-pink-500">
                                →
                              </div>
                            )}
                          </div>
                          <div className="mt-2 text-2xl">↓</div>
                          <div className="rounded-lg bg-purple-50 px-3 py-2 text-xs font-semibold dark:bg-purple-950/30">
                            h<sub>{idx}</sub>
                          </div>
                        </div>
                        {idx < 4 && (
                          <div className="mx-2 text-3xl text-pink-500">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-lg bg-purple-100 p-4 text-center dark:bg-purple-900/30">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Each word is processed <strong>sequentially</strong>,
                      passing hidden state to the next step
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border-l-4 border-green-500 bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-3 flex items-center font-bold text-green-600 dark:text-green-400">
                      <span className="mr-2 text-xl">✓</span>
                      Advantages
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        Can handle variable-length sequences
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        Shares parameters across time steps
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        Maintains a "memory" via hidden state
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border-l-4 border-red-500 bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-3 flex items-center font-bold text-red-600 dark:text-red-400">
                      <span className="mr-2 text-xl">✗</span>
                      Critical Problems
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <strong>Sequential bottleneck:</strong> Must process one
                        word at a time (slow!)
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <strong>Vanishing gradients:</strong> Hard to learn
                        long-range dependencies
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <strong>Information bottleneck:</strong> All context
                        compressed into fixed-size hidden state
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* LSTM: An Improvement */}
              <div className="mb-8 rounded-2xl border-2 border-blue-300 bg-gradient-br from-blue-50 to-cyan-50 p-8 dark:border-blue-700 dark:from-blue-950/50 dark:to-cyan-950/50">
                <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  LSTM: Long Short-Term Memory Networks
                </h4>
                <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
                  LSTMs were designed to solve the vanishing gradient problem by
                  introducing gates that control information flow
                </p>

                {/* LSTM Cell Diagram */}
                <div className="rounded-xl bg-white p-8 dark:bg-gray-800">
                  <h5 className="mb-6 text-center font-bold text-gray-900 dark:text-white">
                    LSTM Cell Architecture
                  </h5>
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg border-2 border-red-300 bg-red-50 p-4 text-center dark:bg-red-950/30">
                        <div className="mb-2 text-3xl">🚪</div>
                        <h6 className="mb-2 font-bold text-red-600 dark:text-red-400">
                          Forget Gate
                        </h6>
                        <p className="text-xs text-gray-700 dark:text-gray-300">
                          Decides what information to discard from cell state
                        </p>
                        <div className="mt-2 font-mono text-xs">
                          f<sub>t</sub> = σ(W<sub>f</sub> · [h<sub>t-1</sub>, x
                          <sub>t</sub>])
                        </div>
                      </div>

                      <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 text-center dark:bg-green-950/30">
                        <div className="mb-2 text-3xl">📥</div>
                        <h6 className="mb-2 font-bold text-green-600 dark:text-green-400">
                          Input Gate
                        </h6>
                        <p className="text-xs text-gray-700 dark:text-gray-300">
                          Decides what new information to store in cell state
                        </p>
                        <div className="mt-2 font-mono text-xs">
                          i<sub>t</sub> = σ(W<sub>i</sub> · [h<sub>t-1</sub>, x
                          <sub>t</sub>])
                        </div>
                      </div>

                      <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-4 text-center dark:bg-blue-950/30">
                        <div className="mb-2 text-3xl">📤</div>
                        <h6 className="mb-2 font-bold text-blue-600 dark:text-blue-400">
                          Output Gate
                        </h6>
                        <p className="text-xs text-gray-700 dark:text-gray-300">
                          Decides what to output based on cell state
                        </p>
                        <div className="mt-2 font-mono text-xs">
                          o<sub>t</sub> = σ(W<sub>o</sub> · [h<sub>t-1</sub>, x
                          <sub>t</sub>])
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-purple-300 bg-purple-50 p-4 dark:bg-purple-950/30">
                      <h6 className="mb-3 text-center font-bold text-purple-600 dark:text-purple-400">
                        Cell State Update
                      </h6>
                      <div className="space-y-2 text-center text-sm text-gray-700 dark:text-gray-300">
                        <div>
                          C<sub>t</sub> = f<sub>t</sub> ⊙ C<sub>t-1</sub> + i
                          <sub>t</sub> ⊙ tanh(W<sub>c</sub> · [h<sub>t-1</sub>,
                          x<sub>t</sub>])
                        </div>
                        <p className="text-xs italic">
                          (Forget some old info + Add some new info = Updated
                          memory)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border-l-4 border-green-500 bg-white p-4 dark:bg-gray-800">
                    <h6 className="mb-2 font-bold text-green-600 dark:text-green-400">
                      Improvements over RNN
                    </h6>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        Better gradient flow via cell state "highway"
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        Can learn longer dependencies (100+ tokens)
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        More stable training
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border-l-4 border-orange-500 bg-white p-4 dark:bg-gray-800">
                    <h6 className="mb-2 font-bold text-orange-600 dark:text-orange-400">
                      Still Limitations
                    </h6>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">⚠</span>
                        Still sequential - cannot parallelize
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">⚠</span>
                        Struggles with very long sequences (1000+ tokens)
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">⚠</span>
                        Computationally expensive (4× gates)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Seq2Seq with Attention */}
              <div className="rounded-2xl border-2 border-indigo-300 bg-gradient-br from-indigo-50 to-purple-50 p-8 dark:border-indigo-700 dark:from-indigo-950/50 dark:to-purple-950/50">
                <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  Sequence-to-Sequence with Attention
                </h4>
                <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
                  A breakthrough came with the attention mechanism (Bahdanau et
                  al., 2014) - allowing the model to "focus" on relevant parts
                  of the input
                </p>

                <div className="rounded-xl bg-white p-8 dark:bg-gray-800">
                  <h5 className="mb-4 text-center font-bold text-gray-900 dark:text-white">
                    Example: Machine Translation
                  </h5>
                  <div className="mb-6 grid gap-8 lg:grid-cols-2">
                    <div>
                      <h6 className="mb-3 font-bold text-indigo-600 dark:text-indigo-400">
                        Encoder (Source Language)
                      </h6>
                      <div className="space-y-2">
                        {["The", "black", "cat"].map((word, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border-2 border-indigo-300 bg-indigo-50 p-3 text-center font-semibold dark:bg-indigo-950/30"
                          >
                            {word}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h6 className="mb-3 font-bold text-purple-600 dark:text-purple-400">
                        Decoder (Target Language)
                      </h6>
                      <div className="space-y-2">
                        {["Le", "chat", "noir"].map((word, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="rounded-lg border-2 border-purple-300 bg-purple-50 p-3 text-center font-semibold dark:bg-purple-950/30">
                              {word}
                            </div>
                            <div className="flex justify-center gap-2 text-xs">
                              <span className="rounded bg-indigo-200 px-2 py-1 dark:bg-indigo-900">
                                Attends to:{" "}
                                {idx === 0
                                  ? "The"
                                  : idx === 1
                                  ? "cat"
                                  : "black"}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-indigo-100 p-4 dark:bg-indigo-900/30">
                    <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                      <strong>Key Insight:</strong> When generating "noir"
                      (black), the decoder can <em>attend to</em> the word
                      "black" in the source, even though it appears in a
                      different position!
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border-l-4 border-indigo-500 bg-white p-6 dark:bg-gray-800">
                  <h6 className="mb-3 font-bold text-indigo-600 dark:text-indigo-400">
                    The Birth of Attention
                  </h6>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Attention mechanisms allowed models to create dynamic
                    connections between input and output positions. This was
                    revolutionary, but there was still a problem: the encoder
                    and decoder were still RNNs/LSTMs, meaning they were still
                    sequential and slow.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    The question: What if we could use attention EVERYWHERE and
                    get rid of recurrence entirely?
                  </p>
                </div>
              </div>
            </div>

            {/* What are Large Language Models */}
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                What are Large Language Models (LLMs)?
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Large Language Models represent the culmination of decades of
                NLP research. They are neural networks trained on massive
                amounts of text data to understand and generate human language.
                The "large" refers to both the model size (billions of
                parameters) and training data (trillions of tokens).
              </p>

              {/* Visual Representation */}
              <div className="rounded-2xl border-2 border-purple-300 bg-gradient-br from-purple-50 to-pink-50 p-8 dark:border-purple-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  LLM Components
                </h4>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="group relative">
                    <div className="rounded-2xl border-2 border-purple-400 bg-white p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
                      <div className="mb-3 text-5xl">📊</div>
                      <h5 className="mb-2 font-bold text-purple-600 dark:text-purple-400">
                        Massive Data
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Books, websites, code repositories, articles
                      </p>
                      <div className="mt-4 rounded-lg bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                        Trillions of tokens
                      </div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="rounded-2xl border-2 border-pink-400 bg-white p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
                      <div className="mb-3 text-5xl">🧠</div>
                      <h5 className="mb-2 font-bold text-pink-600 dark:text-pink-400">
                        Transformer Architecture
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Attention-based architecture that processes sequences in
                        parallel
                      </p>
                      <div className="mt-4 rounded-lg bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700 dark:bg-pink-900/50 dark:text-pink-300">
                        Billions of parameters
                      </div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="rounded-2xl border-2 border-purple-400 bg-white p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
                      <div className="mb-3 text-5xl">⚡</div>
                      <h5 className="mb-2 font-bold text-purple-600 dark:text-purple-400">
                        Training Process
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Learning patterns through next-token prediction
                      </p>
                      <div className="mt-4 rounded-lg bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                        Weeks of GPU compute
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Characteristics */}
              <div className="mt-8 rounded-2xl bg-gray-50 p-8 dark:bg-gray-900/50">
                <h4 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                  Key Characteristics of LLMs
                </h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                      1
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Unprecedented Scale
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Models range from millions to hundreds of billions of
                        parameters. GPT-4 is estimated to have ~1.7 trillion
                        parameters across multiple experts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white">
                      2
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Emergent Capabilities
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Can perform tasks they weren't explicitly trained for.
                        At certain scales, models suddenly gain abilities like
                        arithmetic, translation, and reasoning.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                      3
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Contextual Understanding
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Understand nuance, context, ambiguity, and can maintain
                        coherent conversations across thousands of tokens.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white">
                      4
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Transfer Learning
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Pre-trained knowledge can be fine-tuned for specific
                        domains with minimal additional data, making them highly
                        adaptable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact on Financial Services */}
              <div className="mt-8 rounded-2xl border-l-4 border-purple-500 bg-purple-50/50 p-8 dark:bg-purple-950/30">
                <h4 className="mb-4 flex items-center text-xl font-bold text-gray-900 dark:text-white">
                  <span className="mr-3 text-3xl">💼</span>
                  Impact on Financial Services
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
                    <h5 className="mb-2 font-bold text-purple-600 dark:text-purple-400">
                      Customer Service
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      24/7 intelligent chatbots handling complex queries,
                      understanding context across multiple interactions, and
                      providing personalized financial advice.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
                    <h5 className="mb-2 font-bold text-purple-600 dark:text-purple-400">
                      Risk Analysis
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Processing vast amounts of financial documents, earnings
                      calls, news articles in seconds to identify risks and
                      opportunities.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
                    <h5 className="mb-2 font-bold text-purple-600 dark:text-purple-400">
                      Compliance & Regulation
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Automated monitoring of regulations, policy changes, and
                      ensuring all communications meet compliance requirements.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
                    <h5 className="mb-2 font-bold text-purple-600 dark:text-purple-400">
                      Research & Analysis
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Extracting insights from market data, financial news,
                      analyst reports, and generating comprehensive investment
                      research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Transformer Architecture */}
          <section className="rounded-3xl border border-blue-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-blue-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-blue-600 dark:text-blue-400">
              Transformer Architecture
            </h2>

            {/* Introduction */}
            <div className="mb-12">
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Transformer, introduced in the landmark 2017 paper{" "}
                <strong>"Attention Is All You Need"</strong> by Vaswani et al.,
                revolutionized natural language processing. It solved the
                fundamental problems of RNNs/LSTMs by:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border-2 border-green-300 bg-green-50 p-6 text-center dark:bg-green-950/30">
                  <div className="mb-3 text-4xl">⚡</div>
                  <h4 className="mb-2 font-bold text-green-600 dark:text-green-400">
                    Parallel Processing
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    All tokens processed simultaneously instead of sequentially
                  </p>
                </div>
                <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-6 text-center dark:bg-blue-950/30">
                  <div className="mb-3 text-4xl">🎯</div>
                  <h4 className="mb-2 font-bold text-blue-600 dark:text-blue-400">
                    Direct Connections
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Every word can attend to every other word directly
                  </p>
                </div>
                <div className="rounded-xl border-2 border-purple-300 bg-purple-50 p-6 text-center dark:bg-purple-950/30">
                  <div className="mb-3 text-4xl">📈</div>
                  <h4 className="mb-2 font-bold text-purple-600 dark:text-purple-400">
                    Scalability
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Can scale to billions of parameters efficiently
                  </p>
                </div>
              </div>
            </div>

            {/* High-Level Architecture */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                High-Level Architecture
              </h3>
              <div className="rounded-2xl border-2 border-blue-300 bg-gradient-br from-blue-50 to-cyan-50 p-8 dark:border-blue-700 dark:from-blue-950/50 dark:to-cyan-950/50">
                <div className="mb-6 grid gap-8 lg:grid-cols-2">
                  {/* Encoder Stack */}
                  <div className="rounded-xl border-2 border-blue-400 bg-white p-6 dark:bg-gray-800">
                    <h4 className="mb-4 text-center text-xl font-bold text-blue-600 dark:text-blue-400">
                      ENCODER
                    </h4>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-blue-50 p-3 text-center text-sm dark:bg-blue-950/30">
                        <div className="font-semibold text-blue-700 dark:text-blue-300">
                          Input Embeddings + Positional Encoding
                        </div>
                      </div>
                      <div className="text-center text-2xl">↓</div>

                      {/* Encoder Block */}
                      <div className="rounded-xl border-2 border-blue-300 bg-blue-100 p-4 dark:bg-blue-900/30">
                        <div className="mb-3 text-center text-sm font-bold text-blue-800 dark:text-blue-200">
                          Encoder Block (×N)
                        </div>
                        <div className="space-y-2">
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Multi-Head Self-Attention
                          </div>
                          <div className="text-center text-sm">↓</div>
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Add & Normalize
                          </div>
                          <div className="text-center text-sm">↓</div>
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Feed Forward Network
                          </div>
                          <div className="text-center text-sm">↓</div>
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Add & Normalize
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-xs text-gray-600 dark:text-gray-400">
                        Stacked N times (e.g., 12 or 24 layers)
                      </div>
                    </div>
                  </div>

                  {/* Decoder Stack */}
                  <div className="rounded-xl border-2 border-purple-400 bg-white p-6 dark:bg-gray-800">
                    <h4 className="mb-4 text-center text-xl font-bold text-purple-600 dark:text-purple-400">
                      DECODER
                    </h4>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-purple-50 p-3 text-center text-sm dark:bg-purple-950/30">
                        <div className="font-semibold text-purple-700 dark:text-purple-300">
                          Output Embeddings + Positional Encoding
                        </div>
                      </div>
                      <div className="text-center text-2xl">↓</div>

                      {/* Decoder Block */}
                      <div className="rounded-xl border-2 border-purple-300 bg-purple-100 p-4 dark:bg-purple-900/30">
                        <div className="mb-3 text-center text-sm font-bold text-purple-800 dark:text-purple-200">
                          Decoder Block (×N)
                        </div>
                        <div className="space-y-2">
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Masked Multi-Head Attention
                          </div>
                          <div className="text-center text-sm">↓</div>
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Add & Normalize
                          </div>
                          <div className="text-center text-sm">↓</div>
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Cross-Attention to Encoder
                          </div>
                          <div className="text-center text-sm">↓</div>
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Add & Normalize
                          </div>
                          <div className="text-center text-sm">↓</div>
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Feed Forward Network
                          </div>
                          <div className="text-center text-sm">↓</div>
                          <div className="rounded-lg bg-white p-2 text-center text-xs dark:bg-gray-800">
                            Add & Normalize
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-blue-100 p-4 dark:bg-blue-900/30">
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> Modern LLMs like GPT use decoder-only
                    architecture (no encoder). BERT uses encoder-only. Original
                    Transformer used both for translation.
                  </p>
                </div>
              </div>
            </div>

            {/* Input Preparation */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Input Preparation: From Text to Vectors
              </h3>

              <div className="mb-8 rounded-2xl border-2 border-purple-300 bg-white p-8 dark:border-purple-700 dark:bg-gray-800">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  Step-by-Step Transformation
                </h4>

                {/* Pipeline */}
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
                        <div className="mb-1 text-xs font-semibold text-gray-600 dark:text-gray-400">
                          Input Text
                        </div>
                        <div className="font-mono text-sm text-gray-900 dark:text-white">
                          "The cat sat on the mat"
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-2xl">↓</div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="rounded-lg bg-purple-100 p-4 dark:bg-purple-950/30">
                        <div className="mb-1 text-xs font-semibold text-purple-700 dark:text-purple-300">
                          Tokenization
                        </div>
                        <div className="font-mono text-sm text-gray-900 dark:text-white">
                          ["The", "cat", "sat", "on", "the", "mat"]
                        </div>
                        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                          Text split into tokens (can be words, subwords, or
                          characters)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-2xl">↓</div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="rounded-lg bg-pink-100 p-4 dark:bg-pink-950/30">
                        <div className="mb-1 text-xs font-semibold text-pink-700 dark:text-pink-300">
                          Token IDs (Vocabulary Lookup)
                        </div>
                        <div className="font-mono text-sm text-gray-900 dark:text-white">
                          [103, 2845, 2938, 2006, 103, 4971]
                        </div>
                        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                          Each token mapped to unique integer from vocabulary
                          (e.g., 50,000 tokens)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-2xl">↓</div>

                  {/* Step 4 */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-950/30">
                        <div className="mb-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                          Token Embeddings
                        </div>
                        <div className="font-mono text-xs text-gray-900 dark:text-white">
                          [[0.12, -0.43, 0.87, ...], [0.34, 0.21, -0.56, ...],
                          ...]
                        </div>
                        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                          Each ID converted to dense vector (e.g., 768
                          dimensions). Learned during training.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-2xl">↓</div>

                  {/* Step 5 */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">
                      5
                    </div>
                    <div className="flex-1">
                      <div className="rounded-lg bg-green-100 p-4 dark:bg-green-950/30">
                        <div className="mb-1 text-xs font-semibold text-green-700 dark:text-green-300">
                          + Positional Encoding
                        </div>
                        <div className="font-mono text-xs text-gray-900 dark:text-white">
                          Embedding + Position → Final Input
                        </div>
                        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                          Add positional information so model knows word order
                          (sin/cos functions)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Positional Encoding Details */}
              <div className="rounded-2xl border-2 border-green-300 bg-gradient-br from-green-50 to-emerald-50 p-8 dark:border-green-700 dark:from-green-950/50 dark:to-emerald-950/50">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  Why Positional Encoding?
                </h4>
                <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
                  Transformers process all tokens in parallel - they have NO
                  inherent sense of order! We need to inject position
                  information.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                      Formula (Sinusoidal)
                    </h5>
                    <div className="space-y-2 font-mono text-xs">
                      <div>PE(pos, 2i) = sin(pos / 10000^(2i/d))</div>
                      <div>PE(pos, 2i+1) = cos(pos / 10000^(2i/d))</div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      Where: pos = position, i = dimension, d = embedding
                      dimension
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                      Properties
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        Unique encoding for each position
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        Can generalize to longer sequences
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        Allows model to learn relative positions
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        Deterministic (not learned parameters)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Attention Mechanism */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Self-Attention: The Core Innovation
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Self-attention allows each word to look at all other words in
                the sequence and decide which ones are most relevant to
                understanding it. It's like giving each word the ability to ask:
                "Which other words should I pay attention to?"
              </p>

              {/* Visual Example */}
              <div className="mb-8 rounded-2xl border-2 border-purple-300 bg-gradient-br from-purple-50 to-pink-50 p-8 dark:border-purple-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  Example: "The animal didn't cross the street because it was
                  too tired"
                </h4>

                <div className="rounded-xl bg-white p-8 dark:bg-gray-800">
                  <p className="mb-6 text-center font-semibold text-gray-900 dark:text-white">
                    What does "it" refer to?
                  </p>

                  <div className="mb-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border-2 border-gray-300 bg-gray-50 p-4 dark:bg-gray-900">
                      <div className="mb-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Without Attention
                      </div>
                      <p className="text-center text-xs text-gray-600 dark:text-gray-400">
                        "it" is just the 10th word. No understanding of what it
                        refers to.
                      </p>
                    </div>
                    <div className="rounded-lg border-2 border-purple-400 bg-purple-50 p-4 dark:bg-purple-950/30">
                      <div className="mb-3 text-center text-sm font-semibold text-purple-700 dark:text-purple-300">
                        With Attention
                      </div>
                      <p className="text-center text-xs text-gray-700 dark:text-gray-300">
                        "it" attends strongly to "animal" (not "street"),
                        understanding the reference!
                      </p>
                    </div>
                  </div>

                  {/* Attention Scores Visualization */}
                  <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-950/30">
                    <h5 className="mb-4 text-center font-bold text-gray-900 dark:text-white">
                      Attention scores for "it"
                    </h5>
                    <div className="space-y-2">
                      {[
                        { word: "animal", score: 0.65, color: "bg-purple-600" },
                        { word: "tired", score: 0.2, color: "bg-purple-400" },
                        { word: "street", score: 0.08, color: "bg-purple-300" },
                        {
                          word: "because",
                          score: 0.04,
                          color: "bg-purple-200",
                        },
                        { word: "others", score: 0.03, color: "bg-purple-100" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-24 text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {item.word}
                          </div>
                          <div className="flex-1">
                            <div className="h-6 rounded-full bg-gray-200 dark:bg-gray-700">
                              <div
                                className={`h-6 rounded-full ${item.color} flex items-center justify-end px-3 text-xs font-bold text-white`}
                                style={{ width: `${item.score * 100}%` }}
                              >
                                {item.score}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* QKV Mechanism */}
              <div className="mb-8 rounded-2xl border-2 border-blue-300 bg-white p-8 dark:border-blue-700 dark:bg-gray-800">
                <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  Query, Key, Value (QKV) Mechanism
                </h4>

                <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
                  Self-attention uses three transformations of the input: Query,
                  Key, and Value
                </p>

                <div className="mb-8 grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl border-2 border-purple-300 bg-purple-50 p-6 dark:bg-purple-950/30">
                    <div className="mb-3 text-center text-4xl">🔍</div>
                    <h5 className="mb-3 text-center font-bold text-purple-600 dark:text-purple-400">
                      Query (Q)
                    </h5>
                    <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                      "What am I looking for?"
                    </p>
                    <div className="mt-4 rounded-lg bg-white p-3 font-mono text-xs dark:bg-gray-800">
                      Q = X · W<sub>Q</sub>
                    </div>
                    <p className="mt-2 text-center text-xs italic text-gray-600 dark:text-gray-400">
                      The question each token asks
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-pink-300 bg-pink-50 p-6 dark:bg-pink-950/30">
                    <div className="mb-3 text-center text-4xl">🔑</div>
                    <h5 className="mb-3 text-center font-bold text-pink-600 dark:text-pink-400">
                      Key (K)
                    </h5>
                    <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                      "What do I have to offer?"
                    </p>
                    <div className="mt-4 rounded-lg bg-white p-3 font-mono text-xs dark:bg-gray-800">
                      K = X · W<sub>K</sub>
                    </div>
                    <p className="mt-2 text-center text-xs italic text-gray-600 dark:text-gray-400">
                      What each token advertises
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-6 dark:bg-blue-950/30">
                    <div className="mb-3 text-center text-4xl">💎</div>
                    <h5 className="mb-3 text-center font-bold text-blue-600 dark:text-blue-400">
                      Value (V)
                    </h5>
                    <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                      "What information do I give?"
                    </p>
                    <div className="mt-4 rounded-lg bg-white p-3 font-mono text-xs dark:bg-gray-800">
                      V = X · W<sub>V</sub>
                    </div>
                    <p className="mt-2 text-center text-xs italic text-gray-600 dark:text-gray-400">
                      The actual content to pass
                    </p>
                  </div>
                </div>

                {/* Deep Dive: Mathematical Details */}
                <div className="mb-8 rounded-2xl border-2 border-indigo-300 bg-indigo-50 p-8 dark:border-indigo-700 dark:bg-indigo-950/30">
                  <h5 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                    Deep Dive: What Are X and W?
                  </h5>

                  {/* X: The Input */}
                  <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h6 className="mb-4 flex items-center text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      <span className="mr-3 text-2xl">📥</span>
                      What is X?
                    </h6>
                    <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      <strong>X</strong> is the input matrix containing the
                      embeddings of all tokens in your sequence. After
                      tokenization and embedding lookup (+ positional encoding),
                      each word becomes a vector of numbers.
                    </p>
                    <div className="rounded-lg bg-indigo-100 p-4 dark:bg-indigo-900/30">
                      <div className="mb-3 text-center font-mono text-sm font-bold text-gray-900 dark:text-white">
                        X: Shape = (seq_length, d_model)
                      </div>
                      <div className="mb-4 space-y-2 text-xs text-gray-700 dark:text-gray-300">
                        <p>
                          <strong>seq_length:</strong> Number of tokens in your
                          input (e.g., 10 tokens)
                        </p>
                        <p>
                          <strong>d_model:</strong> Embedding dimension (e.g.,
                          512 or 768)
                        </p>
                      </div>
                      <div className="rounded bg-white p-3 font-mono text-xs dark:bg-gray-800">
                        <div className="mb-2 text-center font-bold text-gray-600 dark:text-gray-400">
                          Example: "The cat sat"
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-center">
                            <thead>
                              <tr className="text-indigo-600 dark:text-indigo-400">
                                <th className="px-2"></th>
                                <th className="px-2">dim 0</th>
                                <th className="px-2">dim 1</th>
                                <th className="px-2">dim 2</th>
                                <th className="px-2">...</th>
                                <th className="px-2">dim 767</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                              <tr>
                                <td className="px-2 font-semibold">The</td>
                                <td className="px-2">0.12</td>
                                <td className="px-2">-0.43</td>
                                <td className="px-2">0.87</td>
                                <td className="px-2">...</td>
                                <td className="px-2">0.21</td>
                              </tr>
                              <tr>
                                <td className="px-2 font-semibold">cat</td>
                                <td className="px-2">0.34</td>
                                <td className="px-2">0.21</td>
                                <td className="px-2">-0.56</td>
                                <td className="px-2">...</td>
                                <td className="px-2">-0.12</td>
                              </tr>
                              <tr>
                                <td className="px-2 font-semibold">sat</td>
                                <td className="px-2">-0.23</td>
                                <td className="px-2">0.67</td>
                                <td className="px-2">0.45</td>
                                <td className="px-2">...</td>
                                <td className="px-2">0.89</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-3 text-center text-gray-600 dark:text-gray-400">
                          Matrix shape: (3, 768) → 3 tokens × 768 dimensions
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* W: The Weight Matrices */}
                  <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h6 className="mb-4 flex items-center text-lg font-bold text-purple-600 dark:text-purple-400">
                      <span className="mr-3 text-2xl">⚙️</span>
                      What are W<sub>Q</sub>, W<sub>K</sub>, W<sub>V</sub>?
                    </h6>
                    <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      These are <strong>learned weight matrices</strong> that
                      transform the input embeddings into different
                      representations. Think of them as "projection lenses" that
                      look at the same input from three different perspectives.
                    </p>
                    <div className="rounded-lg bg-purple-100 p-4 dark:bg-purple-900/30">
                      <div className="mb-3 text-center font-mono text-sm font-bold text-gray-900 dark:text-white">
                        Weight Matrices Shape = (d_model, d_k)
                      </div>
                      <div className="mb-4 space-y-2 text-xs text-gray-700 dark:text-gray-300">
                        <p>
                          <strong>d_model:</strong> Input embedding dimension
                          (768)
                        </p>
                        <p>
                          <strong>d_k:</strong> Output dimension for Q and K
                          (typically 64)
                        </p>
                        <p>
                          <strong>d_v:</strong> Output dimension for V
                          (typically same as d_k)
                        </p>
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg bg-white p-3 dark:bg-gray-800">
                          <div className="mb-2 text-center font-mono text-xs font-bold text-purple-600 dark:text-purple-400">
                            W<sub>Q</sub>
                          </div>
                          <div className="text-center text-xs text-gray-600 dark:text-gray-400">
                            (768, 64)
                          </div>
                          <div className="mt-2 text-center text-xs text-gray-700 dark:text-gray-300">
                            Transforms input into "query" space
                          </div>
                        </div>
                        <div className="rounded-lg bg-white p-3 dark:bg-gray-800">
                          <div className="mb-2 text-center font-mono text-xs font-bold text-pink-600 dark:text-pink-400">
                            W<sub>K</sub>
                          </div>
                          <div className="text-center text-xs text-gray-600 dark:text-gray-400">
                            (768, 64)
                          </div>
                          <div className="mt-2 text-center text-xs text-gray-700 dark:text-gray-300">
                            Transforms input into "key" space
                          </div>
                        </div>
                        <div className="rounded-lg bg-white p-3 dark:bg-gray-800">
                          <div className="mb-2 text-center font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                            W<sub>V</sub>
                          </div>
                          <div className="text-center text-xs text-gray-600 dark:text-gray-400">
                            (768, 64)
                          </div>
                          <div className="mt-2 text-center text-xs text-gray-700 dark:text-gray-300">
                            Transforms input into "value" space
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The Matrix Multiplication */}
                  <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h6 className="mb-4 flex items-center text-lg font-bold text-blue-600 dark:text-blue-400">
                      <span className="mr-3 text-2xl">🔢</span>
                      The Matrix Multiplication: X · W
                    </h6>
                    <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      When we compute Q = X · W<sub>Q</sub>, we're performing
                      matrix multiplication that transforms each token's
                      embedding from d_model dimensions to d_k dimensions.
                    </p>

                    {/* Visual Flow Diagram */}
                    <div className="mb-6 rounded-lg bg-gradient-r from-purple-100 to-blue-100 p-6 dark:from-purple-950/50 dark:to-blue-950/50">
                      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <div className="text-center">
                          <div className="mb-2 rounded-lg bg-white px-4 py-3 font-mono font-bold text-gray-900 shadow dark:bg-gray-800 dark:text-white">
                            X
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            (3, 768)
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                          ×
                        </div>
                        <div className="text-center">
                          <div className="mb-2 rounded-lg bg-purple-500 px-4 py-3 font-mono font-bold text-white shadow">
                            W<sub>Q</sub>
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            (768, 64)
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                          =
                        </div>
                        <div className="text-center">
                          <div className="mb-2 rounded-lg bg-blue-500 px-4 py-3 font-mono font-bold text-white shadow">
                            Q
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            (3, 64)
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-center text-xs text-gray-700 dark:text-gray-300">
                        Each of the 3 tokens now has a 64-dimensional query
                        vector
                      </div>
                    </div>

                    {/* Concrete Example */}
                    <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-4 dark:border-blue-700 dark:bg-blue-950/30">
                      <h6 className="mb-3 text-center font-bold text-gray-900 dark:text-white">
                        Concrete Numerical Example
                      </h6>
                      <div className="space-y-3 text-xs">
                        <div className="rounded bg-white p-3 dark:bg-gray-800">
                          <p className="mb-2 font-semibold text-gray-900 dark:text-white">
                            For token "cat" (row 2 of X):
                          </p>
                          <div className="font-mono text-gray-700 dark:text-gray-300">
                            X[1] = [0.34, 0.21, -0.56, ..., -0.12] (768 numbers)
                          </div>
                        </div>
                        <div className="text-center text-xl">
                          ↓ multiply by W<sub>Q</sub> ↓
                        </div>
                        <div className="rounded bg-white p-3 dark:bg-gray-800">
                          <p className="mb-2 font-semibold text-gray-900 dark:text-white">
                            Result: Query vector for "cat"
                          </p>
                          <div className="font-mono text-gray-700 dark:text-gray-300">
                            Q[1] = [0.12, -0.34, 0.56, ..., 0.23] (64 numbers)
                          </div>
                        </div>
                        <div className="mt-3 rounded bg-indigo-100 p-3 text-center dark:bg-indigo-900/30">
                          <p className="font-semibold text-indigo-800 dark:text-indigo-200">
                            This query vector represents: "What is 'cat' looking
                            for in other tokens?"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Three Separate Transformations */}
                  <div className="mt-6 rounded-xl border-l-4 border-indigo-500 bg-white p-6 dark:bg-gray-800">
                    <h6 className="mb-3 font-bold text-indigo-600 dark:text-indigo-400">
                      Why Do We Need Three Separate Transformations?
                    </h6>
                    <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                      <p>
                        <strong className="text-purple-600 dark:text-purple-400">
                          Q (Query):
                        </strong>{" "}
                        Represents what this token is "looking for" or "asking
                        about". It encodes the search criteria.
                      </p>
                      <p>
                        <strong className="text-pink-600 dark:text-pink-400">
                          K (Key):
                        </strong>{" "}
                        Represents what this token "advertises" or "offers" to
                        other tokens. It's how tokens describe themselves.
                      </p>
                      <p>
                        <strong className="text-blue-600 dark:text-blue-400">
                          V (Value):
                        </strong>{" "}
                        The actual information/content that will be passed along
                        once we determine relevance.
                      </p>
                      <div className="mt-4 rounded-lg bg-indigo-50 p-4 dark:bg-indigo-950/30">
                        <p className="italic">
                          <strong>Key Insight:</strong> Separating these three
                          roles allows the model to learn different aspects of
                          relationships. The Query and Key determine{" "}
                          <em>which</em> tokens to pay attention to, while the
                          Value determines <em>what information</em> to extract
                          from those tokens. This is more powerful than using
                          the same representation for all three purposes!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analogy */}
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950/30">
                  <h6 className="mb-3 font-bold text-blue-700 dark:text-blue-300">
                    Library Analogy
                  </h6>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>Query:</strong> "I'm looking for books about
                      machine learning"
                    </p>
                    <p>
                      <strong>Key:</strong> Each book's index card describing
                      its content
                    </p>
                    <p>
                      <strong>Value:</strong> The actual book content
                    </p>
                    <p className="pt-2 italic">
                      You compare your query with all keys, find relevant
                      matches, then retrieve the corresponding values!
                    </p>
                  </div>
                </div>
              </div>

              {/* Attention Formula */}
              <div className="rounded-2xl border-2 border-indigo-300 bg-gradient-br from-indigo-50 to-purple-50 p-8 dark:border-indigo-700 dark:from-indigo-950/50 dark:to-purple-950/50">
                <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  The Attention Formula
                </h4>

                <div className="mb-6 rounded-xl bg-gray-900 p-6 text-white">
                  <div className="mb-4 text-center font-mono text-2xl">
                    Attention(Q, K, V) = softmax(
                    <span className="text-purple-400">
                      QK<sup>T</sup>
                    </span>{" "}
                    / √d<sub>k</sub>) V
                  </div>
                  <div className="text-center text-sm text-gray-400">
                    The formula that changed AI forever
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                      1
                    </div>
                    <div className="flex-1 rounded-lg bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 font-bold text-gray-900 dark:text-white">
                        Compute Similarity: QK<sup>T</sup>
                      </h6>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Dot product between query and all keys. High value =
                        high relevance.
                      </p>
                      <div className="mt-2 rounded bg-purple-50 p-2 text-xs dark:bg-purple-950/30">
                        Shape: (seq_length, d<sub>k</sub>) × (d<sub>k</sub>,
                        seq_length) → (seq_length, seq_length)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">
                      2
                    </div>
                    <div className="flex-1 rounded-lg bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 font-bold text-gray-900 dark:text-white">
                        Scale: / √d<sub>k</sub>
                      </h6>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Divide by square root of key dimension to prevent
                        vanishing gradients
                      </p>
                      <div className="mt-2 rounded bg-pink-50 p-2 text-xs dark:bg-pink-950/30">
                        Without scaling, dot products can be too large → softmax
                        saturates
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                      3
                    </div>
                    <div className="flex-1 rounded-lg bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 font-bold text-gray-900 dark:text-white">
                        Softmax
                      </h6>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Convert scores to probabilities (sum to 1). Determines
                        how much to attend to each token.
                      </p>
                      <div className="mt-2 rounded bg-blue-50 p-2 text-xs dark:bg-blue-950/30">
                        Output: attention weights (0 to 1) for each position
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                      4
                    </div>
                    <div className="flex-1 rounded-lg bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 font-bold text-gray-900 dark:text-white">
                        Weighted Sum: × V
                      </h6>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Multiply attention weights by values. Output is weighted
                        combination of all values.
                      </p>
                      <div className="mt-2 rounded bg-green-50 p-2 text-xs dark:bg-green-950/30">
                        Final output: context-aware representation for each
                        token
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Head Attention */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Multi-Head Attention: Power in Diversity
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Instead of performing attention once, transformers use{" "}
                <strong>multiple attention heads</strong> in parallel. Each head
                learns to focus on different aspects of the relationships
                between tokens.
              </p>

              <div className="mb-8 rounded-2xl border-2 border-purple-300 bg-gradient-br from-purple-50 to-pink-50 p-8 dark:border-purple-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  Why Multiple Heads?
                </h4>

                <div className="mb-8 grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl border-2 border-purple-400 bg-white p-6 dark:bg-gray-800">
                    <div className="mb-3 text-center text-4xl">👁️</div>
                    <h5 className="mb-3 text-center font-bold text-purple-600 dark:text-purple-400">
                      Head 1: Syntax
                    </h5>
                    <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                      Focuses on grammatical relationships (subject-verb-object)
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-pink-400 bg-white p-6 dark:bg-gray-800">
                    <div className="mb-3 text-center text-4xl">🔗</div>
                    <h5 className="mb-3 text-center font-bold text-pink-600 dark:text-pink-400">
                      Head 2: Coreference
                    </h5>
                    <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                      Tracks what pronouns refer to ("it" → "animal")
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-blue-400 bg-white p-6 dark:bg-gray-800">
                    <div className="mb-3 text-center text-4xl">🎨</div>
                    <h5 className="mb-3 text-center font-bold text-blue-600 dark:text-blue-400">
                      Head 3: Semantics
                    </h5>
                    <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                      Captures meaning and context relationships
                    </p>
                  </div>
                </div>

                {/* Architecture Diagram */}
                <div className="rounded-xl bg-white p-8 dark:bg-gray-800">
                  <h5 className="mb-6 text-center font-bold text-gray-900 dark:text-white">
                    Multi-Head Attention Architecture
                  </h5>

                  <div className="space-y-6">
                    {/* Input */}
                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-gray-200 px-8 py-4 font-mono font-bold dark:bg-gray-700">
                        Input X (seq_len, d_model = 512)
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    {/* Parallel Heads */}
                    <div className="grid gap-4 md:grid-cols-4">
                      {[1, 2, 3, 4].map((head) => (
                        <div
                          key={head}
                          className="rounded-xl border-2 border-purple-300 bg-purple-50 p-4 dark:border-purple-600 dark:bg-purple-950/30"
                        >
                          <div className="mb-3 text-center text-xs font-bold text-purple-700 dark:text-purple-300">
                            Head {head}
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="rounded bg-white p-2 text-center dark:bg-gray-800">
                              W<sub>Q{head}</sub>, W<sub>K{head}</sub>, W
                              <sub>V{head}</sub>
                            </div>
                            <div className="text-center">↓</div>
                            <div className="rounded bg-purple-100 p-2 text-center dark:bg-purple-900/50">
                              Attention
                            </div>
                            <div className="text-center">↓</div>
                            <div className="rounded bg-white p-2 text-center font-mono dark:bg-gray-800">
                              (seq, 64)
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                      ... typically 8 or 12 heads in parallel
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    {/* Concatenation */}
                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-pink-100 px-6 py-3 dark:bg-pink-950/30">
                        <div className="mb-1 font-bold text-pink-700 dark:text-pink-300">
                          Concatenate all heads
                        </div>
                        <div className="font-mono text-xs text-gray-700 dark:text-gray-300">
                          (seq_len, 8 × 64 = 512)
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    {/* Output Projection */}
                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-blue-100 px-6 py-3 dark:bg-blue-950/30">
                        <div className="mb-1 font-bold text-blue-700 dark:text-blue-300">
                          Linear projection: W<sub>O</sub>
                        </div>
                        <div className="font-mono text-xs text-gray-700 dark:text-gray-300">
                          (seq_len, d_model = 512)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Formula */}
                <div className="mt-6 rounded-lg bg-gray-900 p-6 text-white">
                  <div className="mb-2 text-center font-mono text-sm">
                    MultiHead(Q, K, V) = Concat(head<sub>1</sub>, ..., head
                    <sub>h</sub>) W<sub>O</sub>
                  </div>
                  <div className="text-center font-mono text-xs">
                    where head<sub>i</sub> = Attention(QW<sub>Q,i</sub>, KW
                    <sub>K,i</sub>, VW<sub>V,i</sub>)
                  </div>
                </div>

                <div className="mt-6 rounded-xl border-l-4 border-purple-500 bg-white p-6 dark:bg-gray-800">
                  <h6 className="mb-3 font-bold text-purple-600 dark:text-purple-400">
                    The Magic of Multi-Head Attention
                  </h6>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">✓</span>
                      <span>
                        Each head can attend to different positions and capture
                        different types of relationships
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">✓</span>
                      <span>
                        Smaller dimension per head (64 vs 512) makes computation
                        efficient
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">✓</span>
                      <span>
                        Model learns richer representations by combining
                        multiple perspectives
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Layer Normalization and Residual Connections */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Layer Normalization & Residual Connections
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Two critical techniques that enable training deep transformer
                networks: residual connections (skip connections) and layer
                normalization.
              </p>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Residual Connections */}
                <div className="rounded-2xl border-2 border-green-300 bg-gradient-br from-green-50 to-emerald-50 p-8 dark:border-green-700 dark:from-green-950/50 dark:to-emerald-950/50">
                  <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                    Residual Connections
                  </h4>

                  <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="inline-block rounded-lg bg-gray-200 px-6 py-3 font-mono text-sm dark:bg-gray-700">
                          Input: x
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex-1">
                          <div className="text-center text-xl">↓</div>
                          <div className="rounded-lg bg-green-100 p-4 text-center dark:bg-green-950/30">
                            <div className="mb-2 font-bold text-green-700 dark:text-green-300">
                              Attention / FFN
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              F(x)
                            </div>
                          </div>
                          <div className="text-center text-xl">↓</div>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          +
                        </div>
                        <div className="flex-1">
                          <div className="border-l-4 border-green-500 pl-4">
                            <div className="text-sm font-bold text-gray-700 dark:text-gray-300">
                              Skip Connection
                            </div>
                            <div className="mt-8 text-center text-xs text-gray-600 dark:text-gray-400">
                              (original x)
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-xl">↓</div>
                      <div className="text-center">
                        <div className="inline-block rounded-lg bg-blue-100 px-6 py-3 font-mono text-sm dark:bg-blue-950/30">
                          Output: x + F(x)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900/30">
                    <h6 className="mb-2 font-bold text-green-700 dark:text-green-300">
                      Why Residual Connections?
                    </h6>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Enable gradient flow through deep networks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>
                          Allow model to learn identity function if needed
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Preserve information from earlier layers</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Layer Normalization */}
                <div className="rounded-2xl border-2 border-blue-300 bg-gradient-br from-blue-50 to-cyan-50 p-8 dark:border-blue-700 dark:from-blue-950/50 dark:to-cyan-950/50">
                  <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                    Layer Normalization
                  </h4>

                  <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h6 className="mb-4 text-center font-bold text-gray-900 dark:text-white">
                      Formula
                    </h6>
                    <div className="mb-4 rounded-lg bg-gray-100 p-4 text-center font-mono text-sm dark:bg-gray-900">
                      LayerNorm(x) = γ · (x - μ) / √(σ² + ε) + β
                    </div>
                    <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>μ:</strong> Mean across features
                      </p>
                      <p>
                        <strong>σ²:</strong> Variance across features
                      </p>
                      <p>
                        <strong>γ, β:</strong> Learned scale and shift
                        parameters
                      </p>
                      <p>
                        <strong>ε:</strong> Small constant for numerical
                        stability
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-900/30">
                    <h6 className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                      Purpose
                    </h6>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>
                          Stabilizes training by normalizing activations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Reduces internal covariate shift</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Allows higher learning rates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>
                          Applied to each token's embedding independently
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Combined: Add & Norm */}
              <div className="mt-8 rounded-2xl border-2 border-indigo-300 bg-white p-8 dark:border-indigo-700 dark:bg-gray-800">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  "Add & Norm" Pattern in Transformers
                </h4>
                <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-950/30">
                  <div className="space-y-3 text-center font-mono text-sm">
                    <div className="rounded-lg bg-white p-3 dark:bg-gray-800">
                      x<sub>input</sub>
                    </div>
                    <div>↓</div>
                    <div className="rounded-lg bg-purple-100 p-3 dark:bg-purple-950/30">
                      x<sub>attn</sub> = LayerNorm(x<sub>input</sub> +
                      MultiHeadAttention(x<sub>input</sub>))
                    </div>
                    <div>↓</div>
                    <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-950/30">
                      x<sub>output</sub> = LayerNorm(x<sub>attn</sub> +
                      FeedForward(x<sub>attn</sub>))
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feed Forward Network */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Position-wise Feed Forward Network
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                After attention, each token passes through a simple 2-layer
                neural network independently. This is applied to each position
                separately and identically.
              </p>

              <div className="rounded-2xl border-2 border-orange-300 bg-gradient-br from-orange-50 to-red-50 p-8 dark:border-orange-700 dark:from-orange-950/50 dark:to-red-950/50">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  FFN Architecture
                </h4>

                <div className="mb-8 rounded-xl bg-white p-8 dark:bg-gray-800">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-gray-200 px-8 py-4 font-mono text-sm dark:bg-gray-700">
                        Input (d_model = 512)
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-orange-100 px-8 py-4 dark:bg-orange-950/30">
                        <div className="mb-2 font-bold text-orange-700 dark:text-orange-300">
                          Linear Layer 1: W<sub>1</sub>
                        </div>
                        <div className="font-mono text-xs text-gray-700 dark:text-gray-300">
                          Expand to d<sub>ff</sub> = 2048
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-red-100 px-8 py-4 dark:bg-red-950/30">
                        <div className="mb-2 font-bold text-red-700 dark:text-red-300">
                          Activation: ReLU or GELU
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300">
                          Non-linearity
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-orange-100 px-8 py-4 dark:bg-orange-950/30">
                        <div className="mb-2 font-bold text-orange-700 dark:text-orange-300">
                          Linear Layer 2: W<sub>2</sub>
                        </div>
                        <div className="font-mono text-xs text-gray-700 dark:text-gray-300">
                          Project back to d<sub>model</sub> = 512
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-blue-100 px-8 py-4 font-mono text-sm dark:bg-blue-950/30">
                        Output (d_model = 512)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formula */}
                <div className="mb-6 rounded-lg bg-gray-900 p-6 text-white">
                  <div className="mb-2 text-center font-mono text-sm">
                    FFN(x) = max(0, xW<sub>1</sub> + b<sub>1</sub>)W<sub>2</sub>{" "}
                    + b<sub>2</sub>
                  </div>
                  <div className="text-center text-xs text-gray-400">
                    Or with GELU: FFN(x) = GELU(xW<sub>1</sub> + b<sub>1</sub>)W
                    <sub>2</sub> + b<sub>2</sub>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h6 className="mb-3 font-bold text-orange-600 dark:text-orange-400">
                      Key Characteristics
                    </h6>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Applied to each position{" "}
                          <strong>independently</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Same weights shared across all positions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Intermediate layer is 4× larger (2048 vs 512)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h6 className="mb-3 font-bold text-red-600 dark:text-red-400">
                      Purpose
                    </h6>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Adds non-linearity and complexity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Transforms token representations after attention
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Contains most of the model's parameters</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mixture of Experts */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Mixture of Experts (MoE)
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Modern large models like GPT-4, Mixtral, and others use Mixture
                of Experts to scale efficiently. Instead of one feed-forward
                network, they have multiple "expert" networks and route each
                token to a subset of experts.
              </p>

              <div className="rounded-2xl border-2 border-indigo-300 bg-gradient-br from-indigo-50 to-purple-50 p-8 dark:border-indigo-700 dark:from-indigo-950/50 dark:to-purple-950/50">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  How MoE Works
                </h4>

                <div className="mb-8 rounded-xl bg-white p-8 dark:bg-gray-800">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-gray-200 px-8 py-4 font-mono text-sm dark:bg-gray-700">
                        Token Representation
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-purple-100 px-8 py-4 dark:bg-purple-950/30">
                        <div className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                          Router Network (Gating)
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300">
                          Decides which experts to use
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="grid gap-4 md:grid-cols-4">
                      {[1, 2, 3, 4].map((expert) => (
                        <div
                          key={expert}
                          className="rounded-xl border-2 border-indigo-300 bg-indigo-50 p-4 dark:border-indigo-600 dark:bg-indigo-950/30"
                        >
                          <div className="mb-2 text-center text-2xl">🧠</div>
                          <div className="text-center text-xs font-bold">
                            Expert {expert}
                          </div>
                          <div className="mt-2 text-center text-xs text-gray-600 dark:text-gray-400">
                            FFN
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                      ... up to 8, 16, or even 128 experts
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-green-100 px-8 py-4 dark:bg-green-950/30">
                        <div className="mb-2 font-bold text-green-700 dark:text-green-300">
                          Weighted Combination
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300">
                          Top-K experts combined
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="text-center">
                      <div className="inline-block rounded-lg bg-blue-100 px-8 py-4 font-mono text-sm dark:bg-blue-950/30">
                        Output
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-xl border-l-4 border-green-500 bg-white p-6 dark:bg-gray-800">
                    <h6 className="mb-3 font-bold text-green-600 dark:text-green-400">
                      Advantages
                    </h6>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>
                          <strong>Sparse activation:</strong> Only 2-4 experts
                          active per token
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>
                          <strong>Efficient scaling:</strong> 100B+ parameters
                          with cost of ~13B
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>
                          <strong>Specialization:</strong> Experts learn
                          different domains/tasks
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>
                          Faster inference than dense models of same quality
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6 dark:bg-gray-800">
                    <h6 className="mb-3 font-bold text-orange-600 dark:text-orange-400">
                      Challenges
                    </h6>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 text-orange-500">⚠</span>
                        <span>
                          <strong>Load balancing:</strong> Ensure all experts
                          are used
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-orange-500">⚠</span>
                        <span>
                          <strong>Training complexity:</strong> Need auxiliary
                          loss functions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-orange-500">⚠</span>
                        <span>
                          <strong>Memory requirements:</strong> All experts must
                          fit in memory
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border-2 border-purple-300 bg-purple-50 p-4 dark:border-purple-700 dark:bg-purple-950/30">
                  <h6 className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                    Models Using MoE
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "GPT-4",
                      "Mixtral 8x7B",
                      "Switch Transformer",
                      "GLaM",
                      "Deepseek V2",
                    ].map((model) => (
                      <span
                        key={model}
                        className="rounded-full bg-purple-200 px-3 py-1 text-xs font-semibold text-purple-800 dark:bg-purple-900/50 dark:text-purple-200"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary: Complete Transformer */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Putting It All Together: The Complete Transformer Block
              </h3>

              <div className="rounded-3xl border-2 border-blue-400 bg-gradient-br from-blue-50 via-indigo-50 to-purple-50 p-8 dark:border-blue-600 dark:from-blue-950/50 dark:via-indigo-950/50 dark:to-purple-950/50">
                <h4 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  Single Transformer Layer (Decoder Block)
                </h4>

                <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                  <div className="space-y-4">
                    {/* Input */}
                    <div className="rounded-lg bg-gray-200 p-4 text-center font-mono font-bold dark:bg-gray-700">
                      Input: x (seq_len, d_model)
                    </div>

                    {/* Block 1: Attention */}
                    <div className="rounded-xl border-2 border-purple-300 bg-purple-50 p-6 dark:border-purple-600 dark:bg-purple-950/30">
                      <div className="mb-3 text-center font-bold text-purple-700 dark:text-purple-300">
                        Multi-Head Self-Attention
                      </div>
                      <div className="space-y-2 text-center text-sm">
                        <div>1. Compute Q, K, V for each head</div>
                        <div>2. Apply attention mechanism</div>
                        <div>3. Concatenate heads</div>
                        <div>4. Linear projection</div>
                      </div>
                    </div>

                    <div className="text-center text-xl">+</div>

                    {/* Add & Norm 1 */}
                    <div className="rounded-lg bg-green-100 p-4 text-center dark:bg-green-950/30">
                      <div className="font-bold text-green-700 dark:text-green-300">
                        Add & Normalize
                      </div>
                      <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        LayerNorm(x + Attention(x))
                      </div>
                    </div>

                    <div className="text-center text-xl">↓</div>

                    {/* Block 2: FFN */}
                    <div className="rounded-xl border-2 border-orange-300 bg-orange-50 p-6 dark:border-orange-600 dark:bg-orange-950/30">
                      <div className="mb-3 text-center font-bold text-orange-700 dark:text-orange-300">
                        Feed Forward Network
                      </div>
                      <div className="space-y-2 text-center text-sm">
                        <div>1. Linear: d_model → d_ff (2048)</div>
                        <div>2. Activation: GELU/ReLU</div>
                        <div>3. Linear: d_ff → d_model</div>
                      </div>
                    </div>

                    <div className="text-center text-xl">+</div>

                    {/* Add & Norm 2 */}
                    <div className="rounded-lg bg-green-100 p-4 text-center dark:bg-green-950/30">
                      <div className="font-bold text-green-700 dark:text-green-300">
                        Add & Normalize
                      </div>
                      <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        LayerNorm(x + FFN(x))
                      </div>
                    </div>

                    <div className="text-center text-xl">↓</div>

                    {/* Output */}
                    <div className="rounded-lg bg-blue-100 p-4 text-center font-mono font-bold dark:bg-blue-950/30">
                      Output → Next Layer
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-4 text-center font-bold text-gray-900 dark:text-white">
                    Key Insights
                  </h5>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Attention layer:</strong> Allows tokens to
                        communicate and share information
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950/30">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>FFN layer:</strong> Processes each token
                        independently with non-linear transformations
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Residual connections:</strong> Preserve
                        information and enable deep architectures
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950/30">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Layer norms:</strong> Stabilize training and
                        improve convergence
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-indigo-100 p-6 dark:bg-indigo-900/30">
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    <strong>Full Model:</strong> Stack 12-96 of these layers,
                    add final layer normalization and linear projection to
                    vocabulary. That's a transformer!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Training vs Inference */}
          <section className="rounded-3xl border border-orange-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-orange-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-orange-600 dark:text-orange-400">
              Training vs Inference: How Transformers Actually Work
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Now that we understand the transformer architecture, let's explore{" "}
              <strong>how transformers actually work in practice</strong> - the
              critical difference between training (learning from data) and
              inference (generating new text). Understanding this is essential for
              deploying LLMs in production financial systems.
            </p>

            {/* Part A: Masked Self-Attention */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Masked Self-Attention: Preventing "Cheating"
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                In decoder models (GPT, Claude, etc.), we use{" "}
                <strong>masked self-attention</strong> to prevent tokens from
                "looking ahead" at future tokens. This ensures the model learns to
                predict the next token using only past context.
              </p>

              <div className="mb-8 rounded-2xl border-2 border-red-300 bg-gradient-br from-red-50 to-orange-50 p-8 dark:border-red-700 dark:from-red-950/50 dark:to-orange-950/50">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  The Problem: Without Masking
                </h4>

                <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Imagine we're training the model on: <strong>"The stock price increased"</strong>
                  </p>
                  <div className="rounded-lg bg-red-100 p-4 dark:bg-red-950/30">
                    <p className="mb-2 text-sm font-bold text-red-700 dark:text-red-300">
                      ❌ Without Masking (Cheating!):
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      When predicting "price", the model can see "increased" →
                      It's cheating by looking at future tokens!
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    With masking, each token can only attend to itself and previous tokens:
                  </p>
                  <div className="rounded-lg bg-green-100 p-4 dark:bg-green-950/30">
                    <p className="mb-2 text-sm font-bold text-green-700 dark:text-green-300">
                      ✓ With Masking (Proper Training):
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      When predicting "price", the model can only see "The stock" →
                      Must learn to predict next word from past context only!
                    </p>
                  </div>
                </div>
              </div>

              {/* Attention Mask Visualization */}
              <div className="mb-8 rounded-2xl border-2 border-orange-300 bg-white p-8 dark:border-orange-700 dark:bg-gray-800">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  Attention Mask Matrix (Causal Mask)
                </h4>

                <p className="mb-6 text-sm text-gray-700 dark:text-gray-300">
                  The mask is a lower-triangular matrix. A value of 1 means "can attend",
                  0 means "cannot attend" (or -∞ in practice before softmax).
                </p>

                <div className="mb-6 overflow-x-auto">
                  <table className="mx-auto border-collapse text-xs">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 bg-gray-200 p-2 dark:bg-gray-700"></th>
                        <th className="border border-gray-400 bg-gray-200 p-2 dark:bg-gray-700">The</th>
                        <th className="border border-gray-400 bg-gray-200 p-2 dark:bg-gray-700">stock</th>
                        <th className="border border-gray-400 bg-gray-200 p-2 dark:bg-gray-700">price</th>
                        <th className="border border-gray-400 bg-gray-200 p-2 dark:bg-gray-700">increased</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 bg-gray-200 p-2 font-bold dark:bg-gray-700">The</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                        <td className="border border-gray-400 bg-red-100 p-2 text-center dark:bg-red-900">0</td>
                        <td className="border border-gray-400 bg-red-100 p-2 text-center dark:bg-red-900">0</td>
                        <td className="border border-gray-400 bg-red-100 p-2 text-center dark:bg-red-900">0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 bg-gray-200 p-2 font-bold dark:bg-gray-700">stock</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                        <td className="border border-gray-400 bg-red-100 p-2 text-center dark:bg-red-900">0</td>
                        <td className="border border-gray-400 bg-red-100 p-2 text-center dark:bg-red-900">0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 bg-gray-200 p-2 font-bold dark:bg-gray-700">price</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                        <td className="border border-gray-400 bg-red-100 p-2 text-center dark:bg-red-900">0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 bg-gray-200 p-2 font-bold dark:bg-gray-700">increased</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                        <td className="border border-gray-400 bg-green-100 p-2 text-center dark:bg-green-900">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong className="text-green-700 dark:text-green-300">Green (1):</strong> Token can attend to this position
                    </p>
                  </div>
                  <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/30">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong className="text-red-700 dark:text-red-300">Red (0):</strong> Token blocked from attending (future position)
                    </p>
                  </div>
                </div>

                {/* Code Implementation */}
                <div className="mt-6 rounded-lg bg-gray-900 p-6">
                  <p className="mb-3 text-xs font-bold text-gray-400">
                    Creating the Causal Mask (PyTorch):
                  </p>
                  <pre className="overflow-x-auto text-xs text-gray-100">
{`import torch

seq_len = 4  # "The stock price increased"

# Create causal mask (lower triangular)
mask = torch.tril(torch.ones(seq_len, seq_len))

# In practice, convert 0s to -inf before softmax
# This ensures attention weights to future tokens = 0
mask = mask.masked_fill(mask == 0, float('-inf'))
mask = mask.masked_fill(mask == 1, 0.0)

# Applied in attention: softmax(QK^T / sqrt(d) + mask)`}
                  </pre>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-950/30">
                <h5 className="mb-3 font-bold text-orange-700 dark:text-orange-300">
                  Why This Matters
                </h5>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Training:</strong> Ensures model learns proper sequential prediction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Causality:</strong> Respects the order of information (can't use future to predict past)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Autoregressive:</strong> Enables token-by-token generation at inference time
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Part B: Training Phase */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Training Phase: Learning from Data
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                During training, transformers process{" "}
                <strong>entire sequences in parallel</strong> using a technique
                called <strong>teacher forcing</strong>. This is fast and efficient.
              </p>

              <div className="mb-8 rounded-2xl border-2 border-blue-300 bg-gradient-br from-blue-50 to-cyan-50 p-8 dark:border-blue-700 dark:from-blue-950/50 dark:to-cyan-950/50">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  How Training Works: Teacher Forcing
                </h4>

                <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                  <p className="mb-4 text-sm font-bold text-blue-700 dark:text-blue-300">
                    Training Example: "The company reported strong earnings"
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                      <p className="mb-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                        INPUT (what we give the model):
                      </p>
                      <div className="font-mono text-xs text-gray-700 dark:text-gray-300">
                        [BOS] The company reported strong earnings
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/30">
                      <p className="mb-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                        TARGET (what we want the model to predict at each position):
                      </p>
                      <div className="space-y-1 font-mono text-xs text-gray-700 dark:text-gray-300">
                        <div>Position 0: Predict "The" (after BOS)</div>
                        <div>Position 1: Predict "company" (after "The")</div>
                        <div>Position 2: Predict "reported" (after "company")</div>
                        <div>Position 3: Predict "strong" (after "reported")</div>
                        <div>Position 4: Predict "earnings" (after "strong")</div>
                        <div>Position 5: Predict [EOS] (after "earnings")</div>
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                      <p className="mb-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                        KEY INSIGHT - Parallel Processing:
                      </p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        The model predicts <strong>ALL positions simultaneously</strong> in one forward pass!
                        The causal mask ensures position N can only see positions 0 to N-1.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Loss Computation */}
                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-4 font-bold text-gray-900 dark:text-white">
                    Loss Computation (Cross-Entropy)
                  </h5>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                        For each position, compute cross-entropy loss:
                      </p>
                      <div className="font-mono text-xs text-gray-700 dark:text-gray-300">
                        Loss = -Σ log P(correct_token | past_context)
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-950/30">
                        <p className="mb-2 text-xs font-bold text-blue-700 dark:text-blue-300">
                          Position 2 (predicting "reported"):
                        </p>
                        <div className="text-xs text-gray-700 dark:text-gray-300">
                          Context: "The company"<br />
                          Target: "reported"<br />
                          Model outputs probabilities over 50k vocab<br />
                          Loss = -log P("reported" | "The company")
                        </div>
                      </div>

                      <div className="rounded-lg bg-green-100 p-4 dark:bg-green-950/30">
                        <p className="mb-2 text-xs font-bold text-green-700 dark:text-green-300">
                          Backward Pass:
                        </p>
                        <div className="text-xs text-gray-700 dark:text-gray-300">
                          1. Compute total loss across all positions<br />
                          2. Backpropagate gradients<br />
                          3. Update all model parameters<br />
                          4. Repeat for next batch
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Advantages */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-green-300 bg-white p-6 dark:border-green-700 dark:bg-gray-800">
                  <h5 className="mb-4 font-bold text-green-700 dark:text-green-300">
                    ✓ Training Advantages
                  </h5>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      <span>
                        <strong>Parallel:</strong> All tokens processed simultaneously
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      <span>
                        <strong>Efficient:</strong> Full GPU utilization, fast training
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      <span>
                        <strong>Dense signal:</strong> Learn from every token position
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      <span>
                        <strong>Teacher forcing:</strong> Always has correct previous tokens
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-orange-300 bg-white p-6 dark:border-orange-700 dark:bg-gray-800">
                  <h5 className="mb-4 font-bold text-orange-700 dark:text-orange-300">
                    Training Scale
                  </h5>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        <strong>Batch size:</strong> 1-8 million tokens per batch
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        <strong>Data:</strong> Trillions of tokens (entire internet!)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        <strong>Time:</strong> Weeks to months on thousands of GPUs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        <strong>Cost:</strong> $10M - $100M+ for frontier models
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Part C: Inference Phase */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Inference Phase: Autoregressive Generation
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                During inference (generation), the model produces text{" "}
                <strong>one token at a time</strong> in a sequential loop. This is
                called <strong>autoregressive generation</strong> and is fundamentally
                different from training.
              </p>

              <div className="mb-8 rounded-2xl border-2 border-purple-300 bg-gradient-br from-purple-50 to-pink-50 p-8 dark:border-purple-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <h4 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
                  Autoregressive Generation Loop
                </h4>

                <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                  <p className="mb-4 text-sm font-bold text-purple-700 dark:text-purple-300">
                    User Prompt: "The company's Q3 revenue"
                  </p>

                  <div className="space-y-3">
                    {/* Step 1 */}
                    <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/30">
                      <div className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                        Step 1: Initial Forward Pass
                      </div>
                      <div className="mb-2 font-mono text-xs text-gray-700 dark:text-gray-300">
                        Input: [The, company's, Q3, revenue]
                      </div>
                      <div className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                        → Model outputs probability distribution over vocabulary
                      </div>
                      <div className="font-mono text-xs text-green-700 dark:text-green-300">
                        Generated: "increased" (highest probability)
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/30">
                      <div className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                        Step 2: Append and Re-run
                      </div>
                      <div className="mb-2 font-mono text-xs text-gray-700 dark:text-gray-300">
                        Input: [The, company's, Q3, revenue, increased]
                      </div>
                      <div className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                        → Forward pass through entire network again
                      </div>
                      <div className="font-mono text-xs text-green-700 dark:text-green-300">
                        Generated: "by" (highest probability)
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950/30">
                      <div className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                        Step 3: Continue...
                      </div>
                      <div className="mb-2 font-mono text-xs text-gray-700 dark:text-gray-300">
                        Input: [The, company's, Q3, revenue, increased, by]
                      </div>
                      <div className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                        → Forward pass again
                      </div>
                      <div className="font-mono text-xs text-green-700 dark:text-green-300">
                        Generated: "15" (highest probability)
                      </div>
                    </div>

                    {/* Continue indicator */}
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                      ... repeat until [EOS] token or max length ...
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-green-100 p-4 dark:bg-green-950/30">
                    <p className="text-xs font-bold text-green-700 dark:text-green-300">
                      Final Output:
                    </p>
                    <p className="font-mono text-xs text-gray-700 dark:text-gray-300">
                      "The company's Q3 revenue increased by 15% year-over-year."
                    </p>
                  </div>
                </div>

                {/* Visual Flow */}
                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-4 text-center font-bold text-gray-900 dark:text-white">
                    Generation Flow Diagram
                  </h5>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-48 rounded-lg bg-blue-100 p-3 text-center text-xs dark:bg-blue-950/30">
                        Prompt
                      </div>
                      <div className="text-2xl">→</div>
                      <div className="w-48 rounded-lg bg-purple-100 p-3 text-center text-xs dark:bg-purple-950/30">
                        Forward Pass
                      </div>
                      <div className="text-2xl">→</div>
                      <div className="w-48 rounded-lg bg-green-100 p-3 text-center text-xs dark:bg-green-950/30">
                        Sample Token
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓ (append token)</div>

                    <div className="flex items-center gap-3">
                      <div className="w-48 rounded-lg bg-orange-100 p-3 text-center text-xs dark:bg-orange-950/30">
                        Loop back
                      </div>
                      <div className="text-2xl">←</div>
                      <div className="flex-1 rounded-lg bg-gray-100 p-3 text-center text-xs dark:bg-gray-700">
                        Stop if [EOS] or max_length reached
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sampling Strategies */}
              <div className="mb-8 rounded-2xl border-2 border-indigo-300 bg-white p-8 dark:border-indigo-700 dark:bg-gray-800">
                <h4 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                  Sampling Strategies: How to Choose the Next Token
                </h4>

                <p className="mb-6 text-sm text-gray-700 dark:text-gray-300">
                  The model outputs a probability distribution over 50,000+ tokens.
                  How do we pick which one to generate? Different strategies produce
                  different text characteristics.
                </p>

                <div className="space-y-4">
                  {/* Greedy Decoding */}
                  <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-6 dark:border-blue-700 dark:bg-blue-950/30">
                    <h5 className="mb-3 font-bold text-blue-700 dark:text-blue-300">
                      1. Greedy Decoding
                    </h5>
                    <div className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Always pick the token with the highest probability.
                    </div>
                    <div className="mb-3 rounded-lg bg-white p-3 dark:bg-gray-800">
                      <div className="mb-2 font-mono text-xs text-gray-700 dark:text-gray-300">
                        Probabilities: {"{increased: 0.45, grew: 0.30, rose: 0.15, ...}"}
                      </div>
                      <div className="font-mono text-xs text-green-700 dark:text-green-300">
                        ✓ Choose: "increased" (highest)
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>Pros:</strong> Deterministic, fast<br />
                      <strong>Cons:</strong> Repetitive, boring, can get stuck in loops
                    </div>
                  </div>

                  {/* Temperature Sampling */}
                  <div className="rounded-xl border-2 border-orange-300 bg-orange-50 p-6 dark:border-orange-700 dark:bg-orange-950/30">
                    <h5 className="mb-3 font-bold text-orange-700 dark:text-orange-300">
                      2. Temperature Sampling
                    </h5>
                    <div className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Scale logits by temperature T before softmax. Controls randomness.
                    </div>
                    <div className="mb-3 rounded-lg bg-white p-3 dark:bg-gray-800">
                      <div className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                        <strong>T = 0.1 (low):</strong> More confident, focused<br />
                        Original: {"{increased: 0.45, grew: 0.30}"}<br />
                        After T=0.1: {"{increased: 0.85, grew: 0.12}"} → More deterministic
                      </div>
                      <div className="text-xs text-gray-700 dark:text-gray-300">
                        <strong>T = 1.5 (high):</strong> More random, creative<br />
                        Original: {"{increased: 0.45, grew: 0.30}"}<br />
                        After T=1.5: {"{increased: 0.38, grew: 0.35}"} → More uniform
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>Use case:</strong> T=0.1-0.3 for factual tasks (finance!), T=0.7-1.0 for creative tasks
                    </div>
                  </div>

                  {/* Top-k and Top-p */}
                  <div className="rounded-xl border-2 border-purple-300 bg-purple-50 p-6 dark:border-purple-700 dark:bg-purple-950/30">
                    <h5 className="mb-3 font-bold text-purple-700 dark:text-purple-300">
                      3. Top-k and Top-p (Nucleus) Sampling
                    </h5>
                    <div className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Restrict sampling to most likely tokens to avoid nonsense.
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg bg-white p-3 dark:bg-gray-800">
                        <div className="mb-2 text-xs font-bold text-purple-700 dark:text-purple-300">
                          Top-k (e.g., k=40):
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300">
                          Only consider top 40 tokens.<br />
                          Set others to 0 probability.<br />
                          Sample from these 40.
                        </div>
                      </div>
                      <div className="rounded-lg bg-white p-3 dark:bg-gray-800">
                        <div className="mb-2 text-xs font-bold text-purple-700 dark:text-purple-300">
                          Top-p (e.g., p=0.9):
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300">
                          Include tokens until cumulative probability reaches 90%.<br />
                          Dynamic cutoff based on distribution.
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">
                      <strong>Best practice:</strong> Combine temperature + top-p for balanced output
                    </div>
                  </div>
                </div>
              </div>

              {/* Inference Challenges */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-red-300 bg-white p-6 dark:border-red-700 dark:bg-gray-800">
                  <h5 className="mb-4 font-bold text-red-700 dark:text-red-300">
                    ⚠ Inference Challenges
                  </h5>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">•</span>
                      <span>
                        <strong>Sequential:</strong> Cannot parallelize token generation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">•</span>
                      <span>
                        <strong>Slow:</strong> Each token requires full forward pass
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">•</span>
                      <span>
                        <strong>Latency:</strong> 500 tokens at 20 tokens/sec = 25 seconds!
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">•</span>
                      <span>
                        <strong>Memory:</strong> Must store KV cache for past tokens
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">•</span>
                      <span>
                        <strong>Cost:</strong> More expensive per query than training per token
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-green-300 bg-white p-6 dark:border-green-700 dark:bg-gray-800">
                  <h5 className="mb-4 font-bold text-green-700 dark:text-green-300">
                    ✓ Optimization Techniques
                  </h5>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      <span>
                        <strong>KV Caching:</strong> Reuse past key-value computations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      <span>
                        <strong>Quantization:</strong> Use INT8/INT4 instead of FP16
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      <span>
                        <strong>Batching:</strong> Process multiple requests together
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      <span>
                        <strong>Speculative decoding:</strong> Predict multiple tokens ahead
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      <span>
                        <strong>Streaming:</strong> Show tokens as generated (better UX)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Part D: Financial Services Example */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Financial Services: Training vs Inference in Practice
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Understanding the difference between training and inference is crucial
                for deploying LLMs in production financial systems. Let's see how this
                plays out in practice.
              </p>

              {/* Training Example */}
              <div className="mb-8 rounded-2xl border-2 border-blue-300 bg-gradient-br from-blue-50 to-cyan-50 p-8 dark:border-blue-700 dark:from-blue-950/50 dark:to-cyan-950/50">
                <h4 className="mb-6 text-xl font-bold text-blue-700 dark:text-blue-300">
                  📚 Training: Fine-tuning on Financial Documents
                </h4>

                <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                  <p className="mb-4 text-sm font-bold text-gray-900 dark:text-white">
                    Scenario: Fine-tune a large language model (70B+ params) on your bank's credit analysis reports
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-950/30">
                      <div className="mb-2 text-xs font-bold text-blue-700 dark:text-blue-300">
                        Training Data Format:
                      </div>
                      <div className="font-mono text-xs text-gray-700 dark:text-gray-300">
                        Document: "Credit Score: 720. Debt-to-Income: 35%. Payment History: Excellent. <strong>Recommendation: APPROVE</strong>"
                      </div>
                    </div>

                    <div className="rounded-lg bg-green-100 p-4 dark:bg-green-950/30">
                      <div className="mb-2 text-xs font-bold text-green-700 dark:text-green-300">
                        How Training Works:
                      </div>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>• Process <strong>thousands of examples in parallel</strong> (batch size 64-256)</li>
                        <li>• Each document teaches the model the pattern of credit analysis</li>
                        <li>• Model learns: high credit score + low DTI → likely approval</li>
                        <li>• Training on 10,000 reports takes ~2-4 hours on A100 GPUs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      10,000
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Training Examples
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      2-4 hrs
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Training Time
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      $50-200
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Cost (GPU time)
                    </div>
                  </div>
                </div>
              </div>

              {/* Inference Example */}
              <div className="mb-8 rounded-2xl border-2 border-purple-300 bg-gradient-br from-purple-50 to-pink-50 p-8 dark:border-purple-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <h4 className="mb-6 text-xl font-bold text-purple-700 dark:text-purple-300">
                  🚀 Inference: Real-time Credit Assessment
                </h4>

                <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                  <p className="mb-4 text-sm font-bold text-gray-900 dark:text-white">
                    Scenario: Loan officer queries the fine-tuned model
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-purple-100 p-4 dark:bg-purple-950/30">
                      <div className="mb-2 text-xs font-bold text-purple-700 dark:text-purple-300">
                        User Input (Prompt):
                      </div>
                      <div className="font-mono text-xs text-gray-700 dark:text-gray-300">
                        "Analyze this applicant: Credit Score: 680. Debt-to-Income: 42%. Payment History: 2 late payments in past year. Provide recommendation:"
                      </div>
                    </div>

                    <div className="rounded-lg bg-pink-100 p-4 dark:bg-pink-950/30">
                      <div className="mb-2 text-xs font-bold text-pink-700 dark:text-pink-300">
                        Autoregressive Generation (token-by-token):
                      </div>
                      <div className="space-y-1 font-mono text-xs text-gray-700 dark:text-gray-300">
                        <div>Token 1: "Based"</div>
                        <div>Token 2: "on"</div>
                        <div>Token 3: "the"</div>
                        <div>Token 4: "provided"</div>
                        <div>Token 5: "information"</div>
                        <div className="text-gray-500">... (continuing for ~150 tokens)</div>
                        <div className="mt-2 rounded bg-green-100 p-2 dark:bg-green-950/30">
                          <strong>Final:</strong> "Based on the provided information, this applicant presents MODERATE RISK. The credit score of 680 is acceptable, but the DTI of 42% exceeds our 40% threshold, and recent late payments indicate potential repayment issues. Recommendation: <strong>CONDITIONAL APPROVAL</strong> with 10% higher interest rate and required co-signer."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      ~150
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Tokens Generated
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      5-8 sec
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Response Time
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      $0.01-0.05
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Cost per Query
                    </div>
                  </div>
                </div>
              </div>

              {/* Production Considerations */}
              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-950/30">
                <h5 className="mb-4 font-bold text-orange-700 dark:text-orange-300">
                  Production Deployment Considerations for Financial Services
                </h5>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">1.</span>
                    <div>
                      <strong>Latency Requirements:</strong> Interactive applications need {"<"}2s response time.
                      Use smaller models (7B-13B params) or optimize inference with quantization.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">2.</span>
                    <div>
                      <strong>Cost at Scale:</strong> 1 million queries/day at $0.02/query = $20,000/day = $7.3M/year.
                      Consider self-hosting for high-volume use cases.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">3.</span>
                    <div>
                      <strong>Sampling Strategy:</strong> For factual financial analysis, use <strong>temperature=0.1-0.3</strong> and <strong>top-p=0.9</strong>
                      to minimize hallucinations and ensure consistent outputs.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">4.</span>
                    <div>
                      <strong>Streaming Responses:</strong> Show tokens as they're generated for better user experience.
                      Critical for long-form reports (earnings analysis, due diligence).
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">5.</span>
                    <div>
                      <strong>Audit Trail:</strong> Log all prompts, generated tokens, and sampling parameters for
                      regulatory compliance and model monitoring.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-3xl border-2 border-orange-400 bg-gradient-br from-orange-50 via-amber-50 to-yellow-50 p-8 dark:border-orange-600 dark:from-orange-950/50 dark:via-amber-950/50 dark:to-yellow-950/50">
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                Key Takeaways: Training vs Inference
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 text-center font-bold text-blue-700 dark:text-blue-300">
                    🎓 Training
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Parallel processing of entire sequences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Teacher forcing with ground truth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Fast and efficient (GPU saturated)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>One-time cost (expensive but amortized)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Causal mask prevents looking ahead</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 text-center font-bold text-purple-700 dark:text-purple-300">
                    🚀 Inference
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Sequential autoregressive generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>One token at a time (cannot parallelize)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Slower (bottleneck for deployment)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Per-query cost (adds up at scale)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Sampling strategy controls output quality</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-white p-6 dark:bg-gray-800">
                <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-orange-700 dark:text-orange-300">
                    Why This Matters:
                  </strong>{" "}
                  Understanding training vs inference is essential for estimating costs,
                  optimizing latency, and making architectural decisions when deploying
                  LLMs in production financial systems. Training is a one-time investment;
                  inference cost scales with usage.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Evolution of Foundation Models */}
          <section className="rounded-3xl border border-green-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-green-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-green-600 dark:text-green-400">
              Evolution of Foundation Models
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              From the first transformer in 2017 to today's multi-trillion
              parameter models, let's trace the remarkable evolution of
              foundation models and understand the key innovations at each
              stage.
            </p>

            {/* Timeline */}
            <div className="space-y-12">
              {/* GPT-1 */}
              <div className="rounded-2xl border-2 border-blue-300 bg-gradient-br from-blue-50 to-cyan-50 p-8 dark:border-blue-700 dark:from-blue-950/50 dark:to-cyan-950/50">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    GPT-1 (2018)
                  </h3>
                  <span className="rounded-full bg-blue-500 px-4 py-1 text-sm font-bold text-white">
                    OpenAI
                  </span>
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      117M
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Parameters
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      12
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Layers
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      Decoder
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Architecture
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Key Innovation: Generative Pre-training
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">→</span>
                      <span>
                        <strong>Pre-train</strong> on unlabeled text
                        (BooksCorpus) using next-token prediction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">→</span>
                      <span>
                        <strong>Fine-tune</strong> on specific tasks with small
                        labeled datasets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">→</span>
                      <span>
                        Showed that unsupervised pre-training works better than
                        training from scratch
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">→</span>
                      <span>
                        Established the "pre-train then fine-tune" paradigm
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* BERT */}
              <div className="rounded-2xl border-2 border-green-300 bg-gradient-br from-green-50 to-emerald-50 p-8 dark:border-green-700 dark:from-green-950/50 dark:to-emerald-950/50">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">
                    BERT (2018)
                  </h3>
                  <span className="rounded-full bg-green-500 px-4 py-1 text-sm font-bold text-white">
                    Google
                  </span>
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      340M
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Parameters (BERT-Large)
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      24
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Layers (Large)
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      Encoder
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Architecture
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Key Innovation: Bidirectional Training & Masked Language
                    Modeling
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">→</span>
                      <span>
                        <strong>Masked Language Modeling (MLM):</strong>{" "}
                        Randomly mask 15% of tokens and predict them
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">→</span>
                      <span>
                        <strong>Bidirectional context:</strong> Can see both
                        left and right context (unlike GPT)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">→</span>
                      <span>
                        <strong>Next Sentence Prediction (NSP):</strong> Learns
                        relationships between sentences
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">→</span>
                      <span>
                        Dominated understanding tasks (classification, NER, Q&A)
                        for years
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 rounded-lg border-l-4 border-green-500 bg-green-100 p-4 dark:bg-green-900/30">
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">
                    <strong>The Debate:</strong> GPT (decoder-only, generative)
                    vs BERT (encoder-only, understanding). Both architectures
                    had their strengths - but the future belonged to
                    decoder-only models...
                  </p>
                </div>
              </div>

              {/* GPT-2 */}
              <div className="rounded-2xl border-2 border-purple-300 bg-gradient-br from-purple-50 to-pink-50 p-8 dark:border-purple-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    GPT-2 (2019)
                  </h3>
                  <span className="rounded-full bg-purple-500 px-4 py-1 text-sm font-bold text-white">
                    OpenAI
                  </span>
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      1.5B
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Parameters
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      48
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Layers
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      40GB
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Training Data
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Key Innovation: Scale + Zero-Shot Learning
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">→</span>
                      <span>
                        <strong>10× larger</strong> than GPT-1, showing scaling
                        laws in action
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">→</span>
                      <span>
                        <strong>Zero-shot capabilities:</strong> Could perform
                        tasks without fine-tuning, just from prompts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">→</span>
                      <span>Coherent text generation over longer contexts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">→</span>
                      <span>
                        So good at generating realistic text that OpenAI
                        initially delayed release due to safety concerns
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* GPT-3 */}
              <div className="rounded-2xl border-2 border-orange-300 bg-gradient-br from-orange-50 to-red-50 p-8 dark:border-orange-700 dark:from-orange-950/50 dark:to-red-950/50">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    GPT-3 (2020)
                  </h3>
                  <span className="rounded-full bg-orange-500 px-4 py-1 text-sm font-bold text-white">
                    OpenAI
                  </span>
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      175B
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Parameters
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      96
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Layers
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      $12M
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Training Cost (est.)
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Key Innovation: Emergent Abilities & Few-Shot Learning
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">→</span>
                      <span>
                        <strong>100× larger</strong> than GPT-2 - the first
                        truly "large" language model
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">→</span>
                      <span>
                        <strong>In-context learning:</strong> Could learn from
                        examples in the prompt (few-shot)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">→</span>
                      <span>
                        <strong>Emergent abilities:</strong> Arithmetic, code
                        generation, translation - not explicitly trained!
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">→</span>
                      <span>
                        Launched via API - democratized access to powerful AI
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">→</span>
                      <span>
                        Sparked the current Gen AI revolution and race
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 rounded-lg border-l-4 border-orange-500 bg-orange-100 p-4 dark:bg-orange-900/30">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    The Turning Point
                  </p>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    GPT-3 proved that massive scale unlocks qualitatively new
                    capabilities. The industry realized: bigger is genuinely
                    better. The race to scale began.
                  </p>
                </div>
              </div>

              {/* ChatGPT / GPT-3.5 */}
              <div className="rounded-2xl border-2 border-pink-300 bg-gradient-br from-pink-50 to-rose-50 p-8 dark:border-pink-700 dark:from-pink-950/50 dark:to-rose-950/50">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                    ChatGPT / GPT-3.5 (2022)
                  </h3>
                  <span className="rounded-full bg-pink-500 px-4 py-1 text-sm font-bold text-white">
                    OpenAI
                  </span>
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                      ~175B
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Parameters (base)
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                      100M+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Users in 2 months
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                      RLHF
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Key Training Method
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Key Innovation: RLHF (Reinforcement Learning from Human
                    Feedback)
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-pink-500">→</span>
                      <span>
                        <strong>Instruction tuning:</strong> Trained to follow
                        instructions and engage in dialogue
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-pink-500">→</span>
                      <span>
                        <strong>RLHF:</strong> Human feedback used to align
                        model behavior with human preferences
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-pink-500">→</span>
                      <span>
                        <strong>Conversational interface:</strong> Made AI
                        accessible to everyone, not just developers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-pink-500">→</span>
                      <span>
                        Fastest-growing consumer application in history
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-pink-500">→</span>
                      <span>Brought Gen AI into mainstream consciousness</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 rounded-lg border-l-4 border-pink-500 bg-pink-100 p-4 dark:bg-pink-900/30">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    The Inflection Point
                  </p>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    ChatGPT made AI tangible for billions of people. Within
                    weeks, every tech company pivoted to Gen AI. The era of
                    ubiquitous AI assistants had begun.
                  </p>
                </div>
              </div>

              {/* LLaMA */}
              <div className="rounded-2xl border-2 border-indigo-300 bg-gradient-br from-indigo-50 to-blue-50 p-8 dark:border-indigo-700 dark:from-indigo-950/50 dark:to-blue-950/50">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    LLaMA / LLaMA 2 / LLaMA 3 (2023-2024)
                  </h3>
                  <span className="rounded-full bg-indigo-500 px-4 py-1 text-sm font-bold text-white">
                    Meta
                  </span>
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      7B-405B
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Parameter Range
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      Open
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Source (mostly)
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      15T+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Training Tokens
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Key Innovation: Open-Weight Efficiency
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-indigo-500">→</span>
                      <span>
                        <strong>Efficiency focus:</strong> Competitive
                        performance at smaller scales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-indigo-500">→</span>
                      <span>
                        <strong>Open weights:</strong> Democratized access to
                        powerful models
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-indigo-500">→</span>
                      <span>
                        <strong>Fine-tuning ecosystem:</strong> Spawned
                        thousands of derivative models (Alpaca, Vicuna, etc.)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-indigo-500">→</span>
                      <span>
                        LLaMA 3.1 (405B) rivals GPT-4 on many benchmarks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-indigo-500">→</span>
                      <span>
                        Enabled on-premise deployment for regulated industries
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 rounded-lg bg-indigo-100 p-4 dark:bg-indigo-900/30">
                  <h6 className="mb-2 font-bold text-indigo-700 dark:text-indigo-300">
                    Impact on Finance
                  </h6>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Open-weight models like LLaMA are crucial for financial
                    institutions that require data sovereignty, customization,
                    and regulatory compliance. Banks can fine-tune on
                    proprietary data without sending it to third parties.
                  </p>
                </div>
              </div>

              {/* GPT-4 */}
              <div className="rounded-2xl border-2 border-red-300 bg-gradient-br from-red-50 to-orange-50 p-8 dark:border-red-700 dark:from-red-950/50 dark:to-orange-950/50">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-red-600 dark:text-red-400">
                    GPT-4 (2023)
                  </h3>
                  <span className="rounded-full bg-red-500 px-4 py-1 text-sm font-bold text-white">
                    OpenAI
                  </span>
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      ~1.7T
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Params (rumored, MoE)
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      Multimodal
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Vision + Text
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      128K
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Context Window
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Key Innovations: Multimodality + Reasoning + MoE
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">→</span>
                      <span>
                        <strong>Multimodal:</strong> Processes images, text, and
                        code seamlessly
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">→</span>
                      <span>
                        <strong>Advanced reasoning:</strong> Scores in 90th
                        percentile on bar exam, excels at math
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">→</span>
                      <span>
                        <strong>MoE architecture:</strong> Uses ~280B params per
                        forward pass (efficient)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">→</span>
                      <span>
                        <strong>Tool use:</strong> Can call functions, browse
                        web, run code
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">→</span>
                      <span>
                        Massive context window allows analyzing entire codebases
                        or reports
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 rounded-lg border-l-4 border-red-500 bg-red-100 p-4 dark:bg-red-900/30">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    State of the Art (2023-2024)
                  </p>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    GPT-4 represented the frontier of LLM capabilities:
                    reasoning, coding, multimodal understanding. It showed that
                    scaling + architectural improvements continue to yield
                    gains.
                  </p>
                </div>
              </div>

              {/* Google Models: PaLM & Gemini */}
              <div className="rounded-2xl border-2 border-yellow-300 bg-gradient-br from-yellow-50 to-amber-50 p-8 dark:border-yellow-700 dark:from-yellow-950/50 dark:to-amber-950/50">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                    PaLM 2 & Gemini (2023-2024)
                  </h3>
                  <span className="rounded-full bg-yellow-500 px-4 py-1 text-sm font-bold text-white">
                    Google
                  </span>
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      540B+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Parameters (PaLM 2)
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      Ultra/Pro
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Gemini Tiers
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      Native
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Multimodal
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Key Innovations: Native Multimodality + Efficiency
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-600">→</span>
                      <span>
                        <strong>PaLM 2:</strong> Excels at multilingual tasks,
                        reasoning, and code
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-600">→</span>
                      <span>
                        <strong>Gemini Ultra:</strong> Competitive with GPT-4 on
                        most benchmarks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-600">→</span>
                      <span>
                        <strong>Native multimodality:</strong> Trained on text,
                        images, audio, video from the start
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-600">→</span>
                      <span>
                        <strong>Model sizes:</strong> Nano, Pro, Ultra for
                        different use cases
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-yellow-600">→</span>
                      <span>
                        Integrated deeply into Google ecosystem (Search,
                        Workspace, Cloud)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Claude */}
              <div className="rounded-2xl border-2 border-teal-300 bg-gradient-br from-teal-50 to-cyan-50 p-8 dark:border-teal-700 dark:from-teal-950/50 dark:to-cyan-950/50">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                    Claude (2, 3, 3.5) (2023-2024)
                  </h3>
                  <span className="rounded-full bg-teal-500 px-4 py-1 text-sm font-bold text-white">
                    Anthropic
                  </span>
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                      200K+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Context Window
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                      Opus
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Top Tier Model
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center dark:bg-gray-800">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                      Safety
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Core Focus
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Key Innovations: Constitutional AI + Long Context +
                    Reasoning
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-500">→</span>
                      <span>
                        <strong>Constitutional AI:</strong> Trained with
                        AI-generated feedback based on principles
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-500">→</span>
                      <span>
                        <strong>Extended context:</strong> 200K tokens enables
                        processing entire books
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-500">→</span>
                      <span>
                        <strong>Claude 3.5 Sonnet:</strong> Best-in-class coding
                        and reasoning
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-500">→</span>
                      <span>
                        <strong>Safety focus:</strong> Lower refusal rates on
                        harmless queries, higher on harmful ones
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-teal-500">→</span>
                      <span>
                        Preferred by many developers for nuanced, thoughtful
                        responses
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 rounded-lg bg-teal-100 p-4 dark:bg-teal-900/30">
                  <h6 className="mb-2 font-bold text-teal-700 dark:text-teal-300">
                    Why Claude Matters for Finance
                  </h6>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Claude's extended context window and strong reasoning make
                    it ideal for analyzing lengthy financial documents (10-Ks,
                    contracts, regulations). Its safety-first approach aligns
                    with compliance requirements.
                  </p>
                </div>
              </div>

              {/* Current State & Future */}
              <div className="rounded-2xl border-2 border-gray-400 bg-gradient-br from-gray-100 to-slate-100 p-8 dark:border-gray-600 dark:from-gray-900 dark:to-slate-900">
                <h3 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-gray-200">
                  The Current Landscape (2024-2025)
                </h3>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-4 font-bold text-gray-900 dark:text-white">
                      Key Trends
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        <span>
                          <strong>Multimodality:</strong> Text + Vision + Audio
                          + Video integration
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        <span>
                          <strong>Long context:</strong> 100K-1M+ token windows
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        <span>
                          <strong>Efficiency:</strong> Smaller models (7B-70B)
                          approaching GPT-3.5 quality
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-orange-500">•</span>
                        <span>
                          <strong>Specialization:</strong> Domain-specific
                          models for code, math, finance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-pink-500">•</span>
                        <span>
                          <strong>Inference optimization:</strong> Quantization,
                          distillation, speculative decoding
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-4 font-bold text-gray-900 dark:text-white">
                      Open Questions
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">❓</span>
                        <span>
                          Will scaling laws continue indefinitely, or are we
                          approaching limits?
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">❓</span>
                        <span>
                          How do we verify outputs and prevent hallucinations at
                          scale?
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">❓</span>
                        <span>
                          What's the right balance between open and closed
                          models?
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">❓</span>
                        <span>
                          Can we achieve GPT-4 level performance at 10× lower
                          cost?
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">❓</span>
                        <span>
                          How do we ensure safety, alignment, and regulatory
                          compliance?
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border-l-4 border-indigo-500 bg-indigo-50 p-6 dark:bg-indigo-950/30">
                  <h6 className="mb-3 font-bold text-indigo-700 dark:text-indigo-300">
                    What's Next?
                  </h6>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    The next frontier: <strong>reasoning models</strong> (OpenAI
                    o1, o3), <strong>agentic AI</strong> that can plan and
                    execute complex tasks, <strong>personalized models</strong>{" "}
                    that adapt to individual users, and{" "}
                    <strong>multimodal agents</strong> that seamlessly interact
                    with the physical and digital world. We're moving from
                    passive question-answering to active problem-solving
                    partners.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Fine-Tuning Large Language Models */}
          <section className="rounded-3xl border border-orange-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-orange-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-orange-600 dark:text-orange-400">
              Fine-Tuning Large Language Models
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Pre-trained foundation models are powerful, but they're
              generalists. To excel at specific tasks or domains (like financial
              analysis), we need to adapt them. Fine-tuning is the process of
              taking a pre-trained model and specializing it for your use case.
            </p>

            {/* Why Fine-Tune? */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Why Fine-Tune?
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-6 dark:border-blue-700 dark:bg-blue-950/30">
                  <div className="mb-3 text-center text-4xl">🎯</div>
                  <h5 className="mb-3 text-center font-bold text-blue-600 dark:text-blue-400">
                    Domain Expertise
                  </h5>
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Adapt to specialized domains (finance, medicine, law) with
                    domain-specific knowledge and terminology
                  </p>
                </div>

                <div className="rounded-xl border-2 border-green-300 bg-green-50 p-6 dark:border-green-700 dark:bg-green-950/30">
                  <div className="mb-3 text-center text-4xl">📊</div>
                  <h5 className="mb-3 text-center font-bold text-green-600 dark:text-green-400">
                    Better Performance
                  </h5>
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Achieve superior results on specific tasks compared to
                    zero-shot or few-shot prompting
                  </p>
                </div>

                <div className="rounded-xl border-2 border-purple-300 bg-purple-50 p-6 dark:border-purple-700 dark:bg-purple-950/30">
                  <div className="mb-3 text-center text-4xl">🔒</div>
                  <h5 className="mb-3 text-center font-bold text-purple-600 dark:text-purple-400">
                    Data Privacy
                  </h5>
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Use proprietary data to customize models without exposing it
                    via API prompts
                  </p>
                </div>

                <div className="rounded-xl border-2 border-orange-300 bg-orange-50 p-6 dark:border-orange-700 dark:bg-orange-950/30">
                  <div className="mb-3 text-center text-4xl">💰</div>
                  <h5 className="mb-3 text-center font-bold text-orange-600 dark:text-orange-400">
                    Cost Efficiency
                  </h5>
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Smaller fine-tuned models can match larger base models,
                    reducing inference costs
                  </p>
                </div>
              </div>
            </div>

            {/* Fine-Tuning Approaches */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Fine-Tuning Approaches
              </h3>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Full Fine-Tuning */}
                <div className="rounded-2xl border-2 border-red-300 bg-gradient-br from-red-50 to-orange-50 p-8 dark:border-red-700 dark:from-red-950/50 dark:to-orange-950/50">
                  <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                    Full Fine-Tuning
                  </h4>

                  <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Update <strong>all parameters</strong> of the model during
                      training on your custom dataset.
                    </p>
                    <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
                      <div className="mb-2 text-center font-mono text-xs font-bold">
                        Base Model (175B params) → Training → Fine-tuned Model
                        (175B params)
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border-l-4 border-green-500 bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 text-sm font-bold text-green-600 dark:text-green-400">
                        Advantages
                      </h6>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="mr-1">✓</span>
                          <span>Maximum performance gains</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1">✓</span>
                          <span>Model fully adapts to new domain</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border-l-4 border-red-500 bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 text-sm font-bold text-red-600 dark:text-red-400">
                        Disadvantages
                      </h6>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="mr-1">✗</span>
                          <span>Extremely expensive (compute & memory)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1">✗</span>
                          <span>Risk of catastrophic forgetting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1">✗</span>
                          <span>Need multiple GPU clusters</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* PEFT */}
                <div className="rounded-2xl border-2 border-green-300 bg-gradient-br from-green-50 to-emerald-50 p-8 dark:border-green-700 dark:from-green-950/50 dark:to-emerald-950/50">
                  <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                    PEFT (Parameter-Efficient Fine-Tuning)
                  </h4>

                  <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Update only a <strong>small subset</strong> of parameters,
                      keeping the base model frozen.
                    </p>
                    <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900/30">
                      <div className="mb-2 text-center font-mono text-xs font-bold">
                        Base Model (frozen 175B) + Adapter (10M params) =
                        Fine-tuned
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border-l-4 border-green-500 bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 text-sm font-bold text-green-600 dark:text-green-400">
                        Advantages
                      </h6>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="mr-1">✓</span>
                          <span>Train on consumer GPUs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1">✓</span>
                          <span>100-1000× fewer params</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1">✓</span>
                          <span>No catastrophic forgetting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1">✓</span>
                          <span>Swap adapters for multi-task</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border-l-4 border-orange-500 bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 text-sm font-bold text-orange-600 dark:text-orange-400">
                        Trade-offs
                      </h6>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="mr-1">⚠</span>
                          <span>Slightly lower performance ceiling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1">⚠</span>
                          <span>Requires careful hyperparameter tuning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supervised Fine-Tuning (SFT) */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Supervised Fine-Tuning (SFT)
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The most common form of fine-tuning: train the model on
                input-output pairs to teach it specific behaviors or knowledge.
              </p>

              <div className="rounded-2xl border-2 border-blue-300 bg-gradient-br from-blue-50 to-cyan-50 p-8 dark:border-blue-700 dark:from-blue-950/50 dark:to-cyan-950/50">
                <h4 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  SFT Process
                </h4>

                <div className="mb-8 rounded-xl bg-white p-8 dark:bg-gray-800">
                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">
                        1
                      </div>
                      <div className="flex-1">
                        <h5 className="mb-2 font-bold text-gray-900 dark:text-white">
                          Prepare Training Data
                        </h5>
                        <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                          Create dataset of (instruction, response) pairs
                        </p>
                        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                          <div className="mb-2 text-xs font-bold text-blue-700 dark:text-blue-300">
                            Example: Financial Q&A
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="rounded bg-white p-2 dark:bg-gray-800">
                              <strong>Input:</strong> "What is the P/E ratio of
                              Apple?"
                            </div>
                            <div className="rounded bg-white p-2 dark:bg-gray-800">
                              <strong>Output:</strong> "As of [date], Apple's
                              P/E ratio is 28.5, calculated as price per share
                              divided by earnings per share..."
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-white">
                        2
                      </div>
                      <div className="flex-1">
                        <h5 className="mb-2 font-bold text-gray-900 dark:text-white">
                          Fine-Tune Model
                        </h5>
                        <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                          Train using supervised learning (next-token
                          prediction)
                        </p>
                        <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-950/30">
                          <div className="mb-2 font-mono text-xs">
                            Loss = CrossEntropy(model_output, target_response)
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Model learns to generate outputs that match your
                            training examples
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-2xl">↓</div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white">
                        3
                      </div>
                      <div className="flex-1">
                        <h5 className="mb-2 font-bold text-gray-900 dark:text-white">
                          Evaluate & Deploy
                        </h5>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Test on held-out data, measure performance, deploy for
                          inference
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border-l-4 border-blue-500 bg-white p-6 dark:bg-gray-800">
                  <h6 className="mb-3 font-bold text-blue-600 dark:text-blue-400">
                    SFT for Financial Services
                  </h6>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">→</span>
                      <span>
                        Fine-tune on <strong>financial reports</strong> to
                        improve 10-K/10-Q analysis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">→</span>
                      <span>
                        Train on <strong>compliance documents</strong> to answer
                        regulatory questions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">→</span>
                      <span>
                        Use <strong>customer service transcripts</strong> to
                        build banking chatbots
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">→</span>
                      <span>
                        Adapt to <strong>risk assessment</strong> tasks with
                        historical loan data
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RLHF */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                RLHF: Reinforcement Learning from Human Feedback
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                RLHF is how models like ChatGPT learned to be helpful, harmless,
                and honest. Instead of just predicting the next token, models
                learn to maximize human preferences.
              </p>

              <div className="rounded-2xl border-2 border-purple-300 bg-gradient-br from-purple-50 to-pink-50 p-8 dark:border-purple-700 dark:from-purple-950/50 dark:to-pink-950/50">
                <h4 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
                  RLHF Pipeline
                </h4>

                <div className="space-y-8">
                  {/* Phase 1: SFT */}
                  <div className="rounded-xl border-2 border-blue-400 bg-white p-6 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        Phase 1: Supervised Fine-Tuning
                      </h5>
                      <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white">
                        Base → SFT Model
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Start with high-quality human demonstrations to teach
                      basic instruction-following behavior.
                    </p>
                  </div>

                  <div className="text-center text-2xl">↓</div>

                  {/* Phase 2: Reward Model */}
                  <div className="rounded-xl border-2 border-green-400 bg-white p-6 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-xl font-bold text-green-600 dark:text-green-400">
                        Phase 2: Train Reward Model
                      </h5>
                      <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                        Human Rankings
                      </span>
                    </div>

                    <div className="mb-4 space-y-3">
                      <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/30">
                        <div className="mb-2 text-xs font-bold text-green-700 dark:text-green-300">
                          Collect Human Preferences
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="rounded bg-white p-3 dark:bg-gray-800">
                            <div className="mb-1 font-semibold">
                              Prompt: "Explain compound interest"
                            </div>
                            <div className="ml-4 space-y-1">
                              <div className="text-green-600 dark:text-green-400">
                                ✓ Response A (Preferred): Clear, accurate,
                                helpful
                              </div>
                              <div className="text-red-600 dark:text-red-400">
                                ✗ Response B (Rejected): Confusing, contains
                                errors
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Train a <strong>reward model</strong> to predict which
                        responses humans prefer. This model outputs a scalar
                        score for any (prompt, response) pair.
                      </p>
                    </div>

                    <div className="rounded-lg bg-gray-100 p-3 text-center font-mono text-xs dark:bg-gray-900">
                      Reward(prompt, response) → score (higher = better)
                    </div>
                  </div>

                  <div className="text-center text-2xl">↓</div>

                  {/* Phase 3: RL Training */}
                  <div className="rounded-xl border-2 border-orange-400 bg-white p-6 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-xl font-bold text-orange-600 dark:text-orange-400">
                        Phase 3: RL Fine-Tuning (PPO)
                      </h5>
                      <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                        Optimize for Reward
                      </span>
                    </div>

                    <div className="mb-4 space-y-3">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Use <strong>PPO</strong> (Proximal Policy Optimization)
                        to fine-tune the model to maximize the reward model's
                        scores, while staying close to the original model.
                      </p>

                      <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-950/30">
                        <div className="mb-3 text-xs font-bold text-orange-700 dark:text-orange-300">
                          RL Objective
                        </div>
                        <div className="space-y-2 font-mono text-xs">
                          <div className="rounded bg-white p-2 dark:bg-gray-800">
                            Maximize: E[reward(prompt, model_response)]
                          </div>
                          <div className="rounded bg-white p-2 dark:bg-gray-800">
                            Constraint: KL_divergence(new_model, old_model) &lt;
                            threshold
                          </div>
                        </div>
                        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                          The KL constraint prevents the model from drifting too
                          far from its original behavior
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-2xl">↓</div>

                  {/* Result */}
                  <div className="rounded-xl bg-gradient-r from-purple-100 to-pink-100 p-6 text-center dark:from-purple-950/50 dark:to-pink-950/50">
                    <div className="mb-2 text-3xl">🎉</div>
                    <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      RLHF Model
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      A model aligned with human preferences: helpful, honest,
                      and harmless
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border-l-4 border-purple-500 bg-white p-6 dark:bg-gray-800">
                  <h6 className="mb-3 font-bold text-purple-600 dark:text-purple-400">
                    Why RLHF Matters
                  </h6>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">→</span>
                      <span>
                        Makes models <strong>conversational</strong> and
                        instruction-following
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">→</span>
                      <span>
                        Reduces harmful outputs and improves{" "}
                        <strong>safety</strong>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">→</span>
                      <span>
                        Can encode complex human values that are hard to specify
                        with rules
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">→</span>
                      <span>
                        Used by ChatGPT, Claude, Gemini, and most production
                        models
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PEFT Techniques */}
            <div className="mb-12">
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                PEFT Techniques: Fine-Tuning on a Budget
              </h3>

              <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Parameter-Efficient Fine-Tuning methods allow you to adapt large
                models with minimal compute. Instead of updating billions of
                parameters, update only millions.
              </p>

              <div className="space-y-8">
                {/* LoRA */}
                <div className="rounded-2xl border-2 border-indigo-300 bg-gradient-br from-indigo-50 to-purple-50 p-8 dark:border-indigo-700 dark:from-indigo-950/50 dark:to-purple-950/50">
                  <div className="mb-6 flex items-center justify-between">
                    <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      LoRA (Low-Rank Adaptation)
                    </h4>
                    <span className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  </div>

                  <div className="mb-6 rounded-xl bg-white p-6 dark:bg-gray-800">
                    <h5 className="mb-4 font-bold text-gray-900 dark:text-white">
                      Core Idea
                    </h5>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Instead of updating the full weight matrix W, add a
                      low-rank decomposition: W' = W + ΔW = W + BA, where B and
                      A are much smaller matrices.
                    </p>

                    <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-950/30">
                      <div className="mb-4 text-center font-mono text-sm font-bold">
                        Original: W (d × d) → LoRA: W + B·A
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-800">
                          <div className="mb-2 font-mono text-xs font-bold text-gray-900 dark:text-white">
                            W
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Original weights
                          </div>
                          <div className="mt-1 font-mono text-xs text-indigo-600 dark:text-indigo-400">
                            (4096, 4096)
                          </div>
                          <div className="mt-1 text-xs font-bold">
                            16.7M params
                          </div>
                        </div>

                        <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-800">
                          <div className="mb-2 font-mono text-xs font-bold text-gray-900 dark:text-white">
                            B
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Low-rank matrix
                          </div>
                          <div className="mt-1 font-mono text-xs text-green-600 dark:text-green-400">
                            (4096, 8)
                          </div>
                          <div className="mt-1 text-xs font-bold">
                            32K params
                          </div>
                        </div>

                        <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-800">
                          <div className="mb-2 font-mono text-xs font-bold text-gray-900 dark:text-white">
                            A
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Low-rank matrix
                          </div>
                          <div className="mt-1 font-mono text-xs text-green-600 dark:text-green-400">
                            (8, 4096)
                          </div>
                          <div className="mt-1 text-xs font-bold">
                            32K params
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-lg bg-green-100 p-3 text-center dark:bg-green-900/30">
                        <div className="text-sm font-bold text-green-700 dark:text-green-300">
                          LoRA: 64K params vs Original: 16.7M params
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          ~260× reduction in trainable parameters!
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 font-bold text-indigo-600 dark:text-indigo-400">
                        Advantages
                      </h6>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span>Train 7B models on single consumer GPU</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span>
                            Adapter files are tiny (few MB vs many GB)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span>
                            Can merge adapters or swap them on the fly
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span>
                            No inference latency penalty (merge at load)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
                      <h6 className="mb-2 font-bold text-orange-600 dark:text-orange-400">
                        Common Use Cases
                      </h6>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="mr-2">→</span>
                          <span>
                            Domain adaptation (finance, medicine, legal)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">→</span>
                          <span>
                            Task-specific fine-tuning (summarization, QA)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">→</span>
                          <span>
                            Multi-tenant serving (one base model, many adapters)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* QLoRA */}
                <div className="rounded-2xl border-2 border-teal-300 bg-gradient-br from-teal-50 to-cyan-50 p-8 dark:border-teal-700 dark:from-teal-950/50 dark:to-cyan-950/50">
                  <h4 className="mb-4 text-2xl font-bold text-teal-600 dark:text-teal-400">
                    QLoRA (Quantized LoRA)
                  </h4>

                  <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Combines <strong>quantization</strong> (4-bit) with LoRA
                      to enable fine-tuning even larger models on limited
                      hardware.
                    </p>

                    <div className="mb-4 rounded-lg bg-teal-50 p-4 dark:bg-teal-950/30">
                      <div className="mb-3 text-center text-xs font-bold text-teal-700 dark:text-teal-300">
                        Memory Comparison
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between rounded bg-white p-2 dark:bg-gray-800">
                          <span>Full FP16 (65B model)</span>
                          <span className="font-bold text-red-600">
                            ~130 GB
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded bg-white p-2 dark:bg-gray-800">
                          <span>4-bit + LoRA (65B model)</span>
                          <span className="font-bold text-green-600">
                            ~48 GB
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        <strong>Result:</strong> Fine-tune 65B models on a
                        single 48GB GPU! Democratizes LLM customization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Other PEFT Methods */}
                <div className="rounded-2xl border-2 border-gray-300 bg-white p-8 dark:border-gray-600 dark:bg-gray-800">
                  <h4 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                    Other PEFT Methods
                  </h4>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
                      <h5 className="mb-2 font-bold text-blue-600 dark:text-blue-400">
                        Adapter Layers
                      </h5>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        Insert small trainable modules between frozen
                        transformer layers. Simple but adds inference latency.
                      </p>
                    </div>

                    <div className="rounded-xl border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950/30">
                      <h5 className="mb-2 font-bold text-purple-600 dark:text-purple-400">
                        Prefix Tuning
                      </h5>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        Prepend trainable "virtual tokens" to the input. Model
                        learns task-specific context without changing weights.
                      </p>
                    </div>

                    <div className="rounded-xl border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
                      <h5 className="mb-2 font-bold text-green-600 dark:text-green-400">
                        Prompt Tuning
                      </h5>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        Learn soft prompts (continuous embeddings) instead of
                        discrete text. Extremely parameter-efficient.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Considerations */}
            <div className="rounded-3xl border-2 border-yellow-400 bg-gradient-br from-yellow-50 via-orange-50 to-red-50 p-8 dark:border-yellow-600 dark:from-yellow-950/50 dark:via-orange-950/50 dark:to-red-950/50">
              <h3 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
                Practical Considerations for Financial Institutions
              </h3>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-4 font-bold text-gray-900 dark:text-white">
                    When to Use Each Approach
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-950/30">
                      <div className="mb-1 font-bold text-blue-700 dark:text-blue-300">
                        Use SFT when:
                      </div>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        You have labeled examples and want task-specific
                        behavior
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3 dark:bg-purple-950/30">
                      <div className="mb-1 font-bold text-purple-700 dark:text-purple-300">
                        Use RLHF when:
                      </div>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        You need human-like judgment and alignment with
                        preferences
                      </p>
                    </div>

                    <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-950/30">
                      <div className="mb-1 font-bold text-green-700 dark:text-green-300">
                        Use LoRA/QLoRA when:
                      </div>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        Limited compute budget or need multiple task-specific
                        models
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
                  <h5 className="mb-4 font-bold text-gray-900 dark:text-white">
                    Key Challenges
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">⚠</span>
                      <span>
                        <strong>Data quality:</strong> Garbage in, garbage out.
                        Need high-quality training data.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">⚠</span>
                      <span>
                        <strong>Overfitting:</strong> Small datasets can cause
                        models to memorize instead of generalize
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">⚠</span>
                      <span>
                        <strong>Catastrophic forgetting:</strong> Fine-tuning
                        can degrade general capabilities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">⚠</span>
                      <span>
                        <strong>Evaluation:</strong> Hard to measure if model
                        truly improved on your specific task
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">⚠</span>
                      <span>
                        <strong>Compliance:</strong> Need audit trails, version
                        control, and model governance
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-2 border-orange-400 bg-orange-50 p-6 dark:border-orange-600 dark:bg-orange-950/30">
                <h6 className="mb-3 font-bold text-orange-700 dark:text-orange-300">
                  Recommendation for Financial Institutions
                </h6>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Start with <strong>LoRA fine-tuning</strong> on open-weight
                  models (LLaMA 3, Mistral). This gives you control, data
                  privacy, and cost efficiency. Use SFT for task-specific
                  adaptation, then consider RLHF only if you need sophisticated
                  alignment with complex human preferences. Always maintain
                  rigorous evaluation pipelines and model versioning for
                  regulatory compliance.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ═══════ LATEST ADVANCEMENTS ═══════ */}
        <section className="mb-16 mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-1.5 text-xs font-bold text-white shadow-lg">2025 – 2026 Updates</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Advancements in Foundation Models</h2>
          </div>
          <div className="rounded-3xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-xl dark:border-purple-700/50 dark:from-purple-950/30 dark:to-pink-950/30">
            <p className="mb-8 text-gray-700 dark:text-gray-300">The foundation model landscape has shifted dramatically. Here is what every practitioner needs to know today.</p>

            {/* Reasoning Models */}
            <div className="mb-8 rounded-2xl border border-purple-200 bg-white p-6 shadow-sm dark:border-purple-700/40 dark:bg-gray-800">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white">Paradigm Shift</span>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">The Reasoning Model Revolution</h3>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">A new class of models — called <strong>reasoning models</strong> — emerged in late 2024 and changed how we think about model capabilities. Instead of answering immediately, they spend extra compute <em>thinking</em> before responding (test-time compute).</p>
              <div className="mb-4 grid gap-4 md:grid-cols-2">
                {[
                  { model: "OpenAI o1 / o3 / o4-mini", desc: "OpenAI's reasoning series. o3 achieves near-human performance on graduate-level science and advanced math. o4-mini is fast and cheap." },
                  { model: "Claude Extended Thinking", desc: "Anthropic's Claude 3.5/4.x with thinking mode: the model shows its reasoning chain. Excellent for multi-step compliance and legal analysis." },
                  { model: "DeepSeek-R1", desc: "Open-weights Chinese reasoning model matching o1-level performance at a fraction of the cost. Shook the market in early 2025." },
                  { model: "Google Gemini 2.5 Pro", desc: "Google's reasoning model with 1M-token context. Strong on code, science, and multimodal reasoning." },
                ].map((m) => (
                  <div key={m.model} className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
                    <div className="mb-1 font-bold text-purple-700 dark:text-purple-400 text-sm">{m.model}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 dark:bg-amber-900/20 dark:border-amber-700/40">
                <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm mb-1">Finance Impact</p>
                <p className="text-xs text-amber-900 dark:text-amber-200">Reasoning models excel at multi-step financial analysis: "Given this 10-K, calculate the debt coverage ratio, compare it to the industry average, and flag any covenant risks." Tasks that used to require Chain-of-Thought prompting now just need a clear goal statement.</p>
              </div>
            </div>

            {/* Context Window Explosion */}
            <div className="mb-8 rounded-2xl border border-purple-200 bg-white p-6 shadow-sm dark:border-purple-700/40 dark:bg-gray-800">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-bold text-white">Game Changer</span>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Context Window Explosion</h3>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Context windows have grown 100× in two years, fundamentally changing what's possible without RAG.</p>
              <div className="mb-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="bg-purple-100 dark:bg-purple-900/40">
                    <th className="p-3 text-left font-bold text-purple-800 dark:text-purple-300">Model</th>
                    <th className="p-3 text-left font-bold text-purple-800 dark:text-purple-300">Context Window</th>
                    <th className="p-3 text-left font-bold text-purple-800 dark:text-purple-300">What Fits</th>
                  </tr></thead>
                  <tbody className="divide-y divide-purple-100 dark:divide-purple-900/30">
                    {[
                      ["GPT-3.5 (2022)","4K tokens","~3 pages"],
                      ["GPT-4 Turbo","128K tokens","~100 pages / a short book"],
                      ["Claude 3.5/4.x","200K tokens","~150 pages / a full annual report"],
                      ["Gemini 2.0/2.5 Flash","1M tokens","~750 pages / an entire regulatory handbook"],
                    ].map(([model,ctx,fit]) => (
                      <tr key={model} className="bg-white dark:bg-gray-900/30">
                        <td className="p-3 font-semibold text-gray-900 dark:text-white">{model}</td>
                        <td className="p-3 font-mono text-purple-700 dark:text-purple-400">{ctx}</td>
                        <td className="p-3 text-gray-600 dark:text-gray-400">{fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Implication: for many financial document tasks (single annual report Q&A, one regulatory circular), you can now load the entire document into context instead of building a RAG pipeline. RAG still wins for large corpora, freshness, access control, and cost at scale.</p>
            </div>

            {/* Model Landscape 2025-2026 */}
            <div className="mb-8 rounded-2xl border border-purple-200 bg-white p-6 shadow-sm dark:border-purple-700/40 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-purple-700 dark:text-purple-400">Model Landscape Update (2025–2026)</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { vendor: "Anthropic", models: "Claude Haiku 4.5, Sonnet 4.6, Opus 4.8", note: "Best for nuanced reasoning, safety-critical finance apps." },
                  { vendor: "OpenAI", models: "GPT-4o, o3, o4-mini", note: "o3 for hard problems; o4-mini for cost-efficient reasoning at scale." },
                  { vendor: "Google", models: "Gemini 2.0/2.5 Flash, Pro, Ultra", note: "Best multimodal capabilities; Flash is very cost-efficient." },
                  { vendor: "Meta (Open)", models: "Llama 4 Scout, Maverick", note: "Open weights; deploy in your own infrastructure for data control." },
                  { vendor: "DeepSeek (Open)", models: "DeepSeek-V3, DeepSeek-R1", note: "Competitive with frontier models; open weights; cost disruption." },
                  { vendor: "Microsoft", models: "Phi-4 (14B)", note: "Small but capable; runs on-device; no data leaves the endpoint." },
                ].map((v) => (
                  <div key={v.vendor} className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
                    <div className="mb-1 font-bold text-purple-700 dark:text-purple-400 text-sm">{v.vendor}</div>
                    <div className="mb-1 text-xs font-mono text-gray-800 dark:text-gray-300">{v.models}</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{v.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Small Models + Multimodal */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm dark:border-purple-700/40 dark:bg-gray-800">
                <h3 className="mb-3 text-lg font-bold text-purple-700 dark:text-purple-400">Small Language Models (SLMs)</h3>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">Phi-4 (14B), Gemma 3 (27B), Llama 3.2 (3B/11B) prove you don't need a massive model for every task.</p>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2"><span className="text-purple-500 font-bold">•</span>Run entirely on-device (laptop, mobile, edge server)</li>
                  <li className="flex gap-2"><span className="text-purple-500 font-bold">•</span>No data leaves your environment — critical for MNPI handling</li>
                  <li className="flex gap-2"><span className="text-purple-500 font-bold">•</span>Faster and cheaper for high-volume, simple tasks</li>
                  <li className="flex gap-2"><span className="text-purple-500 font-bold">•</span>Finance use: document classification, PII detection, form parsing</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm dark:border-purple-700/40 dark:bg-gray-800">
                <h3 className="mb-3 text-lg font-bold text-purple-700 dark:text-purple-400">Multimodal Becomes Standard</h3>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">Every frontier model now handles text + images natively. Some handle audio and video too.</p>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span>GPT-4o: real-time text + vision + audio in one model</li>
                  <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span>Gemini 2.0: text + vision + audio + video + code execution</li>
                  <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span>Finance use: read earnings slides directly, analyze portfolio charts, process scanned regulatory forms</li>
                  <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span>No more OCR pipelines for standard document types</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="mt-16 flex items-center justify-between rounded-3xl border border-gray-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/60">
          <a
            href="/"
            className="flex items-center font-semibold text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            ← Back to Home
          </a>
          <a
            href="/module2"
            className="flex items-center font-semibold text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            Next: Prompt Engineering →
          </a>
        </div>
      </main>
    </div>
  );
}
