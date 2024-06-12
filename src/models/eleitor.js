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
    findByCpf: (cpf, callback) => {
        const query = 'SELECT * FROM Eleitores WHERE cpf = ?';
        connection.query(query, [cpf], (err, results) => {
            if (err) return callback(err);
            if (results.length === 0) return callback(null, null);
            callback(null, results[0]);
        });
    },
    updateLiberado: (id, liberado, callback) => {
        const query = 'UPDATE Eleitores SET liberado = ? WHERE id = ?';
        connection.query(query, [liberado, id], (err, result) => {
            if (err) return callback(err);
            callback(null);
        });
    },
    // Outros métodos conforme necessário
};

module.exports = Eleitor;





// CÓDIGO ABAIXO FOI FEITO ANTES DA AUTENTICAÇÃO DE TOKEN, CASO ELE SEJA NECESSÁRIO!


// const connection = require('../config/db');

// const Eleitor = {
//     create: (data, callback) => {
//         const query = 'INSERT INTO Eleitores (nome, cpf, endereco, senha) VALUES (?, ?, ?, ?)';
//         connection.query(query, [data.nome, data.cpf, data.endereco, data.senha], (err, result) => {
//             if (err) return callback(err);
//             callback(null, result.insertId);
//         });
//     },
//     findAll: (callback) => {
//         const query = 'SELECT * FROM Eleitores';
//         connection.query(query, (err, results) => {
//             if (err) return callback(err);
//             callback(null, results);
//         });
//     },
//     // Outros métodos conforme necessário
// };

// module.exports = Eleitor;
