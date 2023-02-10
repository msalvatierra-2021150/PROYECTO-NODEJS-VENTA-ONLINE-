//Importaciones 
const{getCategoria} = require('../controllers/categoria');
const{postCategoria} = require('../controllers/categoria');
const{putCategoria} = require('../controllers/categoria');
const{deleteCategoria} = require('../controllers/categoria');

const {Router} = require('express');

const router = Router();

router.get('/mostrar', getCategoria);
router.post('/agregar', postCategoria);
router.put('/editar/:id', putCategoria);
router.delete('/eliminar/:id', deleteCategoria);

module.exports = router;

//ROUTES