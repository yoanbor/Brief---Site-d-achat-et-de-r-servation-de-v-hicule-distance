export class CarEngine {
    /**
     * Creates a new instance of a CarEngine.
     * @param {number} idCarEngine - The unique ID of the car engine.
     * @param {string} name - The name of the car engine.
     * @param {number} hp - The horse power of the car engine.
     * @param {string} fuelType - The type of fuel the car engine has.
     * @param {number} enginePrice - The price of the car engine.
     * @param {number} idCarModel - The unique ID of the car model the engine belongs to.
     */
    constructor(idCarEngine, name, hp, fuelType, enginePrice, idCarModel) {
        this.idCarEngine = idCarEngine;
        this.name = name;
        this.hp = hp;
        this.fuelType = fuelType;
        this.enginePrice = enginePrice;
        this.idCarModel = idCarModel;
    }
}
