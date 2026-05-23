// // number == string
console.log(42 == "42"); // == -> loose compasion
console.log(42 === "42"); //data type and converted value
console.log(42 == "45"); //value different


console.log(5 === 5);
console.log(5 === "5");

console.log(5 == 5);
console.log(5 == "5");

console.log(0 == ""); // ?  "" = conveted to 0 - checked by the loose
console.log(0 === ""); 


console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(true == 2); 
// true == 1 -> true
// false == 0 -> true
// true == "1" -> true ( "1" is converted to 1, then compared with true which is also converted to 1)
// true == 2 -> false (true is converted to 1, and 1 is not equal to 2)


console.log(5 != "5"); // false (loose compasion, value is same)
console.log(5 !== "5"); // true (strict compasion, data type is different)
//console.log(5 !=== "5"); // This doesn't excit, will get syntax error


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.