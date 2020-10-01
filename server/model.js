const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
  userId: { type: Number, required: true, unique: true},
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true},
  email: { type: String, required: true},
  fechaNacimiento: { type: Date, required: true},
  psw: { type: String, required: true}
})

let UserModel = mongoose.model('Usuario', UserSchema)

module.exports = UserModel