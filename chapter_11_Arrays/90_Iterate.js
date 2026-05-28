// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (a of tests)// a is the value of the element in each iteration
     {
    console.log(a);
}

console.log("----");

//forEach (cleanest for values and index) 
// syntax: array.forEach((element, index) => { ... });
tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("----");

// for...in (cleanest for index)
// syntax: for (variable in object) { ... }
let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

console.log("----");

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}


//search VS iterate
// search - find a specific element in the array, and return its index or value. 
// iterate - go through each element of the array, and perform some action on it.