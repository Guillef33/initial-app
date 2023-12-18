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

export default async function IngresosList() {
  const { ingresos } = await getIngresos();
  console.log(ingresos);

  return (
    <>
      {ingresos.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.titulo}</h2>
            <div>{t.categoria}</div>
            <h3>{t.monto}</h3>
          </div>
        </div>
      ))}
    </>
  );
}
