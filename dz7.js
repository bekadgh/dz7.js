class Transport {
    constructor(color,type,model) {
        this.color = color,
        this.type = type,
        this.model = model;
    }
    startEngine () {
        console.log(`Color:"${this.color}",type:"${this.type}",Model:"${this.model}"`);
    }
}
const transport = new Transport ("black","Nissan","s15")
transport.startEngine()
class Car extends Transport {
    constructor(color,type,model,prototype) {
        super(color,type,model);
        this.prototype = prototype;
    }
    startEngine() {
        console.log(`prototype:"${this.prototype}"`);
    }
}
const car = new Car ("black","Nisan","s15","vehicle")
car.startEngine()