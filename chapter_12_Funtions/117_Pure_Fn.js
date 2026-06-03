// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));

// ❌ Impure — depends on external state


function isPassing(score) {
    return score >= threshold;  
    // This function is impure because it relies on the external variable threshold, which can change and affect the output of the function.
}

let threshold = 70;
console.log(isPassing(threshold)); // Output: true, because threshold is 70 which is greater than or equal to itself

threshold = 100; 
console.log(isPassing(threshold)); // Output: true, because threshold is 100 which is greater than or equal to itself