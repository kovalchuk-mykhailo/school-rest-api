const router = require("express").Router();

const teacherController = require("../controllers/teacher.controller");

router.get("/", teacherController.getAll);

module.exports = router;
