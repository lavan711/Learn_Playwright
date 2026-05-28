// Concatenating Arrays in JavaScript
// In JavaScript, you can concatenate arrays using the `concat()` method or the spread operator (`...`).
let a = [1, 2];
let b = [3, 4];
// let c = a + b;
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);

// Join 
let s = ["pass", "fail", "skip"].join("|");
console.log(s);