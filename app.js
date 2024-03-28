// Importar Express
const express = require('express');

// Crear una instancia de Express
const app = express();

// Configurar el puerto del servidor
const puerto = 3000;

// Definir una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Exportar la instancia de Express
module.exports = app;