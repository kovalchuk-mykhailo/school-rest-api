const getPersonModelOptions = (Sequelize, id_name = "id") => ({
  [id_name]: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  surname: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

module.exports = { getPersonModelOptions };
