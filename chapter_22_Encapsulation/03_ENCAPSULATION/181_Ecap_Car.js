class Car{
    #engine;
    constructor(name, engineName){
        this.name=name;
        this.#engine=engineName;
    }
    getEngine()
    {
        return this.#engine;
    }
    setEngine(enName)
    {
        this.#engine=enName;
    }
}
const tesla = new Car("tesla", "V8");
console.log(tesla.getEngine());
tesla.setEngine("V9");
console.log(tesla.getEngine());