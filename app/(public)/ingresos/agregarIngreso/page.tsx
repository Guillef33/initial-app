import Link from "next/link";
import { FormIngresos } from "@/components/formularios/ingresos/formIngresos";

export const metadata = {
  title: 'Ingresos Page',
  description: 'El lugar donde ingresas tus ingresos',
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
