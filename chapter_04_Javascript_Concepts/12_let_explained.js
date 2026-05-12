//let is block scoped, it can't be redeclared but can be reassigned. 
// It is used to declare variables that can change their value over time.
let a =20;

let retryCount=10;
retryCount=retryCount+1;
retryCount=retryCount+1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5;

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed


let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined


//blcok scope - {} - if, for, while, function
// {} - Block 
// if(){} 
// funcion name(){}


// let = loyal
// var = triator



let name = "pending";
name = "done"; //  reassignment allowed
console.log(name);