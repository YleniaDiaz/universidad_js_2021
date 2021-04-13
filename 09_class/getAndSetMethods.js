class Drink {
    constructor(brand, taste) {
        this._brand = brand;
        this._taste = taste;
    }

    get brand() {
        return this._brand;
    }

    set brand(brand) {
        this._brand = brand;
    }

    get taste() {
        return this._taste;
    }

    set taste(taste) {
        this._taste = taste;
    }
}

let drink1 = new Drink('Monster', 'Rehab');
let drink2 = new Drink('CocaCola', 'Original');

console.log(drink1.brand);
drink2.brand = 'Fanta';
console.log(drink2);