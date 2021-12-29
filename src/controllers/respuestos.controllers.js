const Spares = require('../models/respuestos.models')

const getSpare = async (req, res) => {

  try {

    const spares = await Spares.find()
    res.json(spares)

  } catch (e) {
    res.json({ message: "Error" })
  }

}

const createSpare = async (req, res) => {

  try {

    const spare = await Spares.create(req.body)
    res.json(spare)

  } catch (e) {
    res.json({ message: "Error al crear un repuesto" })
  }

}

const deleteSpare = async (req, res) => {

  try {
    const { id } = req.params
    const spare = await Spares.remove({ _id: id })
    res.send("remove")
  } catch (e) {
    res.send("error")
  }

}

module.exports = { getSpare, createSpare, deleteSpare }