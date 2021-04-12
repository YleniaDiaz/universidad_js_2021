let person = {
    name: 'Ylenia',
    surname: 'Díaz',
    email: 'ylenia.d.23@gmail.com',
    age: 20,
    completeName: function() {
        return this.name + ' ' + this.surname;
    }
}

person.phoneNumber = '654216945';

console.log(person);

delete person.phoneNumber;
console.log(person);