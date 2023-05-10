import React, { createContext, useContext, useEffect, useState } from "react";

// Create theme context
export const ThemeContext = createContext(null);

// Return theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Theme provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  //const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  function saveTheme() {
    localStorage.setItem('theme', theme);
  }

  useEffect(() => {
    console.log(theme);
    document.querySelector("body").setAttribute("data-theme", theme);
    saveTheme();
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
