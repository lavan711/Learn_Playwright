// Rest parameters allow you to represent an indefinite number of arguments as an array.

function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3); // Login Test [1, 2, 3] 
logResult('Reg Test', "Hello", "Pramod");

