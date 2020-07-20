const router = require("express").Router();

const teacherController = require("../controllers/teacherController");

router.get("/", teacherController.getAll);

module.exports = router;
