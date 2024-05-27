const connection = require('../config/db');

const Eleitor = {
    create: (data, callback) => {
        const query = 'INSERT INTO Eleitores (nome, cpf, endereco, senha) VALUES (?, ?, ?, ?)';
        connection.query(query, [data.nome, data.cpf, data.endereco, data.senha], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM Eleitores';
        connection.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    // Outros métodos conforme necessário
};

module.exports = Eleitor;
