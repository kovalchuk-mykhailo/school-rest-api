const router = require("express").Router();

const groupController = require("../controllers/groupController");

router.get("/", groupController.getAll);

module.exports = router;
