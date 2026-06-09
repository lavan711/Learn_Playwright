// Objects Creation

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (c === d) {
    console.log("true");
} else {
    console.log("false"); 
    // false because c and d are two different objects in memory, even though they have the same key-value pair.
}