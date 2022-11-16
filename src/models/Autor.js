import mongoose from "mongoose";

const autorScheme = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String},
  },
  {
    versionKey: false
  }
)

const autores = mongoose.model("autores", autorScheme);

export default autores;