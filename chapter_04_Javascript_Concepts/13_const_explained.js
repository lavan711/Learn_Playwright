const BASE_URL = "https://app.thetestingacademy.com";
//const BASE_URL = "https:/ / staging.thetestingacademy.com"; // SyntaxError: Identifier 'BASE_URL' has already been declared
//BASE_URL = "https:/ / staging.thetestingacademy.com"; // TypeError: Assignment to constant variable.

// const variables must be initialized at the time of declaration
// const API_KEY; // SyntaxError: Missing initializer in const declaration      
console.log(BASE_URL);
// TypeError: Assignment to constant variable.


const BASE_URL = "https://app.thetestingacademy.com";
let name = "Balu";
{
    let name = "Lavan";
    console.log(name);// Lavan is printed because of block scope of let, 
    // it is not accessible outside the block, so it doesn't affect the value of name variable outside the block.
    console.log(BASE_URL);    
}

function say() {
    let name = "lavanya";
    console.log(name);
}
say();
say();
