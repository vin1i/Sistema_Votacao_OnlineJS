const connection = require('../config/db');

const Voto = {
    create: (data, callback) => {
        const query = 'INSERT INTO Votos (eleicao_id, candidato_id, numero_votos) VALUES (?, ?, ?)';
        connection.query(query, [data.eleicao_id, data.candidato_id, data.numero_votos], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM Votos';
        connection.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    // Outros métodos conforme necessário
};

module.exports = Voto;
