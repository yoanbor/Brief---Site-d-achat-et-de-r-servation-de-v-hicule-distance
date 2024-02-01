const carFactory = require("../model/factory/CarFactory");
require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const { pool } = require("../config/db.config.js");
const authenticateToken = require("../middleware/authenticateToken");

/**
 * Creates a new car object.
 * Awaits a JSON object containing following params :
 * @param {number} id - The id of the car model passed in url.
 * @param {number} enginePrice - The price of the car engine.
 * @param {number} modelPrice - The price of the car model.
 * @param {string} colour - The colour of the car object.
 * @param {number} idCarModel - The id of the car model passed in url.
 * @param {number} idCarEngine - The id of the car engine passed in url.
 */
router.post("/cars", authenticateToken, (req, res) => {
    const car = carFactory.getInstance().createCar(req.body);
    pool.query(
        "INSERT INTO car (idcar, carprice, colour, idcarmodel, idcarengine) VALUES ($1, $2, $3, $4, $5)",
        [car.idCar, car.carPrice, car.colour, car.idCarModel, car.idCarEngine],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).json(result);
        }
    );
});

/**
 * Returns the info on the car object with the given id.
 */
router.get("/:id", authenticateToken, (req, res) => {
    pool.query("SELECT * FROM car WHERE idcar = $1", [req.params.id], (error, car) => {
        if (error) {
            throw error;
        }
        if (car.rows.length === 0) {
            res.status(404).json({ message: "Voiture introuvable." });
        } else {
            res.status(200).json(car.rows);
        }
    });
});

/**
 * Returns the info on all car objects.
 */
router.get("/", authenticateToken, (req, res) => {
    pool.query("SELECT * FROM car", (error, cars) => {
        if (error) {
            throw error;
        }
        if (cars.rows.length === 0) {
            res.status(404).json({ message: "Aucune voiture trouvée." });
        } else {
            res.status(200).json(cars.rows);
        }
    });
});

/**
 * Updates the info on the car object with the given id.
 * Awaits a JSON object containing following params :
 * @param {number} enginePrice - The new price of the car engine.
 * @param {number} modelPrice - The new price of the car model.
 * @param {string} colour - The new colour of the car object.
 * @param {number} idCarEngine - The id of the car engine passed in url.
 * @param {number} idCarModel - The id of the car object passed in url.
 * @param {number} id - The id of the car object passed in url.
 */
router.put("/update/:id", authenticateToken, async (req, res) => {
    const car = carFactory.getInstance().createCar(req.body);
    await pool.query(
        "UPDATE car SET carprice = $1, colour = $2, idcarmodel = $3, idcarengine = $4 WHERE idcar = $5",
        [car.carPrice, car.colour, car.idCarModel, car.idCarEngine, req.params.id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result);
        }
    );
});

/**
 * Deletes the car object with the given id.
 * @param {number} id - The id of the car object passed in url.
 */
router.delete("/delete/:id", authenticateToken, async (req, res) => {
    await pool.query("DELETE FROM car WHERE idcar = $1", [req.params.id], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result);
    });
});

module.exports = router;
