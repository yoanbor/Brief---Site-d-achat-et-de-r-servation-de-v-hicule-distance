const { CarEngine } = require("../CarEngine");
const { CarModel } = require("../CarModel");
const { Car } = require("../Car");

class CarFactory {
    static instance;

    /**
     * Returns the single instance of the CarFactory class
     * @return {CarFactory} the instance of the CarFactory class
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new CarFactory();
        }
        return this.instance;
    }

    /**
     * Creates a new Car object based on the given JSON data.
     * @param {Object} json - the JSON data used to create the Car object
     * @return {Car} the newly created Car object
     */
    createCar(json) {
        const engineData = json.CarEngine;
        const engine = new CarEngine(
            engineData.idCarEngine,
            engineData.name,
            engineData.hp,
            engineData.fuelType,
            engineData.enginePrice
        );
        const modelData = json.CarModel;
        const model = new CarModel(
            modelData.idCarModel,
            modelData.name,
            modelData.colour,
            modelData.doors,
            modelData.modelPrice,
            engine
        );
        return new Car(null, model, model.modelPrice + engine.enginePrice);
    }
}
