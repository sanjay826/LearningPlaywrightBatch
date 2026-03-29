/**
 * ============================================================================
 * JAVASCRIPT CORE CONCEPTS: VARIABLE DECLARATIONS (var, let, const)
 * ============================================================================
 * 
 * 1. DEFINITIONS & KEY DIFFERENCES:
 * 
 * | Feature        | `var`               | `let`               | `const`             |
 * |----------------|---------------------|---------------------|---------------------|
 * | Scope          | Function Scope      | Block Scope         | Block Scope         |
 * | Redeclaration  | Yes                 | No                  | No                  |
 * | Reassignment   | Yes                 | Yes                 | No                  |
 * 
 * *Note: Scope (Function/Block) determines where a variable can be accessed. 
 * Since this is an introductory level, the examples below focus purely on 
 * an easier concept: Redeclaration and Reassignment.*
 * ============================================================================
 */


// ==========================================
// 1. 'var' EXAMPLES
// ==========================================
console.log("=========== 1. 'var' EXAMPLES ===========");

// Declaration and Assignment
var studentName = "Sanjay";
console.log(studentName); // Outputs: Sanjay

// Reassignment (Changing the value - VALID for var)
studentName = "Kumar";
console.log(studentName); // Outputs: Kumar

// Redeclaration (Creating the exact same variable again - VALID for var)
var studentName = "Pramod";
console.log(studentName); // Outputs: Pramod

console.log("\n");


// ==========================================
// 2. 'let' EXAMPLES
// ==========================================
console.log("=========== 2. 'let' EXAMPLES ===========");

// Declaration and Assignment
let age = 20;
console.log(age);       // Outputs: 20

// Reassignment (Changing the value - VALID for let)
age = 30;
console.log(age);       // Outputs: 30

// Redeclaration (Creating the exact same variable again - INVALID for let)
// let age = 40;        // ERROR: Identifier 'age' has already been declared!

console.log("\n");


// ==========================================
// 3. 'const' EXAMPLES
// ==========================================
console.log("=========== 3. 'const' EXAMPLES ===========");

// Declaration and Assignment
const pi = 3.14;
console.log(pi);        // Outputs: 3.14

// Reassignment (Changing the value - INVALID for const)
// pi = 3.14159;        // ERROR: Assignment to constant variable!

// Redeclaration (Creating the exact same variable again - INVALID for const)
// const pi = 3.15;     // ERROR: Identifier 'pi' has already been declared!

console.log("\n");


// ==========================================
// 4. COMMON INTERVIEW QUESTIONS (BEGINNER LEVEL)
// ==========================================
/*
Q1: What is the main difference between var, let, and const?
A1: - 'var' is the older way to declare variables. 
    - 'let' and 'const' are the newer and safer ways. 
    - Remember: var, let can be updated, but const is fixed!

Q2: Which variable declarations can be updated (reassigned)?
A2: Both 'var' and 'let' can be reassigned with new values whenever you want. 'const' cannot be reassigned at all.

Q3: Which variable declarations can be redeclared (using the same variable name again)?
A3: Only 'var' allows you to create the exact same variable name twice. Doing this with 'let' or 'const' will throw a strict ERROR.

Q4: As a beginner in modern JavaScript, which one should I use?
A4: Use 'const' by default. If you know the variable's value will need to change 
    later in your code (like keeping score in a game, or changing a name), then use 'let'. 
    It is generally best practice to avoid using 'var' today.
*/
