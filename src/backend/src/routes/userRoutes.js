// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um usuário
router.post('/users', async (req, res) => {
    try {
        const user = await userController.createUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um usuário pelo ID
router.get('/users/:userId', async (req, res) => {
    try {
        const user = await userController.getUserById(req.params.userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um usuário existente
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await userController.updateUser(req.params.id, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um usuário existente
router.delete('/users/:id', async (req, res) => {
    try {
        const result = await userController.deleteUser(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para inscrever um usuário em um evento
router.post('/users/:userId/events/:eventId/signup', async (req, res) => {
    try {
        await userController.signUpForEvent(req, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para cancelar a inscrição de um usuário em um evento
router.delete('/users/:userId/events/:eventId/signup', async (req, res) => {
    try {
        await userController.cancelSignUpForEvent(req, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para pagar por um evento
router.post('/users/:userId/events/:eventId/pay', async (req, res) => {
    try {
        await userController.payForEvent(req, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter todos os eventos de um usuário
router.get('/users/:userId/events', async (req, res) => {
    const userId = req.params.userId;
    
    try {
        const userEvents = await userController.getUserEvents(userId);
        res.json(userEvents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
