const Candidato = require('../models/cadidatos');

exports.create = (req, res) => {
    const { nome, cpf, endereco } = req.body;
    Candidato.create({ nome, cpf, endereco }, (err, id) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id });
    });
};

exports.getAll = (req, res) => {
    Candidato.findAll((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};
