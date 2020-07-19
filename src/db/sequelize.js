const Sequelize = require("sequelize");

const db_name = process.env.DB_NAME;
const db_userName = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(db_name, db_userName, db_password, {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  define: {
    timestamps: false,
  },
});

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const Group = require("../models/Group")(sequelize, Sequelize);
const Student = require("../models/Student")(sequelize, Sequelize);
const Teacher = require("../models/Teacher")(sequelize, Sequelize);
const Lesson = require("../models/Lesson")(sequelize, Sequelize);

Group.hasMany(Student, { foreignKey: "groupid" });
Group.hasMany(Lesson, { foreignKey: "groupid" });

Student.belongsTo(Group, { foreignKey: "groupid" });

Teacher.hasMany(Lesson, { foreignKey: "teacherid" });

Lesson.belongsTo(Teacher, { foreignKey: "teacherid" });
Lesson.belongsTo(Group, { foreignKey: "groupid" });

db = {
  ...db,
  Group,
  Student,
  Teacher,
  Lesson,
};

module.exports = db;
