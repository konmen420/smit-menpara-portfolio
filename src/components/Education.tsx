"use client";

import { motion } from "framer-motion";

import { fadeUpShallow } from "@/lib/motion";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";


const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Database Management Systems",
  "Machine Learning",
  "Software Engineering",
  "Cybersecurity Fundamentals",
  "Distributed Systems",
];

export function Education() {
  return (
    <section
      id="education"
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
            SECTION — 06
          </span>
          <h2 className="text-display mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
            Education.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUpShallow}
            className="border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)]">
                <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
              </span>
              <div>
                <p className="text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
                  INSTITUTION
                </p>
                <p className="text-sm text-[var(--foreground)]">
                  Indian Institute of Information Technology Kota
                </p>
              </div>
            </div>

            <h3 className="text-display mt-6 text-[clamp(1.5rem,3vw,2.2rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
              Bachelor of Technology
            </h3>
            <p className="mt-1 text-sm text-[var(--accent)]">
              Computer Science and Engineering
            </p>
            <div className="mt-6 flex items-center gap-2 text-mono text-[11px] tracking-[0.2em] text-[var(--muted-soft)]">
              <MapPin className="h-3.5 w-3.5" />
              IIIT Kota, India
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Academic information, relevant coursework, and academic projects
              are listed here as editable placeholders.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUpShallow}
            className="border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)]">
                <BookOpen className="h-5 w-5 text-[var(--accent)]" />
              </span>
              <p className="text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
                RELEVANT COURSEWORK
              </p>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {coursework.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}