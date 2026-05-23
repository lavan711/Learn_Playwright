# Chapter 10: Loops

## Overview
Master loops in JavaScript to repeat code blocks and iterate over data efficiently.

## Topics Covered

- **71_For_loop.js** - Basic for loop structure and syntax
- **72_For_loop.js** - Additional for loop concepts and patterns
- **73_For_Loop2.js** - Advanced for loop techniques
- **74_IQ.js** - Interview questions on for loops
- **75_For_OF_IN_EACH.js** - for...of, for...in, and forEach loops
- **76_While.js** - While loop structure and usage
- **77_Do_While.js** - Do...while loop with condition at end
- **78_Do_While_Ex.js** - Do...while loop examples
- **79_IQ.js** - Interview questions on while and do...while loops
- **80_IQ.js** - Additional interview questions
- **81_IQ.js** - More loop interview questions
- **82_IQ.js** - Advanced loop interview questions

## What You'll Learn

- **For Loop**: Iterating with counter variable
- **While Loop**: Iterating based on condition
- **Do...While Loop**: Execute at least once, then check condition
- **for...in Loop**: Iterating over object properties
- **for...of Loop**: Iterating over iterable values
- **forEach Method**: Array iteration with callback
- **Loop Control**: break and continue statements
- **Nested Loops**: Loops within loops

## Key Concepts

### Loop Types

1. **Traditional For Loop**
   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```
   - Initialization, condition, increment
   - Full control over iteration

2. **While Loop**
   ```javascript
   while (condition) {
     // code
   }
   ```
   - Checks condition before execution
   - Best when iteration count unknown

3. **Do...While Loop**
   ```javascript
   do {
     // code
   } while (condition);
   ```
   - Executes at least once
   - Checks condition after execution

4. **for...in Loop**
   ```javascript
   for (let key in object) {
     // key is property name
   }
   ```
   - Iterates over object properties
   - Also works with array indices

5. **for...of Loop**
   ```javascript
   for (let value of array) {
     // value is element
   }
   ```
   - Iterates over iterable values
   - Cleaner than traditional for loop

6. **forEach Method**
   ```javascript
   array.forEach((element, index) => {
     // code
   });
   ```
   - Functional approach
   - Cannot break or continue

### Loop Control Statements

- **break**: Exit loop immediately
- **continue**: Skip current iteration, go to next

## Common Use Cases

1. **Summing Numbers**: for loop with accumulator
2. **Finding Elements**: while loop with break
3. **Processing Arrays**: for...of or forEach
4. **Object Iteration**: for...in for properties
5. **Game Loops**: while true with break condition
6. **Nested Iterations**: For matrix or grid processing

## How to Run

```bash
node 71_For_loop.js
node 72_For_loop.js
node 73_For_Loop2.js
node 74_IQ.js
node 75_For_OF_IN_EACH.js
node 76_While.js
node 77_Do_While.js
node 78_Do_While_Ex.js
node 79_IQ.js
node 80_IQ.js
node 81_IQ.js
node 82_IQ.js
```

## Performance Comparison

| Loop Type | Speed | Readability | Use Case |
|-----------|-------|-------------|----------|
| for | Fastest | Medium | Known count |
| while | Fast | Medium | Unknown count |
| for...of | Fast | High | Arrays/iterables |
| forEach | Slower | High | Functional style |

## Congratulations!

You've completed all 10 chapters! You now have a solid foundation in JavaScript fundamentals. Use these skills to build more complex applications and explore frameworks like Playwright for automation testing.

## Next Steps

- Combine concepts: Create interactive CLI programs using input + loops + conditionals
- Practice: Solve coding challenges using loops and conditionals
- Explore: Learn about arrays and objects to work with collections
- Build: Create small projects that combine all learned concepts
