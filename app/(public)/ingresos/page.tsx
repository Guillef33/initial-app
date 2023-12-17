"use client";
import Link from "next/link";
import { useThemeContext } from "@/providers/index";

function Ingresos() {
  const { ingreso, totalIngresos } = useThemeContext();

  const ingresosTotales = totalIngresos();

  return (
    <>
      <div>
        <h2>Estos son los ingresos de este mes</h2>
        <div className="grid grid-cols-3">
          {ingreso.map((item) => {
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
          <h2> La totalidad de tu ingreso es de: {ingresosTotales}</h2>
        </div>
        <div className="mt-6">
          <Link
            href="ingresos/agregarIngreso"
            className="rounded bg-blue-700 text-white p-2"
          >
            Agregar nuevo ingreso
          </Link>
        </div>
      </div>
    </>
  );
}

export default Ingresos;
