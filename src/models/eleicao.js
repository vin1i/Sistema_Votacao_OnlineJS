const connection = require('../config/db');

const Eleicao = {
    create: (data, callback) => {
        const query = 'INSERT INTO Eleicoes (data, local, nome) VALUES (?, ?, ?)';
        connection.query(query, [data.data, data.local, data.nome], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM Eleicoes';
        connection.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    // Outros métodos conforme necessário
};

module.exports = Eleicao;
