const { getPersonModelOptions } = require("../helpers/dbhelper");

module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define(
    "teacher",
    getPersonModelOptions(Sequelize, "teacherid")
  );

  return Teacher;
};
