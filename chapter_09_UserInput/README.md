# Chapter 09: User Input

## Overview
Learn different methods to capture and handle user input in Node.js JavaScript applications.

## Topics Covered

- **68_User_Input.js** - Basic user input concepts
- **69_Node_readline.js** - Using Node.js built-in readline module for interactive input
- **70_prompt_sync.js** - Using prompt-sync package for synchronous user prompts

## What You'll Learn

- **Browser vs Node.js**: Different input methods
- **readline Module**: Built-in Node.js module for reading input streams
- **prompt-sync Package**: Synchronous prompts in Node.js
- **Handling User Input**: Processing and validating user data
- **Interactive Programs**: Building command-line applications

## Key Concepts

### Input Methods

1. **readline Module** (Built-in, No dependencies)
   - Asynchronous approach
   - Good for streaming input
   - Part of Node.js core
   - ```javascript
     const readline = require('readline');
     const rl = readline.createInterface({...});
     rl.question('Prompt: ', (answer) => {...});
     ```

2. **prompt-sync Package** (External, Synchronous)
   - Simple synchronous API
   - Requires npm installation
   - Good for simple scripts
   - ```bash
     npm install prompt-sync
     ```
   - ```javascript
     const prompt = require('prompt-sync')();
     const input = prompt('Prompt: ');
     ```

3. **process.argv** (Command-line arguments)
   - Access arguments passed when running script
   - `process.argv[2]`, `process.argv[3]`, etc.

## How to Run

```bash
# For basic input demo
node 68_User_Input.js

# For readline example
node 69_Node_readline.js

# For prompt-sync (after npm install)
npm install prompt-sync
node 70_prompt_sync.js
```

## Dependencies

For prompt-sync examples, install the package:

```bash
npm install prompt-sync
```

## Common Use Cases

1. **CLI Tools**: Command-line utilities
2. **Interactive Scripts**: User-driven programs
3. **Data Collection**: Forms and surveys
4. **Games**: Turn-based games needing player input
5. **Configuration**: Setup wizards

## Next Steps
After completing this chapter, proceed to **Chapter 10: Loops** to learn iteration patterns.
