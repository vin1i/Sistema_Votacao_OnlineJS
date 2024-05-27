const express = require('express');
const router = express.Router();
const candidatoController = require('../controllers/candidatoController');

router.post('/candidatos', candidatoController.create);
router.get('/candidatos', candidatoController.getAll);

module.exports = router;
