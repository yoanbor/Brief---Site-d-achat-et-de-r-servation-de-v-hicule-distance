require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool } = require("../config/db.config.js");
const { User } = require("../Model/User.js");

router.post("/register", async (req, res) => {
    try {
        const user = new User(null, req.body.email, null, req.body.lastname, req.body.firstname);
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        const newUser = await pool.query(
            "INSERT INTO users (firstname, lastname, email, userPassword ) VALUES ($1, $2, $3, $4) RETURNING *",
            [user.firstname, user.lastname, user.email, passwordHash]
        );

        // Generate JWT token
        const token = jwt.sign({ userId: newUser.rows[0].iduser }, process.env.KEY, { expiresIn: "8h", algorithm: "HS256" });
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Erreur serveur lors de la création du compte");
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare hashed passwords
        const hashedPassword = user.rows[0].userpassword;
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.rows[0].iduser }, process.env.KEY, { expiresIn: "8h", algorithm: "HS256" });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send("Une erreur est survenue sur le serveur lors de l'authentification.");
    }
});

module.exports = router;
