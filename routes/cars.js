const express = require('express')
const route = express.Router()
const carController = require('../controllers/cars')

route.get('/cars/new', carController.new)
route.post('/cars', carController.create)
route.get('/cars', carController.index)
route.get('/cars/:id', carController.show)
route.delete('/cars/:id', carController.delete)
route.get('/cars/:id/edit', carController.edit)
route.put('/cars/:id', carController.update)

module.exports = route
