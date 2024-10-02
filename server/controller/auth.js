const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateTokens = (username) => {
  const accessToken = jwt.sign({ username: username }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(
    { username: username },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );
  return { accessToken, refreshToken };
};

const authController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const { accessToken, refreshToken } = generateTokens(user.username);

      res.json({ accessToken, refreshToken });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      let user = await User.findOne({ $or: [{ email }, { username }] });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      const { accessToken, refreshToken } = generateTokens(user.username);

      res.status(201).json({ accessToken, refreshToken });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  refreshToken: async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh Token is required" });
    }

    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      const { accessToken, refreshToken: newRefreshToken } = generateTokens(
        decoded.id
      );
      res.json({ accessToken, refreshToken: newRefreshToken });
    } catch (error) {
      res.status(403).json({ message: "Invalid refresh token" });
    }
  },

  logout: async (req, res) => {
    // In a more complex system, you might want to invalidate the refresh token here
    res.json({ message: "Logged out successfully" });
  },
};

module.exports = authController;
