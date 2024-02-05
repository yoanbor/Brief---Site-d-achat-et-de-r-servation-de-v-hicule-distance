require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const { pool } = require("../config/db.config.js");
const authenticateToken = require("../Middleware/authenticateToken");

/**
 * Returns the info on the connected user.
 */
router.get("/profile", authenticateToken, (req, res) => {
    try {
        const user = pool.query("SELECT * FROM users WHERE iduser = $1", [req.connectedUser]);
        if (user.rows.length === 0) {
            res.status(404).json({ message: "Utilisateur introuvable." });
        } else {
            res.status(200).json(user.rows[0]);
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des informations de l'utilisateur." });
        throw error;
    }
});

/**
 * Updates the info on the user with the given id.
*/
router.put("/update", authenticateToken, (req, res) => {
    try {
        const user = pool.query(
            "UPDATE users SET firstname = $1, lastname = $2, email = $3, userpassword = $4, addressline1 = $5, addressline2 = $6, city = $7, province = $8, zip = $9, country = $10 WHERE iduser = $11",
            [
                req.firstname,
                req.lastname,
                req.email,
                req.userPassword,
                req.addressLine1,
                req.addressLine2,
                req.city,
                req.province,
                req.zip,
                req.country,
                req.connectedUser,
            ]
            );
            res.status(200).json(user.rows[0]);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la mise à jour des informations de l'utilisateur." });
            throw error;
        }
    });
    
/**
 * Deletes the connected user.
 */
router.delete("/delete", authenticateToken, (req, res) => {
    try {
        const user = pool.query("DELETE FROM users WHERE iduser = $1", [req.connectedUser]);
        res.status(200).json(user.rows[0]);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur." });
        throw error;
    }
});

/**
 * Returns the reservations that belong to te connected user.
*/
router.get("/reservations", authenticateToken, (req, res) => {
    try {
        const reservations = pool.query("SELECT * FROM reservations WHERE iduser = $1", [req.connectedUser]);
        if (reservations.rows.length === 0) {
            res.status(404).json({ message: "Aucune réservation disponible" });
        } else {
            res.status(200).json(reservations.rows);
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des réservations de l'utilisateur." });
        throw error;
    }
});

module.exports = router;


/**
 * Returns the info on the user with the given id.
 */
router.get("/:id", authenticateToken, (req, res) => {
    try {
        const user = pool.query("SELECT * FROM users WHERE iduser = $1", [req.params.id]);
        if (user.rows.length === 0) {
            res.status(404).json({ message: "Utilisateur introuvable." });
        } else {
            res.status(200).json(user.rows[0]);
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des informations de l'utilisateur." });
        throw error;
    }
});