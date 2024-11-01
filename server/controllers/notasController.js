const Nota = require('../models/Nota');

exports.obtenerNotas = async (req, res) => {
    try {
        const notas = await Nota.find();
        res.json(notas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las notas' });
    }
};

exports.crearNota = async (req, res) => {
    try {
        const nuevaNota = new Nota(req.body);
        const notaGuardada = await nuevaNota.save();
        res.status(201).json(notaGuardada);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la nota' });
    }
};
