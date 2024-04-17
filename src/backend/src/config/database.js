const { Sequelize } = require('sequelize');

// Configura��es de conex�o com o banco de dados
const sequelize = new Sequelize('schedule_events', 'seu_usuario', 'sua_senha', {
    host: 'localhost',
    dialect: 'mysql',
    // Outras op��es de configura��o aqui, se necess�rio
});

// Testando a conex�o com o banco de dados
async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conex�o com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar-se ao banco de dados:', error);
    }
}

testarConexao();

module.exports = sequelize;
