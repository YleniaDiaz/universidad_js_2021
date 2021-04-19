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