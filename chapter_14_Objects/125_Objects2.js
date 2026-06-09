// Objects
// Key and value
// Objects are mutable and non-primitive data types. They are stored in heap memory and accessed by reference.
// Here studeent1 are called as object reference and { name: "Amit", age: 65 } is called as object value.

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Key will not be in the double quotes
// Below key in double quotes is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


// Accessing the value of the object using dot notation and bracket notation
let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);//Pass

// Single quotes are not allowed in JSON, but they are allowed in JavaScript objects.
let a1 = { status: 'pass' };
console.log(a1.status);
let b = a1; // Here b is reference to the same object as a. 
// So, if we change the value of status in b, it will also change the value of status in a because both a and b are referencing the same object in memory.
b.status = "fail";
console.log(a1.status);//
console.log(b.status);

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c); // { status: 'pass' } as value of c is { status: "pass" }
console.log(d);

if (b === a1) {
    console.log("true");
} else {
    console.log("false");
}