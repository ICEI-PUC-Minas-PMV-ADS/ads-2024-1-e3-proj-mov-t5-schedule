
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Session = require('../models/Session');

async function login(req, res) {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !bcrypt.compare(req.body.password, user.password)) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const jwtSecret = generateJWTSecret();

    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 1);


    try {
        const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
        await Session.create({ user_id: user.id, token: token, expiration: expirationDate });        
        res.json({ id: user.id, name: user.username, token });
    } catch (error) {
        console.error('Erro ao criar a sessão:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
async function logout(req, res) {
    try {
        if (req.headers.authorization || req.headers.authorization.split(' ')[1]) {
            const tokenEnviado = req.headers.authorization;

            const session = await Session.findOne({ where: { token: tokenEnviado } });

            if (session) {
                await session.destroy();
                return res.json({ message: 'Logout realizado com sucesso' });
            } else {
                return res.status(401).json({ error: 'Sessão não encontrada' });
            }
        } else {
            return res.status(400).json({ error: 'Token de autenticação não fornecido' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
function generateJWTSecret() {
    return crypto.randomBytes(64).toString('hex');
}

module.exports = {
    login,
    logout,
};
