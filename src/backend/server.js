const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'your_jwt_secret';

// Middleware para verificar o token JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Registro de usuário
app.post('/register', async (req, res) => {
  const { name, phone, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { name, phone, email, password: hashedPassword }
    });
    res.json({ user });
  } catch (error) {
    res.status(400).json({ error: 'Email already exists' });
  }
});

// Login de usuário
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

// CRUD de eventos
app.post('/events', authenticateToken, async (req, res) => {
  const { title, date } = req.body;
  const event = await prisma.event.create({
    data: { title, date, userId: req.user.userId }
  });
  res.json({ event });
});

app.get('/events', authenticateToken, async (req, res) => {
  const events = await prisma.event.findMany({
    where: { userId: req.user.userId }
  });
  res.json({ events });
});

app.put('/events/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, date } = req.body;
  const event = await prisma.event.update({
    where: { id: parseInt(id) },
    data: { title, date }
  });
  res.json({ event });
});

app.delete('/events/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  await prisma.event.delete({
    where: { id: parseInt(id) }
  });
  res.json({ message: 'Event deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
