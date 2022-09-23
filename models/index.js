const {Sequelize, DataTypes} = require("sequelize")
const sequelize = new Sequelize("uls","root","",{
  host: "localhost",
  dialect: "mysql",
  logging: false,
})

const db = {};

sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.student = require('./student')(sequelize,DataTypes);

module.exports = db;
