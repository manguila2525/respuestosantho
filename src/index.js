const express = require('express')
require('dotenv').config()
const { dbConnect } = require('./db')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ extended: false }))

app.use('/api/spare', require('./routes/respuestos.routes'))

dbConnect()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))