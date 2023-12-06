const express = require('express');
const app = express();
const puerto = 80;
const UsuariosController = require('./controllers/UsuariosController');
const RegistrosController = require('./controllers/RegistrosController');
const EjerciciosController = require('./controllers/EjerciciosController');

// insertar = POST
// actualizar = PATCH

// reemplazar = PUT, no es necesario este

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola, proyecto EzGym');
});

// get usuarios
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
// get registros
app.get('/registros', RegistrosController.indexGet);
app.get('/registros/:id([0-9]+)', RegistrosController.itemGet);
// get ejercicios
app.get('/ejercicios', EjerciciosController.indexGet);
app.get('/ejercicios/:id([0-9]+)', EjerciciosController.itemGet);

// post usuarios
app.post('/usuarios', UsuariosController.indexPost);
// put usuarios
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
// patch usuarios
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

// post ejercicios
app.post('/ejercicios', EjerciciosController.indexPost);
// patch ejercicios
app.patch('/ejercicios/:id([0-9]+)', EjerciciosController.itemPatch);

// post registros
app.post('/registros', RegistrosController.indexPost);
// patch registros
app.patch('/registros/:id([0-9]+)', RegistrosController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});