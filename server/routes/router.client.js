const express = require('express')
const clientController = require('../controllers/clientController')
const clientRouter = express();

clientRouter.get('/getAll', clientController.getAll)
clientRouter.post('/create', clientController.create)
clientRouter.get('/findRoute', clientController.findRoute)
clientRouter.delete('/delete/:id', clientController.deleteById)


module.exports = {
  clientRouter
}