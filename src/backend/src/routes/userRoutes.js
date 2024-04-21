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

// Rota para atualizar um usu�rio existente
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await userController.updateUser(req.params.id, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um usu�rio existente
router.delete('/users/:id', async (req, res) => {
    try {
        const result = await userController.deleteUser(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para inscrever um usu�rio em um evento
router.post('/users/:userId/events/:eventId/signup', async (req, res) => {
    try {
        await userController.signUpForEvent(req, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para cancelar a inscri��o de um usu�rio em um evento
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

// Rota para obter todos os eventos de um usu�rio
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
