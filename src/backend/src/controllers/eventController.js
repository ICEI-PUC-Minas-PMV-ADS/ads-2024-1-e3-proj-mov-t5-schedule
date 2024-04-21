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

const updateEvent = async (eventId, eventData) => {
    try {
        const event = await Event.findByPk(eventId);
        if (!event) {
            throw new Error('Evento não encontrado.');
        }
        await event.update(eventData);
        return event;
    } catch (error) {
        throw error;
    }
};

const deleteEvent = async (eventId) => {
    try {
        const event = await Event.findByPk(eventId);
        if (!event) {
            throw new Error('Evento não encontrado.');
        }
        await event.destroy();
        return { message: 'Evento excluído com sucesso.' };
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent,
};
