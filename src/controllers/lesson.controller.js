const lessonService = require("../services/lesson.service");

module.exports = {
  getAll: async (req, res, next) => {
    lessonService
      .findAll()
      .then((lessons) => {
        res.status(200).send(JSON.stringify(lessons));
      })
      .catch((err) => {
        throw next(err);
      });
  },
  getOne: async (req, res, next) => {
    const id = req.params.id;
    lessonService
      .findOne(id)
      .then((lesson) => {
        if (lesson) {
          res.status(200).send(JSON.stringify(lesson));
        } else
          res.status(400).json({ data: null, error: "Lesson doesn't found" });
      })
      .catch((err) => {
        throw next(err);
      });
  },
  delete: async (req, res, next) => {
    const id = req.params.id;
    lessonService
      .destroy(id)
      .then((isDeleted) => {
        if (isDeleted) {
          res
            .status(201)
            .json({ result: "success", message: "Lesson was destroyed!" });
        } else
          res.status(400).json({ data: null, error: "Lesson doesn't found" });
      })
      .catch((err) => {
        throw next(err);
      });
  },
  update: async (req, res, next) => {
    const id = req.params.id;
    console.log(req.body);
    lessonService
      .update(id, req.body)
      .then((isUpdatedArray) => {
        console.log(isUpdatedArray);
        if (isUpdatedArray[0]) {
          res
            .status(201)
            .json({ result: "success", message: "Lesson was updated!" });
        } else
          res.status(400).json({ data: null, error: "Lesson doesn't found" });
      })
      .catch((err) => {
        throw next(err);
      });
  },
  create: async (req, res, next) => {
    console.log(req.body);
    lessonService
      .create(req.body)
      .then((lesson) => {
        res.status(201).send({
          result: "success",
          message: "Lesson was created!",
          data: { lesson },
        });
      })
      .catch((err) => {
        throw next(err);
      });
  },
};
