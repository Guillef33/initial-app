"use client";

import { useThemeContext } from "@/providers/index";

function Dashboard() {
  const { ingreso } = useThemeContext();

  return (
    <div>
      <h2>Estos son los ingresos de este mes</h2>

      {ingreso.map((item) => {
        console.log(item);
        return (
          <>
            <p>{item.name}</p>
            <p>{item.categoria}</p>
            <p>{item.monto}</p>
          </>
        );
      })}
    </div>
  );
}

export default Dashboard;
