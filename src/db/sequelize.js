const Sequelize = require("sequelize");

const db_name = process.env.DB_NAME;
const db_userName = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

module.exports = new Sequelize(db_name, db_userName, db_password, {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  define: {
    timestamps: false,
  },
});
