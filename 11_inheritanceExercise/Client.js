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