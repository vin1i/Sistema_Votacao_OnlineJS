const connection = require('../config/db');

const CandidatoChapa = {
    create: (data, callback) => {
        const query = 'INSERT INTO CandidatosChapas (candidato_id, cargo_id, chapa_id) VALUES (?, ?, ?)';
        connection.query(query, [data.candidato_id, data.cargo_id, data.chapa_id], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM CandidatosChapas';
        connection.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
};

module.exports = CandidatoChapa;
