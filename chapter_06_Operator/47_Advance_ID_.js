let a = 10;
console.log(++a + a);// 11 + 11 = 22 // 1. ++a -> a becomes 11, then used in the expression
// 2. a is now 11, used in the expression again
console.log(a);


let a = 10;
console.log(a++ + ++a); // 10 + 12 = 22 // 1. a++ -> a is used in the expression first (10), then a becomes 11
// 2. ++a -> a becomes 12, then used in the expression
console.log(a);

let a = 10;
console.log(++a + ++a);// 11 + 12 = 23 // 1. ++a -> a becomes 11, then used in the expression
// 2. ++a -> a becomes 12, then used in the expression
console.log(a);