const connection = require('../config/db');

const Chapa = {
    create: (data, callback) => {
        const query = 'INSERT INTO Chapas (nome, eleicao_id) VALUES (?, ?)';
        connection.query(query, [data.nome, data.eleicao_id], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM Chapas';
        connection.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    // Lógica +
};
module.exports = Chapa;
