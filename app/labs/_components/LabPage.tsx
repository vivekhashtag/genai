import Link from "next/link";

export type Exercise = {
  num: string;
  title: string;
  why: string;
  does: string;
  terms?: string[];
  expected: string;
  notice: string;
  finance?: string;
  code: string;
};

export type LabPageProps = {
  number: string;
  title: string;
  intro: string;
  tags: string[];
  notebookFile: string;
  safetyNote?: string;
  callout?: { title: string; text: string };
  build: string;
  flow?: string[];
  read: { href: string; label: string; sections: string };
  prerequisites: string[];
  exercises: Exercise[];
  stretch: string[];
  errors: { term: string; text: string }[];
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

const REPO = "vivekhashtag/genai";

const card =
  "rounded-3xl border border-amber-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-amber-700/40 dark:bg-gray-800/80";
const codeBox =
  "mt-4 overflow-x-auto rounded-2xl bg-gray-900 p-4 font-mono text-xs leading-relaxed text-amber-100";
const chip =
  "rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300";
const label = "text-amber-700 dark:text-amber-400";

export default function LabPage(p: LabPageProps) {
  const colab = `https://colab.research.google.com/github/${REPO}/blob/main/public/labs/${p.notebookFile}`;
  const download = `/labs/${p.notebookFile}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50 to-yellow-50 dark:from-gray-950 dark:via-slate-900 dark:to-amber-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-600/20"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse rounded-full bg-yellow-300/30 blur-3xl dark:bg-yellow-600/20"></div>
      </div>

      <main className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="mb-8">
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-amber-700 shadow-sm backdrop-blur-sm transition-all hover:bg-amber-50 dark:border-amber-700 dark:bg-gray-800/80 dark:text-amber-300"
          >
            ← Back to Labs
          </Link>
        </div>

        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 block w-fit rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
            Lab {p.number}
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-amber-300 dark:via-yellow-300 dark:to-orange-200 sm:text-6xl">
            {p.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">{p.intro}</p>
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3">
            {p.tags.map((t) => (
              <span key={t} className={chip}>{t}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={colab}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-7 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              Open in Colab
            </a>
            <a
              href={download}
              download
              className="rounded-full border border-amber-300 bg-white/80 px-7 py-3 font-semibold text-amber-700 shadow-sm transition-all hover:bg-amber-50 dark:border-amber-600 dark:bg-gray-800/80 dark:text-amber-300"
            >
              Download notebook (.ipynb)
            </a>
          </div>
          <p className="mx-auto mt-3 max-w-xl text-xs text-gray-500 dark:text-gray-400">
            The Colab button loads the notebook from the public GitHub repository, so it works only after the notebook
            is pushed there. Until then, download it and use Colab&apos;s File &gt; Upload notebook. Run the cells in
            order, and complete each YOUR CODE HERE blank before running the cells after it.
          </p>
        </div>

        {p.safetyNote && (
          <div className="mb-10 rounded-3xl border border-rose-300/60 bg-rose-50/80 p-6 text-sm text-rose-900 shadow-lg dark:border-rose-700/50 dark:bg-rose-950/30 dark:text-rose-200">
            <strong>Note.</strong> {p.safetyNote}
          </div>
        )}

        <div className={`mb-10 ${card}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">What you will build</h2>
          <p className="mb-5 text-gray-700 dark:text-gray-300">{p.build}</p>
          {p.flow && (
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
              {p.flow.map((s, i, a) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-900/30">{s}</span>
                  {i < a.length - 1 && <span className="text-amber-400">→</span>}
                </span>
              ))}
            </div>
          )}
        </div>

        {p.callout && (
          <div className={`mb-10 ${card}`}>
            <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{p.callout.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{p.callout.text}</p>
          </div>
        )}

        <div className={`mb-12 ${card}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Prerequisites</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="text-amber-500">▸</span>
              <span>
                Read{" "}
                <Link href={p.read.href} className="font-semibold text-amber-700 underline dark:text-amber-300">
                  {p.read.label}
                </Link>{" "}
                {p.read.sections}.
              </span>
            </li>
            {p.prerequisites.map((t) => (
              <li key={t} className="flex gap-3"><span className="text-amber-500">▸</span><span>{t}</span></li>
            ))}
          </ul>
        </div>

        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Exercises</h2>
        <div className="mb-12 space-y-8">
          {p.exercises.map((ex) => (
            <section key={ex.num} className={card}>
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 text-xl font-black text-white shadow-lg">
                  {ex.num}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{ex.title}</h3>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p><strong className={label}>Why we do this: </strong>{ex.why}</p>
                <p><strong className={label}>What the code does: </strong>{ex.does}</p>
                {ex.terms && (
                  <div>
                    <strong className={label}>Key terms</strong>
                    <ul className="mt-2 space-y-1">
                      {ex.terms.map((t) => (
                        <li key={t} className="flex gap-2 text-sm"><span className="text-amber-500">▸</span><span>{t}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <pre className={codeBox}><code>{ex.code}</code></pre>
              <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong className={label}>Expected output: </strong>{ex.expected}</p>
                <p><strong className={label}>What to notice: </strong>{ex.notice}</p>
                {ex.finance && (
                  <p className="rounded-2xl bg-amber-50 p-4 text-sm dark:bg-amber-900/20"><strong className={label}>Finance link: </strong>{ex.finance}</p>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className={card}>
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Stretch goals</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {p.stretch.map((t) => (
                <li key={t} className="flex gap-2"><span className="text-amber-500">▸</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className={card}>
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Common errors</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {p.errors.map((e) => (
                <li key={e.term} className="flex gap-2">
                  <span className="text-amber-500">▸</span>
                  <span><strong>{e.term}:</strong> {e.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4">
          {p.prev ? (
            <Link href={p.prev.href} className="rounded-full border border-amber-300 bg-white/80 px-6 py-3 font-semibold text-amber-700 dark:border-amber-600 dark:bg-gray-800/80 dark:text-amber-300">
              ← {p.prev.label}
            </Link>
          ) : <span />}
          {p.next ? (
            <Link href={p.next.href} className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 font-semibold text-white shadow-lg">
              {p.next.label} →
            </Link>
          ) : <span />}
        </div>
      </main>
    </div>
  );
}
