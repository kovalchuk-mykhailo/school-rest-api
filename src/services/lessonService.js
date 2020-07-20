const { Lesson } = require("../db/sequelize");

module.exports = {
  async findAll() {
    return Lesson.findAll();
  },
  findOne: async (id) => {
    return Lesson.findByPk(id);
  },
  destroy: async (id) => {
    return Lesson.destroy({
      where: {
        lessonid: id,
      },
    });
  },
  create: async ({ topic, classroom, schedulenumber, groupid, teacherid }) => {
    const lessonData = { topic, classroom, schedulenumber, groupid, teacherid };
    return Lesson.create(lessonData);
  },
  update: async (lessonId, { topic, classroom, schedulenumber }) => {
    const lessonData = { topic, classroom, schedulenumber };
    return Lesson.update(lessonData, {
      where: {
        lessonid: lessonId,
      },
    });
  },
};
