require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./controllers/Auth");
const userRoutes = require("./controllers/UserController");
const carEngineRoutes = require("./controllers/CarEngineController");
const carModelRoutes = require("./controllers/CarModelController");
const carRoutes = require("./controllers/CarController");
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/carEngines", carEngineRoutes);
app.use("/carModels", carModelRoutes);
app.use("/cars", carRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
