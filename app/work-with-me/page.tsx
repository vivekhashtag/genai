"use client";

import Link from "next/link";
import { useState } from "react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const EMAIL = "reachvivekd@gmail.com";

const interests = [
  "Training for my bank / team",
  "GenAI strategy or use-case review",
  "AI security or governance assessment",
  "1:1 mentoring / career guidance",
  "Something else",
];

export default function WorkWithMe() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!WEB3FORMS_KEY) {
      const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Consulting inquiry: " + data.interest)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: `Consulting inquiry: ${data.interest}`, ...data }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("done");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white";

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-16">
      <Link href="/" className="mb-8 inline-block text-sm text-indigo-600 hover:underline dark:text-indigo-400">
        ← Back to Course Home
      </Link>
      <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">Work With Me</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-300">
        Tell me a little about what you need and I&apos;ll reply by email.
      </p>

      {status === "done" ? (
        <div className="rounded-2xl border border-green-300 bg-green-50 p-6 text-green-900 dark:border-green-700 dark:bg-green-950/30 dark:text-green-200">
          Thank you! Your message has been sent. I&apos;ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <input name="name" required placeholder="Your name" className={field} />
          <input name="email" type="email" required placeholder="Your email" className={field} />
          <input name="organisation" placeholder="Organisation / role" className={field} />
          <select name="interest" required defaultValue="" className={field}>
            <option value="" disabled>I&apos;m interested in…</option>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
          <textarea name="message" required rows={5} placeholder="What would you like help with?" className={field} />
          <button
            disabled={status === "sending"}
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 font-semibold text-white shadow-xl disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please email me directly at {EMAIL}.
            </p>
          )}
        </form>
      )}
    </main>
  );
}
