// Nullish coalescing operator (??) and null comparisons

console.log(null >= 0); //  null == 0 or null > 0 // null is converted to 0, then compared with 0 which is also 0 -> true
console.log(null > 0); // null is converted to 0, then compared with 0 which is also 0 -> false
console.log(null === 0);
//=> false (strict compasion, null is an object and 0 is a number)
console.log(null == 0);
//=> false (loose compasion, null is only equal to undefined and not equal to any other value)  

// ??  Nullish
let amul = null;
let milk_required = amul ?? "nandani milk"; // amul is null, so it will return "nandani milk"
console.log(milk_required);