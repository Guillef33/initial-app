"use client";
import Link from "next/link";
import { useThemeContext } from "@/providers/index";

function Gastos() {
  const { gasto, totalGastos } = useThemeContext();

  const gastosTotales = totalGastos();

  //  let total = localStorage.getItem("gasto");

  return (
    <>
      <div>
        <h2>Estos son los ingresos de este mes</h2>
        <div className="grid grid-cols-3">
          {gasto.map((item) => {
            return (
              <div className="flex flex-col">
                <p>{item.name}</p>
                <p>{item.categoria}</p>
                <p>{item.monto}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h2> La totalidad de tu gasto es de: {gastosTotales}</h2>
        </div>
        <div className="mt-6">
          <Link
            href="gastos/agregarGasto"
            className="rounded bg-blue-700 text-white p-2"
          >
            Agregar nuevo gasto
          </Link>
        </div>
      </div>
    </>
  );
}

export default Gastos;
