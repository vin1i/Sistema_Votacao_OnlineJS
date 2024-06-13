
const Voto = require('../models/voto');
const connection = require('../config/db');
exports.create = (req, res) => {
    const { eleitor_id, candidato_id, eleicao_id } = req.body;
    Voto.createOrUpdate({ eleitor_id, candidato_id, eleicao_id }, (err, id) => {
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

exports.getVotersByEleicaoId = (req, res) => {
    const eleicaoId = req.params.eleicaoId;
    Voto.findVotersByEleicaoId(eleicaoId, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

// Define a função antes de utilizá-la
Voto.findTotalEleitoresByEleicaoId = (eleicaoId, callback) => {
    const query = `
        SELECT SUM(numero_votos) AS total_votos
        FROM Votos
        WHERE eleicao_id = ?
    `;
    connection.query(query, [eleicaoId], (err, result) => {
        if (err) return callback(err);
        callback(null, result[0]);
    });
};

exports.getTotalEleitoresByEleicaoId = (req, res) => {
    const eleicaoId = req.params.eleicaoId;
    Voto.findTotalEleitoresByEleicaoId(eleicaoId, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
};

