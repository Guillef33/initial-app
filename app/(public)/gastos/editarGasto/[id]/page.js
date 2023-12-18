import { FormEditarGastos } from "@/components/formularios/gastos/formEditarGastos";

const getGastoById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/gastos/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch gasto", {
        cause: {
          res,
        }
      });
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditGasto({ params }) {
  const { id } = params;

  try {
    const { gasto } = await getGastoById(id);

    if (!gasto) {
      console.error(`Gasto with id ${id} not found.`);
      return <div>Gasto not found</div>;
    }

    const { titulo, categoria, monto } = gasto;

    return (
      <FormEditarGastos
        id={id}
        titulo={titulo}
        categoria={categoria}
        monto={monto}
      />
    );
  } catch (error) {
    console.error("Error loading gasto: ", error);
    // Handle the error, for example, display an error message
    return <div>Error loading gasto</div>;
  }
}
