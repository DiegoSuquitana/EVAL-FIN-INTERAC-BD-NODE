const Router = require('express').Router();
const { EventModel, UserModel }  = require("./model.js")
var uid


// Login
Router.post('/login', function(req, res) {
    let usuario = req.body.usuario,
        psw = req.body.psw
        console.log("usuario: " + usuario);
        console.log("password: " + psw);
    UserModel.findOne({email: usuario}).exec(function(err, docs)  {
        if(docs != null){
            if(psw.search(docs.psw)!= -1){
                uid = docs.userId;
                res.end("Validado");
            }else{
                res.end("Contraseña no valida");
            }
        }else{
            res.end("Usuario no valido");
        }
  })
})

// Agregar un evento
Router.post('/newEvent', function(req, res) {
    let event = new EventModel({
        eventId: Math.floor(Math.random() * 50),
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        diaCompleto: req.body.allDay,
        fx_usuario: uid
    })
    console.log(event)
    console.log("VALOR UID")
    console.log(uid)
    event.save(function(error) {
        if (error) {
            res.status(500)
            return res.json(error);
            //res.json(error)
        }
        res.send("Evento guardado")
    })
})

// Eliminar un evento
Router.post('/deletEvent/:id', function(req, res) {
    let eid = req.body.id
    console.log(eid)
    EventModel.remove({eventId: eid}, function(error) {
        if(error) {
            res.status(500)
            return res.json(error);
        }
        res.send("Registro eliminado")
    })
})

// Actualizar un evento

Router.post('/updatEvent/:id', function(req, res){
    let eid = req.body.id,
        startU = req.body.start,
        endU = req.body.end,
        titleU = req.body.title,
        diaCompletoU = req.body.allDay,
        fx_usuarioU = req.body.fx_usuario

    console.log("eid")
    console.log(eid)

    let datos = {
        start: startU,
        title: titleU,
        diaCompleto: diaCompletoU,
        fx_usuario: fx_usuarioU
    }
    console.log(diaCompletoU);
    if (diaCompletoU == false) {
        datos["end"] = endU
    }

    EventModel.update({ eventId: eid }, datos, (error => {
        if (error) {
            res.status(500)
            return res.json(error);
        }
        res.send("Registro actualizado")
    }))

})


//Obtener todos los usuarios
Router.get('/all', function(req, res) {
    EventModel.find({}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
})

// Obtener un usuario por su id
Router.get('/', function(req, res) {
    let nombre = req.query.nombre
    Users.findOne({nombres: nombre}).exec(function(err, doc){
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(doc)
    })
})



module.exports = Router


