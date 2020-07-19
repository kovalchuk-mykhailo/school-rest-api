const router = require("express").Router();
const lessonRouter = require("./lessons");
const groupRouter = require("./groups");
const teacherRouter = require("./teachers");
const studentRouter = require("./students");

const errorHandler = require("../helpers/error.builder.helper");

router.use("/api/v1/groups", groupRouter);
router.use("/api/v1/students", studentRouter);
router.use("/api/v1/teachers", teacherRouter);
router.use("/api/v1/lessons", lessonRouter);

router.use("/", (req, res) => {
  res.send("Successfully!");
});

router.use(errorHandler);

router.use("*", (req, res, next) => {
  return res.status(404).json({ message: "Not found" });
});

module.exports = router;
