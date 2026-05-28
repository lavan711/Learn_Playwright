// This is a Type-2 function, which means it has parameters but does not return any value.

function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Pramod");
let result = greetByName("Amit");
console.log(result); // Since the greetByName function does not return any value, it implicitly returns undefined. Therefore, result will be assigned the value undefined, and console.log(result) will output undefined to the console.


function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething);