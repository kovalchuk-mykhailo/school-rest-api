const studentService = require("../services/student.service");

module.exports = {
  async getAll(req, res, next) {
    studentService
      .findAll()
      .then((students) => {
        res.status(200).send(JSON.stringify(students));
      })
      .catch((err) => {
        throw next(err);
      });
  },
};
