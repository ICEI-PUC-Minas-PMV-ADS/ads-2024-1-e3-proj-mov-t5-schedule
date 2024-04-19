const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');


router.post('/events', async (req, res) => {
    try {
        const event = await eventController.createEvent(req.body);
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/events/:eventId', async (req, res) => {
    try {
        const event = await eventController.getEventById(req.params.eventId);
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;