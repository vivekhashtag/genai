export default function Module3() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-br from-slate-50 via-green-50 to-emerald-50 dark:from-gray-950 dark:via-slate-900 dark:to-emerald-950">
      {/* Animated Background Shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-green-300/30 blur-3xl dark:bg-green-600/20"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse rounded-full bg-emerald-300/30 blur-3xl delay-700 dark:bg-emerald-600/20"></div>
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-pulse rounded-full bg-teal-300/30 blur-3xl delay-1000 dark:bg-teal-600/20"></div>
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Navigation */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-700 transition-all hover:text-green-900 hover:gap-3 dark:text-green-400 dark:hover:text-green-200"
          >
            <span>←</span>
            <span>Back to Course Home</span>
          </a>
        </div>

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 block w-fit mx-auto rounded-full bg-linear-to-r from-green-600 to-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            Module 03
          </div>
          <h1 className="mb-6 bg-linear-to-r from-green-900 via-emerald-800 to-green-900 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent dark:from-green-200 dark:via-emerald-200 dark:to-green-200 sm:text-7xl">
            Embeddings & Vector Stores
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Transforming text into semantic search - the foundation of modern AI
            applications
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Section 1: Understanding Embeddings */}
          <section className="rounded-3xl border border-green-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-green-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-green-600 dark:text-green-400">
              Understanding Embeddings
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Embeddings are one of the most powerful concepts in modern AI.
              They transform text, images, or other data into numerical vectors
              that capture semantic meaning. This transformation unlocks
              capabilities like semantic search, recommendation systems, and
              retrieval-augmented generation.
            </p>

            {/* What Are Embeddings */}
            <div className="mb-12 rounded-2xl border-2 border-green-300 bg-gradient-br from-green-50 to-emerald-50 p-8 dark:border-green-700 dark:from-green-950/50 dark:to-emerald-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                What Are Embeddings?
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                An <strong>embedding</strong> is a dense vector representation
                of data that captures its semantic meaning in a high-dimensional
                space. Instead of treating words or sentences as discrete
                symbols, embeddings represent them as arrays of numbers.
              </p>

              <div className="mb-8 rounded-xl border-2 border-green-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 font-bold text-green-700 dark:text-green-300">
                  Simple Example
                </h4>
                <div className="space-y-4 font-mono text-sm">
                  <div>
                    <div className="mb-2 text-gray-600 dark:text-gray-400">
                      Input Text:
                    </div>
                    <div className="rounded bg-gray-100 p-3 dark:bg-gray-900">
                      "The company's revenue increased by 15%"
                    </div>
                  </div>
                  <div className="text-center text-2xl text-green-600">↓</div>
                  <div>
                    <div className="mb-2 text-gray-600 dark:text-gray-400">
                      Embedding (simplified to 8 dimensions):
                    </div>
                    <div className="rounded bg-gray-100 p-3 dark:bg-gray-900">
                      [0.23, -0.45, 0.67, 0.12, -0.89, 0.34, 0.56, -0.21]
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Real embeddings are typically 384, 768, 1536, or even 3072
                  dimensions!
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border-2 border-green-400 bg-white p-6 dark:bg-gray-800">
                  <div className="mb-3 text-center text-4xl">📊</div>
                  <h5 className="mb-3 text-center font-bold text-green-600 dark:text-green-400">
                    Semantic Capture
                  </h5>
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Similar meanings produce similar vectors, even with
                    different words
                  </p>
                </div>

                <div className="rounded-xl border-2 border-emerald-400 bg-white p-6 dark:bg-gray-800">
                  <div className="mb-3 text-center text-4xl">🎯</div>
                  <h5 className="mb-3 text-center font-bold text-emerald-600 dark:text-emerald-400">
                    Dense Representation
                  </h5>
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Every dimension carries meaningful information about the
                    text
                  </p>
                </div>

                <div className="rounded-xl border-2 border-teal-400 bg-white p-6 dark:bg-gray-800">
                  <div className="mb-3 text-center text-4xl">🔍</div>
                  <h5 className="mb-3 text-center font-bold text-teal-600 dark:text-teal-400">
                    Searchable
                  </h5>
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Mathematical operations enable similarity comparisons
                  </p>
                </div>
              </div>
            </div>

            {/* Why Embeddings Matter */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Why Embeddings Matter for Finance
              </h3>

              <div className="mb-6 rounded-xl border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-950/30">
                <h4 className="mb-3 font-bold text-green-700 dark:text-green-300">
                  Traditional Keyword Search vs Semantic Search
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Traditional search matches exact keywords. If you search for
                  "revenue growth" but the document says "increasing sales", you
                  miss it. Embeddings understand that these phrases are
                  semantically related.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Traditional Search */}
                <div className="rounded-xl border-2 border-red-400 bg-red-50 p-6 dark:bg-red-950/30">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl">❌</span>
                    <h4 className="font-bold text-red-700 dark:text-red-300">
                      Keyword Search
                    </h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
                        Query:
                      </div>
                      <div className="rounded bg-white p-2 font-mono dark:bg-gray-800">
                        "credit risk"
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
                        Finds:
                      </div>
                      <div className="rounded bg-white p-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        Documents with exact words "credit" AND "risk"
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
                        Misses:
                      </div>
                      <div className="rounded bg-white p-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        "default probability", "borrower reliability", "lending
                        exposure"
                      </div>
                    </div>
                  </div>
                </div>

                {/* Semantic Search */}
                <div className="rounded-xl border-2 border-green-400 bg-green-50 p-6 dark:bg-green-950/30">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <h4 className="font-bold text-green-700 dark:text-green-300">
                      Semantic Search (Embeddings)
                    </h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
                        Query:
                      </div>
                      <div className="rounded bg-white p-2 font-mono dark:bg-gray-800">
                        "credit risk"
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
                        Finds:
                      </div>
                      <div className="rounded bg-white p-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        Documents about credit risk, default probability,
                        borrower assessment
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
                        Understands:
                      </div>
                      <div className="rounded bg-white p-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        Semantic similarity between related financial concepts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How Embeddings Work - Intuition */}
            <div className="mb-12 rounded-2xl border-2 border-emerald-300 bg-gradient-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-700 dark:from-emerald-950/50 dark:to-teal-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                How Embeddings Work: The Intuition
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Think of embeddings as coordinates in a multi-dimensional
                "meaning space". Words or phrases with similar meanings are
                located close together in this space.
              </p>

              <div className="mb-8 rounded-xl bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-center font-bold text-gray-900 dark:text-white">
                  Visualizing Embeddings (2D Simplification)
                </h4>
                <div className="relative h-96 rounded-lg border-2 border-gray-300 bg-gradient-br from-gray-50 to-gray-100 p-8 dark:border-gray-600 dark:from-gray-900 dark:to-gray-800">
                  {/* Axis labels */}
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">
                    Dimension 1 →
                  </div>
                  <div className="absolute left-2 top-2 -rotate-90 text-xs text-gray-500 dark:text-gray-400">
                    ← Dimension 2
                  </div>

                  {/* Cluster 1: Financial Performance */}
                  <div className="absolute left-[20%] top-[25%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-green-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-green-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "revenue growth"
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[25%] top-[30%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-green-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-green-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "increasing sales"
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[22%] top-[35%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-green-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-green-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "profit expansion"
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[18%] top-[20%] rounded-full border-2 border-dashed border-green-400 px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-300">
                    Financial Performance
                  </div>

                  {/* Cluster 2: Risk Management */}
                  <div className="absolute right-[20%] top-[20%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-red-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "credit risk"
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-[22%] top-[28%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-red-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "default probability"
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-[25%] top-[25%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-red-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "lending exposure"
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-[18%] top-[15%] rounded-full border-2 border-dashed border-red-400 px-3 py-1 text-xs font-semibold text-red-700 dark:text-red-300">
                    Risk Management
                  </div>

                  {/* Cluster 3: Market Analysis */}
                  <div className="absolute bottom-[25%] left-[35%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-blue-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-blue-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "market trends"
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[20%] left-[38%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-blue-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-blue-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "sector performance"
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[28%] left-[40%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-blue-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-blue-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "industry analysis"
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[18%] left-[32%] rounded-full border-2 border-dashed border-blue-400 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                    Market Analysis
                  </div>

                  {/* Cluster 4: Regulatory Compliance */}
                  <div className="absolute bottom-[22%] right-[25%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-purple-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-purple-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "regulatory compliance"
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[28%] right-[22%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-purple-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-purple-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "policy adherence"
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[25%] right-[28%]">
                    <div className="group relative">
                      <div className="h-3 w-3 rounded-full bg-purple-500 shadow-lg"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-purple-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        "legal requirements"
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[15%] right-[20%] rounded-full border-2 border-dashed border-purple-400 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300">
                    Compliance
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                  Hover over dots to see the phrases. Notice how semantically
                  similar phrases cluster together!
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-emerald-500 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-3 font-bold text-emerald-700 dark:text-emerald-300">
                  Key Insight
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  In real embeddings, we have hundreds or thousands of
                  dimensions, not just 2. This high-dimensional space allows
                  capturing incredibly nuanced semantic relationships. "Revenue
                  growth" and "increasing sales" will have vectors that point in
                  nearly the same direction in this space.
                </p>
              </div>
            </div>

            {/* Embedding Models */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Popular Embedding Models
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                {/* OpenAI Embeddings */}
                <div className="rounded-xl border-2 border-green-300 bg-white p-6 dark:border-green-700 dark:bg-gray-800">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xl font-bold text-green-700 dark:text-green-300">
                      OpenAI Embeddings
                    </h4>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/50 dark:text-green-300">
                      Proprietary
                    </span>
                  </div>
                  <div className="mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <strong>Model:</strong> text-embedding-3-small,
                      text-embedding-3-large
                    </div>
                    <div>
                      <strong>Dimensions:</strong> 512 / 1536 / 3072
                      (configurable)
                    </div>
                    <div>
                      <strong>Max Input:</strong> 8,191 tokens
                    </div>
                    <div>
                      <strong>Use Case:</strong> General purpose, excellent for
                      English
                    </div>
                  </div>
                  <div className="rounded bg-gray-50 p-3 dark:bg-gray-900">
                    <div className="mb-1 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Pricing (per 1M tokens):
                    </div>
                    <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      Small: $0.02 | Large: $0.13
                    </div>
                  </div>
                </div>

                {/* Cohere Embeddings */}
                <div className="rounded-xl border-2 border-emerald-300 bg-white p-6 dark:border-emerald-700 dark:bg-gray-800">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
                      Cohere Embed
                    </h4>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                      Proprietary
                    </span>
                  </div>
                  <div className="mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <strong>Model:</strong> embed-english-v3.0,
                      embed-multilingual-v3.0
                    </div>
                    <div>
                      <strong>Dimensions:</strong> 1024
                    </div>
                    <div>
                      <strong>Max Input:</strong> 512 tokens
                    </div>
                    <div>
                      <strong>Use Case:</strong> Multilingual, semantic search
                      optimized
                    </div>
                  </div>
                  <div className="rounded bg-gray-50 p-3 dark:bg-gray-900">
                    <div className="mb-1 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Pricing (per 1M tokens):
                    </div>
                    <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      $0.10
                    </div>
                  </div>
                </div>

                {/* Sentence Transformers */}
                <div className="rounded-xl border-2 border-teal-300 bg-white p-6 dark:border-teal-700 dark:bg-gray-800">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xl font-bold text-teal-700 dark:text-teal-300">
                      Sentence Transformers
                    </h4>
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                      Open Source
                    </span>
                  </div>
                  <div className="mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <strong>Model:</strong> all-MiniLM-L6-v2,
                      all-mpnet-base-v2
                    </div>
                    <div>
                      <strong>Dimensions:</strong> 384 / 768
                    </div>
                    <div>
                      <strong>Max Input:</strong> 256 / 384 tokens
                    </div>
                    <div>
                      <strong>Use Case:</strong> Fast, efficient, self-hosted
                    </div>
                  </div>
                  <div className="rounded bg-gray-50 p-3 dark:bg-gray-900">
                    <div className="mb-1 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Pricing:
                    </div>
                    <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      Free (self-hosted)
                    </div>
                  </div>
                </div>

                {/* Voyage AI */}
                <div className="rounded-xl border-2 border-cyan-300 bg-white p-6 dark:border-cyan-700 dark:bg-gray-800">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xl font-bold text-cyan-700 dark:text-cyan-300">
                      Voyage AI
                    </h4>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                      Proprietary
                    </span>
                  </div>
                  <div className="mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <strong>Model:</strong> voyage-finance-2, voyage-law-2
                    </div>
                    <div>
                      <strong>Dimensions:</strong> 1024
                    </div>
                    <div>
                      <strong>Max Input:</strong> 16,000 tokens
                    </div>
                    <div>
                      <strong>Use Case:</strong> Domain-specific (finance,
                      legal)
                    </div>
                  </div>
                  <div className="rounded bg-gray-50 p-3 dark:bg-gray-900">
                    <div className="mb-1 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Pricing (per 1M tokens):
                    </div>
                    <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      $0.12
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-950/30">
                <h4 className="mb-3 font-bold text-green-700 dark:text-green-300">
                  Finance-Specific Recommendation
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  For financial applications, consider{" "}
                  <strong>Voyage AI's finance-2 model</strong>
                  which is specifically trained on financial documents, or{" "}
                  <strong>OpenAI's text-embedding-3-large</strong> for
                  general-purpose high-quality embeddings. For cost-sensitive or
                  privacy-critical applications, self-hosted{" "}
                  <strong>Sentence Transformers</strong> are excellent choices.
                </p>
              </div>
            </div>

            {/* How to Generate Embeddings */}
            <div className="rounded-2xl border-2 border-green-300 bg-gradient-br from-green-50 to-emerald-50 p-8 dark:border-green-700 dark:from-green-950/50 dark:to-emerald-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                How to Generate Embeddings
              </h3>

              <div className="space-y-6">
                {/* OpenAI Example */}
                <div className="rounded-xl border-2 border-green-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-green-700 dark:text-green-300">
                    Using OpenAI API
                  </h4>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`from openai import OpenAI

client = OpenAI(api_key="your-api-key")

# Generate embedding for financial text
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="The company reported strong quarterly earnings with 15% revenue growth"
)

embedding = response.data[0].embedding
print(f"Embedding dimensions: {len(embedding)}")
print(f"First 5 values: {embedding[:5]}")

# Output:
# Embedding dimensions: 1536
# First 5 values: [0.0023, -0.0045, 0.0067, 0.0012, -0.0089]`}
                  </pre>
                </div>

                {/* Sentence Transformers Example */}
                <div className="rounded-xl border-2 border-teal-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-teal-700 dark:text-teal-300">
                    Using Sentence Transformers (Self-Hosted)
                  </h4>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`from sentence_transformers import SentenceTransformer

# Load model (downloads on first run)
model = SentenceTransformer('all-MiniLM-L6-v2')

# Generate embeddings
texts = [
    "The company's revenue increased by 15%",
    "Sales growth exceeded expectations",
    "Credit risk remains elevated"
]

embeddings = model.encode(texts)
print(f"Shape: {embeddings.shape}")
print(f"Embedding for text 1: {embeddings[0][:5]}")

# Output:
# Shape: (3, 384)
# Embedding for text 1: [0.023, -0.045, 0.067, 0.012, -0.089]`}
                  </pre>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-green-500 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-3 font-bold text-green-700 dark:text-green-300">
                  Key Considerations
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>
                      <strong>Consistency:</strong> Always use the same model
                      for both indexing and querying
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>
                      <strong>Chunking:</strong> Break long documents into
                      smaller chunks before embedding
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>
                      <strong>Batch Processing:</strong> Generate embeddings in
                      batches for efficiency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>
                      <strong>Caching:</strong> Store embeddings once generated
                      to avoid recomputation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Text to Vector to Similarity Search */}
          <section className="rounded-3xl border border-emerald-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-emerald-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-emerald-600 dark:text-emerald-400">
              From Text to Similarity Search
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Now that we understand embeddings, let's see how they power
              semantic search. The process involves three key steps: encoding
              text into vectors, measuring similarity between vectors, and
              retrieving the most relevant results.
            </p>

            {/* The Complete Workflow */}
            <div className="mb-12 rounded-2xl border-2 border-emerald-300 bg-gradient-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-700 dark:from-emerald-950/50 dark:to-teal-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                The Complete Workflow
              </h3>

              <div className="space-y-6">
                {/* Step 1: Indexing */}
                <div className="rounded-xl border-2 border-emerald-400 bg-white p-6 dark:bg-gray-800">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                      1
                    </div>
                    <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
                      Indexing Phase: Embed Your Documents
                    </h4>
                  </div>

                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Before you can search, you need to convert all your
                    documents into embeddings and store them in a vector
                    database.
                  </p>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
                      Example: Financial Reports Database
                    </div>
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 rounded bg-white p-2 dark:bg-gray-800">
                          "Q4 revenue grew 12% YoY"
                        </div>
                        <span className="text-emerald-600">→</span>
                        <div className="flex-1 rounded bg-emerald-50 p-2 dark:bg-emerald-950/30">
                          [0.23, -0.45, 0.67, ... 1533 more]
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 rounded bg-white p-2 dark:bg-gray-800">
                          "Default rates increased to 2.3%"
                        </div>
                        <span className="text-emerald-600">→</span>
                        <div className="flex-1 rounded bg-emerald-50 p-2 dark:bg-emerald-950/30">
                          [0.12, 0.34, -0.21, ... 1533 more]
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 rounded bg-white p-2 dark:bg-gray-800">
                          "Market volatility remains high"
                        </div>
                        <span className="text-emerald-600">→</span>
                        <div className="flex-1 rounded bg-emerald-50 p-2 dark:bg-emerald-950/30">
                          [0.45, -0.12, 0.33, ... 1533 more]
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                      Each document chunk becomes a 1536-dimensional vector
                    </div>
                  </div>
                </div>

                {/* Step 2: Query */}
                <div className="rounded-xl border-2 border-teal-400 bg-white p-6 dark:bg-gray-800">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                      2
                    </div>
                    <h4 className="text-xl font-bold text-teal-700 dark:text-teal-300">
                      Query Phase: Embed Your Question
                    </h4>
                  </div>

                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    When a user asks a question, convert it to an embedding
                    using the
                    <strong> same model</strong> you used for indexing.
                  </p>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
                      User Query
                    </div>
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <div className="flex-1 rounded bg-white p-3 dark:bg-gray-800">
                        "How is the company performing financially?"
                      </div>
                      <span className="text-teal-600">→</span>
                      <div className="flex-1 rounded bg-teal-50 p-3 dark:bg-teal-950/30">
                        [0.21, -0.43, 0.65, ... 1533 more]
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Similarity */}
                <div className="rounded-xl border-2 border-cyan-400 bg-white p-6 dark:bg-gray-800">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-lg font-bold text-white">
                      3
                    </div>
                    <h4 className="text-xl font-bold text-cyan-700 dark:text-cyan-300">
                      Similarity Calculation: Find Nearest Neighbors
                    </h4>
                  </div>

                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Calculate the similarity between the query embedding and all
                    document embeddings. Return the top matches.
                  </p>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
                      Similarity Scores
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-3 rounded bg-green-50 p-2 dark:bg-green-950/30">
                        <div className="w-8 font-bold text-green-700 dark:text-green-300">
                          0.89
                        </div>
                        <div className="flex-1 font-mono text-gray-700 dark:text-gray-300">
                          "Q4 revenue grew 12% YoY"
                        </div>
                        <span className="rounded-full bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                          TOP MATCH
                        </span>
                      </div>
                      <div className="flex items-center gap-3 rounded bg-gray-100 p-2 dark:bg-gray-800">
                        <div className="w-8 font-bold text-gray-600 dark:text-gray-400">
                          0.45
                        </div>
                        <div className="flex-1 font-mono text-gray-700 dark:text-gray-300">
                          "Market volatility remains high"
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded bg-gray-100 p-2 dark:bg-gray-800">
                        <div className="w-8 font-bold text-gray-600 dark:text-gray-400">
                          0.23
                        </div>
                        <div className="flex-1 font-mono text-gray-700 dark:text-gray-300">
                          "Default rates increased to 2.3%"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Similarity Metrics */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Measuring Similarity: Distance Metrics
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                How do we actually measure if two vectors are "similar"? There
                are several mathematical approaches, each with different
                properties.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Cosine Similarity */}
                <div className="rounded-xl border-2 border-emerald-300 bg-white p-6 dark:border-emerald-700 dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                    Cosine Similarity
                  </h4>
                  <div className="mb-4 rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-900">
                    similarity = cos(θ)
                    <br />
                    Range: [-1, 1]
                    <br />
                    1 = identical
                    <br />
                    0 = orthogonal
                    <br />
                    -1 = opposite
                  </div>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Measures the angle between vectors, ignoring magnitude.
                  </p>
                  <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-3 dark:bg-emerald-950/30">
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                      Most Common
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300">
                      Used by OpenAI, Cohere, and most embedding models
                    </div>
                  </div>
                </div>

                {/* Euclidean Distance */}
                <div className="rounded-xl border-2 border-teal-300 bg-white p-6 dark:border-teal-700 dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-teal-700 dark:text-teal-300">
                    Euclidean Distance
                  </h4>
                  <div className="mb-4 rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-900">
                    d = √Σ(a_i - b_i)²
                    <br />
                    Range: [0, ∞]
                    <br />
                    0 = identical
                    <br />∞ = very different
                  </div>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Straight-line distance between two points in space.
                  </p>
                  <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-3 dark:bg-teal-950/30">
                    <div className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                      Good For
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300">
                      Image embeddings, normalized vectors
                    </div>
                  </div>
                </div>

                {/* Dot Product */}
                <div className="rounded-xl border-2 border-cyan-300 bg-white p-6 dark:border-cyan-700 dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-cyan-700 dark:text-cyan-300">
                    Dot Product
                  </h4>
                  <div className="mb-4 rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-900">
                    similarity = Σ(a_i × b_i)
                    <br />
                    Range: [-∞, ∞]
                    <br />
                    Higher = more similar
                  </div>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Simple multiplication and sum. Fast to compute.
                  </p>
                  <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-3 dark:bg-cyan-950/30">
                    <div className="text-xs font-semibold text-cyan-700 dark:text-cyan-300">
                      Use Case
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300">
                      When embeddings are normalized
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
                <h4 className="mb-3 font-bold text-emerald-700 dark:text-emerald-300">
                  Recommendation for Finance
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  <strong>Cosine similarity</strong> is the standard choice for
                  text embeddings and is what most embedding models are
                  optimized for. It works well even when documents have
                  different lengths (which is common in financial documents like
                  10-Ks, earnings calls, and research reports).
                </p>
              </div>
            </div>

            {/* Practical Example */}
            <div className="mb-12 rounded-2xl border-2 border-emerald-300 bg-gradient-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-700 dark:from-emerald-950/50 dark:to-teal-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Practical Example: Financial Document Search
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Let's walk through a complete example of semantic search on
                financial documents.
              </p>

              <div className="space-y-6">
                {/* Code Example */}
                <div className="rounded-xl border-2 border-emerald-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-emerald-700 dark:text-emerald-300">
                    Complete Python Implementation
                  </h4>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`import numpy as np
from openai import OpenAI
from sklearn.metrics.pairwise import cosine_similarity

client = OpenAI(api_key="your-api-key")

# Sample financial documents
documents = [
    "The company's Q4 revenue increased by 15% year-over-year to $2.3B",
    "Credit default rates rose to 2.8% in the commercial lending portfolio",
    "Net interest margin compressed by 25 basis points due to rate changes",
    "Market volatility led to a 12% decline in trading revenue",
    "The firm announced a $500M share buyback program"
]

def get_embedding(text):
    """Get embedding for a single text"""
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding

# Step 1: Create embeddings for all documents (Indexing)
print("Creating document embeddings...")
doc_embeddings = [get_embedding(doc) for doc in documents]

# Step 2: User asks a question (Query)
query = "How is the company performing in terms of revenue?"
print(f"\\nQuery: {query}")

# Step 3: Embed the query
query_embedding = get_embedding(query)

# Step 4: Calculate similarities
query_emb_array = np.array(query_embedding).reshape(1, -1)
doc_emb_array = np.array(doc_embeddings)

similarities = cosine_similarity(query_emb_array, doc_emb_array)[0]

# Step 5: Get top results
top_indices = np.argsort(similarities)[::-1][:3]

print("\\nTop 3 Results:")
for i, idx in enumerate(top_indices, 1):
    print(f"{i}. [Score: {similarities[idx]:.3f}] {documents[idx]}")

# Output:
# Top 3 Results:
# 1. [Score: 0.847] The company's Q4 revenue increased by 15% year-over-year to $2.3B
# 2. [Score: 0.512] Market volatility led to a 12% decline in trading revenue
# 3. [Score: 0.432] Net interest margin compressed by 25 basis points due to rate changes`}
                  </pre>
                </div>

                {/* Explanation */}
                <div className="rounded-xl border-2 border-teal-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-teal-700 dark:text-teal-300">
                    Why This Works
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600">✓</span>
                      <div>
                        <strong>Semantic Understanding:</strong> The query "How
                        is the company performing" matches "revenue increased"
                        even though they share few words
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600">✓</span>
                      <div>
                        <strong>Ranked Results:</strong> Documents are ranked by
                        relevance, not just binary match/no-match
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600">✓</span>
                      <div>
                        <strong>Context Aware:</strong> "Revenue" is understood
                        in context of financial performance, not just keyword
                        matching
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600">✓</span>
                      <div>
                        <strong>Related Concepts:</strong> Other financial
                        metrics (trading revenue, margin) also appear because
                        they're semantically related
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitations of Simple Similarity Search */}
            <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-6 dark:bg-yellow-950/30">
              <h3 className="mb-4 text-xl font-bold text-yellow-700 dark:text-yellow-300">
                Limitations of Simple In-Memory Search
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  <div>
                    <strong>Scale:</strong> Comparing query against millions of
                    documents in memory is slow and memory-intensive
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  <div>
                    <strong>Persistence:</strong> Embeddings need to be
                    regenerated every time you restart your application
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  <div>
                    <strong>Efficiency:</strong> No indexing means every search
                    is O(n), which doesn't scale
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border-2 border-green-400 bg-white p-4 dark:bg-gray-800">
                <div className="font-bold text-green-700 dark:text-green-300">
                  Solution: Vector Databases
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Specialized databases designed for efficient storage,
                  indexing, and querying of high-dimensional vectors. We'll
                  explore these in the next section!
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Vector Databases Landscape */}
          <section className="rounded-3xl border border-green-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-green-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-green-600 dark:text-green-400">
              Vector Databases: Built for Scale
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Vector databases are specialized databases designed to store,
              index, and query high-dimensional vector embeddings efficiently.
              They solve the scalability and performance problems of naive
              in-memory similarity search.
            </p>

            {/* Why Vector Databases */}
            <div className="mb-12 rounded-2xl border-2 border-green-300 bg-gradient-br from-green-50 to-emerald-50 p-8 dark:border-green-700 dark:from-green-950/50 dark:to-emerald-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Why Not Just Use a Regular Database?
              </h3>

              <div className="mb-6 grid gap-6 md:grid-cols-2">
                {/* Traditional Database */}
                <div className="rounded-xl border-2 border-red-400 bg-red-50 p-6 dark:bg-red-950/30">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-2xl">❌</span>
                    <h4 className="text-lg font-bold text-red-700 dark:text-red-300">
                      Traditional Databases (PostgreSQL, MySQL)
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Optimized for exact matches, not similarity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>
                        No specialized indexing for high-dimensional vectors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>
                        Slow for computing distances across millions of vectors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>
                        Can't efficiently handle 1536-dimensional vectors
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Vector Database */}
                <div className="rounded-xl border-2 border-green-400 bg-green-50 p-6 dark:bg-green-950/30">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <h4 className="text-lg font-bold text-green-700 dark:text-green-300">
                      Vector Databases
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>
                        Built for similarity search (ANN - Approximate Nearest
                        Neighbors)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>
                        Specialized indexes: HNSW, IVF, LSH for fast search
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>
                        Sub-second queries on millions/billions of vectors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>
                        Native support for high-dimensional embeddings
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-green-500 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-3 font-bold text-green-700 dark:text-green-300">
                  Key Insight: Approximate vs Exact Search
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Vector databases use{" "}
                  <strong>Approximate Nearest Neighbor (ANN)</strong>{" "}
                  algorithms. Instead of comparing against every single vector
                  (exact but slow), they use clever indexing to find the{" "}
                  <em>approximately</em> nearest neighbors in milliseconds. For
                  most applications, 95-99% accuracy is more than sufficient and
                  worth the massive speed gains.
                </p>
              </div>
            </div>

            {/* Popular Vector Databases */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Popular Vector Database Options
              </h3>

              <div className="space-y-6">
                {/* Pinecone */}
                <div className="rounded-xl border-2 border-green-300 bg-white p-6 dark:border-green-700 dark:bg-gray-800">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-green-700 dark:text-green-300">
                        Pinecone
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Fully managed, cloud-native vector database
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/50 dark:text-green-300">
                        Managed
                      </span>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        Production
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Pros
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>
                            Fully managed, no infrastructure to maintain
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Auto-scaling and high availability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Excellent performance and low latency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Simple API and great documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Metadata filtering and hybrid search</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Cons
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Proprietary, vendor lock-in</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Can get expensive at scale</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>No self-hosted option</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Data stored in their cloud</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Best For:
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Production applications where you want zero ops overhead
                      and need reliability. Great for startups and teams without
                      ML infrastructure expertise.
                    </div>
                  </div>
                </div>

                {/* Weaviate */}
                <div className="rounded-xl border-2 border-emerald-300 bg-white p-6 dark:border-emerald-700 dark:bg-gray-800">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                        Weaviate
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Open-source vector database with GraphQL API
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                        Open Source
                      </span>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        Self-Hosted
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Pros
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600">✓</span>
                          <span>Open source, self-hostable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600">✓</span>
                          <span>GraphQL API for flexible queries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600">✓</span>
                          <span>Built-in vectorization modules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600">✓</span>
                          <span>Rich filtering and schema support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600">✓</span>
                          <span>Managed cloud option available</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Cons
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>
                            Requires infrastructure management if self-hosted
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>
                            GraphQL may be overkill for simple use cases
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Learning curve for advanced features</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Best For:
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Teams that want full control over their data and
                      infrastructure. Excellent for complex schema requirements
                      and when you need on-premise deployment.
                    </div>
                  </div>
                </div>

                {/* Chroma */}
                <div className="rounded-xl border-2 border-teal-300 bg-white p-6 dark:border-teal-700 dark:bg-gray-800">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-teal-700 dark:text-teal-300">
                        Chroma
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        The AI-native open-source embedding database
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                        Open Source
                      </span>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                        Developer-Friendly
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Pros
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600">✓</span>
                          <span>Extremely simple to get started</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600">✓</span>
                          <span>
                            Runs embedded in Python (no server needed)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600">✓</span>
                          <span>Built-in embedding functions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600">✓</span>
                          <span>Perfect for prototyping and development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600">✓</span>
                          <span>Free and open source</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Cons
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Not designed for large-scale production</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Limited scalability compared to others</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Fewer enterprise features</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Best For:
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Prototyping, local development, and small-to-medium
                      applications. Perfect for getting started with RAG and
                      learning embeddings without infrastructure setup.
                    </div>
                  </div>
                </div>

                {/* FAISS */}
                <div className="rounded-xl border-2 border-cyan-300 bg-white p-6 dark:border-cyan-700 dark:bg-gray-800">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                        FAISS (Facebook AI Similarity Search)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        High-performance library for similarity search
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                        Library
                      </span>
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                        High Performance
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Pros
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600">✓</span>
                          <span>Extremely fast, optimized for GPUs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600">✓</span>
                          <span>Industry-proven, used at Meta scale</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600">✓</span>
                          <span>Multiple indexing algorithms (IVF, HNSW)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600">✓</span>
                          <span>No external dependencies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600">✓</span>
                          <span>Free and open source (MIT license)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Cons
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Not a full database, just a library</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>No built-in persistence or metadata</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>You handle all infrastructure yourself</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Lower-level API, more code required</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Best For:
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Maximum performance and control. Great when you have ML
                      engineering resources and want to build custom
                      infrastructure. Often wrapped by other tools.
                    </div>
                  </div>
                </div>

                {/* pgvector */}
                <div className="rounded-xl border-2 border-indigo-300 bg-white p-6 dark:border-indigo-700 dark:bg-gray-800">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                        pgvector (PostgreSQL Extension)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Add vector similarity search to PostgreSQL
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                        Extension
                      </span>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/50 dark:text-green-300">
                        SQL-Native
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Pros
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600">✓</span>
                          <span>Use existing PostgreSQL infrastructure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600">✓</span>
                          <span>
                            Combines structured + vector data in one DB
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600">✓</span>
                          <span>ACID transactions and PostgreSQL features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600">✓</span>
                          <span>Familiar SQL interface</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600">✓</span>
                          <span>Free and open source</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Cons
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>
                            Slower than specialized vector DBs at scale
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Limited to PostgreSQL ecosystem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Less optimized for pure vector workloads</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Best For:
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Financial applications that already use PostgreSQL and
                      want to add semantic search without managing another
                      database. Great for hybrid queries combining structured
                      financial data with vector search.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Selection Factors */}
            <div className="mb-12 rounded-2xl border-2 border-green-300 bg-gradient-br from-green-50 to-emerald-50 p-8 dark:border-green-700 dark:from-green-950/50 dark:to-emerald-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Choosing the Right Vector Database
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                The choice depends on your specific requirements. Consider these key factors:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border-2 border-green-400 bg-white p-4 dark:bg-gray-800">
                  <div className="mb-2 font-bold text-green-700 dark:text-green-300">
                    Deployment Model
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Managed (Pinecone):</strong> Zero ops, pay for convenience
                    <br />
                    <strong>Self-hosted (Weaviate, Chroma, FAISS):</strong> More control, compliance-friendly
                  </p>
                </div>

                <div className="rounded-lg border-2 border-emerald-400 bg-white p-4 dark:bg-gray-800">
                  <div className="mb-2 font-bold text-emerald-700 dark:text-emerald-300">
                    Performance Needs
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Ultra-fast (FAISS, Pinecone):</strong> Best for high-throughput
                    <br />
                    <strong>Balanced (Weaviate, Chroma):</strong> Good for most use cases
                  </p>
                </div>

                <div className="rounded-lg border-2 border-teal-400 bg-white p-4 dark:bg-gray-800">
                  <div className="mb-2 font-bold text-teal-700 dark:text-teal-300">
                    Feature Requirements
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Hybrid search:</strong> Weaviate excels here
                    <br />
                    <strong>Simplicity:</strong> Chroma for quick prototypes
                    <br />
                    <strong>Advanced filtering:</strong> Pinecone, Weaviate
                  </p>
                </div>

                <div className="rounded-lg border-2 border-cyan-400 bg-white p-4 dark:bg-gray-800">
                  <div className="mb-2 font-bold text-cyan-700 dark:text-cyan-300">
                    Compliance & Security
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    For regulated industries, self-hosted options (Weaviate, FAISS, pgvector)
                    may be required for data residency and audit requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Recommendation for Finance */}
            <div className="rounded-xl border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-950/30">
              <h3 className="mb-4 text-xl font-bold text-green-700 dark:text-green-300">
                Recommendations for Financial Services
              </h3>
              <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                <div className="rounded-lg border-2 border-green-400 bg-white p-4 dark:bg-gray-800">
                  <div className="mb-2 font-bold text-green-700 dark:text-green-300">
                    For Production Systems (Customer-Facing)
                  </div>
                  <div>
                    Use <strong>Pinecone</strong> for zero-ops managed solution,
                    or
                    <strong> Weaviate</strong> if you need on-premise deployment
                    for compliance. Both offer enterprise SLAs and security
                    features required in finance.
                  </div>
                </div>

                <div className="rounded-lg border-2 border-emerald-400 bg-white p-4 dark:bg-gray-800">
                  <div className="mb-2 font-bold text-emerald-700 dark:text-emerald-300">
                    For Internal Tools & Prototypes
                  </div>
                  <div>
                    Start with <strong>Chroma</strong> for quick prototyping,
                    then migrate to production database when needed. Or use{" "}
                    <strong>pgvector</strong> if you already have PostgreSQL
                    infrastructure.
                  </div>
                </div>

                <div className="rounded-lg border-2 border-teal-400 bg-white p-4 dark:bg-gray-800">
                  <div className="mb-2 font-bold text-teal-700 dark:text-teal-300">
                    For High-Performance Research Systems
                  </div>
                  <div>
                    Use <strong>FAISS</strong> when you have ML engineering
                    resources and need maximum control over performance
                    optimization. Common in quant research and trading systems.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: RAG Architecture Deep Dive */}
          <section className="rounded-3xl border border-emerald-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-emerald-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-emerald-600 dark:text-emerald-400">
              RAG: Retrieval-Augmented Generation
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              RAG is the most important architecture pattern in production Gen
              AI systems today. It combines the power of foundation models with
              your own knowledge base to produce accurate, grounded, and
              up-to-date responses.
            </p>

            {/* What is RAG */}
            <div className="mb-12 rounded-2xl border-2 border-emerald-300 bg-gradient-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-700 dark:from-emerald-950/50 dark:to-teal-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                What is RAG?
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                <strong>Retrieval-Augmented Generation (RAG)</strong> is a
                technique that enhances LLM responses by retrieving relevant
                information from a knowledge base before generating an answer.
                Instead of relying solely on the model's training data, RAG
                gives the model access to your current, specific information.
              </p>

              <div className="rounded-xl border-2 border-emerald-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 font-bold text-emerald-700 dark:text-emerald-300">
                  The RAG Workflow (Simplified)
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        User asks a question
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        "What was our Q4 revenue?"
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Retrieve relevant documents
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Search vector DB for financial reports mentioning Q4
                        revenue
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-lg font-bold text-white">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Augment prompt with context
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Add retrieved docs to the LLM prompt as context
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Generate answer
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        LLM produces answer grounded in provided context
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RAG vs Fine-Tuning vs Baseline */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                RAG vs Fine-Tuning vs Baseline LLM
              </h3>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Baseline LLM */}
                <div className="rounded-xl border-2 border-red-300 bg-white p-6 dark:border-red-700 dark:bg-gray-800">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    <h4 className="text-lg font-bold text-red-700 dark:text-red-300">
                      Baseline LLM
                    </h4>
                  </div>
                  <div className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Just prompt the model with your question. Relies entirely on
                    training data.
                  </div>
                  <div className="mb-3 space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Simple, no infrastructure</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Fast to set up</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Knowledge cutoff date</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>No company-specific info</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>High hallucination risk</span>
                    </div>
                  </div>
                </div>

                {/* Fine-Tuning */}
                <div className="rounded-xl border-2 border-yellow-300 bg-white p-6 dark:border-yellow-700 dark:bg-gray-800">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <h4 className="text-lg font-bold text-yellow-700 dark:text-yellow-300">
                      Fine-Tuning
                    </h4>
                  </div>
                  <div className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Train the model on your data to specialize its behavior and
                    knowledge.
                  </div>
                  <div className="mb-3 space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Learns patterns/style</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Can improve task performance</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Expensive ($$$)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Slow to update knowledge</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Risk of overfitting</span>
                    </div>
                  </div>
                </div>

                {/* RAG */}
                <div className="rounded-xl border-2 border-green-300 bg-white p-6 dark:border-green-700 dark:bg-gray-800">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    <h4 className="text-lg font-bold text-green-700 dark:text-green-300">
                      RAG
                    </h4>
                  </div>
                  <div className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Dynamically retrieve and inject relevant context from your
                    knowledge base.
                  </div>
                  <div className="mb-3 space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Always up-to-date</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Grounded, factual answers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Cost-effective</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Requires infrastructure</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Retrieval quality matters</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
                <h4 className="mb-3 font-bold text-emerald-700 dark:text-emerald-300">
                  When to Use RAG in Finance
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  RAG is ideal for financial applications where information
                  changes frequently (market data, regulations, company
                  financials) and accuracy is critical. Use RAG for: document
                  Q&A, compliance chatbots, research assistants, and any
                  scenario requiring citations and grounding.
                </p>
              </div>
            </div>

            {/* Complete RAG Architecture */}
            <div className="mb-12 rounded-2xl border-2 border-emerald-300 bg-gradient-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-700 dark:from-emerald-950/50 dark:to-teal-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Complete RAG Architecture
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                A production RAG system has two phases: an{" "}
                <strong>indexing phase</strong> (done once or periodically) and
                a <strong>query phase</strong> (done on every user request).
              </p>

              {/* Indexing Phase */}
              <div className="mb-8 rounded-xl border-2 border-teal-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-teal-700 dark:text-teal-300">
                  Phase 1: Indexing (Offline)
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Load Documents
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Ingest PDFs, Word docs, databases, APIs (e.g., 10-Ks,
                        earnings calls)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0  items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Chunk Documents
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Split into smaller pieces (e.g., 512 tokens per chunk)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Generate Embeddings
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Convert each chunk to a vector using embedding model
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Store in Vector DB
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Index vectors with metadata (source, date, etc.)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Query Phase */}
              <div className="rounded-xl border-2 border-cyan-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-cyan-700 dark:text-cyan-300">
                  Phase 2: Query (Online/Real-time)
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        User Query
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        "What risks did the company mention in their latest
                        filing?"
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Embed Query
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Convert user question to a vector (same model as
                        indexing!)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Similarity Search
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Retrieve top K most similar chunks from vector DB (e.g.,
                        K=5)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Build Prompt
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Combine retrieved context + user query into a single
                        prompt
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                      5
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Generate Answer
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Send to LLM, get response grounded in retrieved context
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                      6
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Return with Citations
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Include source references for transparency and
                        verification
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Document Loading & Extraction */}
            <div className="mb-12 rounded-2xl border-2 border-emerald-300 bg-gradient-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-700 dark:from-emerald-950/50 dark:to-teal-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Step 1: Document Loading & Extraction
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                The first step in building a RAG system is loading and extracting content from your documents. Financial documents come in various formats (PDFs, Word docs, HTML, databases) and contain different types of content (text, tables, images). Choosing the right extraction tool is critical.
              </p>

              {/* Document Loaders Comparison */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Popular Document Loading Libraries
                </h4>

                <div className="space-y-6">
                  {/* PyPDF / PyPDF2 */}
                  <div className="rounded-xl border-2 border-teal-300 bg-white p-6 dark:border-teal-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-teal-700 dark:text-teal-300">
                        PyPDF / PyPDF2
                      </h5>
                      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                        Simple
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Basic PDF text extraction. Fast and lightweight, but struggles with complex layouts, tables, and scanned documents.
                    </p>
                    <div className="mb-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from pypdf import PdfReader

reader = PdfReader("apple_10k.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text()

print(f"Extracted {len(text)} characters")`}
                      </pre>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="mb-1 font-semibold text-green-700 dark:text-green-300">
                          ✓ Best For:
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Simple PDFs, quick prototyping, text-heavy documents
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 font-semibold text-red-700 dark:text-red-300">
                          ✗ Limitations:
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Poor table extraction, no image handling, layout issues
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PDFPlumber */}
                  <div className="rounded-xl border-2 border-cyan-300 bg-white p-6 dark:border-cyan-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-cyan-700 dark:text-cyan-300">
                        PDFPlumber
                      </h5>
                      <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                        Recommended
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Better table extraction and layout awareness. Excellent for financial documents with structured data like balance sheets and income statements.
                    </p>
                    <div className="mb-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`import pdfplumber

with pdfplumber.open("apple_10k.pdf") as pdf:
    for page in pdf.pages:
        # Extract text
        text = page.extract_text()

        # Extract tables
        tables = page.extract_tables()
        for table in tables:
            # Table is a list of lists (rows and columns)
            print(f"Found table with {len(table)} rows")
            # Convert to pandas DataFrame for processing
            df = pd.DataFrame(table[1:], columns=table[0])`}
                      </pre>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="mb-1 font-semibold text-green-700 dark:text-green-300">
                          ✓ Best For:
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Financial reports with tables, structured PDFs, 10-Ks
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 font-semibold text-yellow-700 dark:text-yellow-300">
                          ⚠ Note:
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Slower than PyPDF, requires more memory for large docs
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Unstructured */}
                  <div className="rounded-xl border-2 border-blue-300 bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-blue-700 dark:text-blue-300">
                        Unstructured.io
                      </h5>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        Production-Ready
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Handles multiple formats (PDF, DOCX, HTML, images) with advanced layout detection. Preserves document structure and metadata. Great for production pipelines.
                    </p>
                    <div className="mb-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from unstructured.partition.auto import partition

# Auto-detects format and extracts intelligently
elements = partition("apple_10k.pdf")

for element in elements:
    print(f"Type: {element.category}")
    print(f"Text: {element.text}")
    print(f"Metadata: {element.metadata}")

# Categories: Title, NarrativeText, Table, Image, etc.`}
                      </pre>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="mb-1 font-semibold text-green-700 dark:text-green-300">
                          ✓ Best For:
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Production systems, mixed formats, complex documents
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 font-semibold text-blue-700 dark:text-blue-300">
                          💡 Features:
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          OCR support, layout detection, metadata preservation
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LlamaParse */}
                  <div className="rounded-xl border-2 border-purple-300 bg-white p-6 dark:border-purple-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-purple-700 dark:text-purple-300">
                        LlamaParse (LlamaIndex)
                      </h5>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                        AI-Powered
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Uses LLMs to intelligently parse complex documents. Best-in-class for challenging layouts, multi-column text, and complex tables. Paid service.
                    </p>
                    <div className="mb-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from llama_parse import LlamaParse

