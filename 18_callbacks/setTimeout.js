function callbackFunction() {
    console.log('Asíncrono cada 3 seg');
}

setTimeout(callbackFunction, 3000);

setTimeout(() => console.log('Asíncrono cada 2 seg'), 2000);