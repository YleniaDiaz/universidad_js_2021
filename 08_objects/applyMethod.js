let person = {
    name: 'Ylenia',
    surname: 'Díaz',
    completeData: function(phoneNumber, age) {
        //return `${this.name} ${this.surname}`;
        return `${this.name} ${this.surname} [Teléfono: ${phoneNumber} - Edad: ${age}]`;
    }
}

let otherPerson = {
    name: 'Miriam',
    surname: 'Herrera'
}

/*console.log(person.completeData());
console.log(person.completeData.apply(otherPerson));*/

console.log(person.completeData('654128745', 20));

let args = ['698451985', 18];
console.log(person.completeData.apply(otherPerson, args));