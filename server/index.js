
/*
//CONEXION A MONGOOSE

var MongoClient = require('mongodb').MongoClient
//nombre de la base de datos nodeDriver
var url = "mongodb://localhost/nodeDriver"

var mongoose = require('mongoose')
var Operaciones = require('./CRUD.js')

mongoose.connect(url)
*/

const http = require('http'),
      path = require('path'),
      Routing = require('./rutas.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const PORT = 8082
const app = express()

const Server = http.createServer(app)

mongoose.connect('mongodb://localhost/Agenda')


app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/users', Routing)

Server.listen(PORT, function() {
  console.log('Server is listeng on port: ' + PORT)
})
