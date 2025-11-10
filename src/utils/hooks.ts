import { useCallback, useEffect, useState } from "preact/hooks";

/**
 * Custom hook for clipboard operations
 */
export function useClipboard() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccess(true);
      setError(null);
      setTimeout(() => setSuccess(false), 2000);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to copy");
      setSuccess(false);
      return false;
    }
  }, []);

  const paste = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setError(null);
      return text;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to paste");
      return null;
    }
  }, []);

  return { copy, paste, error, success };
}

/**
 * Custom hook for debouncing values
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
