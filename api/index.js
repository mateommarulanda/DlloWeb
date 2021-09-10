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
// IMPORTAR RUTAS PROYECTOS
const router_proyecto = require('./routers/proyectos.router');
app.use(router_proyecto)
// IMPORTAR RUTAS RESERVAS
const router_reservas = require('./routers/reservas.router');
app.use(router_reservas)

// Definir un puerto, donde se ejecuta el api
const port = 3000 


// Iniciar el api
app.listen(port, () => {
  console.log(`API: http://localhost:${port}`)
})