let g_x = 10;
// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x); // ✅ can access outer scope variable
        console.log(g_x); // ✅ can access global variable

    }
    inner();
    console.log(y); // ReferenceError: y is not defined, because it's in the local scope of the inner function
}