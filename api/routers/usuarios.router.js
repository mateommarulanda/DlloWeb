const express = require('express')
const router = express.Router()

const controller = require('../controllers/usuarios.controller')

// CREAR USUARIO
router.post('/usuarios', (req,res) =>{
    let usuario = req.body
    let info = controller.crearUsuario(usuario)
    return res.send(info)
})

// MODIFICAR USUARIO
router.put('/usuarios', (req,res) =>{
    let info = controller.modificarUsuario()
    return res.send(info)
})

// ELIMINAR USUARIO
router.delete('/usuarios/:id', (req,res) =>{
    let id = req.params.id
    let info = controller.eliminarUsuario(id)
    return res.send(info)
})

// CONSULTAR USUARIO
router.get('/usuarios', (req,res) =>{
    let info = controller.consultarUsuario()
    return res.send(info)
})

// CONSULTAR USUARIO LOGIN
router.post('/login', (req,res) =>{
    let info = controller.login()
    return res.send(info)
})

module.exports = router