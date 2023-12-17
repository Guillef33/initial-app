"use client";

import { useThemeContext } from "@/providers/index";

function Dashboard() {
  const { ingreso, gasto, totalIngresos, totalGastos } = useThemeContext();

  const ingresosTotales = totalIngresos();
  const gastosTotales = totalGastos();

  return (
    <>
      <div>La totalidad de tu ingreso es de: {ingresosTotales}</div>
      <div>La totalidad de tu gasto es de: {gastosTotales}</div>
      <div>Tu balance es de {ingresosTotales - gastosTotales}</div>
    </>
  );
}

export default Dashboard;
