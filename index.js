//Importaciones principales
require('dotenv').config();

//Importacion de archivos
const Server = require('./models/server');

//Instancia del servidor de arranque
const servidorIniciado = new Server();

//Llanar al metodo listen que levenata el servidor
servidorIniciado.listen();