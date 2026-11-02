import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Lightweight scroll helper used by the nav links.
export function smoothScrollTo(id: string) {
  if (typeof window === "undefined") return;
  const target = document.getElementById(id);
  if (!target) return;
  const offset = 72; // height of the sticky nav
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}