// This is an example of a function expression in JavaScript. 
// A function expression is a function that is assigned to a variable. 
// In this case, the variable greet is assigned an anonymous function that takes a parameter name and returns a greeting message using a template literal.

const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Pramod");
console.log(r);


// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}


// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet1("Bob"));
console.log(greet2("Bob"));