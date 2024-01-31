class Car {
/**
 * Creates a new instance of a Car.
 * @param {number} idCar - The unique ID of the car.
 * @param {number} carPrice - The price of the car.
 * @param {string} carModel - The model of the car.
 */
    constructor(idCar, carPrice, carModel) {
        this.idCar = idCar;
        this.carPrice = carPrice;
        this.carModel = carModel;
    }
}

exports.Car = Car;