parser = LlamaParse(
    api_key="your-key",
    result_type="markdown"  # or "text"
)

documents = parser.load_data("apple_10k.pdf")

# Returns well-formatted markdown with preserved structure
for doc in documents:
    print(doc.text)  # Clean, structured output`}
                      </pre>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="mb-1 font-semibold text-green-700 dark:text-green-300">
                          ✓ Best For:
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Complex financial docs, highest accuracy needed
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 font-semibold text-red-700 dark:text-red-300">
                          ✗ Tradeoffs:
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Costs money, slower than local solutions, API dependency
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Type Handling */}
              <div className="mb-8 rounded-xl border-2 border-emerald-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-emerald-700 dark:text-emerald-300">
                  Handling Different Content Types
                </h4>

                <div className="space-y-4">
                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
                    <h5 className="mb-2 font-bold text-green-700 dark:text-green-300">
                      📄 Text Content
                    </h5>
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Most straightforward. Extract and preserve paragraph structure. Watch out for headers/footers, page numbers, and watermarks that add noise.
                    </p>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>Tip:</strong> Use regex or heuristics to remove page numbers like "Page 1 of 50" before chunking.
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
                    <h5 className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                      📊 Tables
                    </h5>
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Critical in financial docs but challenging for RAG. Tables need special handling because embeddings don't naturally understand tabular structure.
                    </p>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>Strategy:</strong> Convert tables to markdown format or descriptive text. Example: "Revenue for Q4 2024 was $95.3B, up 6% YoY"
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h5 className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                      🖼️ Images & Charts
                    </h5>
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Graphs, charts, diagrams contain valuable insights but require OCR or vision models to extract.
                    </p>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>Options:</strong> (1) Use OCR (Tesseract, AWS Textract) for text in images, (2) Use multimodal models (GPT-4V, Claude) to describe charts, (3) Skip if not critical
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Document Challenges */}
              <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
                <h4 className="mb-4 text-xl font-bold text-emerald-700 dark:text-emerald-300">
                  Challenges with Financial Documents
                </h4>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">1.</span>
                    <div>
                      <strong>Multi-column layouts:</strong> 10-Ks often have 2-3 column layouts. Basic extractors read left-to-right across columns, creating gibberish. Use layout-aware tools like Unstructured or LlamaParse.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">2.</span>
                    <div>
                      <strong>Tables spanning pages:</strong> Balance sheets and income statements often split across pages. Merge these during extraction or handle in chunking.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">3.</span>
                    <div>
                      <strong>Footnotes and cross-references:</strong> "See Note 7" loses meaning without context. Extract footnotes separately and link them to main content via metadata.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">4.</span>
                    <div>
                      <strong>Scanned PDFs:</strong> Older filings might be image-based. Requires OCR preprocessing. Quality varies - always validate OCR output.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">5.</span>
                    <div>
                      <strong>Embedded objects:</strong> Excel spreadsheets, embedded PDFs within PDFs. Extract these separately and treat as individual documents.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Understanding Tokens & Tokenization */}
            <div className="mb-12 rounded-2xl border-2 border-teal-300 bg-gradient-br from-teal-50 to-cyan-50 p-8 dark:border-teal-700 dark:from-teal-950/50 dark:to-cyan-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Step 2: Understanding Tokens & Tokenization
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Before chunking, you need to understand <strong>tokens</strong> - the fundamental units that LLMs and embedding models work with. Token counts directly impact chunking, context windows, and costs.
              </p>

              {/* What are Tokens */}
              <div className="mb-8 rounded-xl border-2 border-teal-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-teal-700 dark:text-teal-300">
                  What Are Tokens?
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Tokens are subword units that models use to process text. They're not exactly words - a single word can be one or multiple tokens depending on its length and frequency.
                </p>

                <div className="mb-6 space-y-3">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                      Example Tokenization:
                    </div>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 dark:text-gray-400">Input:</span>
                        <span className="text-gray-900 dark:text-white">"Revenue increased"</span>
                        <span className="text-teal-600">→ 2 tokens</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 dark:text-gray-400">Input:</span>
                        <span className="text-gray-900 dark:text-white">"Cryptocurrency"</span>
                        <span className="text-teal-600">→ 3 tokens ["Crypt", "oc", "urrency"]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 dark:text-gray-400">Input:</span>
                        <span className="text-gray-900 dark:text-white">"EBITDA"</span>
                        <span className="text-teal-600">→ 2 tokens ["EB", "ITDA"]</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border-2 border-green-400 bg-green-50 p-4 dark:bg-green-950/30">
                      <div className="mb-2 font-bold text-green-700 dark:text-green-300">
                        Rule of Thumb
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        1 token ≈ 4 characters or ¾ of a word in English. 100 tokens ≈ 75 words.
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-blue-400 bg-blue-50 p-4 dark:bg-blue-950/30">
                      <div className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                        Why It Matters
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        Context windows, chunking sizes, and API costs are all measured in tokens, not words or characters.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Different Tokenizers */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Different Models, Different Tokenizers
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Each model family has its own tokenizer. The same text will have different token counts depending on which tokenizer you use.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border-2 border-cyan-300 bg-white p-4 dark:border-cyan-700 dark:bg-gray-800">
                    <div className="mb-3 flex items-center justify-between">
                      <h5 className="font-bold text-cyan-700 dark:text-cyan-300">
                        OpenAI (tiktoken)
                      </h5>
                      <span className="text-xs text-gray-500">GPT-4, GPT-3.5</span>
                    </div>
                    <pre className="overflow-x-auto rounded bg-gray-50 p-3 text-xs dark:bg-gray-900">
{`import tiktoken

# For GPT-4, GPT-3.5-turbo
enc = tiktoken.encoding_for_model("gpt-4")
tokens = enc.encode("The company's revenue increased")
print(f"Tokens: {len(tokens)}")  # 5 tokens`}
                    </pre>
                  </div>

                  <div className="rounded-xl border-2 border-purple-300 bg-white p-4 dark:border-purple-700 dark:bg-gray-800">
                    <div className="mb-3 flex items-center justify-between">
                      <h5 className="font-bold text-purple-700 dark:text-purple-300">
                        Hugging Face
                      </h5>
                      <span className="text-xs text-gray-500">Llama, Mistral, etc.</span>
                    </div>
                    <pre className="overflow-x-auto rounded bg-gray-50 p-3 text-xs dark:bg-gray-900">
{`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b")
tokens = tokenizer.encode("The company's revenue increased")
print(f"Tokens: {len(tokens)}")  # May differ!`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* To Tokenize or Not Before Chunking */}
              <div className="mb-8 rounded-xl border-2 border-teal-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-teal-700 dark:text-teal-300">
                  Should You Tokenize Before Chunking?
                </h4>

                <div className="mb-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/30">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-2xl">❌</span>
                      <h5 className="font-bold text-red-700 dark:text-red-300">
                        Option 1: Tokenize First
                      </h5>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Convert text to tokens, split by token count, then decode back to text for embedding.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Precise chunk sizes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Matches model's context window exactly</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Can break mid-word</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>More complex pipeline</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-2xl">✅</span>
                      <h5 className="font-bold text-green-700 dark:text-green-300">
                        Option 2: Estimate Tokens (Recommended)
                      </h5>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Split by characters/words, estimate token count using the 4 chars ≈ 1 token rule.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Respects word boundaries</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Simpler, faster</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>More readable chunks</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-600">~</span>
                        <span>Approximate, but good enough</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-teal-400 bg-teal-50 p-4 dark:bg-teal-950/30">
                  <div className="mb-2 font-bold text-teal-700 dark:text-teal-300">
                    💡 Best Practice
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Use <strong>character-based chunking with token estimation</strong>. Most libraries (LangChain, LlamaIndex) use this approach. Split by characters (e.g., 2000 chars ≈ 500 tokens), respect sentence boundaries, and verify token counts don't exceed limits.
                  </p>
                </div>
              </div>

              {/* Token Counting in Practice */}
              <div className="rounded-xl border-l-4 border-teal-500 bg-teal-50 p-6 dark:bg-teal-950/30">
                <h4 className="mb-4 text-xl font-bold text-teal-700 dark:text-teal-300">
                  Token Counting in Practice
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Always verify your chunks fit within model limits:
                </p>

                <div className="mb-4 rounded-lg bg-white p-4 dark:bg-gray-800">
                  <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`import tiktoken

enc = tiktoken.encoding_for_model("gpt-4")

# Check chunk token count before embedding
chunk = "Your document chunk text here..."
token_count = len(enc.encode(chunk))

# OpenAI text-embedding-3-small limit: 8191 tokens
if token_count > 8000:  # Leave buffer
    print(f"Warning: Chunk has {token_count} tokens, may need splitting")

# Also important: LLM context window management
# When building RAG prompt: retrieved chunks + prompt < context limit
retrieved_tokens = sum(len(enc.encode(chunk)) for chunk in retrieved_chunks)
prompt_tokens = len(enc.encode(system_prompt + user_query))
total_tokens = retrieved_tokens + prompt_tokens

if total_tokens > 100000:  # Example: GPT-4 Turbo limit
    print("Warning: May exceed context window")`}
                  </pre>
                </div>

                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-teal-600">1.</span>
                    <div>
                      <strong>Embedding model limits:</strong> OpenAI text-embedding-3-small = 8,191 tokens, Cohere = 512 tokens. Check your model's docs.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-600">2.</span>
                    <div>
                      <strong>LLM context limits:</strong> When passing retrieved chunks to the LLM, account for: system prompt + retrieved context + user query + room for response.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-600">3.</span>
                    <div>
                      <strong>Cost considerations:</strong> Embedding 1M tokens with OpenAI costs $0.02-$0.13. For large document collections, token counts add up.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Chunking Strategies */}
            <div className="mb-12 rounded-2xl border-2 border-cyan-300 bg-gradient-br from-cyan-50 to-blue-50 p-8 dark:border-cyan-700 dark:from-cyan-950/50 dark:to-blue-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Step 3: Chunking Strategies
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Now that you have extracted text and understand tokens, it's time to split your documents into <strong>chunks</strong> - the fundamental units that will be embedded and retrieved. Chunking is <strong>the most critical step</strong> in RAG that determines retrieval quality.
              </p>

              {/* Why Chunking Matters - Deep Dive */}
              <div className="mb-8 rounded-xl border-2 border-cyan-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-cyan-700 dark:text-cyan-300">
                  Why Chunking Matters: A Deep Dive
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Embeddings work best when text is focused on a single topic or concept. A 100-page 10-K filing contains dozens of different topics. If you embed the entire document as one chunk:
                </p>

                <div className="mb-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <div>
                      <strong>Diluted semantic meaning:</strong> The embedding becomes an average of all topics, making it match weakly with everything but strongly with nothing.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <div>
                      <strong>Context overload:</strong> When retrieved, the LLM receives 100 pages of mixed content, making it hard to find the relevant answer.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <div>
                      <strong>Exceeds limits:</strong> Most embedding models have token limits (e.g., 8,191 tokens). LLM context windows are finite too.
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-sm font-bold text-cyan-700 dark:text-cyan-300">
                  Chunking solves this by creating focused, semantically coherent units.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border-2 border-red-400 bg-red-50 p-4 dark:bg-red-950/30">
                    <div className="mb-2 font-bold text-red-700 dark:text-red-300">
                      ❌ Too Large (5000+ tokens)
                    </div>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Irrelevant context dilutes answer</li>
                      <li>• Lower similarity scores</li>
                      <li>• May exceed context limits</li>
                      <li>• Expensive token usage</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-2 border-green-400 bg-green-50 p-4 dark:bg-green-950/30">
                    <div className="mb-2 font-bold text-green-700 dark:text-green-300">
                      ✅ Optimal (256-512 tokens)
                    </div>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Focused semantic meaning</li>
                      <li>• Strong similarity scores</li>
                      <li>• Self-contained context</li>
                      <li>• Efficient retrieval</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-2 border-red-400 bg-red-50 p-4 dark:bg-red-950/30">
                    <div className="mb-2 font-bold text-red-700 dark:text-red-300">
                      ❌ Too Small (50-100 tokens)
                    </div>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Missing surrounding context</li>
                      <li>• Fragments tables/lists</li>
                      <li>• Need more chunks = slower</li>
                      <li>• Incomplete information</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chunking Strategies */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Chunking Strategies
                </h4>

                <div className="space-y-6">
                  {/* Fixed-Size */}
                  <div className="rounded-xl border-2 border-blue-300 bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-blue-700 dark:text-blue-300">
                        1. Fixed-Size Chunking
                      </h5>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        Simple
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Split text every N characters or tokens. Add overlap to preserve context across boundaries.
                    </p>
                    <div className="mb-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from langchain.text_splitter import CharacterTextSplitter

