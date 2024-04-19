const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Token de autentica��o n�o fornecido' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Falha na autentica��o do token' });
        }
        req.userId = decoded.userId;
        next();
    });
};

module.exports = authenticateJWT;
