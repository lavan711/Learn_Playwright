// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ }, decrement() { count-- },  get() { return count; }
    };
}

let counter = makeCounter();
counter.increment();
counter.increment();
//counter.increment();
console.log(counter.get());// Output: 2
counter.decrement();
console.log(counter.get());// Output: 1

// Closure is useful for data encapsulation and creating private variables. 
// In the above example, the variable count is private to the makeCounter function and can only be accessed and modified through the methods provided in the returned object.