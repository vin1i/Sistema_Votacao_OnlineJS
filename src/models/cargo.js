const connection = require('../config/db');

const Cargo = {
    create: (data, callback) => {
        const query = 'INSERT INTO Cargos (cargo, eleicao_id) VALUES (?, ?)';
        connection.query(query, [data.cargo, data.eleicao_id], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM Cargos';
        connection.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    // Outros métodos conforme necessário
};

module.exports = Cargo;
