require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const { pool } = require("../config/db.config.js");
const authenticateToken = require("../middleware/authenticateToken");

/**
 * Returns the info on the connected user.
 */
router.get("/profile", authenticateToken, (req, res) => {
    const user = pool.query("SELECT * FROM users WHERE iduser = $1", [req.connectedUser]);
    if (user.rows.length === 0) {
        res.status(404).json({ message: "Utilisateur introuvable." });
    } else {
        res.status(200).json(user.rows[0]);
    }
});

/**
 * Returns the info on the user with the given id.
 */
router.get("/:id", authenticateToken, (req, res) => {
    pool.query("SELECT * FROM users WHERE iduser = $1", [req.params.id], (error, user) => {
        if (error) {
            throw error;
        }
        res.status(200).json(user.rows);
    });
});

/**
 * Updates the info on the user with the given id.
 */
router.put("/update", authenticateToken, (req, res) => {
    pool.query(
        "UPDATE users SET firstname = $1, lastname = $2, email = $3, userpassword = $4, addressline1 = $5, addressline2 = $6, city = $7, province = $8, zip = $9, country = $10 WHERE iduser = $11",
        [
            req.body.firstname,
            req.body.lastname,
            req.body.email,
            req.body.userPassword,
            req.body.addressLine1,
            req.body.addressLine2,
            req.body.city,
            req.body.province,
            req.body.zip,
            req.body.country,
            req.connectedUser,
        ],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result);
        }
    );
});

/**
 * Deletes the user with the given id.
 */
router.delete("/delete", authenticateToken, (req, res) => {
    pool.query("DELETE FROM users WHERE iduser = $1", [req.connectedUser], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result);
    });
});

/**
 *
 */
router.get("/reservations", authenticateToken, (req, res) => {
    const reservations = pool.query("SELECT * FROM reservations WHERE iduser = $1", [req.connectedUser]);
    if (reservations.rows.length === 0) {
        res.status(404).json({ message: "Aucune réservation disponible" });
    } else {
        res.status(200).json(reservations.rows);
    }
});

module.exports = router;
