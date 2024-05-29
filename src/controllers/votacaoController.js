const Votacao = require('../models/votacao');

exports.create = (req, res) => {
    const { data_inicio, data_fim, eleicao_id } = req.body;
    Votacao.create({ data_inicio, data_fim, eleicao_id }, (err, id) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id });
    });
};

exports.getAll = (req, res) => {
    Votacao.findAll((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

// Adicione outros métodos conforme necessário (ex. getById, update, delete)
