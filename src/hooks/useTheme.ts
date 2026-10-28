import { useCallback, useEffect } from "react";

type Theme = "light" | "dark";

// Keep in sync with the inline script in index.html, which applies the theme before paint.
const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (private mode, strict settings): the choice lasts for this visit.
  }
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

/** Follows the system theme until the visitor picks one with the toggle. */
export function useTheme() {
  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    const followSystem = (event: MediaQueryListEvent) => {
      if (readStoredTheme() === null) applyTheme(event.matches ? "dark" : "light");
    };
    query.addEventListener("change", followSystem);
    return () => query.removeEventListener("change", followSystem);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
    storeTheme(next);
  }, []);

  return { toggleTheme };
}
