"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const GastosList = () => {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const getGastos = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/gastos", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch gastos");
        }

        const data = await res.json();
        setGastos(data.gastos);
      } catch (error) {
        console.error("Error loading gastos: ", error);
      }
    };

    getGastos();
  }, []);

  console.log(gastos);

  return (
    <>
      {gastos.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.titulo}</h2>
            <div>{t.categoria}</div>
            <h3>{t.monto}</h3>
            <Link
              href={`gastos/editarGasto/${t._id}`} // Use t.id instead of item.id
              className="rounded bg-blue-700 text-white p-2"
            >
              Editar gasto
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default GastosList;
