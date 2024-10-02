const User = require("../model/user");

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
      const user = await User.findOne({ id: req.params.id });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
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

  // Edit a user (works for both PUT and PATCH)
  editUser: async (req, res) => {
    try {
      const user = await User.findOne({ id: req.params.id });
      if (user) {
        Object.assign(user, req.body);
        const updatedUser = await user.save();
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ id: req.params.id });
      if (user) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
