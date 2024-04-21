// controllers/userController.js
const User = require('../models/User');
const Event = require('../models/Event');
const UserHasEvent = require('../models/UserHasEvent');
const crypto = require('crypto');

const createUser = async (userData) => {
    try {
        const user = await User.create(userData);
        return user;
    } catch (error) {
        throw error;
    }
};

const getUserById = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }
        return user;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (userId, userData) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }
        await user.update(userData);
        return user;
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }
        await user.destroy();
        return { message: 'Usuário excluído com sucesso.' };
    } catch (error) {
        throw error;
    }
};

async function signUpForEvent(req, res) {
    const eventId = req.params.eventId;
    const userId = req.params.userId;

    try {
        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Evento não encontrado' });
        }

        const totalAttendees = await UserHasEvent.count({ where: { event_id: event.id } });
        if (totalAttendees >= event.max_attendees) {
            return res.status(403).json({ error: 'O evento atingiu a lotação máxima de participantes' });
        }

        const userHasEvent = await UserHasEvent.findOne({ where: { event_id: event.id, user_id: userId } });
        if (userHasEvent) {
            return res.status(400).json({ error: 'Usuário já está inscrito neste evento' });
        }

        await UserHasEvent.create({ event_id: event.id, user_id: userId });
        res.json({ message: 'Inscrição realizada com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor ao realizar a inscrição' });
    }
}

async function cancelSignUpForEvent(req, res) {
    const eventId = req.params.eventId;
    const userId = req.params.userId;

    try {
        const userHasEvent = await UserHasEvent.findOne({ where: { event_id: eventId, user_id: userId } });
        if (!userHasEvent) {
            return res.status(404).json({ error: 'Usuário não está inscrito neste evento' });
        }

        await userHasEvent.destroy();
        res.json({ message: 'Inscrição cancelada com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor ao cancelar a inscrição' });
    }
}


async function payForEvent(req, res) {
    const eventId = req.params.eventId;
    const userId = req.params.userId;

    try {
        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Evento não encontrado' });
        }

        const userHasEvent = await UserHasEvent.findOne({ where: { event_id : eventId, user_id: userId } });

        if (!userHasEvent) {
            return res.status(404).json({ error: 'Usuário não está inscrito neste evento' });
        } else if (userHasEvent.paid) {
            return res.status(400).json({ error: 'Usuário já pagou por este evento' });
        } else {
            userHasEvent.paid = true;
            const qrCode = `evento_${eventId}_usuario_${userId}`;
            const qrCodeHash = crypto.createHash('sha256').update(qrCode).digest('hex');
            userHasEvent.qr_code = qrCodeHash;
            await userHasEvent.save();
            res.json({ message: 'Pagamento efetuado com sucesso', qr_code: qrCodeHash });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor ao processar o pagamento' });
    }
}

const editUser = async (userId, userData) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }
        await user.update(userData);
        return user;
    } catch (error) {
        throw error;
    }
};

async function getUserEvents(userId) {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        const userEvents = await UserHasEvent.findAll({
            where: {
                user_id: userId
            },
            include: Event 
        });

        return userEvents.map(userEvent => userEvent.Event);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    signUpForEvent,
    cancelSignUpForEvent,
    payForEvent,
    editUser,
    getUserEvents,
};
