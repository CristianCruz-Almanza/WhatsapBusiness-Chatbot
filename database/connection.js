const { Sequelize } = require('sequelize');

const database = new Sequelize('chatbot_alcaldia', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

 const dbConnection = async () =>  {
  try {
    await database.authenticate();
    console.log('Conexion exitosa');
  } catch (error) {
    console.error('Opss!! no pudimos conectarno a la base de datos', error);
  }
}

module.exports = {
  database,
  dbConnection
}
