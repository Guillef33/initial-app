import Link from "next/link";
import IngresosList from "@/components/ingresos/IngresosList";

function Ingresos() {

  return (
    <>
      <div>
        <div>
        {/* @ts-expect-error Server Component */}
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
