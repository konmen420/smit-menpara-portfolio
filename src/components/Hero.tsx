"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Link } from "lucide-react";
import { profile } from "@/data/profile";
import { easeOut } from "@/lib/motion";

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: easeOut },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: easeOut },
  }),
};

export function Hero() {
  const lines = profile.tagline.split("\n");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col px-6 py-28 sm:px-10 md:py-32 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        {/* Top metadata bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-between text-mono text-[11px] tracking-[0.3em] text-[var(--muted-soft)]">
          <span className="flex items-center gap-3">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            PORTFOLIO — 2026
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <span>{profile.location}</span>
            <span className="h-px w-6 bg-[var(--border-strong)]" />
            <span>EST. 2026</span>
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mt-10 sm:mt-14">
          <div className="max-w-[18ch]">
            {lines.map((line, i) => (
              <motion.h1
                key={line}
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="text-display text-[clamp(2.6rem,7.2vw,6.4rem)] font-normal tracking-[-0.03em] text-[var(--foreground)]">
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            custom={lines.length}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-[52ch] text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div
            custom={lines.length + 1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-2.5 text-sm tracking-wide text-[var(--foreground)] transition-colors hover:border-[var(--accent)]">
              Explore selected work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              <ArrowDown className="h-4 w-4" />
              Download resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              <ExternalLink className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              <Link className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </motion.div>
        </div>

        {/* Availability + bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-auto flex flex-wrap items-end justify-between gap-6 border-t border-[var(--border)] pt-6 text-mono text-[11px] tracking-[0.25em] text-[var(--muted-soft)]">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            AVAILABLE FOR OPPORTUNITIES
          </span>
          <span className="hidden sm:inline">
            SCROLL — 06 SECTIONS
          </span>
        </motion.div>
      </div>
    </section>
  );
}