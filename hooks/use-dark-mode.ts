"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const DEFAULT_THEME = "dark";

function useDarkMode(): [string, Dispatch<SetStateAction<string>>] {
  const [theme, setTheme] = useState(
    typeof window !== undefined
      ? localStorage.getItem("theme") || DEFAULT_THEME
      : DEFAULT_THEME
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
