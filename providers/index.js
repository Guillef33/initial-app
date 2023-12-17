"use client";

import { useState, createContext, useContext } from "react";
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [ingreso, setIngreso] = useState([]);

  const agregarIngreso = (nuevoIngreso) => {
    setIngreso([...ingreso, nuevoIngreso]);
  };

  return (
    <ThemeContext.Provider value={{ ingreso, agregarIngreso }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
