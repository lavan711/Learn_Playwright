// Primitive vs Reference Types
// Primitive — copied by VALUE, call by value.
// Primitive - number, string, boolean, null, undefined, symbol
// Reference - object, array, function

let a = 10;
let b = a;
b = 99;
console.log(a); // 10 because a and b are two different variables in memory, and they are not referencing the same value.
// So, if we change the value of b, it will not change the value of a because a and b are two different variables in memory, and they are not referencing the same value.

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val); // 99 because obj1 and obj2 are referencing the same object in memory. 
// So, if we change the value of val in obj2, it will also change the value of val in obj1 because both obj1 and obj2 are referencing the same object in memory.