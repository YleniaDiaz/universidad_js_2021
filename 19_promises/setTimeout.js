let myPromise = new Promise((resolved, rejected) => {
    let expresion = true;
    if (expresion) resolved('Correcto');
    else rejected('Error');
});

let promise = new Promise(resolved => {
    console.log('Inicio');
    setTimeout(() => resolved('Promesa y timeout'), 3000);
    console.log('Fin');
});

promise.then(value => console.log(value));