const Voto = require('../models/voto');

exports.create = (req, res) => {
    const { eleitor_id, chapa_id, votacao_id } = req.body;
    Voto.create({ eleitor_id, chapa_id, votacao_id }, (err, id) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id });
    });
};

exports.getAll = (req, res) => {
    Voto.findAll((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

// Adicione outros métodos conforme necessário (ex. getById, update, delete)
