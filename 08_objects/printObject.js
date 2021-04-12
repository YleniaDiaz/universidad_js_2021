let person = {
    name: 'Ylenia',
    surname: 'Díaz',
    email: 'ylenia.d.23@gmail.com',
    age: 20,
    completeName: function() {
        return this.name + ' ' + this.surname;
    }
}

//concatenar valores
console.log(`${person.name} ${person.surname}`);

//for in
for (const propertyName in person) {
    console.log(person[propertyName]);
}

//Object.values()
let arrayPerson = Object.values(person);
console.log(arrayPerson);

//JSON.stringify()
let stringPerson = JSON.stringify(person);
console.log(stringPerson);