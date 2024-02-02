require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const { pool } = require("../config/db.config.js");
const authenticateToken = require("../middleware/authenticateToken");

/**
 * Creates a new reservation
 * Awaits a JSON object containing following params :
 * @param {string} reservationDate - The date of the reservation.
 * @param {boolean} isPaid - The payment state of the reservation.
 * @param {string} deliveryDate - The delivery date of the reservation.
 * @param {string} reservationState - The state of the reservation.
 * @param {number} idUser - The id of the user who made the reservation.
 * @param {number} idCar - The id of the car in the reservation.
 */

router.post("/create", authenticateToken, (req, res) => {
    pool.query(
        "INSERT INTO reservation (reservationdate, ispaid, deliverydate, reservationstate, iduser, idcar) VALUES ($1, $2, $3, $4, $5, $6)",
        [
            req.body.reservationDate,
            req.body.isPaid,
            req.body.deliveryDate,
            req.body.reservationState,
            req.body.idUser,
            req.body.idCar,
        ],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).json(result);
        }
    );
});

/**
 * Returns the info on the reservation object with the given id.
 */

router.get("/:id", authenticateToken, (req, res) => {
    pool.query("SELECT * FROM reservation WHERE idreservation = $1", [req.params.id], (error, reservation) => {
        if (error) {
            throw error;
        }
        if (reservation.rows.length === 0) {
            res.status(404).json({ message: "Réservation introuvable." });
        } else {
            res.status(200).json(reservation.rows);
        }
    });
});

/**
 * Return all the info on all reservation objects.
 */

router.get("/", authenticateToken, (req, res) => {
    pool.query("SELECT * FROM reservation", (error, reservations) => {
        if (error) {
            throw error;
        }
        if (reservations.rows.length === 0) {
            res.status(404).json({ message: "Aucune réservation trouvée." });
        } else {
            res.status(200).json(reservations.rows);
        }
    });
});

/**
 * Updates the info on the reservation object with the given id.
 * Awaits a JSON object containing following params :
 * @param {boolean} isPaid - The new payment state of the reservation.
 * @param {string} deliveryDate - The new delivery date of the reservation.
 * @param {string} reservationState - The new reservation state of the reservation.
 * @param {number} idReservation - The id of the reservation passed in url.
 */
router.put("/update", authenticateToken, (req, res) => {
    pool.query(
        "UPDATE reservation SET ispaid = $1, deliverydate = $2, reservationstate = $3 WHERE idreservation = $4",
        [req.body.isPaid, req.body.deliveryDate, req.body.reservationState, req.body.idReservation],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result);
        }
    );
});

/**
 * Deletes the reservation object with the given id.
 * @param {number} id - The id of the reservation passed in url.
 */
router.delete("/delete/:id", authenticateToken, (req, res) => {
    pool.query("DELETE FROM reservation WHERE idreservation = $1", [req.params.id], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result);
    });
});

module.exports = router;
