//const myArrowFunction = () => { console.log('Función flecha '); }

//const myArrowFunction = () => console.log('Función flecha ');

//const myArrowFunction = () => { return 'Función flecha'; }

const myArrowFunction = () => 'Función flecha';
console.log(myArrowFunction());

const getObj = () => ({ name: 'Ylenia', surname: 'Díaz Trinidad' });
console.log(getObj());

//const functionWithParams = (message) => console.log(message);
const functionWithParams = message => console.log(message);
functionWithParams('Esto es un mensaje');

const sum = (x, y) => `${x} + ${y} = ${x+y}`;
console.log(sum(2, 7));