let person = {
    name: 'Ylenia',
    surname: 'Díaz',
    email: 'ylenia.d.23@gmail.com',
    age: 20,
    language: 'es',
    get completeName() {
        return this.name + ' ' + this.surname;
    },
    get personLang() {
        return this.language.toUpperCase();
    },
    set changeLang(newLang) {
        this.language = newLang.toUpperCase();
    }
}

console.log(person.personLang);

person.changeLang = 'en';
console.log(person.personLang);
console.log(person.language);