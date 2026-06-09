let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// How many test cases have we executed? 
// How many test cases are passed? 
// What is the status code that you have got for the fail? 

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    }
    console.log("\n");
}

//
for (let row of testMatrix) {
    for (let col of row) {
        process.stdout.write(col + " ")
    }
    console.log("\n");
}

// forEach
testMatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});



 //process.stdout.write Vs console.log
//- process.stdout.write is a method that writes data to the standard output (console) without adding a newline character at the end. It allows you to write multiple pieces of data on the same line.
//- console.log is a method that writes data to the console and automatically adds a newline character at the end, which means each call to console.log will print on a new line.