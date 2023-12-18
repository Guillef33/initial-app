import Link from "next/link";
import { FormGastos } from "@/components/formularios/gastos/FormGastos";

export const metadata = {
  title: "Gastos Page",
  description: "Vamos con Fernando para aprender bien Next",
};

function AgregarGasto() {
  return (
    <div>
      <h2 className="text-[2rem]">Agregar Gasto</h2>
      <FormGastos />
      <div className="mt-6">
        <Link href="/gastos" className="rounded bg-blue-700 text-white p-2">
          Volver al listado de Gastos
        </Link>
      </div>
    </div>
  );
}

export default AgregarGasto;
