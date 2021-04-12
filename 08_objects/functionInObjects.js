let person = {
    name: 'Ylenia',
    surname: 'Díaz',
    email: 'ylenia.d.23@gmail.com',
    age: 20,
    completeName: function() {
        return this.name + ' ' + this.surname;
    }
}

console.log(person.completeName());