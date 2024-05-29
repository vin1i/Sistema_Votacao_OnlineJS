const Eleicao = require('../models/eleicao');

exports.create = (req, res) => {
    const { nome, descricao } = req.body;
    Eleicao.create({ nome, descricao }, (err, id) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id });
    });
};

exports.getAll = (req, res) => {
    Eleicao.findAll((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

// Adicione outros métodos conforme necessário (ex. getById, update, delete)
