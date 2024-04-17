const { Sequelize } = require('sequelize');

// Configurações de conexão com o banco de dados
const sequelize = new Sequelize('schedule_events', 'seu_usuario', 'sua_senha', {
    host: 'localhost',
    dialect: 'mysql',
    // Outras opções de configuração aqui, se necessário
});

// Testando a conexão com o banco de dados
async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar-se ao banco de dados:', error);
    }
}

testarConexao();

module.exports = sequelize;
