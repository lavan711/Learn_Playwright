console.log(0 == "");
console.log(0 == "0");
console.log("" == "0");  
// 0 == "" -> true (loose compasion, "" is converted to 0, then compared with 0 which is also 0)
// 0 == "0" -> true (loose compasion, "0" is converted to 0, then compared with 0 which is also 0)
// "" == "0" -> false (loose compasion, both are strings but different values)

console.log(0 == false);
console.log(null == 0);// null == 0 -> false (loose compasion, null is only equal to undefined and not equal to any other value)
console.log(null == undefined);// null == undefined -> true (loose compasion, null and undefined are considered equal in loose comparison)
console.log(null === undefined);// null === undefined -> false (strict compasion, different data types: null is an object and undefined is undefined)