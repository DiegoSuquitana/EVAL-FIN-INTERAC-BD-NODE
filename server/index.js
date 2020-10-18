const http = require('http'),
      path = require('path'),
      Routing = require('./rutas.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const PORT = 8082
const app = express()

const Server = http.createServer(app)

//mongoose.connect('mongodb://localhost/Agenda')

// Database connection 

mongoose.connect('mongodb://localhost/Agenda', { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}); 



app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/users', Routing)

Server.listen(PORT, function() {
  console.log('Server is listeng on port: ' + PORT)
})

  

 
// User model 
const { EventModel, UserModel }  = require("./model.js")

  
// Function call 
UserModel.insertMany([ 
    {userId:'1', nombres: "Diego Xavier", apellidos:"Suquitana", email:"sistemasdxsa@hotmail.com", fechaNacimiento:'1989-05-15', psw: "12345"},
    {userId:'2', nombres: "Diego Rafael", apellidos:"Suquitana", email:"DiegoR@hotmail.com", fechaNacimiento:'2011-11-11', psw: "12345"},
    {userId:'3', nombres: "Diego Gael", apellidos:"Suquitana ", email:"DiegoG@hotmail.com", fechaNacimiento:'2020-12-20', psw: "12345"}
]).then(function(){ 
    console.log("Data inserted")  // Success 
}).catch(function(error){ 
    console.log(error)      // Failure 
}); 
