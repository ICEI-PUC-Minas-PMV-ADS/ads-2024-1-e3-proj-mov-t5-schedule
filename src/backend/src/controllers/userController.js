// controllers/userController.js
const  User = require('../models/User');

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
            throw new Error('Usu�rio n�o encontrado.');
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
            throw new Error('Usu�rio n�o encontrado.');
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
            throw new Error('Usu�rio n�o encontrado.');
        }
        await user.destroy();
        return { message: 'Usu�rio exclu�do com sucesso.' };
    } catch (error) {
        throw error;
    }
};

// Adicione outras opera��es CRUD conforme necess�rio

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
