class Person {
    static countPerson = 0;

    constructor(name, surname, age) {
        this._id = ++Person.countPerson;
        this._name = name;
        this._surname = surname;
        this._age = age;
    }

    get id() { return this._id; }

    get name() { return this._name; }

    set name(name) { this._name = name; }

    get surname() { return this._surname; }

    set surname(surname) { this._surname = surname; }

    get age() { return this._age; }

    set age(age) { this._age = age; }

    toString() {
        return `ID: ${this._id} - Nombre: ${this._name} ${this._surname} - Edad: ${this._age}`;
    }
}