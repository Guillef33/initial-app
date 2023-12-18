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
      <table>
        <thead>
          <tr>
            <th>Enero</th>
            <th>Febrero</th>
            <th>Marzo</th>
            <th>Abril</th>
            <th>Mayo</th>
            <th>Junio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {ingreso.map((i) => {
              <th>{i.fecha}</th>;
            })}

            <th>4000</th>
            <th>4000</th>
            <th>4000</th>
            <th>4000</th>
            <th>4000</th>
            <th>4000</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Dashboard;
