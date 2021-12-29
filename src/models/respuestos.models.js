const mongoose = require('mongoose')
const Schema = mongoose.Schema

const respuestos = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  amount: {
    type: Number
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('respuestos', respuestos)