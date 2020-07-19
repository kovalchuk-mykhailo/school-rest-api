const { Lesson } = require("../db/sequelize");

module.exports = {
  async findAll() {
    return Lesson.findAll();
  },
};
