let print = (message) => console.log(message);

function sum(x, y, callback) {
    let result = x + y;
    callback(`${x} + ${y} = ${result}`);
}

sum(2, 7, print);