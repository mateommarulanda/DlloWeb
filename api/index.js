// Importando el framework
const express = require('express')

// Inicializar el express
const app = express()

app.use(express.json())

// IMPORTAR RUTAS
const router_usuarios = require('./routers/usuarios.router')
app.use(router_usuarios)

// Definir un puerto, donde se ejecuta el api
const port = 3000

// Iniciar el api
app.listen(port, () => {
  console.log(`API: http://localhost:${port}`)
})