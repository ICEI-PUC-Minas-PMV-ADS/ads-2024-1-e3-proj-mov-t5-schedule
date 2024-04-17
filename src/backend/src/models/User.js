// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const { Event } = require('./Event');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING(45),
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(16),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    create_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    phone: {
        type: DataTypes.STRING(45),
        unique: true,
    },
});

User.hasMany(Event, { foreignKey: 'user_id' });

module.exports = User;
