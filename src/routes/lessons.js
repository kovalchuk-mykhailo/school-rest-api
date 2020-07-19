const router = require("express").Router();

const lessonController = require("../controllers/lesson.controller");

router.get("/", lessonController.getAll);

module.exports = router;
