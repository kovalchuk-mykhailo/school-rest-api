const { Student } = require("../db/sequelize");

module.exports = {
  async findAll() {
    return Student.findAll();
  },
};
