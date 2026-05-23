console.log(c); // ReferenceError: Cannot access 'c' before initialization
console.log("Hei");
console.log("Hei");
console.log("Hei");
console.log("Hei");
console.log("Hei");

const c = "pramod;" // const is block-scoped and cannot be accessed before its declaration, resulting in a ReferenceError when trying to access 'c' before initialization.
//hoisting does not apply to let and const in the same way as var. They are hoisted but not initialized, leading to a Temporal Dead Zone (TDZ) where they cannot be accessed until their declaration is reached in the code.