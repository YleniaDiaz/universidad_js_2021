'use strict';

try {
    let x = 10;
    //myFunction();
} catch (error) {
    console.log(`ERROR: ${error.message}`);
} finally {
    console.log('Bloque finally');
}

console.log('Continua');