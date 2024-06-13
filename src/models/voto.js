const connection = require('../config/db');

const Voto = {
    createOrUpdate: (data, callback) => {
        const queryCheck = 'SELECT * FROM Votos WHERE eleitor_id = ? AND candidato_id = ? AND eleicao_id = ?';
        connection.query(queryCheck, [data.eleitor_id, data.candidato_id, data.eleicao_id], (err, results) => {
            if (err) return callback(err);

            if (results.length > 0) {
                // Já existe um voto para esse candidato e eleitor, atualize o número de votos
                const queryUpdate = 'UPDATE Votos SET numero_votos = numero_votos + 1 WHERE eleitor_id = ? AND candidato_id = ? AND eleicao_id = ?';
                connection.query(queryUpdate, [data.eleitor_id, data.candidato_id, data.eleicao_id], (err) => {
                    if (err) return callback(err);
                    callback(null, results[0].id); // Retorne o ID do voto atualizado
                });
            } else {
                // Não existe um voto para esse candidato e eleitor, verifique se o candidato já foi votado antes por outro eleitor
                const queryCheckCandidate = 'SELECT * FROM Votos WHERE candidato_id = ? AND eleicao_id = ?';
                connection.query(queryCheckCandidate, [data.candidato_id, data.eleicao_id], (err, candidateResults) => {
                    if (err) return callback(err);

                    if (candidateResults.length > 0) {
                        // O candidato já foi votado por outro eleitor, atualize o número de votos
                        const queryUpdate = 'UPDATE Votos SET numero_votos = numero_votos + 1 WHERE candidato_id = ? AND eleicao_id = ?';
                        connection.query(queryUpdate, [data.candidato_id, data.eleicao_id], (err) => {
                            if (err) return callback(err);
                            callback(null, candidateResults[0].id); // Retorne o ID do voto atualizado
                        });
                    } else {
                        // Não existe nenhum voto para esse candidato, crie um novo voto
                        const queryInsert = 'INSERT INTO Votos (eleitor_id, candidato_id, eleicao_id, numero_votos) VALUES (?, ?, ?, 1)';
                        connection.query(queryInsert, [data.eleitor_id, data.candidato_id, data.eleicao_id], (err, result) => {
                            if (err) return callback(err);
                            callback(null, result.insertId); // Retorne o ID do novo voto criado
                        });
                    }
                });
            }
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

    findVotersByEleicaoId: (eleicaoId, callback) => {
        const query = `
            SELECT e.id AS eleitor_id, e.nome AS eleitor_nome, c.nome AS candidato_nome
            FROM Votos v
            JOIN Eleitores e ON v.eleitor_id = e.id
            JOIN Candidatos c ON v.candidato_id = c.id
            WHERE v.eleicao_id = ?
        `;
        connection.query(query, [eleicaoId], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    findTotalEleitoresByEleicaoId: (eleicaoId, callback) => {
        const query = `
            SELECT COUNT(DISTINCT eleitor_id) AS total_eleitores
            FROM Votos
            WHERE eleicao_id = ?
        `;
        connection.query(query, [eleicaoId], (err, result) => {
            if (err) return callback(err);
            callback(null, result[0]);
        });
    },






};



module.exports = Voto;
