class Vehicle {
    constructor(name, horsePower, wheels) {
        this.name = name;
        this.setParams(name, wheels);
    }

    setParams(horsePower, wheels) {
        this.horsePower = horsePower;
        this.wheels = wheels;
    }

    getParams() {
        return {
            horsePower: this.horsePower,
            wheels: this.wheels,
        }
    }

    toString() {
        return `Vechicle(${this.name})`;
    }
}


class Car extends Vehicle {
    constructor(name, horsePower, wheels, color) {
        super(name, horsePower, wheels);
        this.color = color;
    }

    toString() {
        return `Car, ${Vehicle.prototype.toString.call(this)}`;
    }
}

var myCar = new Car('BMW', 163, 4, 'navy');
console.log(myCar.toString());
console.log(myCar.getParams());