splitter = CharacterTextSplitter(
    chunk_size=500,        # ~125 words
    chunk_overlap=50,      # 10% overlap
    separator="\\n"
)

chunks = splitter.split_text(document)
print(f"Created {len(chunks)} chunks")`}
                      </pre>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="mb-1 font-semibold text-green-700 dark:text-green-300">
                          ✓ Pros:
                        </div>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                          <li>• Simple to implement</li>
                          <li>• Predictable chunk sizes</li>
                          <li>• Fast processing</li>
                        </ul>
                      </div>
                      <div>
                        <div className="mb-1 font-semibold text-red-700 dark:text-red-300">
                          ✗ Cons:
                        </div>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                          <li>• May break mid-sentence</li>
                          <li>• Ignores document structure</li>
                          <li>• Not semantically aware</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Recursive/Sentence-Based */}
                  <div className="rounded-xl border-2 border-cyan-300 bg-white p-6 dark:border-cyan-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-cyan-700 dark:text-cyan-300">
                        2. Recursive/Sentence-Based Chunking
                      </h5>
                      <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
                        Recommended
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Split on multiple separators hierarchically: paragraphs first, then sentences, then words. Preserves natural boundaries.
                    </p>
                    <div className="mb-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=[
        "\\n\\n",  # Double newline (paragraphs)
        "\\n",     # Single newline
        ". ",      # Sentences
        " ",       # Words
        ""         # Characters (last resort)
    ]
)

chunks = splitter.split_text(document)`}
                      </pre>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="mb-1 font-semibold text-green-700 dark:text-green-300">
                          ✓ Pros:
                        </div>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                          <li>• Respects sentence boundaries</li>
                          <li>• More readable chunks</li>
                          <li>• Better semantic coherence</li>
                        </ul>
                      </div>
                      <div>
                        <div className="mb-1 font-semibold text-blue-700 dark:text-blue-300">
                          💡 Use For:
                        </div>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                          <li>• MD&A sections</li>
                          <li>• Letters to shareholders</li>
                          <li>• Narrative text</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Semantic Chunking */}
                  <div className="rounded-xl border-2 border-purple-300 bg-white p-6 dark:border-purple-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-purple-700 dark:text-purple-300">
                        3. Semantic Chunking
                      </h5>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                        Advanced
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Split when topic changes by analyzing embedding similarity between sentences. Groups semantically related content together.
                    </p>
                    <div className="mb-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai.embeddings import OpenAIEmbeddings

