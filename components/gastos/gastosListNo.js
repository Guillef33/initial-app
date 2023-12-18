import Link from "next/link";

const getIngresos = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/ingresos", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch ingresos");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function GastosList() {
  const { gastos } = await getIngresos();
  console.log(gastos);

  return (
    <>
      {gastos.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.titulo}</h2>
            <div>{t.categoria}</div>
            <h3>{t.monto}</h3>
            <Link
              href={`gastos/editarGasto/${item.id}`}
              className="rounded bg-blue-700 text-white p-2"
            >
              Editar gasto
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
