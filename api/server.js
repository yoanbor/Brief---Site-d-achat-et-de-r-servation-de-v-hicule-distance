require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./Controllers/Auth");
const userRoutes = require("./Controllers/UserController");
const carEngineRoutes = require("./Controllers/CarEngineController");
const carModelRoutes = require("./Controllers/CarModelController");
const carRoutes = require("./Controllers/CarController");
const reservationRoutes = require("./Controllers/ReservationController");
const notificationRoutes = require("./Controllers/NotificationController");
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/carEngines", carEngineRoutes);
app.use("/carModels", carModelRoutes);
app.use("/cars", carRoutes);
app.use("/reservations", reservationRoutes);
app.use("/notifications", notificationRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
