const {response, request } = require('express');

//Importacion del modelo
const Categoria = require('../models/categoria');

const getCategoria = async(req = request, res = response) => {

    const listaCategoria = await Promise.all([
        Categoria.find()
    ]);

    res.json ({
        msg: 'get Api - Controlador Categoria',
        listaCategoria
    })
}

const postCategoria = async(req = request, res = response) => {
    //nombre, correo, password y role
    const {nombre, pasillo, piso} = req.body;
    const categoriaGuardadaDB = new Categoria({nombre, pasillo, piso});

    //Guardar en DB
    await categoriaGuardadaDB.save();
    
    res.json ({
        msg: 'POST Api - Controlador categoria para agregar',
        categoriaGuardadaDB
    });
}

const putCategoria = async(req = request, res = response) => {
    //Obtenemos info de la ruta
    const {id} = req.params;
    //Especificamos lo que no queremos que cambie, lo que no esta se cambia
    const {...resto} = req.body;
    
    //Editar al usuario por el id
    const categoriaEditado = await Categoria.findByIdAndUpdate(id, resto);

    res.json ({
        msg: 'PUT editar Categoria',
        id, categoriaEditado
    })
}

const deleteCategoria = async(req = request, res = response) => {
    //Obtenemos info de la ruta el id
    const {id} = req.params;
    
    //Eliminar al usuario por el id fisicamente de la DB
    const categoriaEliminado = await Categoria.findByIdAndDelete(id);
    
    //Darlo de baja pero no borrarlo en la DB
    //const usuarioEliminado = await Usuario.findByIdAndUpdate(id, {estado: false});
    
    res.json ({
        msg: 'Delete eliminar Categoria',
        id, categoriaEliminado
    });
}

module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}

//CONTROLADOR