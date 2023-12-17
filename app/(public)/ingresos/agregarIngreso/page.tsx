import Link from "next/link";
import { FormIngresos } from "@/components/formularios/ingresos/formIngresos";

export const metadata = {
  title: 'Ingresos Page',
  description: 'Vamos con Fernando para aprender bien Next',
}


function Ingresos() {
  return (
  <div>
    <h2 className="text-[2rem]">Agregar Ingreso</h2>
    <FormIngresos />
    <div className="mt-6">
          <Link
            href="/ingresos"
            className="rounded bg-blue-700 text-white p-2"
          >
            Volver al listado de ingresos   
          </Link>
        </div>
  </div>
  )
}

export default Ingresos;
