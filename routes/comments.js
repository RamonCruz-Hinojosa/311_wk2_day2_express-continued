const express = require("express");
const router = express.Router();
const controller = require("../controllers/comments");

router.get("/", controller.list);

router.get("/:id", controller.get);

router.post("/", controller.create);

module.exports = router;
