const Car = require('../models/Cars')

const newCar = (req, res) => {
  res.render('cars/new.ejs')
}

const create = async (req, res) => {
  if (req.body.isUsed == 'on') {
    req.body.isUsed = true
  } else {
    req.body.isUsed = false
  }
  await Car.create(req.body)
  res.redirect('/cars')
  console.log(req.body)
}

const index = async (req, res) => {
  const cars = await Car.find({})
  res.render('cars/index.ejs', { cars })
}

const show = async (req, res) => {
  const id = req.params.id
  const car = await Car.findById(id)
  res.render('cars/show.ejs', { car })
}

const deleteCar = async (req, res) => {
  const id = req.params.id
  await Car.findByIdAndDelete(id)
  res.redirect('/cars')
}

const edit = async (req, res) => {
  const id = req.params.id
  const car = await Car.findById(id)
  res.render('cars/edit.ejs', { car })
}

const update = async (req, res) => {
  const id = req.params.id
  if (req.body.isUsed == 'on') {
    req.body.isUsed = true
  } else {
    req.body.isUsed = false
  }
  await Car.findByIdAndUpdate(id, req.body)
  res.redirect(`/cars/${id}`)
}

module.exports = {
  new: newCar,
  create,
  index,
  show,
  delete: deleteCar,
  edit,
  update
}
