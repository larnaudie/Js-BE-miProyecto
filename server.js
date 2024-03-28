// Importar la aplicación Express desde app.js
const app = require('./app');

// Configurar el puerto del servidor
const puerto = 3000;

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});