const express = require("express");
const request = require("supertest");
const UserController = require("../../Controllers/UserController");
const app = express();
const { pool } = require("../../config/db.config");

// mock a router to test the routes
const router = express.Router();
app.use("/", UserController);

test("/profile", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [{ iduser: 1 }] });
    const res = await request(app).get("/profile");
    expect(res.status).toBe(200);
    expect(res.body.iduser).toBe(1);
});

test("/profile with no result", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [] });
    const res = await request(app).get("/profile");
    expect(res.status).toBe(404);
});

test("/:id", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [{ iduser: 1 }] });
    const res = await request(app).get("/1");
    expect(res.status).toBe(200);
    expect(res.body.iduser).toBe(1);
});

test("/update", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [{ iduser: 1 }] });
    const res = await request(app).put("/update").send({
        firstname: "John",
        lastname: "Doe",
        email: "<EMAIL>",
        userPassword: "<PASSWORD>",
        addressLine1: "123 Main Street",
        addressLine2: "Suite 100",
        city: "New York",
        province: "NY",
        zip: "10001",
        country: "USA",
    });
    expect(res.status).toBe(200);
    expect(res.body.iduser).toBe(1);
});
