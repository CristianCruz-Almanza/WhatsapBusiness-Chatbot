const { sessionWhatsaapInit } = require('../controllers/whatsaap');
const  { dbConnection } = require('../database/connection');

class Server {
    constructor() {
        sessionWhatsaapInit();
    }

    async connection() {
        await dbConnection();
    }
    
}

module.exports = {
    Server
}
