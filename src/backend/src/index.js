const express = require('express');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const userHasEventRoutes = require('./routes/userHasEventRoutes');

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', eventRoutes);
app.use('/api', userHasEventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});