const Eleitor = require('../models/eleitor');
const bcrypt = require('bcrypt'); // Biblioteca para hash de senhas
const jwt = require('jsonwebtoken'); // Biblioteca para criação de tokens JWT
exports.login = (req, res) => {
    const { cpf, senha } = req.body;

    Eleitor.findByCpf(cpf, (err, eleitor) => {
        if (err) {
            console.error('Erro ao buscar eleitor:', err);
            return res.status(500).send({ message: 'Erro ao buscar eleitor' });
        }
        if (!eleitor) return res.status(404).send({ message: 'Usuário não encontrado' });

        // Verifica a senha
        bcrypt.compare(senha, eleitor.senha, (err, isMatch) => {
            if (err) {
                console.error('Erro ao comparar senha:', err);
                return res.status(500).send({ message: 'Erro ao comparar senha' });
            }
            if (!isMatch) return res.status(401).send({ message: 'Senha incorreta' });

            // Cria um token JWT
            const token = jwt.sign({ id: eleitor.id }, 'seuSegredoAqui', { expiresIn: '1h' });
            res.status(200).send({ token });
        });
    });
};
