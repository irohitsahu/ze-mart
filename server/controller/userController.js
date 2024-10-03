const User = require("../model/userModel");

const userController = {
  // Get all users
  getAllUser: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single user by ID
  getUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username }).select(
        "-password"
      );
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Add a new user
  addUser: async (req, res) => {
    const user = new User(req.body);
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update a user (works for both PUT and PATCH)
  updateUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Ensure the authenticated user is updating their own profile
      if (req.user.username !== req.params.username) {
        return res
          .status(403)
          .json({ message: "Not authorized to update this profile" });
      }

      Object.assign(user, req.body);
      await user.save();

      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ username: req.params.id });
      if (user) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updatePassword: async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;
      const user = await User.findOne({ username: req.params.username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Ensure the authenticated user is updating their own password
      if (req.user.username !== req.params.username) {
        return res
          .status(403)
          .json({ message: "Not authorized to update this password" });
      }

      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Current password is incorrect" });
      }

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
      await user.save();

      res.json({ message: "Password updated successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = userController;
