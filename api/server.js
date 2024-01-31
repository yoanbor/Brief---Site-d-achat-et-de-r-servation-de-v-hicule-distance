require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./controllers/Auth");
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
