"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const FormGastos = () => {

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [monto, setMonto] = useState("");

  const router = useRouter();

  const crearGasto = async (e) => {
    e.preventDefault();

    if (!titulo || !categoria || !monto) {
      alert("Titulo, categoria y monto are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/gastos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({titulo, categoria, monto }),
      });

      if (res.ok) {
        router.push("/gastos");
      } else {
        throw new Error("Failed to create a gastos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={crearGasto}>
        <label className="pt-2">Ingrese su titulo</label>
        <input
          type="text"
          name="titulo"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        />
        <label className="pt-2">Ingrese su categoria</label>
        <input
          type="text"
          name="categoria"
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
        />
        <label className="pt-2">Ingrese su monto</label>
        <input
          type="number"
          name="monto"
          onChange={(e) => setMonto(e.target.value)}
          value={monto}
        />
        <button type="submit" className="text-white bg-blue-700 rounded">
          Crear
        </button>
      </form>
    </div>
  );
};
