"use client";
// pages/interes.js
import { useState } from "react";

const Interes = () => {
  const [principal, setPrincipal] = useState(0);
  const [tasaAnual, setTasaAnual] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularInteres = () => {
    const tasaMensual = tasaAnual / 12 / 100; // Tasa de interés mensual
    const capitalizacionesMensuales = 12; // Número de capitalizaciones por año

    const montoTotal =
      principal *
      Math.pow(
        1 + tasaMensual / capitalizacionesMensuales,
        capitalizacionesMensuales * tiempo
      );

    const interesGenerado = montoTotal - principal;
    setResultado(interesGenerado.toFixed(2));
  };

  return (
    <div>
      <h1>Calculadora de Interés Compuesto</h1>
      <label>
        Principal:
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Tasa de Interés Anual (%):
        <input
          type="number"
          value={tasaAnual}
          onChange={(e) => setTasaAnual(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Tiempo (en años):
        <input
          type="number"
          value={tiempo}
          onChange={(e) => setTiempo(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calcularInteres}>Calcular</button>
      <br />
      <h2>Resultado: ${resultado}</h2>
    </div>
  );
};

export default Interes;
