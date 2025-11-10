import { useState, useEffect } from "preact/hooks";
import { Button } from "./ui/button";

function getDarkModePreference(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return (
    localStorage.getItem("darkMode") === "true" ||
    (!localStorage.getItem("darkMode") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState(getDarkModePreference);

  // Apply initial dark mode state on mount
  useEffect(() => {
    const initialDarkMode = getDarkModePreference();
    document.documentElement.classList.toggle("dark", initialDarkMode);
    setIsDark(initialDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", isDark.toString());
  }, [isDark]);

  return [isDark, setIsDark] as const;
}

export function DarkModeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4"
      aria-label="Toggle dark mode"
    >
      {isDark ? "☀️" : "🌙"}
    </Button>
  );
}
