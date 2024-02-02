require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const { pool } = require("../config/db.config.js");
const authenticateToken = require("../middleware/authenticateToken.js");

/**
 * Creates a new car model.
 * Awaits a JSON object containing following params :
 * @param {string} nameModel - The name of the car model.
 * @param {number} doors - The number of doors of the car model.
 * @param {number} modelPrice - The price of the car model.
 */
router.post("/create", authenticateToken, (req, res) => {
    pool.query(
        "INSERT INTO carmodel (namemodel, doors, modelprice) VALUES ($1, $2, $3)",
        [req.body.nameModel, req.body.doors, req.body.modelPrice],
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
router.get("/:id", authenticateToken, (req, res) => {
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
router.get("/", authenticateToken, (req, res) => {
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
 * @param {number} doors - The new number of doors of the car model.
 * @param {number} modelPrice - The new price of the car model.
 * @param {number} id - The id of the car model passed in url.
 */
router.put("/update/:id", authenticateToken, async (req, res) => {
    await pool.query(
        "UPDATE carmodel SET namemodel = $1, doors = $2, modelprice = $3 WHERE idcarmodel = $4",
        [req.body.nameModel, req.body.doors, req.body.modelPrice, req.params.id],
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
