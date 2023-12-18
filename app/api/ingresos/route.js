import connectMongoDB from "@/database/connection/mongodb";
import Ingreso from "@/database/models/ingresos";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { titulo, categoria, monto } = await request.json();
  console.log(JSON.stringify({ titulo, categoria, monto }));
  await connectMongoDB();
  await Ingreso.create({ titulo, categoria, monto });
  return NextResponse.json({ message: "Ingreso Creado" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const ingresos = await Ingreso.find();
  return NextResponse.json({ ingresos });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Ingreso.findByIdAndDelete(id);
  return NextResponse.json({ message: "Ingreso Borrado" }, { status: 200 });
}
