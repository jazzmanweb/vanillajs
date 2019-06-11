var myCarES6 = (function() {
    class Vehicle {
        constructor(name, horsePower, wheels) {
            this.name = name;
            this.setParams(horsePower, wheels);
        }

        setParams(horsePower, wheels) {
            this.horsePower = horsePower;
            this.wheels = wheels;
        }

        getParams() {
            return {
                horsePower: this.horsePower,
                wheels: this.wheels
            };
        }

        toString() {
            return `Vehicle(${this.name})`;
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

    return new Car('BMW', 163, 4, 'navy');
})();

console.log(myCarES6.toString());
console.log(myCarES6.getParams());
