import { useState, useEffect } from "preact/hooks";

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
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle dark mode"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
