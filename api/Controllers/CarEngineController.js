require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const { pool } = require("../config/db.config.js");
const authenticateToken = require("../middleware/authenticateToken");

/**
 * Creates a new car engine.
 * Awaits a JSON object containing following params :
 * @param {string} nameEngine - The name of the car engine.
 * @param {number} hp - The hp of the car engine.
 * @param {string} fuelType - The fuel type of the car engine.
 * @param {number} enginePrice - The price of the car engine.
 * @param {number} idCarModel - The unique ID of the car model that the engine belongs to.
 */
router.post("/create", authenticateToken, async (req, res) => {
    await pool.query(
        "INSERT INTO carengine (nameengine, hp, fueltype, engineprice, idcarmodel) VALUES ($1, $2, $3, $4, $5)",
        [req.body.nameEngine, req.body.hp, req.body.fuelType, req.body.enginePrice, req.body.idCarModel],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result);
        }
    );
});

/**
 * Returns the info on the car engine with the given id.
 */
router.get("/:id", (req, res) => {
    pool.query("SELECT * FROM carengine WHERE idcarengine = $1", [req.params.id], (error, engine) => {
        if (error) {
            throw error;
        }
        if (engine.rows.length === 0) {
            res.status(404).json({ message: "Moteur introuvable." });
        } else {
            res.status(200).json(engine.rows);
        }
    });
});

/**
 * Returns the info on all car engines.
 */
router.get("/", (req, res) => {
    pool.query("SELECT * FROM carengine", (error, engines) => {
        if (error) {
            throw error;
        }
        if (engines.rows.length === 0) {
            res.status(404).json({ message: "Aucun moteur trouvé." });
        } else {
            res.status(200).json(engines.rows);
        }
    });
});

/**
 * Updates the info on the car engine with the given id.
 * Awaits a JSON object containing following params :
 * @param {string} nameEngine - The new name of the car engine.
 * @param {number} hp - The new hp of the car engine.
 * @param {string} fuelType - The new fuel type of the car engine.
 * @param {number} enginePrice - The new price of the car engine.
 * @param {number} idCarModel - The unique ID of the car model that the engine belongs to.
 * @param {number} id - The id of the car engine passed in url.
 */
router.put("/update/:id", authenticateToken, async (req, res) => {
    await pool.query(
        "UPDATE carengine SET nameengine = $1, hp = $2, fueltype = $3, engineprice = $4, idcarmodel = $5 WHERE idcarengine = $6",
        [req.body.nameEngine, req.body.hp, req.body.fuelType, req.body.enginePrice, req.body.idCarModel, req.params.id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result);
        }
    );
});

/**
 * Deletes the car engine with the given id.
 * @param {number} id - The id of the car engine passed in url.
 */
router.delete("/delete/:id", authenticateToken, async (req, res) => {
    await pool.query("DELETE FROM carengine WHERE idcarengine = $1", [req.params.id], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result);
    });
});

module.exports = router;
