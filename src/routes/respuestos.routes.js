const express = require('express')
const router = express.Router()
const { getSpare, createSpare, deleteSpare } = require('../controllers/respuestos.controllers')

router.get('/', getSpare)

router.post('/', createSpare)

router.delete('/:id', deleteSpare)

module.exports = router