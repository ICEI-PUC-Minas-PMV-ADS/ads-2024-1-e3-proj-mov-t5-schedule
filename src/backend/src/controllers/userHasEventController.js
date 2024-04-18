// controllers/userHasEventController.js
const UserHasEvent = require('../models/UserHasEvent');

const createUserEvent = async (userEventData) => {
    try {
        const userEvent = await UserHasEvent.create(userEventData);
        return userEvent;
    } catch (error) {
        throw error;
    }
};

const getUserEvent = async (userId, eventId) => {
    try {
        const userEvent = await UserHasEvent.findOne({
            where: { user_id: userId, event_id: eventId },
        });
        return userEvent;
    } catch (error) {
        throw error;
    }
};

// Adicione outras operações CRUD conforme necessário

module.exports = {
    createUserEvent,
    getUserEvent,
    // Adicione outras funções aqui
};
