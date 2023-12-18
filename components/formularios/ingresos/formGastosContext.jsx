"use client";

import { useState } from "react";

import { useThemeContext } from "@/providers/index";

export const FormGastos = () => {
  const initialState = {
    nombre: "",
    categoria: "",
    monto: "",
  };

  const { gasto, agregarGasto } = useThemeContext();

  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const crearGasto = (event) => {
    event.preventDefault();

    let nuevoGasto = {
      name: event.target[0].value,
      categoria: event.target[1].value,
      monto: event.target[2].value,
    };

    agregarGasto(nuevoGasto);
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={crearGasto}>
        <label className="pt-2">Ingrese su nombre</label>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          value={values.nombre}
        />
        <label className="pt-2">Ingrese su categoria</label>
        <input
          type="text"
          name="categoria"
          onChange={handleChange}
          value={values.categoria}
        />
        <label className="pt-2">Ingrese su monto</label>
        <input
          type="number"
          name="monto"
          onChange={handleChange}
          value={values.monto}
        />
        <button type="submit" className="text-white bg-blue-700 rounded">
          Crear
        </button>
      </form>
    </div>
  );
};
