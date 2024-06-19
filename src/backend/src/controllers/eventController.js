const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getEvents = async (req, res) => {
  const userId = req.userId;

  try {
    const events = await prisma.event.findMany({
      where: { userId },
    });

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const addEvent = async (req, res) => {
  const { title, date } = req.body;
  const userId = req.userId;

  try {
    const event = await prisma.event.create({
      data: {
        title,
        date,
        userId,
      },
    });

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { getEvents, addEvent };
