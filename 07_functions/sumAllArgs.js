let result = sumAll(2, 20, 10, 27, 3, 11);

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        let num = Number(arguments[i]);
        if (!isNaN(num)) sum += arguments[i];
    }

    return sum;
}

console.log(result);