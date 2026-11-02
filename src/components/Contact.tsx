"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Link, MapPin, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { fadeUp } from "@/lib/motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="flex flex-col">
            <span className="text-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
              SECTION — 07
            </span>
            <h2 className="text-display mt-4 text-[clamp(2rem,5vw,4rem)] font-normal tracking-[-0.03em] text-[var(--foreground)]">
              Have something
              <br />
              interesting in mind?
            </h2>
            <p className="mt-6 max-w-[40ch] text-base leading-relaxed text-[var(--muted)]">
              I&apos;m always interested in connecting with people building
              interesting things.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-mono text-[11px] tracking-wide">
                  {profile.email}
                </span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]">
                  <ExternalLink className="h-4 w-4" />
                </span>
                <span className="text-mono text-[11px] tracking-wide">
                  GitHub
                </span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]">
                  <Link className="h-4 w-4" />
                </span>
                <span className="text-mono text-[11px] tracking-wide">
                  LinkedIn
                </span>
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="group flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
                <span className="inline-flex h-9 w-1 items-center justify-center rounded-full border border-[var(--border)]">
                  <Send className="h-4 w-4" />
                </span>
                <span className="text-mono text-[11px] tracking-wide">
                  Download resume
                </span>
              </a>
              <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <span className="inline-flex h-9 w-1 items-center justify-center rounded-full border border-[var(--border)]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-mono text-[11px] tracking-wide">
                  {profile.location}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="border border-[var(--border)] bg-[var(--surface)] p-8 lg:p-10">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}