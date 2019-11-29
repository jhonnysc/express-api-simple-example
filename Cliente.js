const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Cliente', ClienteSchema)