"use client";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light"); // Default to "light" until mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted to ensure client-side code runs only in the browser
    setIsMounted(true);

    // Access localStorage and window only after mounting
    const savedTheme =
      typeof window !== "undefined"
        ? (localStorage.getItem("theme") as Theme)
        : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set initial theme based on saved theme or system preference
    setTheme(savedTheme || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Skip until component is mounted

    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Avoid rendering children until the component is mounted to prevent hydration mismatches
  if (!isMounted) {
    return null; // or a loading placeholder if needed
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
