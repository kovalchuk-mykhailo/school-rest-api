module.exports = (sequelize, Sequelize) => {
  const Group = sequelize.define("group", {
    groupid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return Group;
};
