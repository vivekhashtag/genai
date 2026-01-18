export default function Module5() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-violet-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-block text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 mb-4"
          >
            ← Back to Course Home
          </a>
          <div className="mb-6">
            <span className="inline-block rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Module 05
            </span>
          </div>
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            Governance, Ethics & Regulation
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Building Responsible, Compliant, and Trustworthy AI Systems for
            Finance
          </p>
        </div>

        {/* Module Overview */}
        <div className="mb-12 rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Module Overview
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            As AI systems become more powerful and pervasive in financial
            services, governance, ethics, and regulatory compliance are no
            longer optional—they're essential. This module covers how to build
            AI systems that are not only effective but also{" "}
            <strong>responsible, transparent, fair, and compliant</strong> with
            evolving regulations.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
              <h3 className="mb-3 text-xl font-bold text-indigo-900 dark:text-indigo-300">
                Why This Matters for Finance
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400">
                    •
                  </span>
                  <span>
                    <strong>High Stakes:</strong> Financial AI decisions impact
                    people's livelihoods, access to credit, and financial
                    well-being
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400">
                    •
                  </span>
                  <span>
                    <strong>Heavy Regulation:</strong> Finance is one of the
                    most regulated industries (Fed, SEC, FINRA, CFPB, OCC)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400">
                    •
                  </span>
                  <span>
                    <strong>Systemic Risk:</strong> AI failures can cascade
                    across markets and institutions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400">
                    •
                  </span>
                  <span>
                    <strong>Trust is Critical:</strong> Consumer trust is the
                    foundation of financial services
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
              <h3 className="mb-3 text-xl font-bold text-violet-900 dark:text-violet-300">
                What You'll Learn
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">
                    ✓
                  </span>
                  <span>Model risk management frameworks (SR 11-7)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">
                    ✓
                  </span>
                  <span>AI transparency and explainability techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">
                    ✓
                  </span>
                  <span>Bias detection, fairness metrics, and mitigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">
                    ✓
                  </span>
                  <span>Data privacy regulations (GDPR, CCPA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">
                    ✓
                  </span>
                  <span>AI audit and compliance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">
                    ✓
                  </span>
                  <span>Emerging AI regulations (EU AI Act, SEC guidance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">
                    ✓
                  </span>
                  <span>Building a responsible AI governance program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 1: Introduction - Why AI Governance Matters in Finance */}
        <div className="mb-12 rounded-3xl bg-white p-10 shadow-xl dark:bg-gray-800">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Section 1
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Why AI Governance Matters in Finance
          </h2>

          <div className="space-y-8">
            {/* The Stakes */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                The High Stakes of Financial AI
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Unlike AI in consumer applications (where a bad movie
                recommendation is an inconvenience), AI in finance has
                <strong> life-altering consequences:</strong>
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
                  <h4 className="mb-3 text-lg font-bold text-red-900 dark:text-red-300">
                    🚨 Credit Decisions
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    An AI model denies someone a mortgage or business loan,
                    affecting their ability to buy a home or start a business.
                    If the model is biased, it perpetuates systemic inequality.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950">
                  <h4 className="mb-3 text-lg font-bold text-orange-900 dark:text-orange-300">
                    🚨 Fraud Detection
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    False positives freeze innocent customers' accounts during
                    emergencies. False negatives allow fraudulent transactions,
                    causing financial loss and regulatory fines.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-900 dark:bg-yellow-950">
                  <h4 className="mb-3 text-lg font-bold text-yellow-900 dark:text-yellow-300">
                    🚨 Trading Algorithms
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    AI trading systems can cause flash crashes, manipulate
                    markets, or create systemic risk if not properly governed
                    and monitored.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950">
                  <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                    🚨 Risk Modeling
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Underestimating risk can lead to catastrophic losses (2008
                    financial crisis). Overestimating risk restricts legitimate
                    economic activity.
                  </p>
                </div>
              </div>
            </div>

            {/* The Cost of Getting It Wrong */}
            <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                💸 The Cost of Getting It Wrong: Real Cases
              </h3>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    Case 1: Apple Card Gender Bias (2019)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What Happened:</strong> Apple Card's credit
                    algorithm allegedly offered women lower credit limits than
                    men with identical financial profiles, including cases where
                    husbands received 10-20x higher limits than their wives.
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Impact:</strong> Public outcry, regulatory
                    investigation by NY Department of Financial Services,
                    reputational damage to Apple and Goldman Sachs.
                  </p>
                  <p className="text-indigo-700 dark:text-indigo-400">
                    <strong>Lesson:</strong> Even if gender isn't an input
                    feature, proxies (e.g., spending patterns) can encode bias.
                    Explainability and bias testing are critical.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    Case 2: Knight Capital Trading Loss (2012)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What Happened:</strong> A software glitch in Knight
                    Capital's automated trading system executed millions of
                    erroneous trades in 45 minutes, resulting in a{" "}
                    <strong>$440 million loss</strong>—nearly bankrupting the
                    firm.
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Impact:</strong> Knight Capital was acquired at a
                    fire-sale price. The incident highlighted the systemic risk
                    of algorithmic trading.
                  </p>
                  <p className="text-indigo-700 dark:text-indigo-400">
                    <strong>Lesson:</strong> Rigorous testing, kill switches,
                    and human oversight are essential for automated trading
                    systems.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    Case 3: COMPAS Recidivism Algorithm Bias (2016)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What Happened:</strong> ProPublica investigation
                    revealed that COMPAS, a risk assessment tool used in
                    sentencing and bail decisions, was{" "}
                    <strong>biased against Black defendants</strong>, falsely
                    flagging them as high-risk at twice the rate of white
                    defendants.
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Impact:</strong> Wrongful incarcerations, lawsuits,
                    and a national debate on algorithmic fairness in criminal
                    justice (parallels to credit scoring).
                  </p>
                  <p className="text-indigo-700 dark:text-indigo-400">
                    <strong>Lesson:</strong> Historical data reflects historical
                    bias. Fairness must be explicitly engineered, not assumed.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-orange-900 dark:text-orange-300">
                    🇮🇳 Case 4: India Stack Aadhaar Authentication Failures
                    (2018-2019)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What Happened:</strong> India's biometric
                    authentication system (Aadhaar) experienced widespread
                    authentication failures for manual laborers, elderly
                    citizens, and people with worn fingerprints, denying them
                    access to government benefits, banking services, and
                    subsidies.
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Impact:</strong> Millions excluded from welfare
                    schemes due to technical failures. Reports of{" "}
                    <strong>starvation deaths</strong> when ration distribution
                    failed due to authentication errors. Highlighted risks of
                    over-reliance on biometric AI.
                  </p>
                  <p className="text-orange-700 dark:text-orange-400">
                    <strong>Lesson:</strong> AI systems must have{" "}
                    <strong>fallback mechanisms</strong> for vulnerable
                    populations. Financial inclusion can't depend solely on
                    technology that systematically excludes certain groups.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust as a Foundation */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                🤝 Trust is the Foundation of Financial Services
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Banking and finance are built on <strong>trust</strong>.
                Customers trust banks with their money, their data, and their
                financial futures. When AI systems are opaque, biased, or
                unaccountable, that trust erodes.
              </p>

              <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                  Why Customers Demand Responsible AI
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400">
                      1.
                    </span>
                    <span>
                      <strong>Explainability:</strong> "Why was I denied a
                      loan?" Customers have a legal and ethical right to
                      understand AI decisions that affect them.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400">
                      2.
                    </span>
                    <span>
                      <strong>Fairness:</strong> AI should not discriminate
                      based on race, gender, age, or other protected
                      characteristics.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400">
                      3.
                    </span>
                    <span>
                      <strong>Privacy:</strong> Financial data is highly
                      sensitive. AI training and inference must respect privacy
                      laws.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400">
                      4.
                    </span>
                    <span>
                      <strong>Accountability:</strong> When AI makes a mistake,
                      who's responsible? Customers need recourse.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Regulatory Landscape */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                📋 The Regulatory Landscape
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Financial services are regulated by multiple agencies, each with
                overlapping and evolving AI guidance:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl bg-white shadow-md dark:bg-gray-900">
                  <thead>
                    <tr className="bg-indigo-100 dark:bg-indigo-900">
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Country
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Regulator
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Focus Area
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Key AI Concerns
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇺🇸 US
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          Federal Reserve
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Systemic risk, model risk management
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        SR 11-7 guidance on model validation, stress testing
                      </td>
                    </tr>
                    <tr className="bg-indigo-50 dark:bg-indigo-950">
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇺🇸 US
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          SEC / FINRA
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Investor protection, market integrity
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        AI in investment advice, algo trading, fraud detection
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇺🇸 US
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          CFPB / OCC
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Consumer protection, fair lending
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Explainability (FCRA), bias in credit decisions (ECOA)
                      </td>
                    </tr>
                    <tr className="bg-orange-50 dark:bg-orange-950">
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇮🇳 India
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-orange-700 dark:text-orange-400">
                          RBI (Reserve Bank)
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Banking regulation, monetary policy
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        2022 AI/ML Guidelines: Board oversight, data quality,
                        explainability, model validation
                      </td>
                    </tr>
                    <tr className="bg-orange-100 dark:bg-orange-900">
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇮🇳 India
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-orange-700 dark:text-orange-400">
                          SEBI
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Securities markets, investor protection
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Algo trading regulations (2012), cybersecurity
                        framework, robo-advisory guidelines
                      </td>
                    </tr>
                    <tr className="bg-orange-50 dark:bg-orange-950">
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇮🇳 India
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-orange-700 dark:text-orange-400">
                          IRDAI
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Insurance regulation
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        AI in underwriting, claims processing, fraud detection
                      </td>
                    </tr>
                    <tr className="bg-orange-100 dark:bg-orange-900">
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇮🇳 India
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-orange-700 dark:text-orange-400">
                          MeitY / CERT-In
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Digital data protection, cybersecurity
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Digital Personal Data Protection Act 2023, IT Act 2000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl border-2 border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-900 dark:bg-yellow-950">
                <p className="mb-3 text-lg font-semibold text-yellow-900 dark:text-yellow-300">
                  ⚠️ <strong>Key Insight - US:</strong> There is{" "}
                  <strong>no single AI regulation</strong> in the US. Instead,
                  existing financial regulations (FCRA, ECOA, SR 11-7, etc.) are
                  being applied to AI systems. Firms must navigate a complex
                  patchwork of requirements.
                </p>
                <p className="text-lg font-semibold text-yellow-900 dark:text-yellow-300">
                  🇮🇳 <strong>India Context:</strong> Similarly, India doesn't
                  have AI-specific financial regulations yet. RBI has issued{" "}
                  <strong>guidelines on AI/ML in banking</strong> (2022), and
                  the <strong>Digital Personal Data Protection Act 2023</strong>{" "}
                  governs data usage in AI systems.
                </p>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="rounded-3xl border-4 border-violet-200 bg-linear-to-br from-violet-50 to-purple-50 p-8 dark:border-violet-800 dark:from-violet-950 dark:to-purple-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🏛️ Three Pillars of AI Governance
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Effective AI governance rests on three foundational pillars:
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    1. Risk Management
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Identify, measure, and mitigate risks from AI systems:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Model risk (errors, drift)</li>
                    <li>• Operational risk (outages, bugs)</li>
                    <li>• Compliance risk (regulatory violations)</li>
                    <li>• Reputational risk (bias scandals)</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-violet-700 dark:text-violet-400">
                    2. Transparency
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Make AI systems understandable and accountable:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Explainability (how decisions are made)</li>
                    <li>• Documentation (model cards, lineage)</li>
                    <li>• Audit trails (decision logs)</li>
                    <li>• Customer disclosures</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-purple-700 dark:text-purple-400">
                    3. Fairness
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Ensure AI systems treat all groups equitably:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Bias detection and testing</li>
                    <li>• Fairness metrics and thresholds</li>
                    <li>• Disparate impact analysis</li>
                    <li>• Mitigation and remediation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Model Risk Management for AI Systems (SR 11-7) */}
        <div className="mb-12 rounded-3xl bg-white p-10 shadow-xl dark:bg-gray-800">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Section 2
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Model Risk Management for AI Systems
          </h2>

          <div className="space-y-8">
            {/* What is SR 11-7 */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                📜 Model Risk Management Frameworks
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>🇺🇸 SR 11-7</strong> ("Supervisory Guidance on Model Risk
                Management") is a 2011 Federal Reserve regulation that
                establishes expectations for{" "}
                <strong>model risk management</strong> at banks. While
                originally written for traditional statistical models (e.g.,
                credit risk models), it now applies to{" "}
                <strong>AI/ML models</strong> as well.
              </p>

              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>🇮🇳 RBI AI/ML Guidelines (2022):</strong> India's Reserve
                Bank issued comprehensive guidelines on the use of AI and ML in
                financial services, covering board oversight, data governance,
                explainability, model validation, and ethical use. These mirror
                SR 11-7 but with India-specific emphasis on{" "}
                <strong>financial inclusion</strong> and{" "}
                <strong>regional language support</strong>.
              </p>

              <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                  🔑 Core Principle
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  <em>
                    "All models are wrong, but some are useful. Banks must
                    identify, measure, and control model risk to ensure models
                    are used appropriately and do not create undue risk to the
                    institution."
                  </em>
                </p>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
                  <h4 className="mb-3 text-lg font-bold text-violet-900 dark:text-violet-300">
                    What Counts as a "Model"?
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    According to SR 11-7, a model is:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        1.
                      </span>
                      <span>
                        A <strong>quantitative method</strong> or system that
                        applies statistical, economic, financial, or
                        mathematical theories
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        2.
                      </span>
                      <span>
                        Processes <strong>inputs into outputs</strong>{" "}
                        (predictions, decisions, recommendations)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        3.
                      </span>
                      <span>
                        Used to <strong>inform business decisions</strong>{" "}
                        (e.g., credit approval, pricing, risk assessment)
                      </span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm font-semibold text-violet-700 dark:text-violet-400">
                    ✅ AI/ML models (LLMs, neural nets, decision trees)
                    absolutely qualify as "models" under SR 11-7.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                  <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                    Two Sources of Model Risk
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 font-semibold text-purple-900 dark:text-purple-300">
                        <span className="text-purple-600 dark:text-purple-400">
                          1.
                        </span>{" "}
                        The model is fundamentally flawed
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Incorrect assumptions, wrong methodology, biased
                        training data, or poor feature selection. The model
                        produces systematically wrong outputs.
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-purple-900 dark:text-purple-300">
                        <span className="text-purple-600 dark:text-purple-400">
                          2.
                        </span>{" "}
                        The model is misused or misunderstood
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Applied outside its intended scope, users don't
                        understand limitations, or outputs are misinterpreted.
                        Even a good model can cause harm if used incorrectly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SR 11-7 Framework */}
            <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🏗️ SR 11-7 Framework: Three Lines of Defense
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                SR 11-7 requires a <strong>three-line defense model</strong> for
                model risk management:
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    First Line: Model Development & Use
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Who:</strong> Data scientists, ML engineers,
                    business users
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Responsibilities:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        •
                      </span>
                      <span>
                        Design and develop models following best practices
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        •
                      </span>
                      <span>
                        Document model methodology, assumptions, and limitations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        •
                      </span>
                      <span>
                        Conduct initial testing (accuracy, bias, robustness)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        •
                      </span>
                      <span>Monitor model performance in production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        •
                      </span>
                      <span>Use models appropriately (within scope)</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-violet-700 dark:text-violet-400">
                    Second Line: Independent Model Validation
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Who:</strong> Model Risk Management team
                    (independent from developers)
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Responsibilities:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        •
                      </span>
                      <span>
                        <strong>Validate models before deployment</strong>{" "}
                        (challenge assumptions, test performance)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        •
                      </span>
                      <span>Review model documentation for completeness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        •
                      </span>
                      <span>
                        Conduct <strong>ongoing validation</strong> (annual
                        reviews, trigger-based revalidation)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        •
                      </span>
                      <span>
                        Develop and test <strong>challenger models</strong>{" "}
                        (alternative approaches to benchmark against)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        •
                      </span>
                      <span>
                        Report validation findings to senior management
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 rounded-lg border-2 border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950">
                    <p className="text-sm font-semibold text-violet-900 dark:text-violet-300">
                      🔑 <strong>Critical Requirement:</strong> Validation must
                      be performed by individuals who are{" "}
                      <strong>independent</strong> of the model development
                      team. This prevents conflicts of interest.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-purple-700 dark:text-purple-400">
                    Third Line: Internal Audit
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Who:</strong> Internal Audit department
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>Responsibilities:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        •
                      </span>
                      <span>
                        Audit the{" "}
                        <strong>model risk management framework</strong> itself
                        (are processes being followed?)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        •
                      </span>
                      <span>
                        Verify that validation activities are adequate
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        •
                      </span>
                      <span>
                        Review governance, documentation, and controls
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        •
                      </span>
                      <span>
                        Report findings to the Board of Directors and senior
                        management
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Model Inventory */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                📚 Model Inventory & Classification
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                SR 11-7 requires maintaining a <strong>model inventory</strong>
                —a comprehensive list of all models in use across the
                organization. Each model should be classified by risk tier to
                prioritize validation efforts.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl bg-white shadow-md dark:bg-gray-900">
                  <thead>
                    <tr className="bg-indigo-100 dark:bg-indigo-900">
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Risk Tier
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Criteria
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Examples
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Validation Frequency
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-red-700 dark:text-red-400">
                          Tier 1: High Risk
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Material financial impact, regulatory scrutiny, high
                        complexity
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Credit underwriting, capital stress testing, fraud
                        detection, LLM-based advisory
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Annual (at minimum)
                      </td>
                    </tr>
                    <tr className="bg-indigo-50 dark:bg-indigo-950">
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-yellow-700 dark:text-yellow-400">
                          Tier 2: Medium Risk
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Moderate impact, some regulatory relevance
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Marketing propensity models, churn prediction, product
                        recommendations
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Every 2-3 years
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-green-700 dark:text-green-400">
                          Tier 3: Low Risk
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Limited impact, no regulatory implications
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Internal process automation, reporting dashboards
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        As needed (periodic review)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                  What Should Be in the Model Inventory?
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Model name and unique ID</li>
                    <li>• Business owner and developer</li>
                    <li>• Model purpose and use case</li>
                    <li>• Risk tier classification</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Development and deployment dates</li>
                    <li>• Last validation date</li>
                    <li>• Known limitations and assumptions</li>
                    <li>• Links to documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Model Documentation */}
            <div className="rounded-3xl border-4 border-violet-200 bg-linear-to-br from-violet-50 to-purple-50 p-8 dark:border-violet-800 dark:from-violet-950 dark:to-purple-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                📄 Model Documentation Requirements
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Comprehensive documentation is <strong>mandatory</strong> under
                SR 11-7. For AI/ML models, this includes:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    1. Model Design Document
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Business problem and model objective</li>
                    <li>
                      • Model type and architecture (e.g., Random Forest, GPT-4,
                      neural network)
                    </li>
                    <li>• Input features and data sources</li>
                    <li>• Training methodology and hyperparameters</li>
                    <li>• Output interpretation and decision thresholds</li>
                    <li>• Key assumptions and limitations</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    2. Data Documentation
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • Training data: sources, timeframe, volume, quality
                    </li>
                    <li>
                      • Data preprocessing steps (cleaning, normalization,
                      feature engineering)
                    </li>
                    <li>
                      • Handling of missing data, outliers, imbalanced classes
                    </li>
                    <li>• Test/validation data split methodology</li>
                    <li>• Data lineage and versioning</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    3. Performance Metrics
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • Accuracy, precision, recall, F1, AUC-ROC (as applicable)
                    </li>
                    <li>• Performance on test data and validation sets</li>
                    <li>
                      • Performance across demographic groups (fairness metrics)
                    </li>
                    <li>• Comparison to baseline or challenger models</li>
                    <li>• Benchmarking against industry standards</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    4. Validation Report
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • Independent validation findings (strengths, weaknesses)
                    </li>
                    <li>• Sensitivity analysis and stress testing results</li>
                    <li>• Identified limitations and risks</li>
                    <li>• Recommendations and remediation actions (if any)</li>
                    <li>• Approval status and sign-off</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    5. Ongoing Monitoring Plan
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Key performance indicators (KPIs) to track</li>
                    <li>• Monitoring frequency (daily, weekly, monthly)</li>
                    <li>
                      • Alert thresholds for model drift, degradation, or bias
                    </li>
                    <li>• Escalation procedures for issues</li>
                    <li>• Retraining and revalidation triggers</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    6. Change Log
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• All model changes with dates and reasons</li>
                    <li>• Version history (model code, data, config)</li>
                    <li>• Retraining events and their triggers</li>
                    <li>• Impact assessment of changes</li>
                    <li>• Approvals for material changes</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                  💡 Pro Tip: Use Model Cards
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Model Cards</strong> (introduced by Google) are
                  standardized documents that summarize a model's intended use,
                  performance, limitations, and fairness characteristics. They
                  are an excellent tool for meeting SR 11-7 documentation
                  requirements in a concise, transparent format.
                </p>
              </div>
            </div>

            {/* Ongoing Monitoring */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                📊 Ongoing Monitoring & Model Drift
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Models degrade over time due to <strong>concept drift</strong>{" "}
                (relationships in the data change) and{" "}
                <strong>data drift</strong> (input distributions shift). SR 11-7
                requires continuous monitoring to detect and address drift.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                  <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    What to Monitor
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        1.
                      </span>
                      <span>
                        <strong>Prediction Accuracy:</strong> Are predictions
                        still correct? Track error rates over time.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        2.
                      </span>
                      <span>
                        <strong>Input Distribution:</strong> Has the data
                        changed? Monitor feature statistics (mean, variance,
                        outliers).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        3.
                      </span>
                      <span>
                        <strong>Output Distribution:</strong> Are predictions
                        behaving differently? (e.g., sudden spike in loan
                        approvals)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        4.
                      </span>
                      <span>
                        <strong>Bias Metrics:</strong> Track fairness metrics
                        across demographic groups to detect emerging bias.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        5.
                      </span>
                      <span>
                        <strong>Exceptions & Overrides:</strong> How often are
                        humans overriding the model? High override rates signal
                        model issues.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
                  <h4 className="mb-3 text-lg font-bold text-violet-900 dark:text-violet-300">
                    When to Retrain or Retire a Model
                  </h4>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <div>
                      <p className="mb-1 font-semibold text-violet-900 dark:text-violet-300">
                        🔄 Retrain if:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Performance drops below acceptable threshold (e.g.,
                          AUC {"<"} 0.70)
                        </li>
                        <li>
                          • Significant data drift detected (KS test p {"<"}{" "}
                          0.05)
                        </li>
                        <li>• New data or features become available</li>
                        <li>• Regulatory or business requirements change</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold text-violet-900 dark:text-violet-300">
                        🗑️ Retire if:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Model is fundamentally flawed or no longer fit for
                          purpose
                        </li>
                        <li>• Retraining doesn't improve performance</li>
                        <li>
                          • Business context has changed (model no longer
                          relevant)
                        </li>
                        <li>• Superior alternative model is available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenger Models */}
            <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🥊 Challenger Models
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                SR 11-7 encourages developing <strong>challenger models</strong>
                —alternative models that use different methodologies to solve
                the same problem. This provides a benchmark to validate that the
                production model is truly the best approach.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-indigo-700 dark:text-indigo-400">
                    Why Challenger Models?
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        •
                      </span>
                      <span>
                        <strong>Validate Performance:</strong> Ensure the
                        production model isn't overfitting or underperforming
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        •
                      </span>
                      <span>
                        <strong>Test Assumptions:</strong> Different models have
                        different assumptions. Comparing them reveals blind
                        spots.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        •
                      </span>
                      <span>
                        <strong>Explore Alternatives:</strong> New techniques
                        (e.g., LLMs) may outperform legacy models.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        •
                      </span>
                      <span>
                        <strong>Regulatory Comfort:</strong> Demonstrates due
                        diligence in model selection.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-indigo-700 dark:text-indigo-400">
                    Example: Credit Scoring
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <p className="mb-1 font-semibold">
                        <span className="text-indigo-600 dark:text-indigo-400">
                          Production Model:
                        </span>{" "}
                        Gradient Boosted Trees (XGBoost)
                      </p>
                      <p>AUC: 0.78, Complexity: High, Explainability: Medium</p>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold">
                        <span className="text-violet-600 dark:text-violet-400">
                          Challenger 1:
                        </span>{" "}
                        Logistic Regression
                      </p>
                      <p>AUC: 0.72, Complexity: Low, Explainability: High</p>
                      <p className="text-xs italic">
                        (Simpler, more interpretable, but slightly less
                        accurate)
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold">
                        <span className="text-purple-600 dark:text-purple-400">
                          Challenger 2:
                        </span>{" "}
                        Neural Network
                      </p>
                      <p>
                        AUC: 0.80, Complexity: Very High, Explainability: Low
                      </p>
                      <p className="text-xs italic">
                        (Slightly better accuracy, but black box)
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                    → Decision: Stick with XGBoost (best balance of performance,
                    explainability, and complexity)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: AI Transparency & Explainability */}
        <div className="mb-12 rounded-3xl bg-white p-10 shadow-xl dark:bg-gray-800">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Section 3
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            AI Transparency & Explainability
          </h2>

          <div className="space-y-8">
            {/* The Black Box Problem */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                🔲 The "Black Box" Problem
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Modern AI models—especially deep learning and large language
                models—are often <strong>"black boxes."</strong> They make
                accurate predictions, but the internal decision-making process
                is opaque, even to their creators.
              </p>

              <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-900 dark:bg-yellow-950">
                <h4 className="mb-3 text-lg font-bold text-yellow-900 dark:text-yellow-300">
                  ⚠️ Why This is a Problem in Finance
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      •
                    </span>
                    <span>
                      <strong>Regulatory Compliance:</strong> FCRA requires
                      adverse action notices explaining why credit was denied.
                      "The AI said so" is not acceptable.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      •
                    </span>
                    <span>
                      <strong>Customer Trust:</strong> People distrust decisions
                      they can't understand. Opacity erodes confidence.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      •
                    </span>
                    <span>
                      <strong>Debugging & Improvement:</strong> If you don't
                      know why a model made a decision, you can't fix errors or
                      improve it.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      •
                    </span>
                    <span>
                      <strong>Bias Detection:</strong> Hidden bias in black box
                      models is harder to identify and correct.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Explainability Techniques */}
            <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🔍 Explainability Techniques for AI Models
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Several techniques have been developed to "explain" black box
                models by revealing which features influenced a prediction:
              </p>

              <div className="space-y-6">
                {/* SHAP */}
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    1. SHAP (SHapley Additive exPlanations)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> SHAP assigns each feature a
                    "Shapley value"—a measure of its contribution to the
                    prediction. Based on game theory, it fairly distributes
                    credit among features.
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>How it works:</strong> SHAP computes the marginal
                    contribution of each feature by comparing predictions with
                    and without that feature, averaged across all possible
                    feature combinations.
                  </p>
                  <div className="rounded-lg border-2 border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950">
                    <p className="mb-2 font-semibold text-indigo-900 dark:text-indigo-300">
                      Example: Loan Approval Model
                    </p>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <p className="mb-2">
                        <strong>Prediction:</strong> Loan Denied (Risk Score:
                        0.78)
                      </p>
                      <p className="mb-2">
                        <strong>SHAP Feature Contributions:</strong>
                      </p>
                      <ul className="space-y-1 pl-4">
                        <li>
                          • Credit Score (650):{" "}
                          <span className="text-red-600">+0.25</span> (high
                          impact, negative)
                        </li>
                        <li>
                          • Debt-to-Income Ratio (45%):{" "}
                          <span className="text-red-600">+0.18</span>
                        </li>
                        <li>
                          • Employment Length (2 years):{" "}
                          <span className="text-red-600">+0.12</span>
                        </li>
                        <li>
                          • Loan Amount ($50K):{" "}
                          <span className="text-orange-600">+0.08</span>
                        </li>
                        <li>
                          • Age (32):{" "}
                          <span className="text-green-600">-0.05</span>{" "}
                          (positive factor)
                        </li>
                      </ul>
                      <p className="mt-2 text-xs italic">
                        → The model denied the loan primarily due to low credit
                        score and high debt-to-income ratio.
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                    ✅ <strong>Best for:</strong> Model-agnostic explanations,
                    works with any model type (trees, neural nets, LLMs)
                  </p>
                </div>

                {/* LIME */}
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-violet-700 dark:text-violet-400">
                    2. LIME (Local Interpretable Model-agnostic Explanations)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> LIME explains individual
                    predictions by approximating the complex model with a
                    simple, interpretable model (like linear regression) in the
                    local region around that prediction.
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>How it works:</strong> LIME creates synthetic data
                    points near the instance being explained, gets predictions
                    from the black box model, then fits a simple linear model to
                    those predictions.
                  </p>
                  <div className="rounded-lg border-2 border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950">
                    <p className="mb-2 font-semibold text-violet-900 dark:text-violet-300">
                      Example: Fraud Detection
                    </p>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <p className="mb-2">
                        <strong>Prediction:</strong> Transaction Flagged as
                        Fraud (98% confidence)
                      </p>
                      <p className="mb-2">
                        <strong>LIME Local Explanation:</strong>
                      </p>
                      <ul className="space-y-1 pl-4">
                        <li>
                          • Transaction amount ($9,999):{" "}
                          <span className="text-red-600">Strong positive</span>{" "}
                          (just under reporting threshold)
                        </li>
                        <li>
                          • Location (foreign country):{" "}
                          <span className="text-red-600">Strong positive</span>
                        </li>
                        <li>
                          • Time of day (3 AM):{" "}
                          <span className="text-orange-600">
                            Moderate positive
                          </span>
                        </li>
                        <li>
                          • Card present:{" "}
                          <span className="text-green-600">Negative</span>{" "}
                          (would reduce fraud score if true)
                        </li>
                      </ul>
                      <p className="mt-2 text-xs italic">
                        → The model flagged this transaction primarily due to
                        the suspicious amount and foreign location.
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-violet-700 dark:text-violet-400">
                    ✅ <strong>Best for:</strong> Quick, instance-level
                    explanations; works with images, text, and tabular data
                  </p>
                </div>

                {/* Attention Visualization */}
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-purple-700 dark:text-purple-400">
                    3. Attention Visualization (for LLMs & Transformers)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> In transformer models (GPT,
                    BERT), the <strong>attention mechanism</strong> reveals
                    which parts of the input the model "focused on" when making
                    a prediction.
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>How it works:</strong> Attention weights show how
                    much each token (word or phrase) influenced the model's
                    understanding. Visualizing these weights highlights key
                    inputs.
                  </p>
                  <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
                    <p className="mb-2 font-semibold text-purple-900 dark:text-purple-300">
                      Example: Financial Document Analysis
                    </p>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <p className="mb-2">
                        <strong>Query:</strong> "What is the company's
                        debt-to-equity ratio?"
                      </p>
                      <p className="mb-2">
                        <strong>LLM Response:</strong> "The debt-to-equity ratio
                        is 1.5."
                      </p>
                      <p className="mb-2">
                        <strong>Attention Heatmap:</strong>
                      </p>
                      <p className="rounded bg-white p-2 font-mono text-xs dark:bg-gray-900">
                        "The company reported{" "}
                        <span className="bg-yellow-200 dark:bg-yellow-800">
                          total debt of $150M
                        </span>{" "}
                        and{" "}
                        <span className="bg-yellow-200 dark:bg-yellow-800">
                          shareholder equity of $100M
                        </span>
                        , resulting in a{" "}
                        <span className="bg-yellow-300 font-bold dark:bg-yellow-700">
                          debt-to-equity ratio of 1.5
                        </span>
                        ."
                      </p>
                      <p className="mt-2 text-xs italic">
                        → The model paid attention to the relevant financial
                        figures to answer the question.
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-purple-700 dark:text-purple-400">
                    ✅ <strong>Best for:</strong> Understanding LLM reasoning,
                    especially in document Q&A and summarization
                  </p>
                </div>

                {/* Feature Importance */}
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    4. Feature Importance (Tree-based Models)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> For tree-based models (Random
                    Forest, XGBoost), feature importance measures how much each
                    feature contributes to reducing prediction error across all
                    trees.
                  </p>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>How it works:</strong> Importance is calculated by
                    summing the reduction in impurity (e.g., Gini, entropy)
                    achieved by each feature across all decision nodes.
                  </p>
                  <div className="rounded-lg border-2 border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950">
                    <p className="mb-2 font-semibold text-indigo-900 dark:text-indigo-300">
                      Example: Credit Scoring Model
                    </p>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <p className="mb-2">
                        <strong>Feature Importance Ranking:</strong>
                      </p>
                      <ul className="space-y-1 pl-4">
                        <li>1. Credit Score (35% importance)</li>
                        <li>2. Debt-to-Income Ratio (22%)</li>
                        <li>3. Employment Length (15%)</li>
                        <li>4. Loan Amount (12%)</li>
                        <li>5. Payment History (10%)</li>
                        <li>6. Age (6%)</li>
                      </ul>
                      <p className="mt-2 text-xs italic">
                        → Credit score is by far the most influential feature in
                        the model's decisions.
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                    ✅ <strong>Best for:</strong> Global explanations (overall
                    model behavior), simple to compute and interpret
                  </p>
                </div>
              </div>
            </div>

            {/* Documentation Requirements */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                📋 Documentation & Disclosure Requirements
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Financial regulators increasingly require{" "}
                <strong>
                  transparency through documentation and disclosure
                </strong>
                :
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
                  <h4 className="mb-3 text-lg font-bold text-violet-900 dark:text-violet-300">
                    FCRA Adverse Action Notices
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Under the <strong>Fair Credit Reporting Act</strong>, if a
                    consumer is denied credit, they must receive an adverse
                    action notice explaining the reasons.
                  </p>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                    <p className="mb-2 text-sm font-semibold text-violet-900 dark:text-violet-300">
                      ✅ Compliant Notice:
                    </p>
                    <div className="text-xs text-gray-700 dark:text-gray-300">
                      <p className="mb-2">
                        <strong>Primary reasons for denial:</strong>
                      </p>
                      <ul className="space-y-1 pl-4">
                        <li>
                          1. Credit score below minimum requirement (650 {"<"}{" "}
                          700)
                        </li>
                        <li>
                          2. Debt-to-income ratio exceeds policy limits (45%{" "}
                          {">"} 40%)
                        </li>
                        <li>
                          3. Insufficient employment history (2 years {"<"} 3
                          years)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 rounded-lg bg-red-50 p-4 dark:bg-red-950">
                    <p className="mb-2 text-sm font-semibold text-red-900 dark:text-red-300">
                      ❌ Non-Compliant:
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      "Your application was denied based on our AI model's risk
                      assessment."
                    </p>
                    <p className="mt-1 text-xs italic text-red-700 dark:text-red-400">
                      → Too vague, doesn't explain specific reasons
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                  <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                    GDPR Right to Explanation
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Under <strong>GDPR Article 22</strong>, EU citizens have the
                    right to an explanation when solely automated decisions
                    significantly affect them.
                  </p>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                    <p className="mb-2 text-sm font-semibold text-purple-900 dark:text-purple-300">
                      What this means:
                    </p>
                    <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400">
                          •
                        </span>
                        <span>
                          Customers can request an explanation of how the AI
                          decision was made
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400">
                          •
                        </span>
                        <span>
                          Firms must provide "meaningful information about the
                          logic involved"
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400">
                          •
                        </span>
                        <span>
                          Customers have the right to human review and
                          contestation
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-3 text-xs font-semibold text-purple-700 dark:text-purple-400">
                    💡 <strong>Practical Tip:</strong> Build explainability into
                    your AI systems from the start, not as an afterthought.
                  </p>
                </div>
              </div>
            </div>

            {/* Explainability vs Interpretability */}
            <div
              className="rounded-3xl border-4 border-indigo-200 
             from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🔑 Explainability vs. Interpretability
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                These terms are often used interchangeably, but there's a subtle
                difference:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    Interpretability
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    The degree to which a human can{" "}
                    <strong>understand the model itself</strong> without
                    external tools. Intrinsically simple models are
                    interpretable.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>Examples of Interpretable Models:</strong>
                    </p>
                    <ul className="space-y-1 pl-4">
                      <li>
                        • <strong>Linear Regression:</strong> Each coefficient
                        shows the impact of a feature
                      </li>
                      <li>
                        • <strong>Decision Tree:</strong> Follow the branches to
                        see how decisions are made
                      </li>
                      <li>
                        • <strong>Rule-based Systems:</strong> "IF credit score
                        {"<"} 600 THEN deny"
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-violet-700 dark:text-violet-400">
                    Explainability
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    The ability to{" "}
                    <strong>explain individual predictions</strong> after the
                    fact, even for black box models, using external techniques
                    (SHAP, LIME, etc.).
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>Examples:</strong>
                    </p>
                    <ul className="space-y-1 pl-4">
                      <li>
                        • <strong>Deep Neural Network + SHAP:</strong> Black box
                        model, but we can explain specific predictions
                      </li>
                      <li>
                        • <strong>LLM + Attention:</strong> We can see which
                        parts of the input influenced the output
                      </li>
                      <li>
                        • <strong>Random Forest + Feature Importance:</strong>{" "}
                        Understand which features matter most
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                  🎯 The Tradeoff: Accuracy vs. Interpretability
                </h4>
                <p className="mb-3 text-gray-700 dark:text-gray-300">
                  In general, more complex models (neural networks, deep
                  ensembles) are more accurate but less interpretable. Simpler
                  models (linear regression, decision trees) are easier to
                  understand but may sacrifice accuracy.
                </p>
                <p className="font-semibold text-indigo-700 dark:text-indigo-400">
                  💡 <strong>Financial AI Strategy:</strong> Use the simplest
                  model that meets your performance requirements. If you need a
                  complex model, invest in explainability tools (SHAP, LIME) to
                  bridge the gap.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Bias Detection & Fairness */}
        <div className="mb-12 rounded-3xl bg-white p-10 shadow-xl dark:bg-gray-800">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Section 4
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Bias Detection & Fairness
          </h2>

          <div className="space-y-8">
            {/* Understanding Bias */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                ⚖️ What is Algorithmic Bias?
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Algorithmic bias</strong> occurs when an AI system
                produces systematically unfair outcomes for certain groups. In
                finance, this often manifests as discriminatory treatment based
                on race, gender, age, or other protected characteristics.
              </p>

              <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
                <h4 className="mb-3 text-lg font-bold text-red-900 dark:text-red-300">
                  🚨 Why Bias is Illegal and Dangerous
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>
                      <strong>Equal Credit Opportunity Act (ECOA):</strong>{" "}
                      Prohibits credit discrimination based on race, color,
                      religion, national origin, sex, marital status, age, or
                      receipt of public assistance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>
                      <strong>Fair Housing Act (FHA):</strong> Prohibits
                      discrimination in mortgage lending
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>
                      <strong>Regulatory Scrutiny:</strong> CFPB and DOJ
                      actively investigate algorithmic bias. Violations result
                      in fines, consent orders, and reputational damage.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>
                      <strong>Ethical Imperative:</strong> Biased AI perpetuates
                      and amplifies societal inequities.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Types of Bias */}
            <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🔍 Three Types of Bias in AI Systems
              </h3>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    1. Historical Bias (Data Bias)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> The training data reflects
                    historical prejudices and inequalities. The model learns and
                    perpetuates these biases.
                  </p>
                  <div className="rounded-lg border-2 border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950">
                    <p className="mb-2 font-semibold text-indigo-900 dark:text-indigo-300">
                      Example: Credit Scoring
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Historically, women and minorities were denied credit at
                      higher rates due to discrimination. If you train a model
                      on this historical data, it will learn that being a woman
                      or minority is correlated with credit denial—even if you
                      exclude race and gender as features. The model picks up on{" "}
                      <strong>proxy variables</strong> (e.g., zip code, name
                      patterns) that encode the same bias.
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                    🛠️ <strong>Mitigation:</strong> Curate training data to
                    remove historical bias, use bias-aware sampling, audit for
                    proxy variables
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-violet-700 dark:text-violet-400">
                    2. Algorithmic Bias (Model Bias)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> The model's design, objective
                    function, or hyperparameters introduce bias, even with
                    unbiased data.
                  </p>
                  <div className="rounded-lg border-2 border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950">
                    <p className="mb-2 font-semibold text-violet-900 dark:text-violet-300">
                      Example: Imbalanced Optimization
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      A fraud detection model is optimized to maximize overall
                      accuracy. Since fraud is rare (1% of transactions), the
                      model achieves 99% accuracy by simply predicting "not
                      fraud" for everyone—but this means it misses all fraud in
                      certain demographic groups that have different fraud
                      patterns.
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-violet-700 dark:text-violet-400">
                    🛠️ <strong>Mitigation:</strong> Use fairness-aware objective
                    functions, test performance across subgroups, balance
                    metrics beyond overall accuracy
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-purple-700 dark:text-purple-400">
                    3. Feedback Loop Bias (Deployment Bias)
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> The model's predictions
                    influence future data, creating a self-reinforcing cycle
                    that amplifies bias over time.
                  </p>
                  <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
                    <p className="mb-2 font-semibold text-purple-900 dark:text-purple-300">
                      Example: Predictive Policing Analogy
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      A loan approval model denies credit to people in certain
                      zip codes. Without credit, those residents can't build
                      credit history, making future denials more likely. The
                      model then sees this as confirmation that those zip codes
                      are "high risk," reinforcing the bias. (Similar to how
                      predictive policing creates feedback loops in law
                      enforcement.)
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-purple-700 dark:text-purple-400">
                    🛠️ <strong>Mitigation:</strong> Monitor outcomes over time,
                    randomized interventions, human oversight to break loops
                  </p>
                </div>
              </div>
            </div>

            {/* Fairness Metrics */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                📏 Fairness Metrics: Measuring Bias
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                How do you measure if a model is "fair"? Several mathematical
                definitions of fairness exist, each with tradeoffs:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl bg-white shadow-md dark:bg-gray-900">
                  <thead>
                    <tr className="bg-indigo-100 dark:bg-indigo-900">
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Fairness Metric
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Definition
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        When to Use
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          Demographic Parity
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        All groups receive positive outcomes at the same rate.
                        P(approved | Group A) = P(approved | Group B)
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        When the goal is equal representation in outcomes (e.g.,
                        college admissions, job screening)
                      </td>
                    </tr>
                    <tr className="bg-indigo-50 dark:bg-indigo-950">
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          Equal Opportunity
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        All groups have equal{" "}
                        <strong>true positive rates</strong>. Qualified
                        individuals are approved at the same rate across groups.
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        When you want to ensure qualified members of all groups
                        have equal chances (credit approval, hiring)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          Equalized Odds
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        All groups have equal{" "}
                        <strong>true positive AND false positive rates</strong>.
                        Both qualified and unqualified treated equally.
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        When both types of errors matter (fraud detection,
                        recidivism prediction)
                      </td>
                    </tr>
                    <tr className="bg-indigo-50 dark:bg-indigo-950">
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          Predictive Parity
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Among those predicted positive, the{" "}
                        <strong>success rate is equal</strong> across groups.
                        P(success | predicted positive, Group A) = P(success |
                        predicted positive, Group B)
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        When you want equal precision across groups (loan
                        default prediction)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          Individual Fairness
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Similar individuals receive similar predictions,
                        regardless of group membership. "Treat like cases
                        alike."
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        When fairness should be based on individual merit, not
                        group statistics
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl border-2 border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-900 dark:bg-yellow-950">
                <h4 className="mb-3 text-lg font-bold text-yellow-900 dark:text-yellow-300">
                  ⚠️ The Fairness Impossibility Theorem
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  It's mathematically <strong>impossible</strong> to satisfy all
                  fairness definitions simultaneously (except in trivial cases
                  where base rates are identical across groups). You must choose
                  which fairness criterion matters most for your use case and
                  accept tradeoffs.
                </p>
                <p className="mt-3 text-sm font-semibold text-yellow-900 dark:text-yellow-300">
                  💡 <strong>Practical Approach:</strong> Work with stakeholders
                  (legal, compliance, ethics) to define what "fairness" means in
                  your specific context.
                </p>
              </div>
            </div>

            {/* Testing for Bias */}
            <div className="rounded-3xl border-4 border-violet-200 bg-linear-to-br from-violet-50 to-purple-50 p-8 dark:border-violet-800 dark:from-violet-950 dark:to-purple-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🧪 Testing for Bias in Production Models
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Bias testing should be part of every AI deployment in financial
                services:
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    Step 1: Identify Protected Groups
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Determine which demographic groups need to be tested for
                    fairness:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Race / Ethnicity</li>
                    <li>• Gender / Sex</li>
                    <li>• Age (especially under 25, over 62)</li>
                    <li>• Marital Status</li>
                    <li>• National Origin</li>
                    <li>• Income Level (public assistance recipients)</li>
                  </ul>
                  <p className="mt-3 text-xs italic text-violet-700 dark:text-violet-400">
                    Note: Even if these features aren't in your model, you must
                    test outcomes across these groups (use external demographic
                    data if needed).
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    Step 2: Calculate Disparate Impact Ratio
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    The <strong>80% Rule</strong> (from EEOC employment
                    guidelines, often applied to lending):
                  </p>
                  <div className="rounded-lg border-2 border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950">
                    <p className="mb-2 text-sm font-semibold text-violet-900 dark:text-violet-300">
                      Formula:
                    </p>
                    <p className="mb-3 font-mono text-sm text-gray-700 dark:text-gray-300">
                      Disparate Impact Ratio = (Approval Rate for Group A) /
                      (Approval Rate for Group B)
                    </p>
                    <p className="mb-2 text-sm font-semibold text-violet-900 dark:text-violet-300">
                      Example:
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• White applicants: 70% approval rate</li>
                      <li>• Black applicants: 50% approval rate</li>
                      <li>
                        • Disparate Impact Ratio: 50% / 70% ={" "}
                        <strong className="text-red-600">0.71 (71%)</strong>
                      </li>
                    </ul>
                    <p className="mt-3 text-xs font-semibold text-red-700 dark:text-red-400">
                      ⚠️ <strong>Red Flag:</strong> Ratio {"<"} 0.80 suggests
                      potential disparate impact and warrants investigation.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    Step 3: Segment Performance Analysis
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Break down model performance (accuracy, precision, recall,
                    F1) by demographic group:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="bg-violet-100 dark:bg-violet-900">
                          <th className="border p-2 text-left">Group</th>
                          <th className="border p-2">Accuracy</th>
                          <th className="border p-2">Precision</th>
                          <th className="border p-2">Recall</th>
                          <th className="border p-2">False Positive Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Group A</td>
                          <td className="border p-2">85%</td>
                          <td className="border p-2">80%</td>
                          <td className="border p-2">75%</td>
                          <td className="border p-2">5%</td>
                        </tr>
                        <tr className="bg-violet-50 dark:bg-violet-950">
                          <td className="border p-2">Group B</td>
                          <td className="border p-2">78%</td>
                          <td className="border p-2">72%</td>
                          <td className="border p-2">68%</td>
                          <td className="border p-2">12%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs font-semibold text-red-700 dark:text-red-400">
                    → Group B has significantly worse performance and higher
                    false positive rate—potential bias.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    Step 4: Ongoing Monitoring
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Bias can emerge or worsen over time. Monitor fairness
                    metrics continuously:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        •
                      </span>
                      <span>
                        <strong>Monthly:</strong> Calculate disparate impact
                        ratios and segment performance
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        •
                      </span>
                      <span>
                        <strong>Alerts:</strong> Trigger investigations if
                        fairness thresholds are breached
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        •
                      </span>
                      <span>
                        <strong>Annual:</strong> Comprehensive bias audits with
                        independent validation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bias Mitigation */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                🛠️ Bias Mitigation Strategies
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                If you detect bias, here are strategies to mitigate it:
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                  <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    Pre-Processing
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Fix the data before training:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>• Resampling (oversample minority groups)</li>
                    <li>• Reweighting (adjust sample weights)</li>
                    <li>• Synthetic data generation (SMOTE)</li>
                    <li>• Remove biased features</li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
                  <h4 className="mb-3 text-lg font-bold text-violet-900 dark:text-violet-300">
                    In-Processing
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Modify the training algorithm:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>
                      • Fairness constraints (add fairness to loss function)
                    </li>
                    <li>• Adversarial debiasing</li>
                    <li>• Group-specific thresholds</li>
                    <li>• Fairness-aware ensembles</li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                  <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                    Post-Processing
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Adjust predictions after training:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>
                      • Threshold optimization (different thresholds per group)
                    </li>
                    <li>• Reject option classification</li>
                    <li>• Calibration to equalize false positive rates</li>
                    <li>• Human-in-the-loop for borderline cases</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                  ⚖️ Legal Consideration: Group-Specific Thresholds
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Using different decision thresholds for different demographic
                  groups can improve fairness metrics, but may violate fair
                  lending laws if it results in explicit differential treatment.
                  Always consult legal counsel before implementing group-aware
                  adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Data Privacy & AI */}
        <div className="mb-12 rounded-3xl bg-white p-10 shadow-xl dark:bg-gray-800">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Section 5
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Data Privacy & AI
          </h2>

          <div className="space-y-8">
            {/* The Privacy Challenge */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                🔒 The Privacy Challenge in AI
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                AI models are data-hungry. Training LLMs, credit models, or
                fraud detection systems requires vast amounts of personal and
                financial data. But <strong>privacy laws</strong> restrict how
                this data can be collected, used, and shared.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                  <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    🇺🇸 GDPR (EU/Global)
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    <strong>General Data Protection Regulation</strong> (2018)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • <strong>Consent:</strong> Explicit consent required for
                      data processing
                    </li>
                    <li>
                      • <strong>Right to Erasure:</strong> Users can request
                      deletion ("right to be forgotten")
                    </li>
                    <li>
                      • <strong>Data Minimization:</strong> Collect only what's
                      necessary
                    </li>
                    <li>
                      • <strong>Purpose Limitation:</strong> Use data only for
                      stated purpose
                    </li>
                    <li>
                      • <strong>Cross-Border:</strong> Restrictions on data
                      transfers outside EU
                    </li>
                  </ul>
                  <p className="mt-3 text-xs font-semibold text-indigo-700 dark:text-indigo-400">
                    💰 Fines: Up to 4% of global revenue or €20M, whichever is
                    higher
                  </p>
                </div>

                <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950">
                  <h4 className="mb-3 text-lg font-bold text-orange-900 dark:text-orange-300">
                    🇮🇳 DPDP Act (India)
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    <strong>Digital Personal Data Protection Act</strong> (2023)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • <strong>Consent:</strong> Clear, specific consent
                      required
                    </li>
                    <li>
                      • <strong>Data Localization:</strong> Certain data must be
                      stored in India
                    </li>
                    <li>
                      • <strong>Purpose Limitation:</strong> Data used only for
                      specified purpose
                    </li>
                    <li>
                      • <strong>Right to Correction/Erasure:</strong> Users can
                      update or delete data
                    </li>
                    <li>
                      • <strong>Data Fiduciaries:</strong> Organizations
                      handling data have obligations
                    </li>
                  </ul>
                  <p className="mt-3 text-xs font-semibold text-orange-700 dark:text-orange-400">
                    💰 Fines: Up to ₹250 crore (~$30M USD) for violations
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy-Preserving Techniques */}
            <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🛡️ Privacy-Preserving AI Techniques
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                How do you train AI models while respecting privacy? Several
                techniques allow learning from data without exposing individual
                records:
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    1. Differential Privacy
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> Add carefully calibrated noise
                    to data or model outputs so individual records can't be
                    reverse-engineered, while preserving statistical accuracy.
                  </p>
                  <div className="rounded-lg border-2 border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950">
                    <p className="mb-2 font-semibold text-indigo-900 dark:text-indigo-300">
                      Financial Example: Salary Data
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      A bank wants to analyze average salaries for credit
                      underwriting without exposing individual salaries. Using
                      differential privacy, they add random noise (±$5,000) to
                      each salary before aggregation. The{" "}
                      <strong>average remains accurate</strong>, but no single
                      person's exact salary can be determined.
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                    ✅ <strong>Use Cases:</strong> Census data, aggregate
                    statistics, model training on sensitive data
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-violet-700 dark:text-violet-400">
                    2. Federated Learning
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> Train models across
                    decentralized devices/servers without sharing raw data. Each
                    device trains locally, then only{" "}
                    <strong>model updates</strong> (not data) are aggregated.
                  </p>
                  <div className="rounded-lg border-2 border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950">
                    <p className="mb-2 font-semibold text-violet-900 dark:text-violet-300">
                      Financial Example: Fraud Detection Across Banks
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      10 banks want to collaboratively train a fraud model
                      without sharing customer transaction data
                      (competitive/regulatory reasons). Using federated
                      learning:
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>
                        1. Each bank trains the model on their own data locally
                      </li>
                      <li>
                        2. They share only model weight updates (encrypted)
                      </li>
                      <li>
                        3. A central server aggregates updates to improve the
                        global model
                      </li>
                      <li>4. No raw transaction data ever leaves each bank</li>
                    </ul>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-violet-700 dark:text-violet-400">
                    ✅ <strong>Use Cases:</strong> Cross-institution
                    collaboration, mobile device training (Google Keyboard),
                    healthcare
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-purple-700 dark:text-purple-400">
                    3. Synthetic Data Generation
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> Create fake data that has the
                    same statistical properties as real data, but contains no
                    actual individuals. Use synthetic data for training,
                    testing, and demos.
                  </p>
                  <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
                    <p className="mb-2 font-semibold text-purple-900 dark:text-purple-300">
                      Financial Example: Credit Card Transaction Data
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      A fintech startup wants to train a fraud model but can't
                      access real customer data due to privacy rules. They use a{" "}
                      <strong>Generative Adversarial Network (GAN)</strong>{" "}
                      trained on anonymized summary statistics to generate
                      synthetic transactions with realistic patterns (amounts,
                      merchant categories, timestamps, fraud rates) but no real
                      individuals.
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-purple-700 dark:text-purple-400">
                    ✅ <strong>Use Cases:</strong> Model development, testing,
                    sharing data with vendors, regulatory sandboxes
                  </p>
                  <p className="mt-2 text-xs italic text-purple-700 dark:text-purple-400">
                    ⚠️ <strong>Caveat:</strong> Synthetic data must be carefully
                    validated to ensure it doesn't leak real data or introduce
                    bias
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    4. Homomorphic Encryption
                  </h4>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    <strong>What it is:</strong> Perform computations on{" "}
                    <strong>encrypted data</strong> without decrypting it.
                    Results are also encrypted and can only be decrypted by the
                    data owner.
                  </p>
                  <div className="rounded-lg border-2 border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950">
                    <p className="mb-2 font-semibold text-indigo-900 dark:text-indigo-300">
                      Financial Example: Encrypted Credit Scoring
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      A customer wants a credit score but doesn't want to share
                      their financial data in plain text. Using homomorphic
                      encryption, the bank runs the credit model on{" "}
                      <strong>encrypted inputs</strong> and returns an{" "}
                      <strong>encrypted score</strong>. Only the customer can
                      decrypt the result. The bank never sees the raw data.
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                    ✅ <strong>Use Cases:</strong> Secure multi-party
                    computation, privacy-preserving analytics, regulatory
                    reporting
                  </p>
                  <p className="mt-2 text-xs italic text-indigo-700 dark:text-indigo-400">
                    ⚠️ <strong>Limitation:</strong> Computationally expensive;
                    mainly used for simple operations, not full deep learning
                    (yet)
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance Requirements */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                ✅ Privacy Compliance Checklist for AI Systems
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                  <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    Data Collection & Storage
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>Obtain explicit consent for AI training data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>
                        Implement data minimization (collect only what's needed)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>Encrypt sensitive data at rest and in transit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>
                        🇮🇳 Ensure data localization compliance (India: financial
                        data must be stored in India)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
                  <h4 className="mb-3 text-lg font-bold text-violet-900 dark:text-violet-300">
                    Model Training & Deployment
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        ☐
                      </span>
                      <span>
                        Use privacy-preserving techniques (differential privacy,
                        federated learning)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        ☐
                      </span>
                      <span>
                        De-identify/anonymize training data where possible
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        ☐
                      </span>
                      <span>
                        Prevent model memorization (ensure models don't leak
                        training data)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        ☐
                      </span>
                      <span>
                        Implement access controls (who can access AI models and
                        data)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                  <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                    User Rights
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        ☐
                      </span>
                      <span>
                        Enable right to access (users can see their data)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        ☐
                      </span>
                      <span>
                        Enable right to correction (users can update errors)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        ☐
                      </span>
                      <span>
                        Enable right to erasure ("right to be forgotten")
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        ☐
                      </span>
                      <span>
                        Provide data portability (export user data in
                        machine-readable format)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                  <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    Governance & Accountability
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>
                        Appoint Data Protection Officer (DPO) if required
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>
                        Conduct Data Protection Impact Assessments (DPIA) for
                        high-risk AI
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>Maintain records of processing activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>
                        Implement breach notification procedures (72-hour rule
                        for GDPR)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: AI Audit & Compliance */}
        <div className="mb-12 rounded-3xl bg-white p-10 shadow-xl dark:bg-gray-800">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Section 6
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            AI Audit & Compliance
          </h2>

          <div className="space-y-8">
            {/* Why Audit AI */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                🔍 Why Audit AI Systems?
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                AI systems operate as "black boxes" making consequential
                decisions. Without <strong>independent audits</strong>, there's
                no way to verify that AI is fair, accurate, compliant, and
                aligned with stated policies. Audits provide{" "}
                <strong>assurance</strong> to stakeholders: regulators,
                customers, investors, and the public.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                  <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    Who Audits?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • <strong>Internal Audit:</strong> Your own audit team
                    </li>
                    <li>
                      • <strong>Independent Third Party:</strong> External firms
                      (Deloitte, PwC, etc.)
                    </li>
                    <li>
                      • <strong>Regulators:</strong> RBI, Fed, SEBI examinations
                    </li>
                    <li>
                      • <strong>AI Ethics Boards:</strong> Internal governance
                      committees
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
                  <h4 className="mb-3 text-lg font-bold text-violet-900 dark:text-violet-300">
                    What Gets Audited?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Model performance & accuracy</li>
                    <li>• Bias & fairness metrics</li>
                    <li>• Data quality & lineage</li>
                    <li>• Explainability & transparency</li>
                    <li>• Compliance with regulations</li>
                    <li>• Security & access controls</li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                  <h4 className="mb-3 text-lg font-bold text-purple-900 dark:text-purple-300">
                    When to Audit?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • <strong>Before deployment:</strong> Pre-launch
                      validation
                    </li>
                    <li>
                      • <strong>Annually:</strong> Ongoing assurance
                    </li>
                    <li>
                      • <strong>After material changes:</strong> Retraining, new
                      features
                    </li>
                    <li>
                      • <strong>Triggered by issues:</strong> Complaints,
                      errors, regulatory inquiries
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Audit Framework */}
            <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                📋 AI Audit Framework: 7 Pillars
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A comprehensive AI audit should cover seven key areas:
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    1. Governance & Accountability
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Is there clear ownership, oversight, and accountability for
                    the AI system?
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>
                      • Board/senior management oversight of AI initiatives
                    </li>
                    <li>
                      • Defined roles & responsibilities (data scientists,
                      compliance, legal)
                    </li>
                    <li>• AI governance policies and procedures documented</li>
                    <li>• Escalation paths for issues and ethical concerns</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-violet-700 dark:text-violet-400">
                    2. Data Quality & Lineage
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Is the training data accurate, representative, and properly
                    sourced?
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>• Data provenance documented (where data came from)</li>
                    <li>
                      • Data quality checks (completeness, accuracy, timeliness)
                    </li>
                    <li>• Representative sampling (no demographic gaps)</li>
                    <li>• Data versioning and change logs</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-purple-700 dark:text-purple-400">
                    3. Model Performance & Validation
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Does the model perform as expected? Has it been
                    independently validated?
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>• Performance metrics match business objectives</li>
                    <li>
                      • Independent validation conducted (per SR 11-7 / RBI
                      guidelines)
                    </li>
                    <li>• Challenger models tested</li>
                    <li>• Stress testing and sensitivity analysis performed</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    4. Fairness & Bias Testing
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Does the model treat all demographic groups fairly?
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>• Disparate impact analysis across protected groups</li>
                    <li>• Fairness metrics calculated and monitored</li>
                    <li>
                      • Proxy variable audit (features that encode protected
                      characteristics)
                    </li>
                    <li>• Bias mitigation strategies implemented and tested</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-violet-700 dark:text-violet-400">
                    5. Explainability & Transparency
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Can the model's decisions be explained to stakeholders?
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>
                      • Explainability tools implemented (SHAP, LIME, etc.)
                    </li>
                    <li>
                      • Model documentation complete (model cards, design docs)
                    </li>
                    <li>
                      • Adverse action notices comply with regulations (FCRA,
                      RBI)
                    </li>
                    <li>• Customer-facing explanations tested for clarity</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-purple-700 dark:text-purple-400">
                    6. Privacy & Security
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Is personal data protected? Are privacy laws being followed?
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>• GDPR / DPDP Act compliance verified</li>
                    <li>• Data minimization and purpose limitation enforced</li>
                    <li>
                      • Privacy-preserving techniques used where appropriate
                    </li>
                    <li>• Access controls and encryption validated</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    7. Monitoring & Incident Response
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    Is there ongoing monitoring? Can the organization respond to
                    AI failures?
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>• Performance monitoring dashboard in place</li>
                    <li>
                      • Alerts for model drift, bias, or performance degradation
                    </li>
                    <li>• Incident response plan for AI failures</li>
                    <li>• Post-incident review process established</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party AI Vendors */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                🤝 Third-Party AI Vendor Risk
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Many financial institutions use third-party AI models (OpenAI
                GPT, credit scoring vendors, fraud detection SaaS). You're still{" "}
                <strong>responsible for vendor AI decisions</strong>—regulators
                don't accept "the vendor did it" as an excuse.
              </p>

              <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-900 dark:bg-yellow-950">
                <h4 className="mb-3 text-lg font-bold text-yellow-900 dark:text-yellow-300">
                  🇺🇸 OCC / 🇮🇳 RBI Vendor Management Requirements
                </h4>
                <p className="mb-3 text-gray-700 dark:text-gray-300">
                  Both US (OCC guidance) and India (RBI outsourcing guidelines)
                  require banks to manage third-party AI risk:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      1.
                    </span>
                    <span>
                      <strong>Due Diligence:</strong> Evaluate vendor's AI
                      governance, model validation, bias testing, security
                      before contracting
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      2.
                    </span>
                    <span>
                      <strong>Contractual Protections:</strong> Require
                      explainability, audit rights, bias testing, data privacy
                      in contracts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      3.
                    </span>
                    <span>
                      <strong>Ongoing Monitoring:</strong> Track vendor AI
                      performance, bias metrics, incidents regularly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      4.
                    </span>
                    <span>
                      <strong>Right to Audit:</strong> Reserve the right to
                      audit vendor's AI systems (or hire third party to do so)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      5.
                    </span>
                    <span>
                      <strong>Exit Strategy:</strong> Plan for switching vendors
                      or bringing AI in-house if vendor fails
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Emerging AI Regulations */}
        <div className="mb-12 rounded-3xl bg-white p-10 shadow-xl dark:bg-gray-800">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Section 7
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Emerging AI Regulations
          </h2>

          <div className="space-y-8">
            {/* Global Regulatory Landscape */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                🌍 The Global AI Regulatory Wave
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                AI regulation is accelerating globally. Financial institutions
                must track developments in multiple jurisdictions:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl bg-white shadow-md dark:bg-gray-900">
                  <thead>
                    <tr className="bg-indigo-100 dark:bg-indigo-900">
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Region
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Regulation
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Status
                      </th>
                      <th className="border border-indigo-300 p-4 text-left font-bold text-gray-900 dark:border-indigo-700 dark:text-white">
                        Key Requirements
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇪🇺 EU
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          EU AI Act
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Passed 2024, enforced 2026
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Risk-based framework: High-risk AI (credit, employment)
                        requires conformity assessments, transparency, human
                        oversight
                      </td>
                    </tr>
                    <tr className="bg-indigo-50 dark:bg-indigo-950">
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇺🇸 US
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          Executive Order 14110
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Issued Oct 2023
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Safety testing for foundation models, standards
                        development, agency-specific guidance (SEC, CFPB)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇮🇳 India
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-orange-700 dark:text-orange-400">
                          National AI Strategy (Draft)
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Under development (MeitY)
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Emphasis on responsible AI, data sovereignty, AI for
                        social good, and financial inclusion
                      </td>
                    </tr>
                    <tr className="bg-indigo-50 dark:bg-indigo-950">
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇨🇳 China
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          Generative AI Measures
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Effective Aug 2023
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Registration, security assessments, content moderation
                        for public-facing generative AI
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-200 p-4 font-semibold dark:border-indigo-800">
                        🇬🇧 UK
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        <strong className="text-indigo-700 dark:text-indigo-400">
                          Pro-Innovation Approach
                        </strong>
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Ongoing
                      </td>
                      <td className="border border-indigo-200 p-4 dark:border-indigo-800">
                        Principles-based regulation, sector-specific guidance
                        from FCA, no omnibus AI law (yet)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* EU AI Act Deep Dive */}
            <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🇪🇺 EU AI Act: Risk-Based Framework
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The EU AI Act classifies AI systems into four risk categories,
                with stricter requirements for higher-risk applications:
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-red-50 p-6 shadow-md dark:bg-red-950">
                  <h4 className="mb-3 text-xl font-bold text-red-900 dark:text-red-300">
                    🚫 Unacceptable Risk: BANNED
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    AI systems that pose fundamental rights violations are
                    prohibited:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>• Social scoring by governments</li>
                    <li>
                      • Real-time biometric surveillance in public spaces (with
                      exceptions)
                    </li>
                    <li>• Subliminal manipulation</li>
                    <li>
                      • Exploiting vulnerabilities (children, disabilities)
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-orange-50 p-6 shadow-md dark:bg-orange-950">
                  <h4 className="mb-3 text-xl font-bold text-orange-900 dark:text-orange-300">
                    ⚠️ High Risk: STRICT REQUIREMENTS
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    <strong>Financial AI falls here:</strong> Credit scoring,
                    loan underwriting, insurance pricing
                  </p>
                  <p className="mb-3 text-sm font-semibold text-orange-900 dark:text-orange-300">
                    Requirements for High-Risk AI:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>• Risk management system</li>
                    <li>
                      • Data governance (quality, representativeness, bias
                      testing)
                    </li>
                    <li>
                      • Technical documentation (model cards, design docs)
                    </li>
                    <li>• Record-keeping (audit trails)</li>
                    <li>• Transparency & user information</li>
                    <li>
                      • Human oversight (human-in-the-loop for critical
                      decisions)
                    </li>
                    <li>• Accuracy, robustness, cybersecurity standards</li>
                    <li>
                      • Conformity assessment & CE marking before deployment
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-yellow-50 p-6 shadow-md dark:bg-yellow-950">
                  <h4 className="mb-3 text-xl font-bold text-yellow-900 dark:text-yellow-300">
                    ⚡ Limited Risk: TRANSPARENCY OBLIGATIONS
                  </h4>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                    AI systems interacting with humans (chatbots, emotion
                    recognition)
                  </p>
                  <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                    <li>• Must disclose that users are interacting with AI</li>
                    <li>• Deepfakes must be labeled</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-green-50 p-6 shadow-md dark:bg-green-950">
                  <h4 className="mb-3 text-xl font-bold text-green-900 dark:text-green-300">
                    ✅ Minimal Risk: NO SPECIFIC OBLIGATIONS
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Most AI applications (spam filters, recommendation engines,
                    video games). Voluntary codes of conduct encouraged.
                  </p>
                </div>
              </div>
            </div>

            {/* India's AI Governance */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-orange-900 dark:text-orange-300">
                🇮🇳 India's Emerging AI Governance Approach
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                India is taking a <strong>"light-touch, sectoral"</strong>{" "}
                approach to AI regulation, focusing on industry self-regulation
                with government guidance:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950">
                  <h4 className="mb-3 text-lg font-bold text-orange-900 dark:text-orange-300">
                    Key Priorities
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">
                        1.
                      </span>
                      <span>
                        <strong>Financial Inclusion:</strong> AI should expand
                        access to financial services for underserved populations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">
                        2.
                      </span>
                      <span>
                        <strong>Data Sovereignty:</strong> Data must be stored
                        and processed in India (localization)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">
                        3.
                      </span>
                      <span>
                        <strong>Responsible Innovation:</strong> Balance
                        innovation with consumer protection
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">
                        4.
                      </span>
                      <span>
                        <strong>Explainability:</strong> Customers have right to
                        understand AI decisions affecting them
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950">
                  <h4 className="mb-3 text-lg font-bold text-orange-900 dark:text-orange-300">
                    RBI's Expectations for AI in Banking
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">
                        •
                      </span>
                      <span>
                        <strong>Board Oversight:</strong> Board must approve AI
                        strategy and oversee risks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">
                        •
                      </span>
                      <span>
                        <strong>Explainability:</strong> AI decisions must be
                        explainable to customers and regulators
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">
                        •
                      </span>
                      <span>
                        <strong>Data Quality:</strong> Training data must be
                        accurate, complete, and unbiased
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">
                        •
                      </span>
                      <span>
                        <strong>Human Oversight:</strong> Critical decisions
                        require human review
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 dark:text-orange-400">
                        •
                      </span>
                      <span>
                        <strong>Audit & Validation:</strong> Independent
                        validation of AI models
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Staying Compliant */}
            <div className="rounded-3xl border-4 border-violet-200 bg-linear-to-br from-violet-50 to-purple-50 p-8 dark:border-violet-800 dark:from-violet-950 dark:to-purple-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                ✅ Staying Ahead of Regulatory Change
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                AI regulations are evolving rapidly. How to stay compliant:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    Monitor Regulatory Developments
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • Subscribe to regulator newsletters (RBI, Fed, SEC, SEBI)
                    </li>
                    <li>• Join industry groups (IBA, FICCI, ABA)</li>
                    <li>• Engage external legal/compliance advisors</li>
                    <li>
                      • Track international standards (ISO, NIST AI Risk
                      Management Framework)
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    Build Future-Proof AI Systems
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Design for explainability from day one</li>
                    <li>• Build comprehensive audit trails</li>
                    <li>• Test for bias proactively</li>
                    <li>• Implement privacy-by-design principles</li>
                    <li>• Maintain flexibility to adapt to new requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Building a Responsible AI Program */}
        <div className="mb-12 rounded-3xl bg-white p-10 shadow-xl dark:bg-gray-800">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Section 8
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Building a Responsible AI Program
          </h2>

          <div className="space-y-8">
            {/* Governance Framework */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                🏛️ Responsible AI Governance Framework
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Building responsible AI isn't just about technology—it requires{" "}
                <strong>organizational commitment</strong>, clear policies, and
                ongoing oversight. Here's a blueprint:
              </p>

              <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  The 5-Layer Governance Stack
                </h4>

                <div className="space-y-6">
                  <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                        1
                      </span>
                      <h5 className="text-lg font-bold text-indigo-900 dark:text-indigo-300">
                        Board Oversight
                      </h5>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Who:</strong> Board of Directors
                    </p>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Responsibilities:</strong>
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Approve AI strategy and risk appetite</li>
                      <li>• Review high-risk AI deployments</li>
                      <li>• Receive regular AI risk reports from management</li>
                      <li>• Ensure adequate resources for responsible AI</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
                        2
                      </span>
                      <h5 className="text-lg font-bold text-violet-900 dark:text-violet-300">
                        AI Ethics Board / Committee
                      </h5>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Who:</strong> Cross-functional team (Legal,
                      Compliance, Data Science, Risk, Product, Ethics Experts)
                    </p>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Responsibilities:</strong>
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Review and approve new AI use cases</li>
                      <li>• Assess ethical implications of AI systems</li>
                      <li>• Set fairness and bias thresholds</li>
                      <li>• Resolve escalated ethical dilemmas</li>
                      <li>• Update AI policies and guidelines</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white">
                        3
                      </span>
                      <h5 className="text-lg font-bold text-purple-900 dark:text-purple-300">
                        AI Risk & Compliance Team
                      </h5>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Who:</strong> Dedicated AI risk managers,
                      compliance officers
                    </p>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Responsibilities:</strong>
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Maintain AI model inventory</li>
                      <li>• Conduct risk assessments for AI systems</li>
                      <li>• Monitor regulatory changes</li>
                      <li>• Coordinate audits and validations</li>
                      <li>• Track fairness and bias metrics</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                        4
                      </span>
                      <h5 className="text-lg font-bold text-indigo-900 dark:text-indigo-300">
                        AI Development Teams
                      </h5>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Who:</strong> Data scientists, ML engineers,
                      product managers
                    </p>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Responsibilities:</strong>
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>• Follow responsible AI development practices</li>
                      <li>• Document models (model cards, design docs)</li>
                      <li>• Test for bias before deployment</li>
                      <li>• Implement explainability features</li>
                      <li>• Report issues to governance teams</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
                        5
                      </span>
                      <h5 className="text-lg font-bold text-violet-900 dark:text-violet-300">
                        Independent Validation & Internal Audit
                      </h5>
                    </div>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Who:</strong> Model validation team, internal
                      audit
                    </p>
                    <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                      <strong>Responsibilities:</strong>
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      <li>
                        • Independent validation of AI models (per SR 11-7 /
                        RBI)
                      </li>
                      <li>• Test challenger models</li>
                      <li>• Audit AI governance processes</li>
                      <li>• Verify compliance with policies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsible AI Principles */}
            <div className="rounded-3xl border-4 border-violet-200 bg-linear-to-br from-violet-50 to-purple-50 p-8 dark:border-violet-800 dark:from-violet-950 dark:to-purple-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🌟 7 Principles of Responsible AI
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                These principles should guide all AI development and deployment:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-violet-700 dark:text-violet-400">
                    1. Fairness
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    AI systems must not discriminate against individuals or
                    groups. Test for bias, measure fairness metrics, and
                    mitigate disparate impact.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-violet-700 dark:text-violet-400">
                    2. Transparency
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Be open about when AI is being used. Provide meaningful
                    explanations for AI decisions. Disclose limitations.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-violet-700 dark:text-violet-400">
                    3. Accountability
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Humans are ultimately responsible for AI decisions. Clear
                    ownership, oversight, and redress mechanisms for AI harms.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-violet-700 dark:text-violet-400">
                    4. Privacy
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Respect user privacy. Collect only necessary data. Use
                    privacy-preserving techniques. Comply with GDPR / DPDP Act.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-violet-700 dark:text-violet-400">
                    5. Safety & Reliability
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    AI systems must perform reliably, be robust to adversarial
                    attacks, and have safeguards against misuse.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-violet-700 dark:text-violet-400">
                    6. Inclusiveness
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    AI should benefit all of society. Design for accessibility.
                    Consider vulnerable populations. 🇮🇳 In India: support
                    financial inclusion.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-bold text-violet-700 dark:text-violet-400">
                    7. Human Oversight
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Humans must remain in control. AI should augment, not
                    replace, human decision-making for critical decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Incident Response */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                🚨 AI Incident Response Plan
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Despite best efforts, AI systems can fail. Having an{" "}
                <strong>incident response plan</strong> is critical:
              </p>

              <div className="space-y-6">
                <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
                  <h4 className="mb-3 text-lg font-bold text-red-900 dark:text-red-300">
                    What Constitutes an "AI Incident"?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      • Model producing biased outputs (disparate impact
                      detected)
                    </li>
                    <li>
                      • Performance degradation (accuracy drops below threshold)
                    </li>
                    <li>
                      • Hallucinations causing customer harm (false loan
                      denials)
                    </li>
                    <li>• Privacy breach (model leaks training data)</li>
                    <li>• Regulatory investigation or customer complaints</li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
                  <h4 className="mb-3 text-lg font-bold text-indigo-900 dark:text-indigo-300">
                    5-Step Incident Response Process
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-1 font-semibold text-indigo-900 dark:text-indigo-300">
                        1. Detect & Report
                      </p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        Monitoring systems detect anomaly → Alert sent to AI
                        risk team → Incident logged
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold text-indigo-900 dark:text-indigo-300">
                        2. Triage & Assess
                      </p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        Determine severity (low/medium/high/critical) → Assess
                        impact (customers affected, regulatory implications)
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold text-indigo-900 dark:text-indigo-300">
                        3. Contain & Mitigate
                      </p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        Immediate action: Disable model if necessary → Switch to
                        fallback/human review → Prevent further harm
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold text-indigo-900 dark:text-indigo-300">
                        4. Investigate & Remediate
                      </p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        Root cause analysis → Fix model or data issue → Test fix
                        thoroughly before redeployment
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-semibold text-indigo-900 dark:text-indigo-300">
                        5. Review & Learn
                      </p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        Post-incident review → Update policies/procedures →
                        Notify stakeholders (regulators, customers if required)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="rounded-3xl border-4 border-indigo-200 bg-linear-to-br from-indigo-50 to-violet-50 p-8 dark:border-indigo-800 dark:from-indigo-950 dark:to-violet-950">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🚀 Getting Started: 90-Day Responsible AI Roadmap
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Building a responsible AI program takes time. Here's a phased
                approach:
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-indigo-700 dark:text-indigo-400">
                    Days 1-30: Foundation
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>
                        Create AI model inventory (list all AI systems in use)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>
                        Assess current AI governance maturity (gaps analysis)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>
                        Define responsible AI principles for your organization
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ☐
                      </span>
                      <span>Secure executive sponsorship and budget</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-violet-700 dark:text-violet-400">
                    Days 31-60: Implementation
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        ☐
                      </span>
                      <span>Establish AI Ethics Board / Committee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        ☐
                      </span>
                      <span>
                        Draft AI governance policies (model risk management,
                        bias testing, explainability)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        ☐
                      </span>
                      <span>
                        Prioritize high-risk AI systems for immediate
                        bias/fairness audits
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        ☐
                      </span>
                      <span>
                        Set up monitoring dashboards for AI performance &
                        fairness
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-400">
                        ☐
                      </span>
                      <span>Train teams on responsible AI practices</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                  <h4 className="mb-3 text-lg font-bold text-purple-700 dark:text-purple-400">
                    Days 61-90: Operationalization
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        ☐
                      </span>
                      <span>
                        Conduct first round of model validations (high-risk
                        models)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        ☐
                      </span>
                      <span>Implement AI incident response process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        ☐
                      </span>
                      <span>
                        Review vendor AI systems (require audits, bias testing)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        ☐
                      </span>
                      <span>Present AI governance report to Board</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        ☐
                      </span>
                      <span>
                        Establish quarterly review cadence for AI governance
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="rounded-3xl border-4 border-purple-200 bg-linear-to-br from-purple-50 to-pink-50 p-8 text-center dark:border-purple-800 dark:from-purple-950 dark:to-pink-950">
              <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                🎯 The Bottom Line
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Responsible AI isn't a one-time project—it's an{" "}
                <strong>ongoing commitment</strong>. In financial services,
                where decisions affect people's livelihoods and trust is
                paramount,{" "}
                <strong>
                  governance, ethics, and regulatory compliance are not optional
                </strong>
                .
              </p>
              <p className="text-xl font-bold text-purple-900 dark:text-purple-300">
                Build AI systems that are{" "}
                <strong>fair, transparent, accountable, and trustworthy</strong>
                . The future of finance depends on it.
              </p>
            </div>

          {/* Navigation Footer */}
          <div className="mt-16 flex items-center justify-between rounded-3xl border border-gray-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/60">
            <a
              href="/module4"
              className="flex items-center font-semibold text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              ← Previous: AI Agents
            </a>
            <a
              href="/"
              className="flex items-center font-semibold text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              Back to Course Home →
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
