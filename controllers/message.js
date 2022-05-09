const Message = require("../models/Message");

const getMessages = async() => {

    const messages = await Message.findAll();
    console.log(JSON.stringify(messages));
}

module.exports = {
    getMessages
}