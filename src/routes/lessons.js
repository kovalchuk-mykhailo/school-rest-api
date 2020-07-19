const router = require("express").Router();

const lessonController = require("../controllers/lesson.controller");

router.get("/", lessonController.getAll);
router.get("/:id", lessonController.getOne);
router.post("/", lessonController.create);
router.delete("/:id", lessonController.delete);
router.put("/:id", lessonController.update);

module.exports = router;
