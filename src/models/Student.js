const { getPersonModelOptions } = require("../helpers/dbhelper");

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define(
    "student",
    getPersonModelOptions(Sequelize, "studentid")
  );

  return Student;
};
