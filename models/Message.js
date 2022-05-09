const { DataTypes } = require('sequelize');
const {database} = require('../database/connection');

const Message = database.define('messages', {
    id_message: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    message_received: {
        type: DataTypes.STRING,
        nullable: true
    },
    id_response: {
        type: DataTypes.INTEGER,
        nullable: true
    },
});

module.exports =  Message ;
