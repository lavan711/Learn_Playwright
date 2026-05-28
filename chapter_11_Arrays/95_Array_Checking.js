// Array Checking in JavaScript

// Check if something IS an array
let result = Array.isArray([1, 2, 3]); 
// Array.isArray() is a built-in method in JavaScript that checks if the provided value is an array. It returns true if the value is an array, and false otherwise. 
// In this case, since [1, 2, 3] is indeed an array, result will be true.
console.log(result);
let result1 = Array.isArray("a"); // []
console.log(result1);


// every — ALL must pass
let a= [80, 90, 85].every(s => s >= 70);
 console.log(a);// true
let b = [80, 60, 85].every(s => s >= 70); 
console.log(b); // false

// Playwright API 
let statusCodes = [200, 201, 203];
let allValid = statusCodes.every(statuscode => statuscode > 200);
console.log(allValid); //

// some — AT LEAST ONE must pass
let c = [80, 60, 85].some(s => s < 70); // true
let d = [80, 90, 85].some(s => s < 70); // false
console.log(c);
console.log(d);

//arrow : s => s >= 70