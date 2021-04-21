//async indica que una función devuelve una promesa
async function myPromiseFunction() {
    return 'Promesa y async';
}

myPromiseFunction().then(value => console.log(value));