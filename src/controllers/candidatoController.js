const Candidato = require('../models/candidatos');

exports.create = (req, res) => {
    const { nome, cpf, endereco, email, senha } = req.body;
    Candidato.create({ nome, cpf, endereco, email, senha }, (err, id) => {
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

exports.getByEleicaoId = (req, res) => {
    const eleicaoId = req.params.eleicaoId;
    Candidato.findByEleicaoId(eleicaoId, (err, results) => {
        if (err) {
            console.error('Erro ao buscar candidatos por eleição:', err);
            return res.status(500).send({ error: 'Erro ao buscar candidatos por eleição' });
        }
        res.status(200).send(results);
    });
};
