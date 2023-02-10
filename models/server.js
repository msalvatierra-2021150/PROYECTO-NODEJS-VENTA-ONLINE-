const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {
    constructor(options) {
        //configuracion Inicial
        this.app = express();
        this.port = process.env.PORT;  
        this.categoriaPath = '/api/categoria';

        //Conectar a base de datos
        this.conectarDB();

        this.middlewares();
            //cors
            this.app.use(cors());

            //Conversion de json a js
            //lectura y parse del body que mandamos en json
            this.app.use(express.json());
            this.app.use(express.static('public'));
            
        //Rutas de mi app
        this.routes();
    } 

    //Funcion de conexion
    async conectarDB() {
        await dbConection();
    }
    //Un middleware es una funcion que se ejecuta ante de las rutas
    middlewares() {
        //DIrectorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.categoriaPath, require ('../routes/categoria'));
    }

    listen() {
        this.app.listen(this.port, () =>{
            console.log(`Servidor corriendo en el puerto `, this.port );
        })
    }
 }

 //Exportamos la clase server
 module.exports = Server;