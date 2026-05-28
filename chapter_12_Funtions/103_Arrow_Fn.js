// This is an example of an arrow function in JavaScript. 
// Arrow functions provide a more concise syntax for writing functions. 
// They are often used for short, simple functions, and they do not have their own `this` context.

// const greet = function (name1) {
//     return "Hi " + name1;
// }
// let r = greet("Pramod");
// console.log(r); Normal function expression

const greet2 = (name1) => "Hi " + name1;
let r2 = greet2("Pramod");
console.log(r2); // Arrow function expression

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>


const doubleIt = n => n * 2;
console.log(doubleIt(10)); //

const printIt = name => console.log(name);
printIt("Dutta");

//arrow function with multiple parameters
const sumOfTwoNumbers = (a, b) => a + b;
console.log(sumOfTwoNumbers(4, 5)); // 9