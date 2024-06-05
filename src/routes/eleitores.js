const express = require('express');
const router = express.Router();
const eleitorController = require('../controllers/eleitorController');

// Rota para listar todos os eleitores
router.get('/api', eleitorController.listEleitores);

// Rota para exibir formulário de cadastro de eleitor
router.get('/cadastrar', (req, res) => {
    res.render('cadastrar'); // Exemplo de renderização de um formulário de cadastro
});

// Rota para lidar com ação de cadastro de eleitor
router.post('/cadastrar', eleitorController.create);

// Rota para exibir página de detalhes de eleitor
router.get('/:id', eleitorController.showEleitor);

// Rota para exibir página de edição de eleitor
router.get('/:id/edit', eleitorController.showEditForm);

// Rota para lidar com ação de edição de eleitor
router.post('/:id/edit', eleitorController.editEleitor);

// Rota para lidar com ação de exclusão de eleitor
router.post('/:id/delete', eleitorController.deleteEleitor);

// Rota para exibir formulário de confirmação de exclusão
router.get('/:id/confirm-delete', eleitorController.showConfirmDeleteForm);

module.exports = router;
