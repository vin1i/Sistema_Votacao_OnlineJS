const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).send({ message: 'Acesso negado' });

    jwt.verify(token, 'seuSegredoAqui', (err, user) => {
        if (err) return res.status(403).send({ message: 'Token inválido' });
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
