// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: replace with real API call later
    setStatus("sent");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-slate-200 mb-6">
        Reach out to Amurtha Bharathi for collaborations, support, or to learn
        more about our heritage, education, and charity initiatives.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border bg- p-6 shadow-sm"
      >
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            required
            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-blue-700 px-5 py-2 text-sm font-medium text-white hover:bg-blue-800"
        >
          Send Message
        </button>

        {status === "sent" && (
          <p className="text-xs text-emerald-600 mt-2">
            Thank you for reaching out. We will get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}
