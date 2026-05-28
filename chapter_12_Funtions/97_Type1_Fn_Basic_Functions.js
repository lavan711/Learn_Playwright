// This is a Basic type-1 function, which means no argument, no return. 


// Define
function greet() // function name - variable name, () - parameter list
 { // parameter
    console.log("Hi");
}
greet(); //Calling the function. When you call a function, you execute the code inside it. 
// In this case, it will print "Hi" to the console.


let a = greet(); 
console.log(a); // Since the greet function does not return any value, it implicitly returns undefined.