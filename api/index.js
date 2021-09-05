// Importando el framework
const express = require('express')

// Inicializar el express
const app = express()

app.use(express.json())

// IMPORTAR RUTAS USUARIOS
const router_usuarios = require('./routers/usuarios.router')
app.use(router_usuarios)
// IMPORTAR RUTAS CATEGORIAS
const router_categorias =  require('./routers/categorias.router');
app.use(router_categorias)

// Definir un puerto, donde se ejecuta el api
const port = 3000 //USUARIOS
const port = 3001 // CATEGORIAS

// Iniciar el api
app.listen(port, () => {
  console.log(`API: http://localhost:${port}`)
})