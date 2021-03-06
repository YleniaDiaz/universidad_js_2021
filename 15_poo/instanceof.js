class Employee {
    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
    }

    get name() { return this._name; }
    set name(name) { this._name = name; }

    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }

    showDetails() { return `Empleado -> Nombre: ${this._name} - Sueldo: ${this._salary}`; }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this._department = department;
    }

    get department() { return this._department; }
    set department(department) { this._department = department; }

    showDetails() { return `Gerente -> Nombre: ${this._name} - Sueldo: ${this._salary} - Departamento: ${this._department}`; }
}

function getType(obj) {
    if (obj instanceof Manager) {
        console.log('Es de tipo gerente');
    } else if (obj instanceof Employee) {
        console.log('Es de tipo empleado');
    }

}

let employee = new Employee('Ylenia Díaz', 1990);
let manager = new Manager('Eugenia Alfonso', 1500, 'Contabilidad');

getType(employee);
getType(manager);