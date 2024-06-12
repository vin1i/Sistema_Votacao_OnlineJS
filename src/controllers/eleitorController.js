const bcrypt = require('bcrypt');
const Eleitor = require('../models/eleitor');

exports.create = (req, res) => {
    const { nome, cpf, endereco, senha } = req.body;

    // Hash a senha antes de armazenar
    bcrypt.hash(senha, 10, (err, hashedSenha) => {
        if (err) {
            return res.status(500).send(err);
        }

        Eleitor.create({ nome, cpf, endereco, senha: hashedSenha }, (err, id) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(201).send({ id });
        });
    });
};

exports.getAll = (req, res) => {
    Eleitor.findAll((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};



exports.liberarEleitor = (req, res) => {
    const { cpf } = req.body;

    // Aqui estamos chamando o método findByCpf do model Eleitor para buscar o eleitor pelo CPF
    Eleitor.findByCpf(cpf, (err, eleitor) => {
        if (err) {
            console.error('Erro ao buscar eleitor:', err);
            return res.status(500).send({ error: 'Erro ao buscar eleitor' });
        }

        if (!eleitor) {
            return res.status(404).send({ error: 'Eleitor não encontrado' });
        }

        // Atualiza o status de liberação do eleitor no banco de dados
        Eleitor.updateLiberado(eleitor.id, true, (err) => {
            if (err) {
                console.error('Erro ao liberar eleitor:', err);
                return res.status(500).send({ error: 'Erro ao liberar eleitor' });
            }

            res.status(200).send({ message: 'Eleitor liberado com sucesso' });
        });
    });
};