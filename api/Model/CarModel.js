class CarModel {
    /**
     * Creates a new instance of a CarModel.
     * @param {number} idCarModel - The unique ID of the car model.
     * @param {string} name - The name of the car model.
     * @param {number} doors - The number of doors the car model has.
     * @param {number} modelPrice - The price of the car model.
     */
    constructor(idCarModel, name, colour, doors, modelPrice) {
        this.idCarModel = idCarModel;
        this.name = name;
        this.doors = doors;
        this.modelPrice = modelPrice;
    }
}

exports.CarModel = CarModel;
