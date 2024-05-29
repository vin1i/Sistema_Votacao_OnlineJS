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

// Rotas para Candidatos
router.post('/candidatos', candidatoController.create);
router.get('/candidatos', candidatoController.getAll);

// Rotas para Cargos
router.post('/cargos', cargoController.create);
router.get('/cargos', cargoController.getAll);

// Rotas para Eleicoes
router.post('/eleicoes', eleicaoController.create);
router.get('/eleicoes', eleicaoController.getAll);

// Rotas para Chapas
router.post('/chapas', chapaController.create);
router.get('/chapas', chapaController.getAll);

// Rotas para Eleitores
router.post('/eleitores', eleitorController.create);
router.get('/eleitores', eleitorController.getAll);

// Rotas para CandidatoChapa
router.post('/candidatoChapas', candidatoChapaController.create);
router.get('/candidatoChapas', candidatoChapaController.getAll);

// Rotas para Votacoes
router.post('/votacoes', votacaoController.create);
router.get('/votacoes', votacaoController.getAll);

// Rotas para Votos
router.post('/votos', votoController.create);
router.get('/votos', votoController.getAll);

module.exports = router;
