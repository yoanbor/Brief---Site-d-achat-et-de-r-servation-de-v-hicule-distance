const express = require("express");
const request = require("supertest");
const UserController = require("../../Controllers/UserController");
const app = express();
const { pool } = require("../../config/db.config");

app.use("/", UserController);

test("/profile", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [{ iduser: 1 }] });
    const res = await request(app).get("/profile");
    expect(res.status).toBe(200);
    expect(res.body.iduser).toBe(1);
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/profile with no result", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [] });
    const res = await request(app).get("/profile");
    expect(res.status).toBe(404);
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("profile throws error", async () => {
    pool.query = jest.fn().mockImplementation(() => {
        throw new Error();
    });
    const res = await request(app).get("/profile");
    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Erreur lors de la récupération des informations de l'utilisateur.");
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/:id", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [{ iduser: 1 }] });
    const res = await request(app).get("/1");
    expect(res.status).toBe(200);
    expect(res.body.iduser).toBe(1);
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/:id with no result", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [] });
    const res = await request(app).get("/1");
    expect(res.status).toBe(404);
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/:id throws error", async () => {
    pool.query = jest.fn().mockImplementation(() => {
        throw new Error();
    });
    const res = await request(app).get("/1");
    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Erreur lors de la récupération des informations de l'utilisateur.");
    expect(pool.query).toHaveBeenCalledTimes(1);
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
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/update throws error", async () => {
    pool.query = jest.fn().mockImplementation(() => {
        throw new Error();
    });
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
    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Erreur lors de la mise à jour des informations de l'utilisateur.");
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/delete", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [{ iduser: 1 }] });
    const res = await request(app).delete("/delete");
    expect(res.status).toBe(200);
    expect(res.body.iduser).toBe(1);
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/delete throws error", async () => {
    pool.query = jest.fn().mockImplementation(() => {
        throw new Error();
    });
    const res = await request(app).delete("/delete");
    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Erreur lors de la suppression de l'utilisateur.");
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/reservations", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [{idreservation: 1}] });
    const res = await request(app).get("/reservations");
    console.log(res);
    expect(res.status).toBe(200);
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/reservations with no result", async () => {
    pool.query = jest.fn().mockReturnValueOnce({ rows: [] });
    const res = await request(app).get("/reservations");
    expect(res.status).toBe(404);
    expect(pool.query).toHaveBeenCalledTimes(1);
});

test("/reservations throws error", async () => {
    pool.query = jest.fn().mockImplementation(() => {
        throw new Error();
    });
    const res = await request(app).get("/reservations");
    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Erreur lors de la récupération des réservations de l'utilisateur.");
    expect(pool.query).toHaveBeenCalledTimes(1);
});

// This comment is a test of the github action script