// paso por valor
let num = 10; //valor primitivo

//con variables primitivas solo se le pasa una copia del valor
function changeValue(a) {
    a = 20;
}

changeValue(num);
console.log(num); //10

//paso por referencia
const obj = {
        name: 'Ylenia',
        surname: 'Díaz'
    }
    //obj guarda la referencia a un objeto

//se le pasa la referencia del objeto por lo que, el parámetro apunta al mismo objeto
function changeValueObj(auxObj) {
    auxObj.name = 'Eyra';
}

changeValueObj(obj);
console.log(obj); //{ name: 'Eyra', surname: 'Díaz' } 