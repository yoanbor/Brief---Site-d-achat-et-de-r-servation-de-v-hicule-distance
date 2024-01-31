require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const { pool } = require("../config/db.config.js");
const authenticateToken = require("../middleware/authenticateToken");

router.get("/profile", authenticateToken, async (req, res) => {
    const user = await pool.query("SELECT * FROM users WHERE iduser = $1", [req.userId]);
    if (user.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.rows[0]);
});

module.exports = router;
