const Candidato = require('../models/candidatos');

exports.create = (req, res) => {
    const { nome, cpf, endereco } = req.body;
    Candidato.create({ nome, cpf, endereco }, (err, id) => {
        if (err) {
            console.error('Erro ao cadastrar candidato:', err);
            return res.status(500).send({ error: 'Erro ao cadastrar candidato' });
        }
        res.status(201).send({ message: 'Candidato cadastrado com sucesso', id });
    });
};

exports.getAll = (req, res) => {
    Candidato.findAll((err, results) => {
        if (err) {
            console.error('Erro ao buscar candidatos:', err);
            return res.status(500).send({ error: 'Erro ao buscar candidatos' });
        }
        res.status(200).send(results);
    });
};
