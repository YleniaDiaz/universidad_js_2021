let person = {
    name: 'Ylenia',
    surname: 'Díaz',
    email: 'ylenia.d.23@gmail.com',
    age: 20,
    completeName: function() {
        return this.name + ' ' + this.surname;
    }
}

console.log(person['name']);

//for in

for (const propertyName in person) {
    console.log(propertyName);
    console.log(person[propertyName]);
}