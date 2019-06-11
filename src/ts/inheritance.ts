class Vehicle {
    public name: string;
    public horsePower: number;
    public wheels: number;

    constructor(_name?: string, _horsePower?: number, _wheels?: number) {
        this.name = _name;
        this.setParams(_horsePower, _wheels);
    }

    public setParams(horsePower, wheels): void {
        this.horsePower = horsePower;
        this.wheels = wheels;
    }

    public getParams(): object {
        return {
            horsePower: this.horsePower,
            wheels: this.wheels
        };
    }

    public toString(): string {
        return `Vehicle(${this.name})`;
    }
}

class Car extends Vehicle {
    public name: string;
    public horsePower: number;
    public wheels: number;
    public color: string;

    constructor(
        _name?: string,
        _horsePower?: number,
        _wheels?: number,
        _color?: string
    ) {
        super(_name, _horsePower, _wheels);
        this.color = _color;
    }

    public toString(): string {
        return `Car, ${super.toString()}`;
    }
}

var myCarTs = new Car('BMW', 163, 4, 'navy');
console.log(myCarTs.toString());
console.log(myCarTs.getParams());
