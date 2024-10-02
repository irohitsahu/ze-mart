const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const auth = require("../middleware/jwtVerification");

router.get("/", auth, user.getAllUser);
router.get("/:id", auth, user.getUser);
router.post("/", auth, user.addUser);
router.put("/:id", auth, user.editUser);
router.patch("/:id", auth, user.editUser);
router.delete("/:id", auth, user.deleteUser);

module.exports = router;
