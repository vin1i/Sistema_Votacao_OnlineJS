const connection = require('../config/db');

const Candidato = {
    create: (data, callback) => {
        const query = 'INSERT INTO Candidatos (nome, cpf, endereco, email, Senha_Votacao) VALUES (?, ?, ?, ?, ?)';
        connection.query(query, [data.nome, data.cpf, data.endereco, data.email, data.senha], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM Candidatos';
        connection.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    // Outros métodos conforme necessário (ex. findById, update, delete)
};

module.exports = Candidato;
