"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { projects } from "@/data/projects";
import { easeOut } from "@/lib/motion";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <section
      id="work"
      className="border-t border-[var(--border)] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <span className="text-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
              SECTION — 02
            </span>
            <h2 className="text-display mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
              Selected work.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xs text-sm text-[var(--muted)]">
            A selection of systems, platforms, and research projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number] | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-sm border border-[var(--border)] bg-[var(--surface)] p-8 scrollbar-none">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]">
              <X className="h-4 w-4" />
            </button>

            <span className="text-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
              PROJECT {project.number}
            </span>
            <h3 className="text-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
              {project.title}
            </h3>

            {project.metrics ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="border border-[var(--border-strong)] bg-[var(--surface-2)] px-4 py-2">
                    <span className="block text-mono text-[10px] tracking-[0.25em] text-[var(--muted-soft)]">
                      {m.label}
                    </span>
                    <span className="text-display text-xl text-[var(--foreground)]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-6 space-y-3">
              {project.description.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-[var(--muted)]">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-[var(--border-strong)] bg-[var(--surface-2)] px-2.5 py-1 text-mono text-[11px] tracking-wide text-[var(--muted)]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-6">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]">
                  View source
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-[var(--muted-soft)]">
                  GitHub — placeholder
                </span>
              )}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]">
                  Live demo
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-[var(--muted-soft)]">
                  Live demo — placeholder
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}