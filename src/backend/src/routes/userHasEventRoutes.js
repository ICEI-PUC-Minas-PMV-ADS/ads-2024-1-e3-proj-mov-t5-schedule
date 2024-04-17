// routes/userHasEventRoutes.js
const express = require('express');
const router = express.Router();
const userHasEventController = require('../controllers/userHasEventController');

// Rota para criar a associa��o entre usu�rio e evento
router.post('/usersevents', async (req, res) => {
    try {
        const userEvent = await userHasEventController.createUserEvent(req.body);
        res.json(userEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar a associa��o entre usu�rio e evento
router.get('/usersevents/:userId/:eventId', async (req, res) => {
    try {
        const userEvent = await userHasEventController.getUserEvent(req.params.userId, req.params.eventId);
        res.json(userEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Adicione outras rotas conforme necess�rio

module.exports = router;
