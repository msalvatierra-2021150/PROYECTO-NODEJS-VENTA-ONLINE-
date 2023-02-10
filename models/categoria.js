const {Schema, model } = require('mongoose');

const categoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    pasillo: {
        type: Number,
        required: [true, 'El pasillo es obligatorio'],
    },
    piso: {
        type: Number,
        required: [true, 'El piso es obligatorio']
    }
});

module.exports = model('Categoria', categoriaSchema);