// Accessing & Modifying
// You can access array elements using their index. The index starts at 0 for the first element, 1 for the second, and so on. You can also use negative indices to access elements from the end of the array, where -1 refers to the last element, -2 to the second last, and so on.
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1)); // "skip"
console.log(statuses.at(-2)); // "fail"
console.log(statuses.at(-3)); // "pass"
// console.log(statuses.at(-4)); undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);