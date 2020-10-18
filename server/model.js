const mongoose = require('mongoose')

const SchemaU = mongoose.Schema

let UserSchema = new SchemaU({
  userId: { type: Number, required: true, unique: true},
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true},
  email: { type: String, required: true},
  fechaNacimiento: { type: Date, required: true},
  psw: { type: String, required: true}
})

let UserModel = mongoose.model('Usuarios', UserSchema)

const SchemaE = mongoose.Schema

let EventSchema = new SchemaE({
  eventId: { type: Number, required: true, unique: true},
  title: { type: String, required: true },
  start: { type: Date, required: true},
  end: { type: Date},
  allDay: { type: Boolean, required: true},
  fx_usuario: { type: Number,required: true}
})

let EventModel = mongoose.model('Eventos', EventSchema)

module.exports = {   EventModel,  UserModel  }

