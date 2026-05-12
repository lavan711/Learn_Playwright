// JS Engine
//LINE BY LINE, JIT Compilation(Just-In-Time Compilation), Optimizations, Garbage Collection

// Hoisting: JavaScript's default behavior of moving declarations to the top of the current scope (function or global) during the compilation phase.    

console.log(greeting);// undefined because of hoisting, the declaration of greeting is hoisted to the top of the scope, but the assignment is not hoisted, so it is undefined at the time of console.log(greeting) execution.
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);
var a = "Lavanya";
console.log(a);
