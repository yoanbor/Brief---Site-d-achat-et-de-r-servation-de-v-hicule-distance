require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const { pool } = require("../config/db.config.js");
const authenticateToken = require("../middleware/authenticateToken");

/**
 * Creates a new notification object
 * Awaits a JSON object containing following params :
 * @param {string} dateNotification - The date of the notification.
 * @param {string} messageNotification - The message of the notification.
 * @param {number} idReservation - The id of the reservation in the notification
 */
router.post("/notification", authenticateToken, (req, res) => {
    pool.query(
        "INSERT INTO notification (datenotification, messagenotification, idreservation) VALUES ($1, $2, $3)",
        [req.body.dateNotification, req.body.messageNotification, req.body.idReservation],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).json(result);
        }
    );
});

/**
 * Returns the info on the notification object with the given id.
 */
router.get("/:id", authenticateToken, (req, res) => {
    pool.query("SELECT * FROM notification WHERE idnotification = $1", [req.params.id], (error, notification) => {
        if (error) {
            throw error;
        }
        if (notification.rows.length === 0) {
            res.status(404).json({ message: "Notification introuvable." });
        } else {
            res.status(200).json(notification.rows);
        }
    });
});

/**
 * Return all the info on all notification objects.
 */
router.get("/", authenticateToken, (req, res) => {
    pool.query("SELECT * FROM notification", (error, notifications) => {
        if (error) {
            throw error;
        }
        if (notifications.rows.length === 0) {
            res.status(404).json({ message: "Aucune notification trouvée." });
        } else {
            res.status(200).json(notifications.rows);
        }
    });
});

/**
 * Updates the info on the notification object with the given id.
 * Awaits a JSON object containing following params :
 * @param {string} messageNotification - The new message of the notification.
 * @param {string} messageNotification - The new message of the notification.
 * @param {number} idReservation - The id of the reservation in the notification
 */
router.put("/update", authenticateToken, (req, res) => {
    pool.query(
        "UPDATE notification SET datenotification = $1, messagenotification = $2 WHERE idnotification = $3",
        [req.body.dateNotification, req.body.messageNotification, req.body.idNotification],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result);
        }
    );
});

/**
 * Deletes the notification object with the given id.
 * @param {number} id - The id of the notification passed in url.
 */
router.delete("/delete/:id", authenticateToken, (req, res) => {
    pool.query("DELETE FROM notification WHERE idnotification = $1", [req.params.id], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result);
    });
});

module.exports = router;
