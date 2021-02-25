function myFunc(a, b) {
    console.log(arguments.length);
}

let myFuncString = myFunc.toString();
console.log(myFuncString);