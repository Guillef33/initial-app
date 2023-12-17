import { FormIngresos } from "@/components/formularios/ingresos/formIngresos";

export const metadata = {
  title: 'Ingresos Page',
  description: 'Vamos con Fernando para aprender bien Next',
}


function Ingresos() {
  return (
  <div>
    <h2 className="text-[2rem]">Ingresos</h2>
    <FormIngresos />
  </div>
  )
}

export default Ingresos;
