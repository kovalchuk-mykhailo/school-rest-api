const lessonService = require("../services/lesson.service");

module.exports = {
  async getAll(req, res, next) {
    lessonService
      .findAll()
      .then((lessons) => {
        res.status(200).send(JSON.stringify(lessons));
      })
      .catch((err) => {
        throw next(err);
      });
  },
};
