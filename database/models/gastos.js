import mongoose, { Schema } from "mongoose";

const gastoSchema = new Schema(
    {
      titulo: String,
      categoria: String,
      monto: Number,
    },
    {
      timestamps: true,
    }
  );
  
  const Gasto = mongoose.models.Gasto || mongoose.model("gastos", gastoSchema);
  
  export default Gasto;