splitter = SemanticChunker(
    OpenAIEmbeddings(),
    breakpoint_threshold_type="percentile",  # or "standard_deviation"
    breakpoint_threshold_amount=75
)

chunks = splitter.create_documents([document])`}
                      </pre>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="mb-1 font-semibold text-green-700 dark:text-green-300">
                          ✓ Pros:
                        </div>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                          <li>• Topic-aware splitting</li>
                          <li>• Natural semantic boundaries</li>
                          <li>• Best coherence</li>
                        </ul>
                      </div>
                      <div>
                        <div className="mb-1 font-semibold text-red-700 dark:text-red-300">
                          ✗ Cons:
                        </div>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                          <li>• Expensive (embedding calls)</li>
                          <li>• Slower processing</li>
                          <li>• Variable chunk sizes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Structure-Aware */}
                  <div className="rounded-xl border-2 border-green-300 bg-white p-6 dark:border-green-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-green-700 dark:text-green-300">
                        4. Structure-Aware Chunking
                      </h5>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/50 dark:text-green-300">
                        Finance-Specific
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Respect document structure: sections, headers, tables, lists. Critical for structured financial documents.
                    </p>
                    <div className="mb-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Key Principles:
                      </div>
                      <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">1.</span>
                          <span><strong>Keep tables intact:</strong> Don't split rows/columns. Convert to markdown if needed.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">2.</span>
                          <span><strong>Preserve lists:</strong> Keep bulleted/numbered lists together as one chunk.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">3.</span>
                          <span><strong>Split by headers:</strong> Use H1, H2, H3 tags as natural boundaries.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">4.</span>
                          <span><strong>Include context:</strong> Add section header to each chunk (e.g., "Item 1A - Risk Factors")</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      💡 Best for: 10-Ks, earnings reports, regulatory filings, prospectuses
                    </div>
                  </div>

                  {/* Parent-Child Chunking */}
                  <div className="rounded-xl border-2 border-teal-300 bg-white p-6 dark:border-teal-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-teal-700 dark:text-teal-300">
                        5. Parent-Child Chunking
                      </h5>
                      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                        Hybrid
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Create small chunks for precise matching but retrieve larger parent chunks for full context. Best of both worlds.
                    </p>
                    <div className="mb-4 rounded bg-gray-50 p-4 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        How it works:
                      </div>
                      <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600">1.</span>
                          <span>Create small "child" chunks (128-256 tokens) for embedding/search</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600">2.</span>
                          <span>Link each child to a larger "parent" chunk (512-1024 tokens)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600">3.</span>
                          <span>During retrieval: search using child chunks, return parent chunks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600">4.</span>
                          <span>LLM receives larger context without losing search precision</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      💡 Use when: You need precise retrieval but context-rich answers
                    </div>
                  </div>
                </div>
              </div>

              {/* Understanding Metadata - THE BIG ONE */}
              <div className="mb-8 rounded-xl border-2 border-cyan-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-cyan-700 dark:text-cyan-300">
                  Understanding Metadata: The Secret Weapon
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  <strong>Metadata is structured information about your chunks</strong> that enables powerful filtering, attribution, and context enhancement. Every chunk should have rich metadata attached.
                </p>

                {/* What is Metadata */}
                <div className="mb-6 rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-4 dark:bg-cyan-950/30">
                  <h5 className="mb-2 font-bold text-cyan-700 dark:text-cyan-300">
                    What is Metadata?
                  </h5>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Metadata is data about data. For a chunk from a 10-K filing, metadata might include: source file name, page number, section name, company name, fiscal year, filing date, chunk ID, etc.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>Analogy:</strong> Think of chunks as books in a library. Metadata is the card catalog information - author, publication date, genre, shelf location. It helps you find and contextualize the content.
                  </p>
                </div>

                {/* Why Metadata Matters */}
                <div className="mb-6">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Why Metadata is Critical
                  </h5>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border-2 border-green-400 bg-green-50 p-4 dark:bg-green-950/30">
                      <div className="mb-2 font-bold text-green-700 dark:text-green-300">
                        1. Filtering Before Search
                      </div>
                      <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                        "Find risks from 2024 filings only" → Filter by year before embedding search
                      </p>
                      <div className="rounded bg-white p-2 text-xs font-mono dark:bg-gray-800">
                        metadata.year == "2024"
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-blue-400 bg-blue-50 p-4 dark:bg-blue-950/30">
                      <div className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                        2. Source Attribution
                      </div>
                      <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                        Enable citations like "According to Apple 10-K 2024, page 45..."
                      </p>
                      <div className="rounded bg-white p-2 text-xs font-mono dark:bg-gray-800">
                        {`{source} page {page}`}
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-purple-400 bg-purple-50 p-4 dark:bg-purple-950/30">
                      <div className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                        3. Context Enhancement
                      </div>
                      <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                        Add document hierarchy: "Item 1A → Risk Factors → Credit Risk"
                      </p>
                      <div className="rounded bg-white p-2 text-xs font-mono dark:bg-gray-800">
                        metadata.section_path
                      </div>
                    </div>

                    <div className="rounded-lg border-2 border-orange-400 bg-orange-50 p-4 dark:bg-orange-950/30">
                      <div className="mb-2 font-bold text-orange-700 dark:text-orange-300">
                        4. Multi-Tenancy
                      </div>
                      <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                        In production, isolate chunks by user, organization, or tenant
                      </p>
                      <div className="rounded bg-white p-2 text-xs font-mono dark:bg-gray-800">
                        metadata.tenant_id
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metadata Structure Example */}
                <div className="mb-6">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Example: Well-Structured Metadata
                  </h5>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`{
  "chunk_id": "apple_10k_2024_chunk_127",
  "source_file": "apple_10k_2024.pdf",
  "source_type": "10-K",
  "company": "Apple Inc.",
  "ticker": "AAPL",
  "fiscal_year": 2024,
  "filing_date": "2024-11-01",
  "page_number": 45,
  "section": "Item 1A",
  "section_title": "Risk Factors",
  "subsection": "Credit Risk",
  "section_path": "Item 1A > Risk Factors > Credit Risk",
  "chunk_index": 127,
  "total_chunks": 542,
  "char_count": 1847,
  "token_count": 461,
  "created_at": "2024-11-15T10:23:45Z",
  "embedding_model": "text-embedding-3-small",
  "language": "en",
  "tags": ["risk", "credit", "lending"]
}`}
                    </pre>
                  </div>
                </div>

                {/* Using Metadata in Code */}
                <div className="mb-6">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Adding Metadata During Chunking
                  </h5>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.docstore.document import Document

# After extracting text from document
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_text(document_text)

# Add rich metadata to each chunk
documents = []
for i, chunk_text in enumerate(chunks):
    metadata = {
        "source": "apple_10k_2024.pdf",
        "company": "Apple Inc.",
        "year": 2024,
        "section": current_section,  # Track from document structure
        "page": current_page,
        "chunk_id": i,
        "total_chunks": len(chunks)
    }

    doc = Document(
        page_content=chunk_text,
        metadata=metadata
    )
    documents.append(doc)

# Now when you embed and store, metadata goes with each chunk
embeddings = embed_model.embed_documents([doc.page_content for doc in documents])

# Store in vector DB with metadata
for doc, embedding in zip(documents, embeddings):
    vector_db.upsert({
        "id": doc.metadata["chunk_id"],
        "values": embedding,
        "metadata": doc.metadata  # Stored alongside vector!
    })`}
                    </pre>
                  </div>
                </div>

                {/* Querying with Metadata Filters */}
                <div>
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Querying with Metadata Filters
                  </h5>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`# Example: Pinecone query with metadata filtering
query_embedding = embed_model.embed_query("What are the key credit risks?")

results = index.query(
    vector=query_embedding,
    top_k=5,
    filter={
        "year": {"$eq": 2024},              # Only 2024 filings
        "section": {"$in": ["Item 1A", "Item 7"]},  # Only risk/MD&A sections
        "company": {"$eq": "Apple Inc."}     # Only Apple docs
    },
    include_metadata=True
)

# Retrieved chunks come with full metadata for attribution
for match in results.matches:
    print(f"Source: {match.metadata['source']}, Page: {match.metadata['page']}")
    print(f"Section: {match.metadata['section_path']}")
    print(f"Content: {match.metadata['text'][:200]}...")
    print(f"Relevance: {match.score}")
    print("---")`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="rounded-xl border-l-4 border-cyan-500 bg-cyan-50 p-6 dark:bg-cyan-950/30">
                <h4 className="mb-4 text-xl font-bold text-cyan-700 dark:text-cyan-300">
                  Chunking Best Practices
                </h4>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-600">1.</span>
                    <div>
                      <strong>Start with 400-500 tokens, 10-15% overlap:</strong> Good default. Tune based on retrieval quality metrics.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-600">2.</span>
                    <div>
                      <strong>Preserve document structure:</strong> Don't break tables, lists, or sections. Financial docs have meaningful structure.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-600">3.</span>
                    <div>
                      <strong>Add comprehensive metadata:</strong> Source, section, page, date, company. Essential for filtering and attribution.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-600">4.</span>
                    <div>
                      <strong>Test on real queries:</strong> Measure retrieval accuracy. Iterate chunk size/strategy based on performance.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-600">5.</span>
                    <div>
                      <strong>Use overlap wisely:</strong> 50-100 tokens overlap prevents losing context at boundaries. More overlap = more storage/cost.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-600">6.</span>
                    <div>
                      <strong>Document-type specific chunking:</strong> 10-Ks need structure-aware, research reports might use semantic, simple memos can use fixed-size.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Embeddings & Vector Storage */}
            <div className="mb-12 rounded-2xl border-2 border-blue-300 bg-gradient-br from-blue-50 to-indigo-50 p-8 dark:border-blue-700 dark:from-blue-950/50 dark:to-indigo-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Step 4: Generating Embeddings & Vector Storage
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Now that you have well-structured chunks with metadata, it's time to convert them into <strong>embeddings</strong> (dense vector representations) and store them in a vector database for fast semantic search.
              </p>

              {/* Why Embeddings */}
              <div className="mb-8 rounded-xl border-2 border-blue-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-blue-700 dark:text-blue-300">
                  Why Embeddings?
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Traditional keyword search (like Ctrl+F) only finds exact matches. If you search for "credit risk" you won't find "default probability" even though they're semantically related. <strong>Embeddings solve this by capturing semantic meaning.</strong>
                </p>

                <div className="mb-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border-2 border-red-400 bg-red-50 p-4 dark:bg-red-950/30">
                    <div className="mb-2 font-bold text-red-700 dark:text-red-300">
                      ❌ Keyword Search
                    </div>
                    <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                      Query: "What are the main risks?"
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Misses: "challenges", "threats", "vulnerabilities", "exposures" - all semantically similar but different words
                    </p>
                  </div>

                  <div className="rounded-lg border-2 border-green-400 bg-green-50 p-4 dark:bg-green-950/30">
                    <div className="mb-2 font-bold text-green-700 dark:text-green-300">
                      ✅ Semantic Search (Embeddings)
                    </div>
                    <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                      Query: "What are the main risks?"
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Finds: risks, challenges, threats, vulnerabilities, exposures - all semantically similar concepts
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Embeddings are vectors</strong> (arrays of numbers) that encode semantic meaning. Similar concepts have similar vectors (measured by cosine similarity, dot product, etc.).
                  </p>
                </div>
              </div>

              {/* Choosing an Embedding Model */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Choosing an Embedding Model
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Different embedding models have different strengths. Key factors: dimensions, performance, cost, and domain specificity.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border-2 border-blue-300 bg-white p-4 dark:border-blue-700 dark:bg-gray-800">
                    <div className="mb-3 flex items-center justify-between">
                      <h5 className="font-bold text-blue-700 dark:text-blue-300">
                        OpenAI text-embedding-3-small
                      </h5>
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        Recommended
                      </span>
                    </div>
                    <div className="mb-3 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <div><strong>Dimensions:</strong> 1,536</div>
                      <div><strong>Cost:</strong> $0.02 per 1M tokens</div>
                      <div><strong>Performance:</strong> Excellent for general use</div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ Great balance of cost and quality. Best for most financial use cases.
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-purple-300 bg-white p-4 dark:border-purple-700 dark:bg-gray-800">
                    <div className="mb-3 flex items-center justify-between">
                      <h5 className="font-bold text-purple-700 dark:text-purple-300">
                        OpenAI text-embedding-3-large
                      </h5>
                      <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                        Premium
                      </span>
                    </div>
                    <div className="mb-3 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <div><strong>Dimensions:</strong> 3,072</div>
                      <div><strong>Cost:</strong> $0.13 per 1M tokens</div>
                      <div><strong>Performance:</strong> Best-in-class</div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ Use when accuracy is critical and cost is secondary
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-800">
                    <div className="mb-3 flex items-center justify-between">
                      <h5 className="font-bold text-green-700 dark:text-green-300">
                        Cohere embed-english-v3.0
                      </h5>
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/50 dark:text-green-300">
                        Alternative
                      </span>
                    </div>
                    <div className="mb-3 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <div><strong>Dimensions:</strong> 1,024</div>
                      <div><strong>Cost:</strong> Competitive</div>
                      <div><strong>Performance:</strong> Excellent, optimized for search</div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ Supports compression. Good for high-volume applications
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-orange-300 bg-white p-4 dark:border-orange-700 dark:bg-gray-800">
                    <div className="mb-3 flex items-center justify-between">
                      <h5 className="font-bold text-orange-700 dark:text-orange-300">
                        Sentence Transformers (Open Source)
                      </h5>
                      <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                        Self-Hosted
                      </span>
                    </div>
                    <div className="mb-3 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <div><strong>Dimensions:</strong> Varies (384-768)</div>
                      <div><strong>Cost:</strong> Free (compute only)</div>
                      <div><strong>Performance:</strong> Good</div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ For on-premise/air-gapped environments. Models: all-MiniLM-L6-v2, all-mpnet-base-v2
                    </div>
                  </div>
                </div>
              </div>

              {/* Generating Embeddings - Code */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Generating Embeddings: Implementation
                </h4>

                <div className="space-y-6">
                  {/* Single Document */}
                  <div className="rounded-xl border-2 border-blue-300 bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-blue-700 dark:text-blue-300">
                      Simple Example: Single Chunk
                    </h5>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from openai import OpenAI

client = OpenAI(api_key="your-api-key")

# Your chunk text
chunk_text = "The company faces significant credit risk in its commercial lending portfolio..."

# Generate embedding
response = client.embeddings.create(
    model="text-embedding-3-small",
    input=chunk_text
)

embedding = response.data[0].embedding  # 1,536-dimensional vector
print(f"Embedding dimensions: {len(embedding)}")
# Output: Embedding dimensions: 1536`}
                      </pre>
                    </div>
                  </div>

                  {/* Batch Processing */}
                  <div className="rounded-xl border-2 border-indigo-300 bg-white p-6 dark:border-indigo-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-indigo-700 dark:text-indigo-300">
                      Production: Batch Processing
                    </h5>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      For large document sets, process chunks in batches to optimize API calls and handle rate limits.
                    </p>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from openai import OpenAI
from tqdm import tqdm

client = OpenAI(api_key="your-api-key")

# Your chunks from previous step (list of Document objects with metadata)
chunks = [...]  # List of chunk texts

# Batch size (OpenAI allows up to 2048 inputs per request)
BATCH_SIZE = 100

embeddings = []
for i in tqdm(range(0, len(chunks), BATCH_SIZE)):
    batch = chunks[i:i + BATCH_SIZE]

    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=[chunk.page_content for chunk in batch]
    )

    # Extract embeddings from response
    batch_embeddings = [data.embedding for data in response.data]
    embeddings.extend(batch_embeddings)

print(f"Generated {len(embeddings)} embeddings")

# Now embeddings[i] corresponds to chunks[i]`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Storing in Vector Database */}
              <div className="mb-8 rounded-xl border-2 border-blue-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-blue-700 dark:text-blue-300">
                  Storing in Vector Database
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Once you have embeddings, store them in a vector database alongside metadata for fast similarity search.
                </p>

                {/* Pinecone Example */}
                <div className="mb-6">
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Example: Pinecone (Managed Vector DB)
                  </h5>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from pinecone import Pinecone, ServerlessSpec

# Initialize Pinecone
pc = Pinecone(api_key="your-pinecone-key")

# Create index (one-time setup)
index_name = "financial-docs"
if index_name not in pc.list_indexes().names():
    pc.create_index(
        name=index_name,
        dimension=1536,  # Must match embedding model dimensions
        metric="cosine",  # or "dotproduct", "euclidean"
        spec=ServerlessSpec(cloud="aws", region="us-east-1")
    )

index = pc.Index(index_name)

# Prepare data for upsert (chunk + embedding + metadata)
vectors_to_upsert = []
for i, (chunk, embedding) in enumerate(zip(chunks, embeddings)):
    vectors_to_upsert.append({
        "id": f"chunk_{i}",  # Unique ID
        "values": embedding,  # The 1536-dim vector
        "metadata": {
            # All your rich metadata from chunking step!
            "text": chunk.page_content,  # Store original text too
            "source": chunk.metadata["source"],
            "company": chunk.metadata["company"],
            "year": chunk.metadata["year"],
            "section": chunk.metadata["section"],
            "page": chunk.metadata["page"]
        }
    })

# Upsert in batches (Pinecone recommends 100-200 per batch)
UPSERT_BATCH_SIZE = 100
for i in range(0, len(vectors_to_upsert), UPSERT_BATCH_SIZE):
    batch = vectors_to_upsert[i:i + UPSERT_BATCH_SIZE]
    index.upsert(vectors=batch)

print(f"Uploaded {len(vectors_to_upsert)} vectors to Pinecone")

# Check index stats
stats = index.describe_index_stats()
print(f"Total vectors in index: {stats.total_vector_count}")`}
                    </pre>
                  </div>
                </div>

                {/* Chroma Example */}
                <div>
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Example: Chroma (Local/Open Source)
                  </h5>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`import chromadb
from chromadb.config import Settings

# Initialize Chroma (local storage)
client = chromadb.Client(Settings(
    persist_directory="./chroma_db"
))

# Create or get collection
collection = client.get_or_create_collection(
    name="financial_docs",
    metadata={"description": "Financial document embeddings"}
)

# Add documents with embeddings and metadata
collection.add(
    ids=[f"chunk_{i}" for i in range(len(chunks))],
    embeddings=embeddings,
    documents=[chunk.page_content for chunk in chunks],
    metadatas=[chunk.metadata for chunk in chunks]
)

print(f"Collection size: {collection.count()}")

# Chroma handles embedding generation too! (simpler but less control)
# collection.add(
#     ids=[...],
#     documents=[...],  # Just text, Chroma embeds automatically
#     metadatas=[...]
# )`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Index Optimization */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Index Optimization for Production
                </h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
                    <h5 className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                      1. Namespaces (Multi-Tenancy)
                    </h5>
                    <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                      Use namespaces to isolate data by customer, department, or use case in a single index.
                    </p>
                    <div className="rounded bg-white p-2 text-xs font-mono dark:bg-gray-800">
                      index.upsert(vectors, namespace="customer_123")
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
                    <h5 className="mb-2 font-bold text-green-700 dark:text-green-300">
                      2. Metadata Indexes
                    </h5>
                    <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                      Index frequently-filtered metadata fields for faster filtered queries (year, company, section).
                    </p>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Pinecone auto-indexes metadata
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h5 className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                      3. Dimension Reduction
                    </h5>
                    <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                      OpenAI allows reducing dimensions (e.g., 1536 → 512) to save storage with minimal quality loss.
                    </p>
                    <div className="rounded bg-white p-2 text-xs font-mono dark:bg-gray-800">
                      dimensions=512 (in API call)
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950/30">
                    <h5 className="mb-2 font-bold text-orange-700 dark:text-orange-300">
                      4. Incremental Updates
                    </h5>
                    <p className="mb-2 text-xs text-gray-700 dark:text-gray-300">
                      When docs change, upsert with same ID to update vectors. Use timestamps in metadata to track freshness.
                    </p>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Upsert = insert or update
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950/30">
                <h4 className="mb-4 text-xl font-bold text-blue-700 dark:text-blue-300">
                  Embeddings & Storage Best Practices
                </h4>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">1.</span>
                    <div>
                      <strong>Use the same embedding model for indexing and querying:</strong> Mixing models will give poor results. If you embed chunks with text-embedding-3-small, query with the same model.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">2.</span>
                    <div>
                      <strong>Store original text in metadata:</strong> Always include the chunk text in metadata so you can retrieve it without a separate database lookup.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">3.</span>
                    <div>
                      <strong>Batch API calls:</strong> Process 50-100 chunks per embedding API call to reduce latency and costs. Handle rate limits with exponential backoff.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">4.</span>
                    <div>
                      <strong>Monitor costs:</strong> Embedding 1M tokens costs $0.02-$0.13. For a 10,000-document corpus averaging 500 tokens/chunk, that's ~$1-$7. Track costs in production.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">5.</span>
                    <div>
                      <strong>Version your embeddings:</strong> Store embedding model version in metadata. When switching models, create new index or namespace to avoid mixing incompatible vectors.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">6.</span>
                    <div>
                      <strong>Choose the right similarity metric:</strong> Cosine similarity is standard for normalized embeddings. Use dotproduct for unnormalized. Euclidean distance works but less common.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Query Phase & Advanced Retrieval */}
            <div className="mb-12 rounded-2xl border-2 border-purple-300 bg-gradient-br from-purple-50 to-pink-50 p-8 dark:border-purple-700 dark:from-purple-950/50 dark:to-pink-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Step 5: Query Phase & Advanced Retrieval
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                The <strong>indexing phase is done</strong> (extract → chunk → embed → store). Now a user asks a question. The <strong>query phase</strong> retrieves the most relevant chunks to answer that question.
              </p>

              {/* Basic Query Flow */}
              <div className="mb-8 rounded-xl border-2 border-purple-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-purple-700 dark:text-purple-300">
                  Basic Query Flow
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        User Query
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        "What were Apple's main credit risks in 2024?"
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-700 dark:bg-pink-900/50 dark:text-pink-300">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Embed Query
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Convert query to embedding using SAME model as indexing (text-embedding-3-small)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fuchsia-100 font-bold text-fuchsia-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Similarity Search
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Find top-k most similar chunk embeddings in vector DB
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Retrieve Context
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Get chunk text + metadata from top results
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                      5
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Pass to LLM
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Build prompt with retrieved chunks → LLM generates answer
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Similarity Search Methods */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Similarity Search Methods
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  How do we measure "similarity" between query embedding and chunk embeddings? Three common metrics:
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border-2 border-purple-300 bg-white p-6 dark:border-purple-700 dark:bg-gray-800">
                    <div className="mb-3 flex items-center justify-between">
                      <h5 className="font-bold text-purple-700 dark:text-purple-300">
                        1. Cosine Similarity (Most Common)
                      </h5>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                        Recommended
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Measures the angle between two vectors. Range: -1 (opposite) to 1 (identical). Ignores magnitude, only cares about direction.
                    </p>
                    <div className="mb-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Formula:
                      </div>
                      <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        cosine_similarity = (A · B) / (||A|| × ||B||)
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ Best for: Normalized embeddings (OpenAI, Cohere, most modern models)
                      <br />✓ Works well even if vectors have different magnitudes
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-pink-300 bg-white p-6 dark:border-pink-700 dark:bg-gray-800">
                    <div className="mb-3 flex items-center justify-between">
                      <h5 className="font-bold text-pink-700 dark:text-pink-300">
                        2. Dot Product
                      </h5>
                      <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700 dark:bg-pink-900/50 dark:text-pink-300">
                        Fast
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Multiplies corresponding elements and sums. Higher = more similar. Faster than cosine but sensitive to vector magnitude.
                    </p>
                    <div className="mb-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Formula:
                      </div>
                      <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        dot_product = A · B = Σ(a_i × b_i)
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ Best for: When embeddings are already normalized
                      <br />✓ Slightly faster computation
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-indigo-300 bg-white p-6 dark:border-indigo-700 dark:bg-gray-800">
                    <div className="mb-3 flex items-center justify-between">
                      <h5 className="font-bold text-indigo-700 dark:text-indigo-300">
                        3. Euclidean Distance (L2)
                      </h5>
                      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                        Alternative
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Straight-line distance between two points. Lower = more similar (opposite of above). Less common for embeddings.
                    </p>
                    <div className="mb-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Formula:
                      </div>
                      <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        distance = √(Σ(a_i - b_i)²)
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ Best for: When absolute distances matter
                      <br />⚠ Less common for modern embedding models
                    </div>
                  </div>
                </div>
              </div>

              {/* Basic Query Example */}
              <div className="mb-8 rounded-xl border-2 border-purple-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-purple-700 dark:text-purple-300">
                  Basic Query Implementation
                </h4>

                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                  <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`from openai import OpenAI
from pinecone import Pinecone

# Initialize
client = OpenAI(api_key="your-openai-key")
pc = Pinecone(api_key="your-pinecone-key")
index = pc.Index("financial-docs")

# User query
user_query = "What were Apple's main credit risks in 2024?"

# Step 1: Embed query (SAME model as indexing!)
response = client.embeddings.create(
    model="text-embedding-3-small",  # Must match indexing model
    input=user_query
)
query_embedding = response.data[0].embedding

# Step 2: Search vector DB
results = index.query(
    vector=query_embedding,
    top_k=5,  # Retrieve top 5 most similar chunks
    include_metadata=True  # Get text + metadata
)

# Step 3: Extract retrieved chunks
retrieved_chunks = []
for match in results.matches:
    retrieved_chunks.append({
        "text": match.metadata["text"],
        "source": match.metadata["source"],
        "page": match.metadata["page"],
        "score": match.score  # Similarity score (0-1 for cosine)
    })

# Print results
for i, chunk in enumerate(retrieved_chunks):
    print(f"\\n--- Result {i+1} (Score: {chunk['score']:.4f}) ---")
    print(f"Source: {chunk['source']}, Page: {chunk['page']}")
    print(f"Text: {chunk['text'][:200]}...")

# Next: Pass retrieved_chunks to LLM (covered in next step)`}
                  </pre>
                </div>
              </div>

              {/* Advanced Retrieval Techniques */}
              <div className="mb-8">
                <h4 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Advanced Retrieval Techniques
                </h4>

                <p className="mb-6 text-sm text-gray-700 dark:text-gray-300">
                  Basic vector search works, but production RAG systems use these advanced techniques to improve retrieval quality:
                </p>

                <div className="space-y-6">
                  {/* Hybrid Search */}
                  <div className="rounded-xl border-2 border-purple-300 bg-white p-6 dark:border-purple-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-purple-700 dark:text-purple-300">
                        1. Hybrid Search (Vector + Keyword)
                      </h5>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                        Production
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Combine semantic search (embeddings) with keyword search (BM25). Best for queries with specific terms like "EBITDA", "10-K", ticker symbols.
                    </p>
                    <div className="mb-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                      <div className="mb-2 text-xs font-semibold text-purple-700 dark:text-purple-300">
                        Why it helps:
                      </div>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>• Vector search: "What are credit risks?" → finds "default probability", "loan exposure"</li>
                        <li>• Keyword search: "Find AAPL mentions" → exact match for ticker symbol</li>
                        <li>• Hybrid: Combines both strengths</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`# Weaviate supports hybrid search natively
results = collection.query.hybrid(
    query="What is EBITDA for AAPL in 2024?",
    alpha=0.75,  # 0=pure keyword, 1=pure vector, 0.75=mostly vector
    limit=5
)

# Or combine results manually
vector_results = index.query(vector=query_emb, top_k=10)
keyword_results = bm25_search(query_text, top_k=10)
combined = rerank_and_merge(vector_results, keyword_results)`}
                      </pre>
                    </div>
                  </div>

                  {/* Reranking */}
                  <div className="rounded-xl border-2 border-pink-300 bg-white p-6 dark:border-pink-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-pink-700 dark:text-pink-300">
                        2. Reranking
                      </h5>
                      <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700 dark:bg-pink-900/50 dark:text-pink-300">
                        High Impact
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Retrieve top-k candidates (e.g., 20), then use a more powerful cross-encoder model to rerank them. Improves accuracy significantly.
                    </p>
                    <div className="mb-4 rounded-lg bg-pink-50 p-4 dark:bg-pink-950/30">
                      <div className="mb-2 text-xs font-semibold text-pink-700 dark:text-pink-300">
                        Two-stage retrieval:
                      </div>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>• Stage 1: Fast vector search → get 20 candidates</li>
                        <li>• Stage 2: Slow but accurate reranker → pick best 5</li>
                        <li>• Rerankers: Cohere Rerank, cross-encoders (sentence-transformers)</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`import cohere

co = cohere.Client("your-cohere-key")

# Step 1: Get initial candidates
results = index.query(vector=query_emb, top_k=20)
candidates = [match.metadata["text"] for match in results.matches]

# Step 2: Rerank with Cohere
reranked = co.rerank(
    query=user_query,
    documents=candidates,
    top_n=5,  # Keep only top 5 after reranking
    model="rerank-english-v3.0"
)

# Use reranked results
for result in reranked.results:
    print(f"Index: {result.index}, Score: {result.relevance_score}")
    print(f"Text: {candidates[result.index][:200]}...")`}
                      </pre>
                    </div>
                  </div>

                  {/* Query Decomposition */}
                  <div className="rounded-xl border-2 border-indigo-300 bg-white p-6 dark:border-indigo-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-indigo-700 dark:text-indigo-300">
                        3. Query Decomposition
                      </h5>
                      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                        Complex Queries
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Break complex queries into simpler sub-queries, retrieve for each, then combine results.
                    </p>
                    <div className="mb-4 rounded-lg bg-indigo-50 p-4 dark:bg-indigo-950/30">
                      <div className="mb-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                        Example:
                      </div>
                      <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                        <div>
                          <strong>Original:</strong> "Compare Apple and Microsoft's revenue growth and profitability in 2024"
                        </div>
                        <div>
                          <strong>Decomposed:</strong>
                          <ul className="ml-4 mt-1 space-y-1">
                            <li>1. "Apple revenue growth 2024"</li>
                            <li>2. "Microsoft revenue growth 2024"</li>
                            <li>3. "Apple profitability 2024"</li>
                            <li>4. "Microsoft profitability 2024"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ Use LLM to decompose query, retrieve for each sub-query, aggregate results
                    </div>
                  </div>

                  {/* Query Expansion */}
                  <div className="rounded-xl border-2 border-violet-300 bg-white p-6 dark:border-violet-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-violet-700 dark:text-violet-300">
                        4. Query Expansion
                      </h5>
                      <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
                        Recall Boost
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Generate multiple variations of the query to improve recall. Use LLM to rephrase or add synonyms.
                    </p>
                    <div className="mb-4 rounded-lg bg-violet-50 p-4 dark:bg-violet-950/30">
                      <div className="mb-2 text-xs font-semibold text-violet-700 dark:text-violet-300">
                        Example:
                      </div>
                      <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                        <div><strong>Original:</strong> "What are the main risks?"</div>
                        <div>
                          <strong>Expanded:</strong>
                          <ul className="ml-4 mt-1 space-y-1">
                            <li>• "What are the main risks?"</li>
                            <li>• "Key risk factors"</li>
                            <li>• "Primary threats and vulnerabilities"</li>
                            <li>• "Critical business challenges"</li>
                          </ul>
                        </div>
                        <div className="mt-2">Search with all variations, deduplicate results</div>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Filtering */}
                  <div className="rounded-xl border-2 border-fuchsia-300 bg-white p-6 dark:border-fuchsia-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-fuchsia-700 dark:text-fuchsia-300">
                        5. Metadata Filtering
                      </h5>
                      <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300">
                        Essential
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Pre-filter chunks by metadata BEFORE vector search. Dramatically improves relevance and reduces search space.
                    </p>
                    <div className="mb-4 rounded-lg bg-fuchsia-50 p-4 dark:bg-fuchsia-950/30">
                      <div className="mb-2 text-xs font-semibold text-fuchsia-700 dark:text-fuchsia-300">
                        Use cases:
                      </div>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>• "Find risks in 2024 filings only" → filter by year=2024</li>
                        <li>• "Search Apple docs" → filter by company="Apple Inc."</li>
                        <li>• "MD&A section only" → filter by section="Item 7"</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`results = index.query(
    vector=query_embedding,
    top_k=5,
    filter={
        "year": {"$eq": 2024},
        "company": {"$in": ["Apple Inc.", "Microsoft Corp."]},
        "section": {"$eq": "Item 1A"}  # Risk Factors only
    },
    include_metadata=True
)`}
                      </pre>
                    </div>
                  </div>

                  {/* Parent Document Retrieval */}
                  <div className="rounded-xl border-2 border-rose-300 bg-white p-6 dark:border-rose-700 dark:bg-gray-800">
                    <div className="mb-4 flex items-center justify-between">
                      <h5 className="text-lg font-bold text-rose-700 dark:text-rose-300">
                        6. Parent Document Retrieval
                      </h5>
                      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
                        Context-Rich
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                      Search with small child chunks (precise matching), but retrieve larger parent chunks (more context for LLM).
                    </p>
                    <div className="mb-4 rounded-lg bg-rose-50 p-4 dark:bg-rose-950/30">
                      <div className="mb-2 text-xs font-semibold text-rose-700 dark:text-rose-300">
                        How it works:
                      </div>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>• Index: Small chunks (128 tokens) with parent_id in metadata</li>
                        <li>• Search: Find most similar small chunks</li>
                        <li>• Retrieve: Return larger parent chunks (512 tokens)</li>
                        <li>• Result: Precise search + rich context for answering</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`# Search child chunks
child_results = index.query(vector=query_emb, top_k=5)

# Get parent IDs
parent_ids = [match.metadata["parent_id"] for match in child_results.matches]

# Retrieve full parent chunks (from separate store or DB)
parent_chunks = fetch_parent_chunks(parent_ids)

# Pass parent chunks to LLM (more context!)`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="rounded-xl border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-950/30">
                <h4 className="mb-4 text-xl font-bold text-purple-700 dark:text-purple-300">
                  Query Phase Best Practices
                </h4>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">1.</span>
                    <div>
                      <strong>Retrieve more than you need, then filter:</strong> Get top-20, rerank to top-5. Better accuracy than retrieving top-5 directly.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">2.</span>
                    <div>
                      <strong>Use metadata filtering aggressively:</strong> Pre-filter by date, company, document type whenever possible. Huge quality boost.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">3.</span>
                    <div>
                      <strong>Hybrid search for production:</strong> Combine vector + keyword search. Weaviate and Elasticsearch support this natively.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">4.</span>
                    <div>
                      <strong>Monitor retrieval quality:</strong> Track if retrieved chunks contain the answer. Use metrics like precision@k, recall@k (covered in evaluation).
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">5.</span>
                    <div>
                      <strong>Cache query embeddings:</strong> If users ask similar questions, cache embeddings to avoid repeated API calls.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">6.</span>
                    <div>
                      <strong>Set appropriate top_k:</strong> Too few (k=3) misses context. Too many (k=50) dilutes signal and costs more. Start with k=5-10.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6: LLM Generation & Response Presentation */}
            <div className="mb-12 rounded-2xl border-2 border-emerald-300 bg-gradient-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-700 dark:from-emerald-950/50 dark:to-teal-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Step 6: LLM Generation & Response Presentation
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                You've retrieved the most relevant chunks. Now construct a prompt with this context and send it to the LLM to generate a grounded, accurate answer with proper citations.
              </p>

              {/* Prompt Construction */}
              <div className="mb-8 rounded-xl border-2 border-emerald-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-emerald-700 dark:text-emerald-300">
                  Constructing the RAG Prompt
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  A RAG prompt has 3 essential components: <strong>System Prompt</strong>, <strong>Retrieved Context</strong>, and <strong>User Question</strong>.
                </p>

                <div className="mb-6 space-y-4">
                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
                    <h5 className="mb-2 font-bold text-green-700 dark:text-green-300">
                      1. System Prompt (Instructions)
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Tell the LLM its role, constraints, and how to handle the context. Critical: instruct it to ONLY use provided context and cite sources.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
                    <h5 className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                      2. Retrieved Context (From Vector DB)
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The chunks retrieved in the previous step, formatted with source information for attribution.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h5 className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                      3. User Question
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The original query the user asked.
                    </p>
                  </div>
                </div>

                {/* Production RAG Prompt Template */}
                <div>
                  <h5 className="mb-3 font-bold text-gray-900 dark:text-white">
                    Production RAG Prompt Template
                  </h5>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`# System Prompt
system_prompt = """
You are a financial analyst assistant helping users understand financial documents.

CRITICAL INSTRUCTIONS:
1. Answer questions using ONLY the information provided in the Context below
2. If the answer is not in the Context, say "I don't have enough information to answer that based on the provided documents."
3. ALWAYS cite your sources using [Source X] notation
4. Be precise and factual - do not make up information
5. If the Context contains conflicting information, acknowledge it
6. For numerical data, cite the exact source and date

Context will include the source document, page number, and section for each chunk.
"""

# Format retrieved chunks with metadata
context_parts = []
for i, chunk in enumerate(retrieved_chunks):
    source_info = f"[Source {i+1}] {chunk['source']}, Page {chunk['page']}, Section: {chunk['section']}"
    context_parts.append(f"{source_info}\\n{chunk['text']}\\n")

context = "\\n".join(context_parts)

# Send to LLM
response = client.chat.completions.create(
    model="gpt-4-turbo",
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": f"CONTEXT:\\n{context}\\n\\nQUESTION: {user_query}"}
    ],
    temperature=0.1,  # Low temperature for factual answers
    max_tokens=1000
)

answer = response.choices[0].message.content`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Citation Formatting */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Citation & Attribution Strategies
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Citations are CRITICAL for trust, especially in finance. Multiple approaches:
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border-2 border-teal-300 bg-white p-6 dark:border-teal-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-teal-700 dark:text-teal-300">
                      Approach 1: Inline Citations (Recommended)
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Instruct LLM to cite after each claim using [Source X] notation.
                    </p>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Example Output:
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        "Apple's primary credit risks in 2024 include exposure to commercial lending portfolios [Source 1] and concentration risk in certain geographic markets [Source 2]. The company reported $15.3B in total lending exposure as of Q4 2024 [Source 1, Page 45]."
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-cyan-300 bg-white p-6 dark:border-cyan-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-cyan-700 dark:text-cyan-300">
                      Approach 2: Structured JSON Output
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Request structured output with separate answer and citations. Better for programmatic use.
                    </p>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`{
  "answer": "Apple's primary credit risks...",
  "citations": [
    {
      "claim": "exposure to commercial lending portfolios",
      "source": "Apple 10-K 2024",
      "page": 45,
      "section": "Item 1A - Risk Factors",
      "confidence": "high"
    }
  ],
  "has_sufficient_context": true
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-blue-300 bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-blue-700 dark:text-blue-300">
                      Approach 3: Post-Processing Citation Extraction
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Generate answer, then use a second LLM call to extract and verify citations from retrieved chunks.
                    </p>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ More accurate citations but slower (2 LLM calls)
                      <br />✓ Can verify each claim is actually supported by context
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Quality Controls */}
              <div className="mb-8 rounded-xl border-2 border-emerald-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-emerald-700 dark:text-emerald-300">
                  Response Quality Controls
                </h4>

                <div className="space-y-4">
                  <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950/30">
                    <h5 className="mb-2 font-bold text-yellow-700 dark:text-yellow-300">
                      1. Hallucination Prevention
                    </h5>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <div>• Use low temperature (0.1-0.3) for factual answers</div>
                      <div>• Explicitly instruct: "Do not make up information"</div>
                      <div>• Require citations for every claim</div>
                      <div>• Post-process: verify each cited fact exists in retrieved chunks</div>
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950/30">
                    <h5 className="mb-2 font-bold text-orange-700 dark:text-orange-300">
                      2. Handling Insufficient Context
                    </h5>
                    <div className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      What if retrieved chunks don't contain the answer?
                    </div>
                    <div className="rounded-lg bg-white p-3 dark:bg-gray-800">
                      <pre className="text-xs text-gray-700 dark:text-gray-300">
{`# Add to system prompt:
"If the provided context does not contain enough
information to fully answer, say:

