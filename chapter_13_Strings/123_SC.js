// String Conversion

console.log((200).toString()); //"200"
console.log(true.toString());  // "true"

console.log(Number("42"));  //  42

// parseInt and parseFloat are used to convert strings to numbers. 
// They are more flexible than Number() because they can extract numbers from strings that contain non-numeric characters. parseInt() parses a string and returns an integer, while parseFloat() parses a string and returns a floating-point number.
console.log(parseInt("42px"));  // 42
console.log(parseFloat("3.14rem")); //3.14