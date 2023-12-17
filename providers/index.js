"use client";

import { useState, createContext, useContext } from "react";
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [ingreso, setIngreso] = useState([]);
  const [gasto, setGasto] = useState([]);
  const [gastoTotal, setGastoTotal] = useState(90);

  const agregarIngreso = (nuevoIngreso) => {
    setIngreso([...ingreso, nuevoIngreso]);
  };

  const totalIngresos = () => {
    let total = 0;

    ingreso.map((unidad) => {
      total = total + parseInt(unidad.monto);
    });

    console.log(total);
    return total;
  };

  const agregarGasto = (nuevoGasto) => {
    setGasto([...gasto, nuevoGasto]);
    const total = totalGastos();
    localStorage.setItem("gasto", total);
  };

  const totalGastos = () => {
    let total = localStorage.getItem("gasto");
    console.log(total);

    gasto.map((unidad) => {
      total = total + parseInt(unidad.monto);
    });

    let gastoFinal = total;

    return total;
  };

  const saveToLocalStorage = () => {};

  return (
    <ThemeContext.Provider
      value={{
        ingreso,
        agregarIngreso,
        totalIngresos,
        gasto,
        totalGastos,
        agregarGasto,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
