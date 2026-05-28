// Array Slicing and Splicing in JavaScript

// Slicing & Combining
// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 


let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // ( start, end-1) 
console.log(arr.slice(2, 4)); 
console.log(arr.slice(2, 5));

console.log(arr.slice(2)); //Don't give the end, it will automatically take from start to end.

 
console.log(arr.slice(-2)); // Negative indices count from the end of the array. 
// So, -1 refers to the last element, -2 to the second-to-last, and so on. 
// In this case, arr.slice(-2) returns a new array containing the last two elements of the original array, which are [4, 5].

console.log(arr.slice(0)); // If you call slice() without any arguments, it will return a shallow copy of the entire array.
console.log(arr.slice()); // This is also a common way to create a shallow copy of an array. It behaves the same as arr.slice(0).

// let arr = [10, 20, 30, 40, 50];
// let s = arr.slice(1, 4);   // [20, 30, 40]
// console.log(arr);
// console.log(s);

let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2);   // The first argument (1) is the index at which to start changing the array, and the second argument (2) is the number of elements to remove.
console.log(removed);             // [20, 30]
console.log(arr); // [10, 40, 50]

//slice vs splice
//slice does not change the original array, it returns a new array.
 //splice changes the original array and returns the removed elements.   