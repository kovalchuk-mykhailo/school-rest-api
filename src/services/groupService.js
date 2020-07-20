const { Group } = require("../db/sequelize");

module.exports = {
  async findAll() {
    return Group.findAll();
  },
};
