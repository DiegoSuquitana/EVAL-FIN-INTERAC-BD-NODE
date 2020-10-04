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
  titulo: { type: String, required: true },
  fechaInicio: { type: Date, required: true},
  horaInicio: { type: String, required: true},
  fechaFinalizacion: { type: Date, required: true},
  horaFinalizacion: { type: String, required: true},
  diaCompleto: { type: Boolean, required: true},
  psw: { type: String, required: true},
  fx_usuario: { type: Number, required: true, unique: true}
})

let EventModel = mongoose.model('Eventos', EventSchema)

module.exports = UserModel
module.exports = EventModel

