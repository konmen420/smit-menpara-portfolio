"use client";

import { ExternalLink, Link, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  // Static year for portfolio - update manually each year
  // Using 2026 as the portfolio's target year
  const YEAR = 2026;

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-10">
        <div className="flex items-center gap-3">
          <span className="text-mono text-[11px] tracking-[0.28em] text-[var(--foreground)]">
            SMIT MENPARA
          </span>
          <span className="text-mono text-[11px] tracking-[0.2em] text-[var(--muted-soft)]">
            © {YEAR}
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-mono text-[11px] tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
            <ExternalLink className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-mono text-[11px] tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
            <Link className="h-3.5 w-3.5" />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-1.5 text-mono text-[11px] tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
        </nav>

        <span className="text-mono text-[10px] tracking-[0.2em] text-[var(--muted-soft)]">
          BUILT WITH NEXT.JS · TAILWIND · FRAMER MOTION
        </span>
      </div>
    </footer>
  );
}