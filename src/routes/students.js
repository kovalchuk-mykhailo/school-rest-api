const router = require("express").Router();

const studentController = require("../controllers/studentController");

router.get("/", studentController.getAll);

module.exports = router;
