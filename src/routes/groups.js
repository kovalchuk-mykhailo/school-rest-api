const router = require("express").Router();

const groupController = require("../controllers/group.controller");

router.get("/", groupController.getAll);

module.exports = router;
