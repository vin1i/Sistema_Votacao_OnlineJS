const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa o pacote CORS
const routes = require('./routes/index');

const app = express();

// Configuração do CORS
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

module.exports = app;
