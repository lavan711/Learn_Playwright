// Object.keys, Object.values, Object.entries
//Object - JS constructor function for creating objects, and it has several static methods that can be used to work with objects. 
// Object.keys() returns an array of the keys of an object, Object.values() returns an array of the values of an object, and Object.entries() returns an array of key-value pairs of an object.
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const user = { name: "John", age: 30 };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Object.keys/values/entries
// Object.keys(user).forEach(key => {
//     console.log(key);
// });

// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });