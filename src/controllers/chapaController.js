const Chapa = require('../models/chapa');

exports.create = (req, res) => {
    const { nome, eleicao_id } = req.body;
    Chapa.create({ nome, eleicao_id }, (err, id) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id });
    });
};

exports.getAll = (req, res) => {
    Chapa.findAll((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

// Adicione outros métodos conforme necessário (ex. getById, update, delete)
