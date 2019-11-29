const express = require('express')
const Router = require('express').Router
const mongoose = require('mongoose')
const Cliente = require('./Cliente.js')
const Conta = require('./Conta')

mongoose.connect("mongodb://localhost:27017/techno")
  .then(() => {
    console.log('connectado')
  })

app = express();

app.use(express.json())

routes = new Router();

routes.get('/v1/cliente', async (req, res, next)  => {
  const clientes = await Cliente.find()
  res.status(200).send({
    clientes
  })
})

routes.post('/v1/cliente', async (req, res, next)  => {
  const { firstname, lastname, cpf } = req.body
  try {
    const cliente = await Cliente.create({
        firstname: firstname,
        lastname: lastname,
        cpf: cpf
    })
    await cliente.save()
    return res.status(201).send({
      id: cliente.id,
      firstname: cliente.firstname,
      lastname: cliente.lastname,
      cpf: cliente.cpf
    })
  } catch (e) {
    return res.status(403).send({
      message: "Cpf duplicado"
    })
  }
})



app.use(routes)

app.listen(3000)