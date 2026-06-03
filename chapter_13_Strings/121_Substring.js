let str = "Login_Test_Pass_001";
// slice(start, end) — negative indexes supported
console.log(str.slice(0, 5)); // 0,4 ->
console.log(str.slice(11)); // start from 11 to end of the string

let testNumber = str.slice(-3);
console.log(testNumber);

console.log(str.includes("Pass"));


// substring(start, end) — no negatives (treats as 0)

console.log(str.substring(6, 10));
str.at(0);//
 // slice and substring are similar but they handle negative indexes differently. slice allows negative indexes to count from the end of the string, while substring treats negative indexes as 0. 
// Additionally, if the start index is greater than the end index, substring will swap them, while slice will return an empty string.