# Chapter 04: JavaScript Concepts (Advanced)

## Overview
Deep dive into advanced JavaScript concepts including variable declarations, scoping, hoisting, and the differences between var, let, and const.

## Topics Covered

- **09_var_let_const.js** - Introduction to var, let, and const declarations
- **10_functions.js** - Function declarations and function concepts
- **11_var_explained.js** - Understanding var and its behavior
- **12_let_explained.js** - Understanding let and block scoping
- **13_const_explained.js** - Understanding const and immutability
- **14_var_functionscope.js** - var function scope behavior
- **15_let_scope.js** - let block scope behavior
- **16_Hoisting.js** - Variable and function hoisting fundamentals
- **17_hoisting_fn.js** - Function hoisting behavior
- **18_let_hoisting.js** - Temporal Dead Zone (TDZ) with let
- **19_let_hoisting_block.js** - let hoisting in block scopes
- **20_let_const.js** - Comparison and best practices for let vs const
- **21_Jr_QA.js** - Interview questions and QA for junior developers

## What You'll Learn

- **Variable Declaration Methods**: var, let, and const
- **Scope**: Global, function, and block scope
- **Hoisting**: How JavaScript hoists declarations
- **Temporal Dead Zone**: The time window where let/const are not accessible
- **Function Hoisting**: How functions are hoisted differently than variables
- **Best Practices**: When to use each declaration type
- **Interview Questions**: Common QA for JavaScript concepts

## Key Concepts

### var vs let vs const

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Hoisted (undefined) | Hoisted (TDZ) | Hoisted (TDZ) |
| Re-declaration | Yes | No | No |
| Re-assignment | Yes | Yes | No |
| Use Case | Legacy code | Most variables | Constants |

### Hoisting
- Variable declarations are moved to the top of their scope
- var is initialized with undefined
- let and const are hoisted but not initialized (TDZ)

## How to Run

```bash
node 09_var_let_const.js
node 10_functions.js
node 11_var_explained.js
node 12_let_explained.js
node 13_const_explained.js
node 14_var_functionscope.js
node 15_let_scope.js
node 16_Hoisting.js
node 17_hoisting_fn.js
node 18_let_hoisting.js
node 19_let_hoisting_block.js
node 20_let_const.js
node 21_Jr_QA.js
```

## Next Steps
After completing this chapter, proceed to **Chapter 05: Literals** to learn about different literal types in JavaScript.
