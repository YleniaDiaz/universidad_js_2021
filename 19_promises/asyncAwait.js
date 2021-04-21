async function promiseAsyncAwait() {
    let promise = new Promise(resolved => {
        resolved('Promesa con await');
    });

    console.log(await promise);
}

promiseAsyncAwait();