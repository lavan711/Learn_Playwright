let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

//map - it is used to transform the elements of an array based on a provided function. 
// It creates a new array with the results of calling a provided function on every element in the original array.
//reduce - it is used to reduce an array to a single value by applying a provided function to each element of the array, along with an accumulator that holds the intermediate result.
let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

// I want all the test cases which have failed. 
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }

    }

}

let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
]
console.log(array_2d[0][1]); // 2
console.log(array_2d[1][0]); // 4
console.log(array_2d[2][1]); // undefined - because there is no element at index 1 in the third row.