let person = {
    name: 'Ylenia',
    surname: 'Díaz',
    completeData: function(phoneNumber, age) {
        return `${this.name} ${this.surname} [Teléfono: ${phoneNumber} - Edad: ${age}]`;
    }
}

let otherPerson = {
    name: 'Miriam',
    surname: 'Herrera'
}

console.log(person.completeData('654128745', 20));
console.log(person.completeData.call(otherPerson, '698451985', 18));