// models/UserHasEvent.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Event = require('./Event');

const UserHasEvent = sequelize.define('UserHasEvent', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    check_in: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    check_out: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    qr_code: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
});

UserHasEvent.belongsTo(User, { foreignKey: 'user_id' });
UserHasEvent.belongsTo(Event, { foreignKey: 'event_id' });

module.exports = UserHasEvent;
