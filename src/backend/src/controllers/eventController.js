// controllers/eventController.js
const Event = require('../models/Event');
const UserHasEvent = require('../models/UserHasEvent');

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

async function payForEvent(req, res) {
    const eventId = req.params.eventId;
    const userId = req.user.id; 

    try {
        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Evento não encontrado' });
        }
        if (event.userId !== userId) {
            return res.status(403).json({ error: 'Usuário não tem permissão para pagar por este evento' });
        }

        const userHasEvent = await UserHasEvent.findOne({ where: { eventId, userId } });

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
            res.json({ message: 'Pagamento efetuado com sucesso' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor ao processar o pagamento' });
    }
}

module.exports = {
    createEvent,
    getEventById,
    payForEvent
};
