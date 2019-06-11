'use strict';

function Vehicle(name, horsePower, wheels) {
    this.name = name;
    this.setParams(name, wheels);
}

Vehicle.prototype.setParams = function(horsePower, wheels) {
    this.horsePower = horsePower;
    this.wheels = wheels;
}

Vehicle.prototype.getParams = function() {
    return {
        horsePower: this.horsePower,
        wheels: this.wheels,
    }
}

Vehicle.prototype.toString = function() {
    return `Vechicle(${this.name})`;
}


function Car(name, horsePower, wheels, color) {
    Vehicle.call(this, name, horsePower, wheels);
    this.color = color;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.toString = function() {
    return `Car, ${Vehicle.prototype.toString.call(this)}`;
}

var myCar = new Car('BMW', 163, 4, 'navy');
console.log(myCar.toString());
console.log(myCar.getParams());
