const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");
const auth = require("../middleware/jwtVerification");

router.get("/", auth, itemController.getAllItems);
router.get("/:id", auth, itemController.getItemById);

module.exports = router;
