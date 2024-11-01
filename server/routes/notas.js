const express = require('express');
const router = express.Router();
const notasController = require('../controllers/notasController');

router.get('/', notasController.obtenerNotas);
router.post('/', notasController.crearNota);

module.exports = router;
