// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Rota para criar um evento
router.post('/events', async (req, res) => {
    try {
        const event = await eventController.createEvent(req.body);
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para buscar um evento pelo ID
router.get('/events/:eventId', async (req, res) => {
    try {
        const event = await eventController.getEventById(req.params.eventId);
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Adicione outras rotas conforme necessário

module.exports = router;
