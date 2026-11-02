"use client";

import { motion } from "framer-motion";

import { fadeUpShallow } from "@/lib/motion";
import { skillCategories } from "@/data/skills";


export function Skills() {
  return (
    <section
      id="skills"
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
            SECTION — 04
          </span>
          <h2 className="text-display mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
            Technical arsenal.
          </h2>
          <p className="mt-4 max-w-[50ch] text-sm text-[var(--muted)]">
            A curated set of tools and languages I work with, organized by domain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-px border border-[var(--border-strong)] bg-[var(--border-strong)] sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUpShallow}
              className="bg-[var(--surface)] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent)]" />
                <span className="text-mono text-[11px] tracking-[0.25em] text-[var(--muted-soft)]">
                  {category.title.toUpperCase()}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}