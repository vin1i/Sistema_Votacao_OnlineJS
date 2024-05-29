const CandidatoChapa = require('../models/candidatoChapa');

exports.create = (req, res) => {
    const { candidato_id, chapa_id } = req.body;
    CandidatoChapa.create({ candidato_id, chapa_id }, (err, id) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id });
    });
};

exports.getAll = (req, res) => {
    CandidatoChapa.findAll((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

// Adicione outros métodos conforme necessário (ex. getById, update, delete)
