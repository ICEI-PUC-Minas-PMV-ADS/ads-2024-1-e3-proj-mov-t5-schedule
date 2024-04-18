const express = require('express');
const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const userHasEventRoutes = require('./src/routes/userHasEventRoutes');

const app = express();

app.use(express.json({ charset: 'utf-8' }));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
});

sequelize.sync({ force: false }).then(() => {
    console.log('Tabelas sincronizadas com sucesso.');
}).catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error);
});

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', eventRoutes);
app.use('/api', userHasEventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});