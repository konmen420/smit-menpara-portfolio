"use client";

import { motion } from "framer-motion";

import { fadeUpShallow } from "@/lib/motion";
import { achievements } from "@/data/achievements";


export function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-[var(--border)] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUpShallow}
          className="mb-12">
          <span className="text-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
            SECTION — 05
          </span>
          <h2 className="text-display mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
            Achievements.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px border border-[var(--border-strong)] bg-[var(--border-strong)] sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUpShallow}
              className="bg-[var(--surface)] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
                  {a.year}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </div>
              <h3 className="text-display mt-4 text-[clamp(1.2rem,2.2vw,1.6rem)] font-normal tracking-[-0.01em] text-[var(--foreground)]">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {a.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}