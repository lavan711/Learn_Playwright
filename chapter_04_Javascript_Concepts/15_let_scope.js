let a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);// 20 is printed because of block scope of let, 
    // it is not accessible outside the block, 
    // so it doesn't affect the value of a variable in the entire function. 
}

console.log("G ->", a);

printHello();