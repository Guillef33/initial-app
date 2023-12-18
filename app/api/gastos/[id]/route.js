import connectMongoDB from "@/database/connection/mongodb";
import Gasto from "@/database/models/gastos";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitulo: titulo, newCategoria: categoria, newMonto: monto } = await request.json();
  await connectMongoDB();
  await Gasto.findByIdAndUpdate(id, { titulo, categoria, monto });
  return NextResponse.json({ message: "Gasto updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const gasto = await Gasto.findOne({ _id: id });
  return NextResponse.json({ gasto }, { status: 200 });
}
