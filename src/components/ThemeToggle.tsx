"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

// Standard hydration helper that avoids set-state-in-effect warning
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  const isDark = theme === "dark" || (theme === "system" && resolvedTheme === "dark");

  if (!mounted) {
    return (
      <span
        aria-hidden
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]">
      <Sun className="h-4 w-4 rotate-0 scale-100 text-[var(--accent)] transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 text-[var(--accent)] transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  );
}