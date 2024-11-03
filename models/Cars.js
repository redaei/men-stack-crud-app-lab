const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  make: String,
  model: Number,
  fuelType: String,
  numberOfDoors: Number,
  isUsed: Boolean
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car
