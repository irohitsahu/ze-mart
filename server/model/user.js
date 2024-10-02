const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
  },
  address: {
    city: String,
    street: String,
    number: Number,
    zipcode: String,
    geolocation: {
      lat: String,
      long: String,
    },
  },
  phone: String,
});

module.exports = mongoose.model("user", userSchema);
