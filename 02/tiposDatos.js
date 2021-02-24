//tipo string
let name = 'Ylenia';
console.log(name);

//tipo numérico
let number = 27;
console.log(typeof number);

//tipo object
let testObject = {
    name: 'Miriam',
    surname: 'Herrera',
    age: 18
}
console.log(testObject);

//tipo boolean
let bool = true; //o false
console.log(bool);

//tipo function
function test() {
    console.log('funcion');
}
console.log(test);

//tipo Symbol
let testSymbol = Symbol('My Symbol');
console.log(testSymbol);

//tipo class
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
console.log(Person);

//tipo undefined
let x;
console.log(x) //imprime undefined

//tipo null = no tiene valor
let y = null;
console.log(y) //con typeof devuelve object (null es tipo object)

//tipo array
let auxArray = ['Eyra', 'Ylenia', 'Alison'];
console.log(auxArray); //typeof = object

//cadena vacía
let empty = '';
console.log(empty); //tipo strging