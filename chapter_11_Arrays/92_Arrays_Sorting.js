// Sorting arrays in JavaScript can be done using the built-in `sort()` method.
//  By default, it sorts elements as strings in lexicographical order.
//  However, you can provide a custom sorting function to sort numbers or other types of data.
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let number = [3, 1, 4];
number.sort()
console.log(number);

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums); // This will not sort the numbers in numerical order because it sorts them as strings.

// To sort numbers correctly, you need to provide a comparison function to `sort()`.
nums.sort((a, b) => a - b); // Ascending
console.log(nums);
nums.sort((a, b) => b - a);// Descending
console.log(nums);