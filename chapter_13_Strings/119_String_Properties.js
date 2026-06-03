
console.log(typeof ("200"));
let str = "Hello, World!";
console.log(str.length); // Length always starts from 1, total len- 13

// Access by index
console.log(str[0]);
console.log(str[7]);
console.log(str.at(-1));
console.log(str.at(-6));

// index = 0, length = 1
console.log(str.charAt(0)); // charAt() method returns the character at the specified index in a string. The index of the first character is 0, the second character is 1, and so on. If the index is out of range, it returns an empty string.
console.log(str.charCodeAt(0));// charCodeAt() method returns the Unicode of the character at the specified index in a string. The index of the first character is 0, the second character is 1, and so on. If the index is out of range, it returns NaN.