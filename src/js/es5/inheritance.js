'use strict';
var myCarES5 = (function() {
    function Vehicle(name, horsePower, wheels) {
        this.name = name;
        this.setParams(horsePower, wheels);
    }

    Vehicle.prototype.setParams = function(horsePower, wheels) {
        this.horsePower = horsePower;
        this.wheels = wheels;
    };

    Vehicle.prototype.getParams = function() {
        return {
            horsePower: this.horsePower,
            wheels: this.wheels
        };
    };

    Vehicle.prototype.toString = function() {
        return `Vehicle(${this.name})`;
    };

    function Car(name, horsePower, wheels, color) {
        Vehicle.call(this, name, horsePower, wheels);
        this.color = color;
    }
    Car.prototype = Object.create(Vehicle.prototype);
    Car.prototype.constructor = Car;

    Car.prototype.toString = function() {
        return `Car, ${Vehicle.prototype.toString.call(this)}`;
    };

    return new Car('BMW', 163, 4, 'navy');
})();

console.log(myCarES5.toString());
console.log(myCarES5.getParams());
