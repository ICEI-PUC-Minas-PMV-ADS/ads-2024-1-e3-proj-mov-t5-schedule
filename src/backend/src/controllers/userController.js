// controllers/userController.js
const { User } = require('../models/User');

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
        return user;
    } catch (error) {
        throw error;
    }
};

// Adicione outras opera��es CRUD conforme necess�rio

module.exports = {
    createUser,
    getUserById,
    // Adicione outras fun��es aqui
};
