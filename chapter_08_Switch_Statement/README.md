# Chapter 08: Switch Statement

## Overview
Learn about switch statements as an alternative to multiple if/else conditions for cleaner and more efficient code.

## Topics Covered

- **59_Switch.js** - Basic switch statement structure and syntax
- **60_No_Break.js** - Understanding fall-through behavior without break
- **61_Default.js** - Default case in switch statements
- **62_REAL_TIME_EXAMPLE.js** - Real-world application examples
- **63_Switch_Group.js** - Grouping cases and advanced switch patterns
- **64_IQ1.js** - Interview question set 1
- **65_IQ2.js** - Interview question set 2
- **66_IQ3.js** - Interview question set 3
- **67_IQ4.js** - Interview question set 4

## What You'll Learn

- **Switch Statement Syntax**: Proper structure and usage
- **Case Matching**: Exact value comparison with break
- **Fall-through Behavior**: When and why cases fall through
- **Default Case**: Handling unmatched cases
- **Case Grouping**: Multiple cases with same code block
- **When to Use Switch**: Advantages over if/else chains
- **Performance**: Switch vs if/else comparisons

## Key Concepts

### Switch Statement Structure

```javascript
switch (expression) {
  case value1:
    // code if expression === value1
    break; // prevent fall-through
  case value2:
    // code if expression === value2
    break;
  case value3:
  case value4:
    // code if expression === value3 OR value4
    break;
  default:
    // code if no cases match
}
```

### Important Points

- Switch uses **strict comparison** (===)
- **break** prevents fall-through to next case
- Omitting break causes execution to continue to next case
- **default** case is optional but recommended
- Grouping cases without break allows multiple matches

### When to Use Switch

- **Multiple specific values**: Better than many if/else statements
- **Cleaner code**: For 3+ conditions on same variable
- **Readability**: More organized than long if/else chains

## Real-World Examples

1. **Menu Selection**: User chooses from options
2. **Day of Week**: Different logic for each day
3. **HTTP Status Codes**: Different handling for 200, 404, 500, etc.
4. **User Roles**: Admin, user, guest handling

## How to Run

```bash
node 59_Switch.js
node 60_No_Break.js
node 61_Default.js
node 62_REAL_TIME_EXAMPLE.js
node 63_Switch_Group.js
node 64_IQ1.js
node 65_IQ2.js
node 66_IQ3.js
node 67_IQ4.js
```

## Next Steps
After completing this chapter, proceed to **Chapter 09: User Input** to learn how to get input from users.
