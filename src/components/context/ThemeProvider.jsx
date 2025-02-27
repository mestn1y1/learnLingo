import { useState, useEffect } from "react";
import { ThemeContext, themes } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("yellow");

  useEffect(() => {
    const currentTheme = themes[theme];

    document.documentElement.style.setProperty(
      "--bg-color",
      currentTheme.bgColor
    );
    document.documentElement.style.setProperty(
      "--text-color",
      currentTheme.textColor
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      currentTheme.primaryColor
    );
  }, [theme]);

  const toggleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
