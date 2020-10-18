//CONEXION A MONGOOSE

//var MongoClient = require('mongodb').MongoClient
//nombre de la base de datos nodeDriver
/*
var url = "mongodb://localhost/Agenda"

var mongoose = require('mongoose')
var Operaciones = require('./CRUD.js')

mongoose.connect(url)

//insertar
//hay q pasar el callback como parametro

Operaciones.insertarRegistro2((error, result) => {
    if(error)console.log(error)
    console.log(result)
})
*/




const mongoose = require('mongoose'); 
  
// Database connection 
mongoose.connect('mongodb://localhost/Agenda', { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}); 
  
// User model 
const { EventModel, UserModel }  = require("./model.js")

/*const UserModel = mongoose.model('Usuarios', { 
    userId: { type: Number, required: true, unique: true},
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true},
    email: { type: String, required: true},
    fechaNacimiento: { type: Date, required: true},
    psw: { type: String, required: true}
});*/ 
  
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