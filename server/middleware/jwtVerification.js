const jwt = require("jsonwebtoken");
const User = require("../model/user");

module.exports = async function (req, res, next) {
  const authHeader = req.header("x-auth-token");

  if (!authHeader) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const token = authHeader;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    const user = await User.findOne({ username: decoded.username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
