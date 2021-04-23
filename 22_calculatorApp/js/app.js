function clickBtn(btn) {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);

    switch (btn.innerHTML) {
        case 'Sumar':
            writeResult(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case 'Restar':
            writeResult(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case 'Multiplicar':
            writeResult(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case 'Dividir':
            writeResult(`${num1} / ${num2} = ${num1 / num2}`);
            break;
    }
}

function writeResult(result) {
    document.getElementById('result').innerHTML = (isNaN(num1) && isNaN(num2)) ? 'Error: se han introducido valores no numéricos' : result;
}