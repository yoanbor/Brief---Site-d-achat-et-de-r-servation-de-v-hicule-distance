export class Car {
    /**
     * Creates a new instance of a Car.
     * @param {number} idCar - The unique ID of the car.
     * @param {number} carPrice - The price of the car.
     * @param {string} colour - The colour of the car.
     * @param {number} idCarModel - The unique ID of the car model that the car belongs to.
     * @param {number} idCarEngine - The unique ID of the car engine that the car has.
     */
    constructor(idCar, carPrice, colour, idCarModel, idCarEngine) {
        this.idCar = idCar;
        this.carPrice = carPrice;
        this.colour = colour;
        this.idCarModel = idCarModel;
        this.idCarEngine = idCarEngine;
    }
}
