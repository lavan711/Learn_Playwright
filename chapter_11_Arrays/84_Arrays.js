// Creating Arrays// Array literal (preferred)
// Array literals are the most common way to create arrays. They are concise and easy to read.

let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor

let scores = new Array(3);// Creates an array of length 3, but it is empty (sparse array).
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
let scores2 = new Array(1, 2, 3);
// Creates an array with the elements 1, 2, and 3. This is different from the previous line where we created an array of length 3 without initializing its elements.
// The Array constructor can be confusing because it behaves differently based on the number of arguments passed. If you pass a single numeric argument, it creates an array of that length. If you pass multiple arguments, it creates an array containing those arguments as elements.
console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
console.log(chars);

// Array.of() and Array.from() are more consistent ways to create arrays. 
// They do not have the special behavior of the Array constructor when it comes to numeric arguments, making them less error-prone.

// let numbers1 = Array.from("123456789");
// console.log(numbers1);