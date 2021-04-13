function Person(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.completeName = function() {
        return `${this.name} ${this.surname}`;
    }
}

//añadir propiedad fuera del constructor a todos los obj tipo persona
Person.prototype.phone = '652149874';

let father = new Person('Daniel', 'Díaz', 'suEmail');
//father.phone = '365221498'; //propiedad exclusiva del objeto father
console.log(father.phone);

let mother = new Person('Yaiza', 'Trinidad', 'otro_email');
console.log(mother.completeName());

father.name = 'Eustaquio';
console.log(father);