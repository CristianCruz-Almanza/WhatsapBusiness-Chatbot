const { Server } = require('./models/server');
const {getMessages} = require('./controllers/message');
const server = new Server();
server.connection();

getMessages();