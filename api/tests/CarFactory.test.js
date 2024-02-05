const CarFactory = require("../Model/Factory/CarFactory");
const Car = require("../Model/Car");
const cf = new CarFactory().getInstance();

test("Car Factory creating a car", () => {
    const car = cf.getInstance().createCar({
        modelPrice: 6000,
        enginePrice: 1000,
        colour: "blue",
        idCarModel: 1,
        idCarEngine: 1,
    });
    expect(car.carPrice).toBe(6000 + 1000);
    expect(car.colour).toBe("blue");
    expect(car.idCarModel).toBe(1);
    expect(car.idCarEngine).toBe(1);
});