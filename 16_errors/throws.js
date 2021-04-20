let result = -2;
try {
    if (isNaN(result)) throw { name: 'Number', message: 'No es un número' };
    else if (result === '') throw { name: 'Empty', message: 'Cadena vacía' };
    else if (result < 0) throw { name: 'Negative', message: 'Valor negativo' };
} catch (error) {
    console.log(`ERROR: ${error.name} - ${error.message}`);
} finally {
    console.log('Bloque finally');
}

console.log('Continua');