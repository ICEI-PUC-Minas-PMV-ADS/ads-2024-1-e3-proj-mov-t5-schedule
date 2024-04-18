// controllers/eventController.js
const Event = require('../models/Event');

const createEvent = async (eventData) => {
    try {
        const event = await Event.create(eventData);
        return event;
    } catch (error) {
        throw error;
    }
};

const getEventById = async (eventId) => {
    try {
        const event = await Event.findByPk(eventId);
        return event;
    } catch (error) {
        throw error;
    }
};

// Adicione outras operações CRUD conforme necessário

module.exports = {
    createEvent,
    getEventById,
    // Adicione outras funções aqui
};
