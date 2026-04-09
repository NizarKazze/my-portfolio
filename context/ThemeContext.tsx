"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export type Theme = "light" | "dark";

export interface ThemeTokens {
  bg: string;
  surface: string;
  surface2: string;
  surfaceInput: string;
  border: string;
  border2: string;

  textPrimary: string;
  textMuted: string;
  textFaint: string;
  textGhost: string;

  hoverRow: string;
  selectedRow: string;
  accent: string;

  heroText: string;
  heroTextMuted: string;

  btnBg: string;
  btnText: string;
  btnBorder: string;

  titleColor: string;
}

export interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  tokens: ThemeTokens;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// ─── Tokens ───────────────────────────────────────────────────────────────────

export const tokens: Record<Theme, ThemeTokens> = {
  light: {
    bg: "#ffffff",
    surface: "#f8f9fb",
    surface2: "#f0f2f5",
    surfaceInput: "#f4f5f8",
    border: "#e4e7ed",
    border2: "#d0d4dc",

    textPrimary: "#0d0f14",
    textMuted: "#4a5068",
    textFaint: "#8a90a4",
    textGhost: "#c4c8d4",

    hoverRow: "rgba(0,0,0,0.025)",
    selectedRow: "rgba(99,102,241,0.06)",
    accent: "#6366f1",

    heroText: "#ffffff",
    heroTextMuted: "#d1d5db",

    btnBg: "#ffffff",
    btnText: "#0d0f14",
    btnBorder: "rgba(0,0,0,0.12)",

    titleColor: "#0d0f14"
  },

  dark: {
    bg: "#080a0f",
    surface: "#0f1117",
    surface2: "#161921",
    surfaceInput: "#080a0f",
    border: "#1e2128",
    border2: "#2a2e38",

    textPrimary: "#e8eaf0",
    textMuted: "#9099ac",
    textFaint: "#6b7080",
    textGhost: "#3b4150",

    hoverRow: "rgba(255,255,255,0.018)",
    selectedRow: "rgba(99,102,241,0.08)",
    accent: "#818cf8",

    heroText: "#ffffff",
    heroTextMuted: "#b19eef",

    btnBg: "#ffffff",
    btnText: "#080a0f",
    btnBorder: "rgba(255,255,255,0.15)",

    titleColor: "#8b7db7"

  },
};

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        tokens: tokens[theme],
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  return ctx;
}