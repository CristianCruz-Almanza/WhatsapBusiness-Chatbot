const { DataTypes } = require('sequelize');

const Response = db.define('messages', {
    id_response: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    reply_message: {
        type: DataTypes.STRING,
        nullable: true
    },
    url_media: {
        type: DataTypes.STRING,
        nullable: true
    },
    id_action : {
        type: DataTypes.INTEGER,
        nullable: true,
    }
});

export default Response;