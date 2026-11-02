"use client";

import { motion } from "framer-motion";
import { ExternalLink, Link } from "lucide-react";
import { easeOut } from "@/lib/motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const hasLinks = project.github || project.live;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: easeOut }}
      className="group relative">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative block w-full overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--surface)] text-left transition-colors hover:border-[var(--accent)]">
        {/* Visual composition */}
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${project.accent}55, transparent 60%), radial-gradient(circle at 80% 80%, ${project.accent}33, transparent 55%)`,
          }}>
          <div className="absolute inset-0 bg-[var(--surface)]/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-display text-[clamp(3rem,8vw,7rem)] font-normal text-[var(--foreground)]/10">
              {project.number}
            </span>
          </div>
          {/* Grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="text-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
              PROJECT {project.number}
            </span>
            {project.metrics ? (
              <span className="text-mono text-[10px] text-[var(--muted-soft)]">
                {project.metrics.map((m) => m.value).join(" · ")}
              </span>
            ) : null}
          </div>
          <h3 className="text-display mt-2 text-[clamp(1.25rem,2.2vw,1.7rem)] font-normal tracking-[-0.01em] text-[var(--foreground)]">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
            {project.shortDescription}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="border border-[var(--border-strong)] bg-[var(--surface-2)] px-2 py-0.5 text-mono text-[10px] tracking-wide text-[var(--muted)]">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-mono text-[10px] text-[var(--muted-soft)]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
            <span className="text-xs tracking-wide text-[var(--muted)]">
              {hasLinks ? "Open case study" : "Case study"}
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--muted)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
              →
            </span>
          </div>
        </div>
      </button>

      {/* Standalone link buttons (outside clickable card) */}
      {hasLinks && (
        <div className="mt-3 flex items-center gap-3 pl-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-mono text-[11px] tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
              <ExternalLink className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-mono text-[11px] tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </a>
          )}
          {!project.live && (
            <span className="inline-flex items-center gap-1.5 text-mono text-[10px] tracking-wide text-[var(--muted-soft)]">
              <Link className="h-3 w-3" />
              Live demo — placeholder
            </span>
          )}
        </div>
      )}
    </motion.article>
  );
}