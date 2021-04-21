async function promiseFunction() {
    console.log('Inicio');
    let promise = new Promise(resolved => {
        setTimeout(() => resolved('Promesa con await y timeout'), 3000);
    });

    console.log(await promise);
    console.log('Fin'); //espera a que acabe de ejecutarse la promesa para imprimirse
}

promiseFunction();