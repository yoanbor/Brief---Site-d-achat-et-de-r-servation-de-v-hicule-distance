require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const pool = require("./config/db.config.js");

const app = express();

const PORT = process.env.PORT || 3000;

//Functions
const getReservation = (req, res) => {
    pool.query("SELECT * FROM reservation", (error, reservation) => {
        if (error) {
            throw error;
        }
        res.status(200).json(reservation.rows);
    });
};

// Creates a car in the database
const createCar = (req, res) => {
    const car = new CarFactory().createCar(req.body);
    pool.query(
        "INSERT INTO cars (idCar, carPrice, idCarModel) VALUES ($1, $2, $3)",
        [car.idCar, car.carPrice, car.idCarModel],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).json(result);
        }
    );
};

app.post("/cars", createCar);

app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
});
