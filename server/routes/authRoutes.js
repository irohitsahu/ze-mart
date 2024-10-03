const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const auth = require("../middleware/jwtVerification");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/refresh-token", authController.refreshToken);
router.post("/logout", auth, authController.logout);

module.exports = router;
