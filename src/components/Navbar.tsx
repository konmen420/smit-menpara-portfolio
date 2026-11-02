"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { smoothScrollTo } from "@/lib/utils";

const SECTIONS = ["hero", "about", "work", "experience", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 120;
      let current = "hero";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSelect = (href: string) => {
    const id = href.replace("#", "");
    smoothScrollTo(id);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--surface)]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}>
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10 md:py-6">
        <button
          type="button"
          onClick={() => smoothScrollTo("hero")}
          className="flex items-baseline gap-2 text-mono text-xs tracking-[0.28em] text-[var(--foreground)]">
          <span className="text-[var(--accent)]">SMIT MENPARA</span>
          <span className="hidden text-[var(--muted-soft)] sm:inline">/</span>
          <span className="hidden text-[var(--muted-soft)] sm:inline">
            DEV
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleSelect(link.href)}
                className="group relative text-sm tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full bg-[var(--accent)] transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
            <div className="mx-auto w-full max-w-[1440px] px-6 py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  return (
                    <li key={link.href}>
                      <button
                        type="button"
                        onClick={() => handleSelect(link.href)}
                        className="flex w-full items-center justify-between py-3 text-base text-[var(--foreground)]">
                        <span>{link.label}</span>
                        <span className="text-mono text-xs text-[var(--muted-soft)]">
                          {String(SECTIONS.indexOf(id) + 1).padStart(2, "0")}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}