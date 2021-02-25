// parámetros -> variables que defines en una función func(a, b){}
// argumentos -> valores de esas variables func(3,2)

let sum = function(a = 4, b = 23) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

let result = sum(3, 4, 8); //no es obligatorio pasar todos los argumentos
console.log(result);