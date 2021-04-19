/** PASAMOS TODAS LAS CLASES AQUÍ PORQUE NO ESTAMOS LANZANDO LOS ARCHIVOS EN UN SERVIDOR */

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

class Employee extends Person {
    static countEmployees = 0;

    constructor(name, surname, age, salary) {
        super(name, surname, age);
        this._idEmployee = ++Employee.countEmployees;
        this._salary = salary;
    }

    get idEmployee() { return this._idEmployee }

    get salary() { return this._salary }

    set salary(salary) { this._salary = salary }

    toString() {
        return `${super.toString()} - ID Empleado: ${this._idEmployee} - Sueldo: ${this._salary}`;
    }
}

class Client extends Person {
    static countClients = 0;

    constructor(name, surname, age, registrationDate) {
        super(name, surname, age);
        this._idClient = ++Client.countClients;
        this._registrationDate = registrationDate;
    }

    get idClient() { return this._idClient }

    get registrationDate() { return this._registrationDate }

    set registrationDate(registrationDate) { this._registrationDate = registrationDate }

    toString() {
        return `${super.toString()} - ID Cliente: ${this._idClient} - Fecha Registro: ${this._registrationDate}`;
    }
}

let person = new Person('Ylenia', 'Díaz Trinidad', 20);
console.log(person.toString());

let employee = new Employee('Juana', 'Rodríguez Santana', 30, 1500);
console.log(employee.toString());

let employee2 = new Employee('Daniel', 'Díaz Trujillo', 45, 1650);
console.log(employee2.toString());

let client = new Client('Yaiza', 'Trinidad Sánchez', 36, '04/08/1984');
console.log(client.toString());

let client2 = new Client('Denis', 'Tóman', 45, '19/08/2021');
console.log(client2.toString());