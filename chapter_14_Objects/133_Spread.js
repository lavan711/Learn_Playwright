// Spread Operator with Objects
// The spread operator (...) allows us to create a shallow copy of an object or to merge multiple objects into one. 
// It is a convenient way to copy properties from one object to another without modifying the original object.
// Why const is used with objects? - When we declare an object with const, it means that the reference to the object cannot be changed, but the properties of the object can still be modified.
// This is because objects in JavaScript are mutable, meaning that their properties can be changed even if the reference to the object is constant.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1 };
console.log(copy); // { a: 1, b: 2 } - we are creating a shallow copy of obj1 using the spread operator, so copy is a new object with the same properties as obj1.

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 } - we are merging obj1 and obj2 into a new object called merged using the spread operator, so merged contains all the properties from both obj1 and obj2.


// Modifying properties of an object declared with let is allowed, but reassigning the variable to a new object is also allowed.
let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari" }; 
console.log(config1); // { browser: 'Safari' } - we are reassigning the config1 variable to a new object, so config1 now references the new object with the browser property set to "Safari".

// print
console.log("---- ")

const config = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

config = { browser: "Safari" };
//console.log(config);// TypeError: Assignment to constant variable. - we are trying to reassign the config variable to a new object, but since config is declared with const, it cannot be reassigned, so we get a TypeError.