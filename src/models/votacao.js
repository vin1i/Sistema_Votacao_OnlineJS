const connection = require('../config/db');

const Votacao = {
    create: (data, callback) => {
        const query = 'INSERT INTO Votacoes (data_inicio, data_fim, eleicao_id) VALUES (?, ?, ?)';
        connection.query(query, [data.data_inicio, data.data_fim, data.eleicao_id], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM Votacoes';
        connection.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    // Outros métodos conforme necessário
};

module.exports = Votacao;
