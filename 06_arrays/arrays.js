//let cars = new Array('BMW', 'Chevrolet', 'Opel');
const CARS = ['BMW', 'Chevrolet', 'Opel', 'Mercedes Benz'];
console.log(CARS);

//acceder a un elemento
console.log(CARS[0]); //BMW

//recorrer array
for (let i = 0; i < CARS.length; i++) {
    console.log(i + ': ' + CARS[i]);
}

//modificar elementos
CARS[3] = 'MercedesBenz';
console.log(CARS[3]);

//añadir elemento
CARS.push('Ford');
console.log(CARS);

//saber si es un array
console.log(typeof CARS);
console.log(Array.isArray(CARS));
console.log(CARS instanceof Array);