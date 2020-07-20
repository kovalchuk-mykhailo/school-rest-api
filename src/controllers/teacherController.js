const teacherService = require("../services/teacherService");

module.exports = {
  async getAll(req, res, next) {
    teacherService
      .findAll()
      .then((teachers) => {
        res.status(200).send(JSON.stringify(teachers));
      })
      .catch((err) => {
        throw next(err);
      });
  },
};
