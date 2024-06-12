
const express = require('express');
const router = express.Router();
const candidatoController = require('../controllers/candidatoController');
const cargoController = require('../controllers/cargoController');
const eleicaoController = require('../controllers/eleicaoController');
const chapaController = require('../controllers/chapaController');
const eleitorController = require('../controllers/eleitorController');
const candidatoChapaController = require('../controllers/candidatoChapaController');
const votacaoController = require('../controllers/votacaoController');
const votoController = require('../controllers/votoController');
const authController = require('../controllers/authController');
const authenticateToken = require('../middlewares/authenticateToken');

// Rotas para Candidatos
router.post('/candidatos',/* authenticateToken,*/ candidatoController.create);
router.get('/candidatos',/* authenticateToken,*/ candidatoController.getAll);

// Rotas para Cargos
router.post('/cargos', /*authenticateToken,*/ cargoController.create);
router.get('/cargos', /*authenticateToken,*/ cargoController.getAll);

// Rotas para Eleicoes
router.post('/eleicoes', eleicaoController.create);
router.get('/eleicoes', eleicaoController.getAll);

// Rotas para Chapas
router.post('/chapas', /*authenticateToken,*/ chapaController.create);
router.get('/chapas', /*authenticateToken,*/ chapaController.getAll);

// Rotas para Eleitores
router.post('/eleitores', eleitorController.create);
router.get('/eleitores', eleitorController.getAll);
router.post('/liberar-eleitor', eleitorController.liberarEleitor);
router.get('/liberar-eleitor', eleitorController.liberarEleitor);
// Rotas para CandidatoChapa
router.post('/candidatoChapas', /*authenticateToken,*/ candidatoChapaController.create);
router.get('/candidatoChapas', /*authenticateToken,*/ candidatoChapaController.getAll);

// Rotas para Votacoes
router.post('/votacoes', /*authenticateToken,*/ votacaoController.create);
router.get('/votacoes', /*authenticateToken,*/ votacaoController.getAll);

// Rotas para Votos
router.post('/votos', /*authenticateToken,*/ votoController.create);
router.get('/votos', /*authenticateToken,*/ votoController.getAll);

// Rota para Login
router.post('/login', authController.login);

module.exports = router;
