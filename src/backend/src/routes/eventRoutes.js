const express = require('express');
const { getEvents, addEvent } = require('../controllers/eventController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authenticate);

router.get('/', getEvents);
router.post('/', addEvent);

module.exports = router;
