//Constructor obj tipo persona
function Person(name, username, email) {
    this.name = name;
    this.username = username;
    this.email = email;
}

let father = new Person('Daniel', 'Díaz', 'suEmail');
console.log(father);

let mother = new Person('Yaiza', 'Trinidad', 'otro_email');
console.log(mother);

father.name = 'Eustaquio';
console.log(father);