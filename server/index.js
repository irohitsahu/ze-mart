const cors = require("cors");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
