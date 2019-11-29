const mongoose = require('mongoose')

const ContaCorrenteSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: true
  },
  saldo: {
    type: Number
  },
  historico: {
    type: String
  }
},
{
  timestamps: true
})

module.exports = mongoose.model("Conta", ContaCorrenteSchema)