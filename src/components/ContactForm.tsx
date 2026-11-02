"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";

type FormState = "idle" | "loading" | "sent" | "error";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>("idle");

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Subject is required.";
    if (!form.message.trim()) next.message = "Message is required.";
    else if (form.message.trim().length < 12)
      next.message = "Message is too short.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (profile.contactEndpoint) {
      setState("loading");
      fetch(profile.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((r) => (r.ok ? "sent" : "error"))
        .then((s) => setState(s as FormState))
        .catch(() => setState("error"));
      return;
    }

    // Mailto fallback
    const body = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`;
    const url = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setState("sent");
  };

  const fieldClass = (key: string) =>
    `w-full border bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)] ${
      errors[key] ? "border-red-400" : "border-[var(--border)]"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
            NAME
          </span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass("name")}
            placeholder="Your name"
          />
          {errors.name && (
            <span className="mt-1 block text-[11px] text-red-400">
              {errors.name}
            </span>
          )}
        </label>
        <label className="block">
          <span className="text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
            EMAIL
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={fieldClass("email")}
            placeholder="you@example.com"
          />
          {errors.email && (
            <span className="mt-1 block text-[11px] text-red-400">
              {errors.email}
            </span>
          )}
        </label>
      </div>

      <label className="block">
        <span className="text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
          SUBJECT
        </span>
        <input
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={fieldClass("subject")}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <span className="mt-1 block text-[11px] text-red-400">
            {errors.subject}
          </span>
        )}
      </label>

      <label className="block">
        <span className="text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
          MESSAGE
        </span>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={fieldClass("message")}
          placeholder="Write a short message…"
        />
        {errors.message && (
          <span className="mt-1 block text-[11px] text-red-400">
            {errors.message}
          </span>
        )}
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-[var(--accent-foreground)] transition-opacity disabled:opacity-60">
          <Send className="h-4 w-4" />
          {state === "loading" ? "Sending…" : "Send message"}
        </button>
        {state === "sent" && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-[var(--accent)]">
            ✓ Opens your mail client — check the draft before sending.
          </motion.span>
        )}
        {state === "error" && (
          <span className="text-sm text-red-400">
            Something went wrong. Try again or email directly.
          </span>
        )}
      </div>

      <p className="text-mono text-[10px] tracking-wide text-[var(--muted-soft)]">
        No backend configured — this form opens a pre-filled email draft via
        your mail client. Set `profile.contactEndpoint` to send via HTTP.
      </p>
    </form>
  );
}