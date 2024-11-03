//Cars

const express = require('express')

const app = express()

const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')

const Car = require('./models/Cars.js')
const carRoute = require('./routes/cars')

//

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

//

app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

app.use(carRoute)

//

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
