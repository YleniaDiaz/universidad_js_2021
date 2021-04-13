//Constructor obj tipo persona
function Person(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.completeName = function() {
        return `${this.name} ${this.surname}`;
    }
}

let father = new Person('Daniel', 'Díaz', 'suEmail');
console.log(father.completeName());

let mother = new Person('Yaiza', 'Trinidad', 'otro_email');
console.log(mother.completeName());

father.name = 'Eustaquio';
console.log(father);