require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const { pool } = require("../config/db.config.js");
const authenticateToken = require("../middleware/authenticateToken.js");

/**
 * Creates a new car model.
 * Awaits a JSON object containing following params :
 * @param {string} nameModel - The name of the car model.
 * @param {string} colour - The colour of the car model.
 * @param {number} doors - The number of doors of the car model.
 * @param {number} modelPrice - The price of the car model.
 * @param {number} idCarEngine - The id of the car engine.
 */
router.post("/create", authenticateToken, async (req, res) => {
    await pool.query(
        "INSERT INTO carmodel (namemodel, colour, doors, modelprice, idcarengine) VALUES ($1, $2, $3, $4, $5)",
        [req.body.nameModel, req.body.colour, req.body.doors, req.body.modelPrice, req.body.idCarEngine],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result);
        }
    );
});

/**
 * Returns the info on the car model with the given id.
 */
router.get("/:id", (req, res) => {
    pool.query("SELECT * FROM carmodel WHERE idcarmodel = $1", [req.params.id], (error, model) => {
        if (error) {
            throw error;
        }
        if (model.rows.length === 0) {
            res.status(404).json({ message: "Modèle introuvable." });
        } else {
            res.status(200).json(model.rows);
        }
    });
});

/**
 * Returns the info on all car models.
 */
router.get("/", (req, res) => {
    pool.query("SELECT * FROM carmodel", (error, models) => {
        if (error) {
            throw error;
        }
        if (models.rows.length === 0) {
            res.status(404).json({ message: "Aucun modèle trouvé." });
        } else {
            res.status(200).json(models.rows);
        }
    });
});

/**
 * Updates the info on the car model with the given id.
 * Awaits a JSON object containing following params :
 * @param {string} nameModel - The new name of the car model.
 * @param {string} colour - The new colour of the car model.
 * @param {number} doors - The new number of doors of the car model.
 * @param {number} modelPrice - The new price of the car model.
 * @param {number} carEngineId - The new id of the car engine.
 * @param {number} id - The id of the car model passed in url.
 */
router.put("/update/:id", authenticateToken, async (req, res) => {
    await pool.query(
        "UPDATE carmodel SET namemodel = $1, colour = $2, doors = $3, modelprice = $4, idcarengine = $5 WHERE idcarmodel = $6",
        [req.body.nameModel, req.body.colour, req.body.doors, req.body.modelPrice, req.body.idCarEngine, req.params.id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result);
        }
    );
});

/**
 * Deletes the car model with the given id.
 * @param {number} id - The id of the car model passed in url.
 */
router.delete("/delete/:id", authenticateToken, async (req, res) => {
    await pool.query("DELETE FROM carmodel WHERE idcarmodel = $1", [req.params.id], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result);
    });
});

module.exports = router;
