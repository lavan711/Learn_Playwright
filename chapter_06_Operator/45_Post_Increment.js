let a_post = 10;
let b = a_post++;
// post ++ -> first assign the value and then increase.
console.log(a_post); // 11 (a_post is increased by 1)
console.log(b); // 10 (b gets the original value of a_post before the increment)