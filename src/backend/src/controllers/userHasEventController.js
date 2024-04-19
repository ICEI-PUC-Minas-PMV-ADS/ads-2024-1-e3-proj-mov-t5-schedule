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

async function checkInEvent(req, res) {
    const { qrCode } = req.body;
    const userId = req.user.id;

    try {
        const event = await Event.findOne({ where: { qr_code: qrCode } });
        if (!event) {
            return res.status(404).json({ error: 'Evento não encontrado' });
        }

        const userHasEvent = await UserHasEvent.findOne({ where: { eventId: event.id, userId: userId } });
        if (!userHasEvent) {
            return res.status(403).json({ error: 'Usuário não está inscrito neste evento' });
        }

        userHasEvent.check_in = true;
        await userHasEvent.save();

        res.json({ message: 'Check-in realizado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor ao realizar o check-in' });
    }
}

async function checkOutEvent(req, res) {
    const { qrCode } = req.body;
    const userId = req.user.id;

    try {
        const event = await Event.findOne({ where: { qr_code: qrCode } });
        if (!event) {
            return res.status(404).json({ error: 'Evento não encontrado' });
        }

        const userHasEvent = await UserHasEvent.findOne({ where: { eventId: event.id, userId: userId } });
        if (!userHasEvent) {
            return res.status(403).json({ error: 'Usuário não está inscrito neste evento' });
        }

        userHasEvent.check_out = true;
        await userHasEvent.save();

        res.json({ message: 'Check-in realizado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor ao realizar o check-in' });
    }
}


module.exports = {
    createUserEvent,
    getUserEvent,
    checkInEvent,
};
