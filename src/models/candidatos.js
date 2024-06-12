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
    findByEleicaoId: (eleicaoId, callback) => {
        const query = `
            SELECT c.*
            FROM Candidatos c
            JOIN CandidatosEleicoes ce ON c.id = ce.candidato_id
            WHERE ce.eleicao_id = ?
        `;
        connection.query(query, [eleicaoId], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    // Outros métodos conforme necessário
};



module.exports = Candidato;
