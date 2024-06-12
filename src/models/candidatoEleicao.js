const connection = require('../config/db');

const CandidatoEleicao = {
    create: (data, callback) => {
        const query = 'INSERT INTO CandidatosEleicoes (eleicao_id, candidato_id) VALUES (?, ?)';
        connection.query(query, [data.eleicaoId, data.candidatoId], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    // Outros métodos conforme necessário
};

module.exports = CandidatoEleicao;
