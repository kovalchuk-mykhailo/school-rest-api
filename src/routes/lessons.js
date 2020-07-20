const router = require("express").Router();

const lessonController = require("../controllers/lessonController");

router.get("/", lessonController.getAll);
router.get("/:id", lessonController.getOne);
router.post("/", lessonController.create);
router.delete("/:id", lessonController.delete);
router.put("/:id", lessonController.update);

module.exports = router;
