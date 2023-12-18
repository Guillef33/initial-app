import mongoose, { Schema } from "mongoose";

const ingresoSchema = new Schema(
    {
      titulo: String,
      categoria: String,
      monto: Number,
    },
    {
      timestamps: true,
    }
  );
  
  const Ingreso = mongoose.models.Ingreso || mongoose.model("ingresos", ingresoSchema);
  
  export default Ingreso;