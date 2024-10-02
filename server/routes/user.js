const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const auth = require("../middleware/jwtVerification");

router.get("/", auth, userController.getAllUser);
router.get("/:username", auth, userController.getUser);
router.post("/", auth, userController.addUser);
router.put("/:username", auth, userController.updateUser);
router.delete("/:username", auth, userController.deleteUser);
router.put("/:username/password", auth, userController.updatePassword);

module.exports = router;
