require("dotenv").config({ path: "./" + ".env" });
const express = require("express");
const pool = require("./config/db.config.js");

const app = express();

const PORT = process.env.PORT || 3000;

//Functions
const getReservation = (req, res) => {
    pool.query("SELECT * FROM reservation", (error, reservation) => {
        if (error) {
            throw error;
        }
        res.status(200).json(reservation.rows);
    });
};

//Here you can add your routes
//Here's an example
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/reservations", getReservation);

app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
});