'Based on the provided documents, I can only
partially answer: [what you found]. However,
I don't have information about [what's missing].'"

# Or use confidence scoring:
{
  "answer": "...",
  "confidence": "partial",
  "missing_info": ["metric not found"]
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/30">
                    <h5 className="mb-2 font-bold text-red-700 dark:text-red-300">
                      3. Conflicting Information
                    </h5>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      If retrieved chunks contain contradictory data:
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>• Acknowledge the conflict explicitly</li>
                        <li>• Cite both sources with dates</li>
                        <li>• Clarify which is more recent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Streaming & Best Practices */}
              <div className="mb-8 rounded-xl border-2 border-teal-300 bg-white p-6 dark:border-teal-700 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-teal-700 dark:text-teal-300">
                  Streaming Responses (Better UX)
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  For production systems, stream the LLM response token-by-token for better perceived performance.
                </p>

                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                  <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`stream = client.chat.completions.create(
    model="gpt-4-turbo",
    messages=[...],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")`}
                  </pre>
                </div>
              </div>

              {/* Best Practices */}
              <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
                <h4 className="mb-4 text-xl font-bold text-emerald-700 dark:text-emerald-300">
                  LLM Generation Best Practices
                </h4>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">1.</span>
                    <div>
                      <strong>Always require citations:</strong> Make [Source X] notation mandatory. Verify in post-processing.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">2.</span>
                    <div>
                      <strong>Low temperature for facts:</strong> Use 0.1-0.3 for financial queries. Higher (0.7+) for creative tasks only.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">3.</span>
                    <div>
                      <strong>Token budget management:</strong> If chunks + prompt exceed limit, truncate lowest-scoring chunks first.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">4.</span>
                    <div>
                      <strong>Structured outputs for production:</strong> Use JSON mode for consistent, parseable responses.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">5.</span>
                    <div>
                      <strong>Graceful degradation:</strong> If context insufficient, admit it. Better than hallucinating.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">6.</span>
                    <div>
                      <strong>Model selection:</strong> GPT-4 for complex analysis, GPT-3.5 for simple lookups. Balance cost vs quality.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">7.</span>
                    <div>
                      <strong>Log everything:</strong> Store queries, chunks, and answers for debugging and evaluation.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced RAG Techniques */}
            <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
              <h3 className="mb-4 text-xl font-bold text-emerald-700 dark:text-emerald-300">
                Advanced RAG Techniques
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <strong>Hybrid Search:</strong> Combine vector similarity with
                  keyword search (BM25) for better retrieval, especially for
                  exact terms like ticker symbols or regulation numbers.
                </div>
                <div>
                  <strong>Reranking:</strong> After initial retrieval, use a
                  separate model to rerank results for better relevance. Tools:
                  Cohere Rerank, cross-encoders.
                </div>
                <div>
                  <strong>Query Expansion:</strong> Automatically rephrase user
                  queries or generate multiple versions to improve retrieval
                  recall.
                </div>
                <div>
                  <strong>Metadata Filtering:</strong> Pre-filter by document
                  type, date range, or department before vector search (e.g.,
                  "only 2024 filings").
                </div>
                <div>
                  <strong>Parent Document Retrieval:</strong> Retrieve small
                  chunks for matching but return larger parent sections for full
                  context.
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Building RAG for Financial Documents */}
          <section className="rounded-3xl border border-emerald-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-emerald-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-emerald-600 dark:text-emerald-400">
              Building RAG on Financial Documents
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Let's build a production-ready RAG system for financial documents.
              We'll use Pinecone as our vector database and OpenAI embeddings,
              but the principles apply to any stack.
            </p>

            {/* Complete End-to-End Implementation */}
            <div className="mb-12 rounded-2xl border-2 border-emerald-300 bg-gradient-br from-emerald-50 to-teal-50 p-8 dark:border-emerald-700 dark:from-emerald-950/50 dark:to-teal-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Complete End-to-End RAG Implementation
              </h3>

              <p className="mb-6 text-sm text-gray-700 dark:text-gray-300">
                This production-ready implementation demonstrates all 7 steps of the RAG pipeline: document loading, tokenization, chunking with rich metadata, embeddings, vector storage, advanced querying, and LLM generation with citations.
              </p>

              <div className="space-y-6">
                {/* Step 1: Setup */}
                <div className="rounded-xl border-2 border-teal-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-teal-700 dark:text-teal-300">
                    Step 1: Setup and Dependencies
                  </h4>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`# Install dependencies
pip install pinecone-client openai pdfplumber tiktoken python-dotenv tqdm

# .env file
OPENAI_API_KEY=your_openai_key
PINECONE_API_KEY=your_pinecone_key
PINECONE_ENVIRONMENT=us-east-1

# Imports
import pdfplumber
import tiktoken
from openai import OpenAI
from pinecone import Pinecone, ServerlessSpec
from tqdm import tqdm
import os
from datetime import datetime`}
                  </pre>
                </div>

                {/* Step 2: Document Loading & Extraction */}
                <div className="rounded-xl border-2 border-cyan-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-cyan-700 dark:text-cyan-300">
                    Step 2: Document Loading & Extraction
                  </h4>
                  <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                    Using PDFPlumber for better table extraction from financial documents
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`# Load 10-K filing with PDFPlumber (better for financial docs)
def extract_document_with_metadata(pdf_path: str):
    """Extract text and metadata from financial PDF"""
    pages_data = []

    with pdfplumber.open(pdf_path) as pdf:
        for page_num, page in enumerate(pdf.pages, 1):
            # Extract text
            text = page.extract_text()

            # Extract tables (important for financial docs!)
            tables = page.extract_tables()

            # Combine text and tables
            page_content = text
            if tables:
                for table in tables:
                    # Convert table to readable text
                    table_text = "\\n".join([" | ".join(row) for row in table])
                    page_content += f"\\n\\nTABLE:\\n{table_text}"

            pages_data.append({
                "page_num": page_num,
                "content": page_content,
                "has_tables": len(tables) > 0
            })

    return pages_data

# Extract document
pdf_path = "apple_10k_2024.pdf"
pages = extract_document_with_metadata(pdf_path)
print(f"Extracted {len(pages)} pages from {pdf_path}")`}
                  </pre>
                </div>

                {/* Step 3: Tokenization & Chunking */}
                <div className="rounded-xl border-2 border-blue-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-blue-700 dark:text-blue-300">
                    Step 3: Tokenization & Chunking with Rich Metadata
                  </h4>
                  <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                    Chunk documents while preserving metadata for filtering and attribution
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`# Initialize tokenizer for token counting
encoding = tiktoken.encoding_for_model("gpt-4")

def count_tokens(text: str) -> int:
    """Count tokens in text"""
    return len(encoding.encode(text))

def chunk_document_with_metadata(pages, chunk_size=500, overlap=50):
    """
    Chunk document with comprehensive metadata
    chunk_size and overlap are in tokens
    """
    chunks = []

    for page in pages:
        text = page["content"]
        page_num = page["page_num"]

        # Simple sentence-based chunking
        sentences = text.split(". ")
        current_chunk = ""
        current_tokens = 0

        for sentence in sentences:
            sentence_tokens = count_tokens(sentence)

            # If adding this sentence exceeds chunk size, save current chunk
            if current_tokens + sentence_tokens > chunk_size and current_chunk:
                chunks.append({
                    "text": current_chunk.strip(),
                    "metadata": {
                        # Identification
                        "chunk_id": f"chunk_{len(chunks)}",
                        "source_file": "apple_10k_2024.pdf",

                        # Document Classification
                        "document_type": "10-K",
                        "company": "Apple Inc.",
                        "ticker": "AAPL",
                        "fiscal_year": 2024,
                        "filing_date": "2024-11-01",

                        # Location Information
                        "page_number": page_num,
                        "section": "Item 1A",  # You'd parse this from ToC
                        "section_title": "Risk Factors",

                        # Technical Metadata
                        "chunk_tokens": count_tokens(current_chunk),
                        "has_tables": page["has_tables"],
                        "created_at": datetime.now().isoformat(),

                        # Multi-tenancy (if needed)
                        "tenant_id": "acme_corp",
                        "user_access_level": "analyst"
                    }
                })

                # Start new chunk with overlap
                current_chunk = sentence + ". "
                current_tokens = sentence_tokens
            else:
                current_chunk += sentence + ". "
                current_tokens += sentence_tokens

        # Add remaining chunk
        if current_chunk.strip():
            chunks.append({
                "text": current_chunk.strip(),
                "metadata": {
                    "chunk_id": f"chunk_{len(chunks)}",
                    "source_file": "apple_10k_2024.pdf",
                    "document_type": "10-K",
                    "company": "Apple Inc.",
                    "ticker": "AAPL",
                    "fiscal_year": 2024,
                    "page_number": page_num,
                    "chunk_tokens": count_tokens(current_chunk),
                    "has_tables": page["has_tables"]
                }
            })

    return chunks

# Create chunks
chunks = chunk_document_with_metadata(pages, chunk_size=500, overlap=50)
print(f"Created {len(chunks)} chunks")
print(f"Average tokens per chunk: {sum(c['metadata']['chunk_tokens'] for c in chunks) / len(chunks):.0f}")`}
                  </pre>
                </div>

                {/* Step 4: Generate Embeddings & Store */}
                <div className="rounded-xl border-2 border-indigo-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-indigo-700 dark:text-indigo-300">
                    Step 4: Generate Embeddings & Store in Pinecone
                  </h4>
                  <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                    Batch embed chunks and store with metadata for efficient retrieval
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`# Initialize OpenAI and Pinecone
client = OpenAI()
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))

# Create index (serverless for cost efficiency)
index_name = "financial-docs-rag"
if index_name not in pc.list_indexes().names():
    pc.create_index(
        name=index_name,
        dimension=1536,  # text-embedding-3-small dimension
        metric="cosine",
        spec=ServerlessSpec(cloud="aws", region="us-east-1")
    )

index = pc.Index(index_name)

# Batch embed and upload
BATCH_SIZE = 100

def embed_and_upload_chunks(chunks, batch_size=100):
    """Embed chunks in batches and upload to Pinecone"""

    for i in tqdm(range(0, len(chunks), batch_size), desc="Embedding & uploading"):
        batch = chunks[i:i+batch_size]

        # Get embeddings for batch
        texts = [chunk["text"] for chunk in batch]
        response = client.embeddings.create(
            model="text-embedding-3-small",
            input=texts
        )

        # Prepare vectors for Pinecone
        vectors = []
        for j, embedding_obj in enumerate(response.data):
            chunk = batch[j]
            vectors.append({
                "id": chunk["metadata"]["chunk_id"],
                "values": embedding_obj.embedding,
                "metadata": {
                    "text": chunk["text"],  # Store full text
                    **chunk["metadata"]  # All metadata
                }
            })

        # Upload batch to Pinecone
        index.upsert(vectors=vectors)

    print(f"✓ Indexed {len(chunks)} chunks with metadata")

# Upload all chunks
embed_and_upload_chunks(chunks, batch_size=BATCH_SIZE)`}
                  </pre>
                </div>

                {/* Step 5: Query with Advanced Retrieval */}
                <div className="rounded-xl border-2 border-purple-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-purple-700 dark:text-purple-300">
                    Step 5: Query with Advanced Retrieval & Metadata Filtering
                  </h4>
                  <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                    Use metadata filters to narrow search scope and improve relevance
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`def retrieve_chunks(
    query: str,
    top_k: int = 5,
    filters: dict = None
):
    """
    Retrieve relevant chunks with optional metadata filtering

    Example filters:
    - {"fiscal_year": 2024}
    - {"company": "Apple Inc.", "section": "Risk Factors"}
    - {"has_tables": True}
    """
    # 1. Embed the query
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=query
    )
    query_embedding = response.data[0].embedding

    # 2. Search Pinecone with metadata filtering
    search_params = {
        "vector": query_embedding,
        "top_k": top_k,
        "include_metadata": True
    }

    # Add metadata filters if provided
    if filters:
        search_params["filter"] = filters

    results = index.query(**search_params)

    # 3. Extract and format results
    retrieved_chunks = []
    for match in results.matches:
        retrieved_chunks.append({
            "id": match.id,
            "text": match.metadata.get("text", ""),
            "score": match.score,
            "metadata": {
                k: v for k, v in match.metadata.items()
                if k != "text"  # Exclude text from metadata display
            }
        })

    return retrieved_chunks

# Example: Retrieve chunks about risks from 2024 filing
retrieved = retrieve_chunks(
    query="What are the main credit risks?",
    top_k=5,
    filters={"fiscal_year": 2024, "section": "Item 1A"}  # Only risk factors
)

print(f"Retrieved {len(retrieved)} chunks")
for i, chunk in enumerate(retrieved, 1):
    print(f"\\n[{i}] Score: {chunk['score']:.3f}")
    print(f"Source: {chunk['metadata']['source_file']}, Page {chunk['metadata']['page_number']}")
    print(f"Text preview: {chunk['text'][:200]}...")`}
                  </pre>
                </div>

                {/* Step 6: LLM Generation with Citations */}
                <div className="rounded-xl border-2 border-pink-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-pink-700 dark:text-pink-300">
                    Step 6: LLM Generation with Citations
                  </h4>
                  <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                    Generate answers grounded in retrieved context with proper citations
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`def generate_answer(query: str, retrieved_chunks: list):
    """Generate answer from retrieved chunks with citations"""

    # 1. Build context with source attribution
    context_parts = []
    for i, chunk in enumerate(retrieved_chunks, 1):
        context_parts.append(
            f"[Source {i}]\\n"
            f"Company: {chunk['metadata']['company']}\\n"
            f"Document: {chunk['metadata']['document_type']} ({chunk['metadata']['fiscal_year']})\\n"
            f"Section: {chunk['metadata']['section_title']}\\n"
            f"Page: {chunk['metadata']['page_number']}\\n"
            f"Content: {chunk['text']}\\n"
        )

    context = "\\n---\\n".join(context_parts)

    # 2. Build RAG prompt with strict instructions
    system_prompt = """You are a financial analyst assistant.

CRITICAL RULES:
1. Answer ONLY using information from the provided sources
2. ALWAYS cite sources using [Source N] notation after each claim
3. If information is not in the sources, explicitly state "This information is not available in the provided documents"
4. Be specific with numbers, dates, and facts
5. If sources conflict, mention both viewpoints and cite each"""

    user_prompt = f"""Based on the following sources, answer this question:

QUESTION: {query}

SOURCES:
{context}

Provide a comprehensive answer with inline citations."""

    # 3. Generate answer (low temperature for factuality)
    completion = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ],
        temperature=0.1  # Low temperature for factuality
    )

    answer = completion.choices[0].message.content

    # 4. Return structured response
    return {
        "answer": answer,
        "sources": [
            {
                "id": i,
                "company": chunk["metadata"]["company"],
                "document": f"{chunk['metadata']['document_type']} {chunk['metadata']['fiscal_year']}",
                "section": chunk["metadata"]["section_title"],
                "page": chunk["metadata"]["page_number"],
                "relevance_score": chunk["score"]
            }
            for i, chunk in enumerate(retrieved_chunks, 1)
        ],
        "query": query
    }

# Example usage in complete RAG pipeline
def query_rag(question: str, filters: dict = None, top_k: int = 5):
    """Complete RAG pipeline: retrieve + generate"""

    # Step 1: Retrieve relevant chunks
    retrieved = retrieve_chunks(question, top_k=top_k, filters=filters)

    # Step 2: Generate answer
    result = generate_answer(question, retrieved)

    return result`}
                  </pre>
                </div>

                {/* Step 7: Example Usage */}
                <div className="rounded-xl border-2 border-orange-400 bg-white p-6 dark:bg-gray-800">
                  <h4 className="mb-4 font-bold text-orange-700 dark:text-orange-300">
                    Step 7: Complete Example Usage
                  </h4>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    {`# Query the RAG system
result = query_rag(
    question="What credit risks did Apple disclose in their 2024 10-K filing?",
    filters={"fiscal_year": 2024, "company": "Apple Inc."},
    top_k=5
)

# Display results
print("=" * 80)
print("QUESTION:", result["query"])
print("=" * 80)
print("\\nANSWER:")
print(result["answer"])
print("\\n" + "=" * 80)
print("SOURCES:")
for source in result["sources"]:
    print(f"  [{source['id']}] {source['document']} - {source['section']}")
    print(f"      Page {source['page']} (Relevance: {source['relevance_score']:.3f})")
print("=" * 80)

# Example Output:
# ===============================================================================
# QUESTION: What credit risks did Apple disclose in their 2024 10-K filing?
# ===============================================================================
#
# ANSWER:
# According to Apple's 2024 10-K filing, the company disclosed several credit risks:
#
# 1. **Counterparty Credit Risk**: Apple faces credit risk from financial institutions
#    holding its cash and investments [Source 1]. The company attempts to mitigate
#    this by diversifying across multiple highly-rated institutions.
#
# 2. **Customer Credit Risk**: The company has credit exposure to customers through
#    accounts receivable and financing arrangements [Source 2]. This is particularly
#    relevant for carrier partners and enterprise customers with payment terms.
#
# 3. **Sovereign Credit Risk**: Apple has exposure to sovereign debt of various
#    countries where it operates [Source 3], which could be impacted by deteriorating
#    credit conditions in those jurisdictions.
#
# ===============================================================================
# SOURCES:
#   [1] 10-K 2024 - Risk Factors
#       Page 23 (Relevance: 0.887)
#   [2] 10-K 2024 - Risk Factors
#       Page 24 (Relevance: 0.856)
#   [3] 10-K 2024 - Risk Factors
#       Page 25 (Relevance: 0.823)
# ===============================================================================`}
                  </pre>
                </div>
              </div>

              {/* Key Implementation Notes */}
              <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
                <h4 className="mb-4 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  Key Implementation Notes
                </h4>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <div>
                      <strong>Rich Metadata:</strong> Comprehensive metadata enables powerful filtering (by year, company, section) and proper source attribution
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <div>
                      <strong>Batch Processing:</strong> Process embeddings in batches of 100 for cost efficiency and rate limit compliance
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <div>
                      <strong>Token Counting:</strong> Use tiktoken to accurately count tokens before chunking to avoid context overflow
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <div>
                      <strong>Table Extraction:</strong> PDFPlumber handles financial tables better than basic PDF parsers
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <div>
                      <strong>Low Temperature:</strong> Use temperature 0.1 for LLM generation to prioritize factuality over creativity
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <div>
                      <strong>Structured Output:</strong> Return answers with sources metadata for verification and audit trails
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7: Evaluation & Metrics */}
            <div className="mb-12 rounded-2xl border-2 border-orange-300 bg-gradient-br from-orange-50 to-amber-50 p-8 dark:border-orange-700 dark:from-orange-950/50 dark:to-amber-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Step 7: Evaluation & Metrics
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                How do you know if your RAG system is working well? You need systematic evaluation across retrieval quality, answer quality, latency, and cost.
              </p>

              {/* Retrieval Metrics */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  1. Retrieval Quality Metrics
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Measure how well the vector search retrieves relevant chunks. Requires a labeled test set with queries and known relevant documents.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border-2 border-orange-300 bg-white p-6 dark:border-orange-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-orange-700 dark:text-orange-300">
                      Precision@k
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Of the top k retrieved chunks, what percentage are actually relevant?
                    </p>
                    <div className="mb-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Formula:
                      </div>
                      <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        Precision@k = (# relevant chunks in top k) / k
                      </div>
                    </div>
                    <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-950/30">
                      <div className="mb-1 text-xs font-semibold text-orange-700 dark:text-orange-300">
                        Example:
                      </div>
                      <div className="text-xs text-gray-700 dark:text-gray-300">
                        Retrieved 5 chunks. 3 contain answer. <strong>Precision@5 = 3/5 = 0.60 (60%)</strong>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-amber-300 bg-white p-6 dark:border-amber-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-amber-700 dark:text-amber-300">
                      Recall@k
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Of all relevant chunks in the corpus, what percentage did we retrieve in top k?
                    </p>
                    <div className="mb-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Formula:
                      </div>
                      <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        Recall@k = (# relevant chunks in top k) / (total # relevant chunks)
                      </div>
                    </div>
                    <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-950/30">
                      <div className="mb-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                        Example:
                      </div>
                      <div className="text-xs text-gray-700 dark:text-gray-300">
                        10 relevant chunks exist. Retrieved 3 in top 5. <strong>Recall@5 = 3/10 = 0.30 (30%)</strong>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-yellow-300 bg-white p-6 dark:border-yellow-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-yellow-700 dark:text-yellow-300">
                      Mean Reciprocal Rank (MRR)
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Measures how high the first relevant result appears. Rewards having the best result at the top.
                    </p>
                    <div className="mb-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Formula:
                      </div>
                      <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        MRR = 1 / (rank of first relevant result)
                      </div>
                    </div>
                    <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-950/30">
                      <div className="mb-1 text-xs font-semibold text-yellow-700 dark:text-yellow-300">
                        Example:
                      </div>
                      <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <div>First relevant at rank 1: MRR = 1/1 = 1.0 (perfect!)</div>
                        <div>First relevant at rank 3: MRR = 1/3 = 0.33</div>
                        <div>No relevant in top k: MRR = 0</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-red-300 bg-white p-6 dark:border-red-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-red-700 dark:text-red-300">
                      Normalized Discounted Cumulative Gain (NDCG@k)
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Most sophisticated metric. Considers both relevance and ranking position. Higher-ranked relevant docs contribute more.
                    </p>
                    <div className="mb-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                      <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Intuition:
                      </div>
                      <div className="text-xs text-gray-700 dark:text-gray-300">
                        Rewards relevant docs at top positions more than those at bottom. Perfect score = 1.0 when all relevant docs are at the top in order of relevance.
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ Best for: Ranking quality evaluation. Most comprehensive metric.
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Example */}
              <div className="mb-8 rounded-xl border-2 border-orange-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-orange-700 dark:text-orange-300">
                  Computing Retrieval Metrics
                </h4>

                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                  <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`# Test dataset: queries with labeled relevant chunk IDs
test_queries = [
    {
        "query": "What are Apple's credit risks?",
        "relevant_chunk_ids": ["chunk_45", "chunk_127", "chunk_203"]
    },
    # ... more test cases
]

# Evaluate retrieval
def evaluate_retrieval(test_queries, retrieval_function, k=5):
    precisions, recalls, mrrs, ndcgs = [], [], [], []

    for test_case in test_queries:
        # Retrieve top k chunks
        retrieved = retrieval_function(test_case["query"], k=k)
        retrieved_ids = [chunk["id"] for chunk in retrieved]
        relevant_ids = set(test_case["relevant_chunk_ids"])

        # Precision@k
        relevant_in_k = len(set(retrieved_ids) & relevant_ids)
        precision = relevant_in_k / k
        precisions.append(precision)

        # Recall@k
        recall = relevant_in_k / len(relevant_ids) if relevant_ids else 0
        recalls.append(recall)

        # MRR
        for rank, chunk_id in enumerate(retrieved_ids, 1):
            if chunk_id in relevant_ids:
                mrrs.append(1.0 / rank)
                break
        else:
            mrrs.append(0)

        # NDCG (simplified - use sklearn for full implementation)
        # ... NDCG calculation

    return {
        "precision@k": np.mean(precisions),
        "recall@k": np.mean(recalls),
        "MRR": np.mean(mrrs),
        "NDCG@k": np.mean(ndcgs)
    }

results = evaluate_retrieval(test_queries, my_rag_retrieval, k=5)
print(results)
# {'precision@5': 0.74, 'recall@5': 0.62, 'MRR': 0.81, 'NDCG@5': 0.79}`}
                  </pre>
                </div>
              </div>

              {/* Answer Quality Metrics */}
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  2. Answer Quality Metrics
                </h4>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                  Retrieval is only half the story. The final answer quality matters most.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border-2 border-green-300 bg-white p-6 dark:border-green-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-green-700 dark:text-green-300">
                      LLM-as-Judge (Automated)
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Use a strong LLM (GPT-4) to evaluate answer quality on multiple dimensions.
                    </p>
                    <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                      <pre className="overflow-x-auto text-xs text-gray-700 dark:text-gray-300">
{`judge_prompt = """
Rate the answer on a scale of 1-5 for each dimension:

QUESTION: {query}
RETRIEVED CONTEXT: {context}
GENERATED ANSWER: {answer}

Evaluate:
1. Factual Accuracy: Is every claim supported by context?
2. Completeness: Does it fully answer the question?
3. Citation Quality: Are sources cited properly?
4. Relevance: Is the answer on-topic?

Return JSON:
{
  "factual_accuracy": 1-5,
  "completeness": 1-5,
  "citation_quality": 1-5,
  "relevance": 1-5,
  "overall": 1-5,
  "reasoning": "brief explanation"
}
"""

evaluation = judge_llm.generate(judge_prompt)
scores = json.loads(evaluation)`}
                      </pre>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ✓ Scalable, consistent, fast | ✗ Can miss nuanced errors
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-blue-300 bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-blue-700 dark:text-blue-300">
                      Human Evaluation (Gold Standard)
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Human experts rate answers. Most accurate but expensive and slow.
                    </p>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <div><strong>Process:</strong></div>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• Sample 100-500 diverse queries</li>
                        <li>• Have 2-3 domain experts rate each answer</li>
                        <li>• Use rubric: factuality, completeness, citation, clarity</li>
                        <li>• Calculate inter-rater agreement (Cohen's kappa)</li>
                      </ul>
                    </div>
                    <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">
                      ✓ Most accurate | ✗ Expensive, slow, doesn't scale
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-purple-300 bg-white p-6 dark:border-purple-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-purple-700 dark:text-purple-300">
                      Groundedness/Faithfulness
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Measure if the answer is grounded in retrieved context (doesn't hallucinate).
                    </p>
                    <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                      <div><strong>Method:</strong> Extract all factual claims from answer. Verify each claim exists in retrieved chunks.</div>
                      <div className="mt-2 rounded bg-purple-50 p-2 dark:bg-purple-950/30">
                        Groundedness = (# verified claims) / (total # claims)
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-pink-300 bg-white p-6 dark:border-pink-700 dark:bg-gray-800">
                    <h5 className="mb-3 font-bold text-pink-700 dark:text-pink-300">
                      User Feedback (Production Signal)
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      Thumbs up/down, ratings, explicit feedback. Your best real-world signal.
                    </p>
                    <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                      <div><strong>Track:</strong></div>
                      <ul className="ml-4 space-y-1">
                        <li>• Positive feedback rate</li>
                        <li>• Time to thumbs down (fast = obviously bad)</li>
                        <li>• Follow-up questions (indicates insufficient answer)</li>
                        <li>• Query reformulations (indicates misunderstanding)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Performance Metrics */}
              <div className="mb-8 rounded-xl border-2 border-orange-400 bg-white p-6 dark:bg-gray-800">
                <h4 className="mb-4 text-xl font-bold text-orange-700 dark:text-orange-300">
                  3. System Performance Metrics
                </h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
                    <h5 className="mb-2 font-bold text-blue-700 dark:text-blue-300">
                      Latency Tracking
                    </h5>
                    <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                      <div><strong>Measure:</strong></div>
                      <ul className="ml-4 space-y-1">
                        <li>• Query embedding time: ~50-100ms</li>
                        <li>• Vector search time: ~50-200ms</li>
                        <li>• LLM generation time: 1-5s</li>
                        <li>• End-to-end latency: {"<"}3s target</li>
                      </ul>
                      <div className="mt-2"><strong>Track p50, p95, p99</strong> percentiles, not just averages!</div>
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
                    <h5 className="mb-2 font-bold text-green-700 dark:text-green-300">
                      Cost Monitoring
                    </h5>
                    <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                      <div><strong>Track:</strong></div>
                      <ul className="ml-4 space-y-1">
                        <li>• Embedding API calls ($/query)</li>
                        <li>• LLM tokens (input + output)</li>
                        <li>• Vector DB costs (storage + queries)</li>
                        <li>• Reranking API costs (if used)</li>
                      </ul>
                      <div className="mt-2 rounded bg-white p-2 dark:bg-gray-800">
                        <strong>Target: $0.01-$0.05 per query</strong> for most use cases
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h5 className="mb-2 font-bold text-purple-700 dark:text-purple-300">
                      Error Rates
                    </h5>
                    <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• API failures (embedding, LLM, vector DB)</li>
                      <li>• Timeout rate</li>
                      <li>• Retrieval failures (no results found)</li>
                      <li>• Context overflow errors</li>
                    </div>
                  </div>

                  <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950/30">
                    <h5 className="mb-2 font-bold text-orange-700 dark:text-orange-300">
                      Cache Hit Rates
                    </h5>
                    <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Query embedding cache hits</li>
                      <li>• Similar query cache hits</li>
                      <li>• Retrieved chunk cache hits</li>
                      <div className="mt-2">Higher cache hit = lower cost + faster</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-950/30">
                <h4 className="mb-4 text-xl font-bold text-orange-700 dark:text-orange-300">
                  Evaluation Best Practices
                </h4>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">1.</span>
                    <div>
                      <strong>Build a test set incrementally:</strong> Start with 50-100 diverse queries. Add edge cases and failed queries over time.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">2.</span>
                    <div>
                      <strong>Evaluate on production data:</strong> Synthetic test sets miss real-world issues. Sample actual user queries.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">3.</span>
                    <div>
                      <strong>Monitor regressions:</strong> Run evaluations on every change. Track metrics over time in dashboards.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">4.</span>
                    <div>
                      <strong>Combine metrics:</strong> High retrieval precision but low answer quality? Retrieval is fine but prompt is bad. Use multiple signals.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">5.</span>
                    <div>
                      <strong>Set baselines:</strong> Measure performance before optimization. Quantify improvements (e.g., "Reranking improved NDCG from 0.65 to 0.78").
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">6.</span>
                    <div>
                      <strong>Human evaluation cadence:</strong> Run human evals quarterly on 100-200 queries. Use for calibration and catching LLM-judge blind spots.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Production Best Practices */}
          <section className="rounded-3xl border border-green-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-green-700/50 dark:bg-gray-800/90 md:p-12">
            <h2 className="mb-8 text-4xl font-bold text-green-600 dark:text-green-400">
              Production Best Practices
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Taking RAG from prototype to production requires attention to
              reliability, security, compliance, and observability. Here's what
              you need to know.
            </p>

            {/* Key Considerations */}
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {/* Security & Compliance */}
              <div className="rounded-xl border-2 border-red-300 bg-white p-6 dark:border-red-700 dark:bg-gray-800">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-300">
                    Security & Compliance
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <div>
                      <strong>Access Control:</strong> Implement document-level
                      permissions. Users should only retrieve documents they're
                      authorized to see.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <div>
                      <strong>Data Residency:</strong> For regulated financial
                      data, consider self-hosted vector DB or region-specific
                      deployments.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <div>
                      <strong>PII Handling:</strong> Scan and mask sensitive
                      information before embedding. Never log raw queries
                      containing PII.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <div>
                      <strong>Audit Logging:</strong> Log all queries,
                      retrievals, and responses for compliance and debugging.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Monitoring & Observability */}
              <div className="rounded-xl border-2 border-blue-300 bg-white p-6 dark:border-blue-700 dark:bg-gray-800">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">
                    Monitoring & Observability
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <div>
                      <strong>Track Key Metrics:</strong> Latency (p50, p95,
                      p99), error rates, cost per query, retrieval accuracy.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <div>
                      <strong>User Feedback:</strong> Implement thumbs up/down
                      for answers. This is your ground truth for improving
                      retrieval.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <div>
                      <strong>Query Analysis:</strong> Monitor most common
                      queries, failed queries, and retrieval gaps to improve
                      your system.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <div>
                      <strong>Data Freshness:</strong> Track when documents were
                      last indexed. Alert on stale data in production.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Error Handling */}
              <div className="rounded-xl border-2 border-yellow-300 bg-white p-6 dark:border-yellow-700 dark:bg-gray-800">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                    Error Handling & Fallbacks
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <div>
                      <strong>Graceful Degradation:</strong> If vector DB is
                      down, fall back to keyword search or cached responses.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <div>
                      <strong>Retry Logic:</strong> Implement exponential
                      backoff for API failures (embedding, LLM, vector DB).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <div>
                      <strong>No Results Handling:</strong> When retrieval
                      returns no good matches, inform the user rather than
                      hallucinating.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <div>
                      <strong>Rate Limiting:</strong> Protect against abuse with
                      per-user query limits and cost quotas.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Performance Optimization */}
              <div className="rounded-xl border-2 border-green-300 bg-white p-6 dark:border-green-700 dark:bg-gray-800">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-300">
                    Performance Optimization
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <div>
                      <strong>Embedding Caching:</strong> Cache embeddings for
                      common queries to reduce API calls and latency.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <div>
                      <strong>Batch Processing:</strong> Index documents in
                      batches rather than one-by-one for 10x speedup.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <div>
                      <strong>Async Operations:</strong> Use async/await for
                      parallel embedding and LLM calls to improve throughput.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <div>
                      <strong>Smart Chunking:</strong> Pre-compute and cache
                      chunk embeddings. Only re-index when documents change.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Production Checklist */}
            <div className="mb-12 rounded-2xl border-2 border-green-300 bg-gradient-br from-green-50 to-emerald-50 p-8 dark:border-green-700 dark:from-green-950/50 dark:to-emerald-950/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Production Readiness Checklist
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-bold text-green-700 dark:text-green-300">
                    Infrastructure
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Vector DB set up with backups and monitoring</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Embedding API has fallback/retry logic</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>LLM API configured with rate limits</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Document update pipeline automated</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-green-700 dark:text-green-300">
                    Security
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Authentication and authorization implemented</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>PII detection and masking in place</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Audit logs for all queries and responses</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Data encryption at rest and in transit</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-green-700 dark:text-green-300">
                    Quality
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Evaluation dataset with ground truth answers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Retrieval accuracy measured and tracked</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>User feedback collection mechanism</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Regular testing on new documents</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-green-700 dark:text-green-300">
                    Compliance
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>
                        Legal review of AI-generated content disclaimers
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Data retention policies implemented</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>
                        Regulatory compliance verified (if applicable)
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Model risk management documentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Pitfalls */}
            <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-950/30">
              <h3 className="mb-4 text-xl font-bold text-red-700 dark:text-red-300">
                Common Pitfalls to Avoid
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <div>
                    <strong>Ignoring retrieval quality:</strong> A fancy LLM
                    can't fix bad retrieval. If the right context isn't
                    retrieved, the answer will be wrong.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <div>
                    <strong>Not testing on edge cases:</strong> Test with
                    ambiguous queries, missing data, conflicting information,
                    and adversarial inputs.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <div>
                    <strong>Skipping user feedback:</strong> You can't improve
                    what you don't measure. Collect feedback from day one.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <div>
                    <strong>Over-relying on citations:</strong> Citations don't
                    guarantee correctness. The LLM might still misinterpret the
                    source.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">⚠️</span>
                  <div>
                    <strong>Underestimating costs:</strong> Embedding and LLM
                    APIs add up fast. Monitor and optimize from the start,
                    especially at scale.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════ LATEST ADVANCEMENTS ═══════ */}
          <section className="mb-16 mt-16">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-1.5 text-xs font-bold text-white shadow-lg">2025 – 2026 Updates</div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Advancements in Embeddings & RAG</h2>
            </div>
            <div className="rounded-3xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-xl dark:border-green-700/50 dark:from-green-950/30 dark:to-emerald-950/30">
              <p className="mb-8 text-gray-700 dark:text-gray-300">RAG has evolved from a simple retrieve-and-generate pattern into a sophisticated, agent-driven knowledge architecture. Here is what has changed.</p>

              {/* GraphRAG */}
              <div className="mb-8 rounded-2xl border border-green-200 bg-white p-6 shadow-sm dark:border-green-700/40 dark:bg-gray-800">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">Microsoft Research 2024</span>
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400">GraphRAG — Beyond Chunk Retrieval</h3>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Traditional RAG retrieves the most semantically similar chunks. GraphRAG first builds a <strong>knowledge graph</strong> from your documents (entities, relationships, communities), then uses that graph to answer questions — especially multi-hop questions that span many documents.</p>
                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4 dark:bg-red-900/20 dark:border-red-700/40">
                    <div className="font-bold text-red-700 dark:text-red-400 text-sm mb-2">Naive RAG fails at:</div>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <li>• "What is the exposure of Firm A to all entities that have defaulted in the last 3 quarters?"</li>
                      <li>• "Summarise all the risks mentioned across all 500 client reports"</li>
                      <li>• Questions requiring synthesis across many documents</li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-green-50 border border-green-200 p-4 dark:bg-green-900/20 dark:border-green-700/40">
                    <div className="font-bold text-green-700 dark:text-green-400 text-sm mb-2">GraphRAG handles:</div>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <li>• Multi-hop reasoning across documents</li>
                      <li>• Global summaries over large corpora</li>
                      <li>• Relationship queries (who is connected to whom)</li>
                      <li>• Community detection (thematic clusters)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400"><strong>Finance use:</strong> regulatory knowledge graphs (which rule connects to which entity), counterparty risk networks, M&A target relationship mapping, compliance obligation graphs across jurisdictions.</p>
              </div>

              {/* Multimodal RAG / ColPali */}
              <div className="mb-8 rounded-2xl border border-green-200 bg-white p-6 shadow-sm dark:border-green-700/40 dark:bg-gray-800">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">2024 Breakthrough</span>
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400">ColPali — Multimodal RAG on Visual Documents</h3>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Traditional RAG on PDFs: convert to text (OCR), chunk the text, embed the text. <strong>ColPali</strong> embeds the visual page directly as an image — no OCR, no text extraction. Complex tables, charts, and layouts are preserved perfectly.</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { label: "Traditional pipeline", steps: "PDF → OCR → text chunks → text embeddings → search" },
                    { label: "ColPali pipeline", steps: "PDF → page images → vision-language embeddings → search" },
                    { label: "Finance advantage", steps: "Earnings slides, regulatory tables, fund factsheets — no data lost in OCR errors" },
                  ].map((c) => (
                    <div key={c.label} className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
                      <div className="font-bold text-emerald-700 dark:text-emerald-400 text-xs mb-1">{c.label}</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{c.steps}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agentic RAG + Long Context */}
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm dark:border-green-700/40 dark:bg-gray-800">
                  <h3 className="mb-3 text-lg font-bold text-green-700 dark:text-green-400">Agentic RAG</h3>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">Instead of one fixed retrieval step, an agent decides the retrieval strategy dynamically — and can retrieve multiple times.</p>
                  <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                    <div className="rounded-lg bg-green-50 p-2 dark:bg-green-900/20"><strong>Query rewriting:</strong> agent improves the search query before retrieving</div>
                    <div className="rounded-lg bg-green-50 p-2 dark:bg-green-900/20"><strong>Iterative retrieval:</strong> retrieve → read → "I need more on X" → retrieve again</div>
                    <div className="rounded-lg bg-green-50 p-2 dark:bg-green-900/20"><strong>Multi-source:</strong> search vector DB + web + structured DB in one task</div>
                    <div className="rounded-lg bg-green-50 p-2 dark:bg-green-900/20"><strong>Self-verification:</strong> agent checks its own answer against the sources</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm dark:border-green-700/40 dark:bg-gray-800">
                  <h3 className="mb-3 text-lg font-bold text-green-700 dark:text-green-400">Long Context vs RAG</h3>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">With 1M token windows, sometimes you don't need RAG. When to use which:</p>
                  <div className="space-y-2 text-xs">
                    <div className="rounded-lg bg-blue-50 p-2 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300"><strong>Use Long Context:</strong> single large document, no access control needed, small number of requests, accuracy is paramount</div>
                    <div className="rounded-lg bg-green-50 p-2 dark:bg-green-900/20 text-gray-700 dark:text-gray-300"><strong>Use RAG:</strong> large corpus (1000s of docs), cost at scale, freshness/updates needed, permission-based filtering required</div>
                  </div>
                </div>
              </div>

              {/* Reranking + Hybrid */}
              <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm dark:border-green-700/40 dark:bg-gray-800">
                <h3 className="mb-3 text-lg font-bold text-green-700 dark:text-green-400">Hybrid Search + Reranking — Now Standard</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Hybrid Search</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Sparse (BM25/keyword) + Dense (vector) retrieval always outperforms either alone. Most vector databases now support this natively — Pinecone, Weaviate, Azure AI Search, pgvector all have hybrid search APIs. Use Reciprocal Rank Fusion (RRF) to merge results.</p>
                    <div className="rounded-lg bg-green-50 p-2 dark:bg-green-900/20 text-xs text-green-800 dark:text-green-300">Finance: hybrid search handles both exact ticker/ISIN lookups (keyword) and semantic queries ("companies with ESG risk") simultaneously.</div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Reranking as Standard</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Retrieve 20 candidates, rerank to top 5 with a cross-encoder (Cohere Rerank 3, BGE Reranker). Dramatically improves precision with minimal latency overhead (~100ms). Cohere Rerank 3 supports 100+ languages.</p>
                    <div className="rounded-lg bg-emerald-50 p-2 dark:bg-emerald-900/20 text-xs text-emerald-800 dark:text-emerald-300">Finance: critical for regulatory Q&A where retrieving the wrong clause is worse than retrieving nothing.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Footer */}
          <div className="mt-16 flex items-center justify-between rounded-3xl border border-gray-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/60">
            <a
              href="/module2"
              className="flex items-center font-semibold text-gray-600 transition-colors hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
            >
              ← Previous: Prompt Engineering
            </a>
            <a
              href="/module4"
              className="flex items-center font-semibold text-gray-600 transition-colors hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
            >
              Next: AI Agents →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
