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

    const query = 'UPDATE Eleitores SET liberado = ? WHERE cpf = ?';
    connection.query(query, [true, cpf], (err, result) => {
        if (err) {
            console.error('Erro ao liberar eleitor:', err);
            return res.status(500).send({ error: 'Erro ao liberar eleitor' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).send({ error: 'Eleitor não encontrado' });
        }

        res.status(200).send({ message: 'Eleitor liberado com sucesso' });
    });
};
