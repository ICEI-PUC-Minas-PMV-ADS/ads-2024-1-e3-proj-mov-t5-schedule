// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um usu�rio
router.post('/users', async (req, res) => {
    try {
        const user = await userController.createUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um usu�rio pelo ID
router.get('/users/:userId', async (req, res) => {
    try {
        const user = await userController.getUserById(req.params.userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Adicione outras rotas conforme necess�rio

module.exports = router;
