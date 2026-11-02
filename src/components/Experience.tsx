"use client";

import { motion } from "framer-motion";

import { fadeUpShallow } from "@/lib/motion";

type Entry = {
  year: string;
  title: string;
  org: string;
  description: string[];
};

const entries: Entry[] = [
  {
    year: "2024 — Present",
    title: "Academic & Technical Project Work",
    org: "IIIT Kota",
    description: [
      "Building practical software projects spanning AI/ML, full-stack development, and cybersecurity research.",
      "Smart Grid Cybersecurity research using SDN, Mininet, and Open vSwitch.",
      "AI/ML development including ML-based fault detection and RAG platforms.",
    ],
  },
  {
    year: "2024",
    title: "Full-Stack Application Development",
    org: "Independent Projects",
    description: [
      "MERN-stack and FastAPI-based applications deployed on Render and Vercel.",
      "Responsive interfaces with Tailwind CSS and modern tooling.",
    ],
  },
  {
    year: "2024",
    title: "Smart Grid Cybersecurity Research",
    org: "Independent Research",
    description: [
      "Experimentation on cyber threats and mitigation in smart-grid environments.",
      "IEC 61850 GOOSE protocol analysis, SDN monitoring, and CUSUM-based anomaly detection research.",
    ],
  },
  {
    year: "2023 — Ongoing",
    title: "Competitive Programming",
    org: "LeetCode · Codeforces · CodeChef",
    description: [
      "Regular problem-solving practice across major competitive programming platforms.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
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
            SECTION — 03
          </span>
          <h2 className="text-display mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
            Experience &amp; research.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px border border-[var(--border-strong)] bg-[var(--border-strong)] sm:grid-cols-2">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUpShallow}
              className="group bg-[var(--surface)] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-display text-[clamp(1.2rem,2.2vw,1.6rem)] font-normal tracking-[-0.01em] text-[var(--foreground)]">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--accent)]">{entry.org}</p>
                </div>
                <span className="shrink-0 text-mono text-[10px] tracking-[0.2em] text-[var(--muted-soft)]">
                  {entry.year}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {entry.description.map((d, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                    <span className="mt-2 h-px w-2 shrink-0 bg-[var(--border-strong)]" />
                    <span>{d}</span>
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