let myPromise = new Promise((resolved, rejected) => {
    let expresion = true;
    if (expresion) resolved('Correcto');
    else rejected('Error');
});

/*myPromise.then(
    value => console.log(value), //resolved
    error => console.log(error) //rejected
);*/

myPromise.then(value => console.log(value))
    .catch(error => console.log(error));