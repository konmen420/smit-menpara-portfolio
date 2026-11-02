"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: heading + metadata */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            custom={0}
            variants={fadeUp}
            className="flex flex-col">
            <span className="text-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
              SECTION — 01
            </span>
            <h2 className="text-display mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
              A little about me.
            </h2>
            <div className="mt-6 flex items-center gap-3 text-mono text-[11px] tracking-[0.25em] text-[var(--muted-soft)]">
              <span className="h-px w-10 bg-[var(--border-strong)]" />
              <span>IIIT KOTA</span>
              <span className="h-px w-10 bg-[var(--border-strong)]" />
            </div>
          </motion.div>

          {/* Right: intro + statement + education panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            custom={1}
            variants={fadeUp}
            className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              B.Tech Computer Science and Engineering student at IIIT Kota. I
              work at the intersection of AI/ML and full-stack development,
              building practical software projects that solve real problems.
            </p>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              My interests span intelligent systems, cybersecurity, networking,
              and thoughtful product engineering. I enjoy problem-solving and
              compete in programming contests as a way to sharpen my craft.
            </p>
            <p className="text-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-normal tracking-[-0.01em] text-[var(--foreground)]">
              I enjoy working at the intersection of engineering,
              <br />
              intelligence, and thoughtful design.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="flex items-center gap-2 text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
                  <GraduationCap className="h-3.5 w-3.5" />
                  DEGREE
                </div>
                <p className="mt-2 text-sm text-[var(--foreground)]">
                  Bachelor of Technology
                </p>
                <p className="text-mono text-[11px] text-[var(--muted-soft)]">
                  Computer Science & Engineering
                </p>
              </div>
              <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="flex items-center gap-2 text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
                  <MapPin className="h-3.5 w-3.5" />
                  INSTITUTION
                </div>
                <p className="mt-2 text-sm text-[var(--foreground)]">
                  Indian Institute of Information Technology Kota
                </p>
                <p className="text-mono text-[11px] text-[var(--muted-soft)]">
                  IIIT Kota
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}