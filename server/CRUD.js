//PARA MONGOOSE

const { EventModel, UserModel }  = require("./model.js")
const { use } = require("./rutas.js")

//crear una funcion llamada insertarRegistro, recive dos parametros
//parametros: nombre de la base de datos y call back para notificar la respuesta o el error

module.exports.insertarRegistro = function(callback){
    let usuarios = new UserModel(
		{userId:'1', nombres: "Diego Xavier", apellidos:"Suquitana", email:"sistemasdxsa@hotmail.com", fechaNacimiento:'1989-05-15', psw: "12345"},
		{userId:'2', nombres: "Diego Rafael", apellidos:"Suquitana", email:"DiegoR@hotmail.com", fechaNacimiento:'2011-11-11', psw: "12345"},
		{userId:'3', nombres: "Diego Gael", apellidos:"Suquitana ", email:"DiegoG@hotmail.com", fechaNacimiento:'2020-12-20', psw: "12345"})
    usuarios.save((error)=>{
        if(error)callback(error)
        callback(null, "Registro Guardado")
    })   
}

module.exports.insertarRegistro2 = function(db, callback){

  let coleccion = db.usuarios

  coleccion.insertMany([
  {userId:'1', nombres: "Diego Xavier", apellidos:"Suquitana", email:"sistemasdxsa@hotmail.com", fechaNacimiento:'1989-05-15', psw: "12345"},
  {userId:'2', nombres: "Diego Rafael", apellidos:"Suquitana", email:"DiegoR@hotmail.com", fechaNacimiento:'2011-11-11', psw: "12345"},
  {userId:'3', nombres: "Diego Gael", apellidos:"Suquitana ", email:"DiegoG@hotmail.com", fechaNacimiento:'2020-12-20', psw: "12345"}
], (error, result) => {
  console.log("Resultado del insert: " + result.toString())
})
     
}