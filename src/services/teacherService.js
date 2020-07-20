const { Teacher } = require("../db/sequelize");

module.exports = {
  async findAll() {
    return Teacher.findAll();
  },
};
