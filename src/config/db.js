const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', //Aqui o seu nome de usuário no MySQL
    password: 'admin', // Aqui sua senha do MySQL
    database: 'sistemavotacao', // Aqui o nome do seu Banco de Dados
    port: 3333  //Aqui é a porta definida no seu MySQL
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados.');
    }
});

module.exports = connection;
