// Returns a value
// function getStatus(code) {
//     if (code >= 200 && code < 300) return "success";
//     if (code >= 400 && code < 500) return "client error";
//     if (code >= 500) return "server error";
// }

// getStatus(200);
// getStatus(404);
// getStatus(500);

// No return value

function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}
let result = logTest("Login");
console.log(result); // undefined 
//In JavaScript, if a function does not explicitly return a value, it returns undefined by default.


// Function declarations are hoisted, which means they can be called before they are defined in the code.
greet("Alice");

function greet(name) {
    return `Hello, ${name}!`;
}

// Function expressions, on the other hand, are not hoisted.
sayHi("Bob");
const sayHi = function (name) {
    return `Hi, ${name}!`; // This will throw a ReferenceError because sayHi is not defined at the time of the call.
};