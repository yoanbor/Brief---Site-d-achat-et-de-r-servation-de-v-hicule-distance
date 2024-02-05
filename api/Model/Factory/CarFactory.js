const { CarEngine } = require("../CarEngine");
const { CarModel } = require("../CarModel");
const { Car } = require("../Car");

class CarFactory {
    static instance;

    /**
     * Returns the single instance of the CarFactory class
     * @return {CarFactory} the instance of the CarFactory class
     */
    getInstance() {
        if (!this.instance) {
            this.instance = new CarFactory();
        }
        return this.instance;
    }

    /**
     * Creates a new Car object based on the given JSON data.
     * @param {Object} json - the JSON data used to create the Car containing : -modelPrice -enginePrice -colour -idCarModel -idCarEngine
     * @return {Car} the newly created Car object
     */
    createCar(json) {
        return new Car(null, json.modelPrice + json.enginePrice, json.colour, json.idCarModel, json.idCarEngine);
    }
}

module.exports = CarFactory;
