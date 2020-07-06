module.exports = (sequelize, Sequelize) => {
  const Lesson = sequelize.define("lesson", {
    lessonid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    topic: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    classroom: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    schedulenumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return Lesson;
};
