
let str= "Madam";
function reverseString(str) {
    let reversed = "";  
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];   
    }
    console.log(reversed.toLowerCase()); 
        if(str.toLowerCase() === reversed.toLowerCase()) {
            return "true";
        }
        else {        
            return "false";
        }
    }   

console.log(`Palindrome: ${str.toLowerCase()} - `+ reverseString(str)); 


//also we can use built-in methods to reverse a string in JavaScript. 
// Here's an example using the split, reverse, and join methods:
let str= "Madam";
str=str.toLowerCase();
function reverseString(str) {
    let reversed = str.split("").reverse().join("").toLowerCase();
    if(str===reversed) {
        return "true";
    }
    else 
        {        
        return "false";
        }
}
console.log("Palindrome: " + reverseString(str)); // Output: "true"

   