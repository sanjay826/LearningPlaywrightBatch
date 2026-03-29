/**
 * ============================================================================
 * JAVASCRIPT CORE CONCEPTS: HOISTING
 * ============================================================================
 * 
 * 1. DEFINITION:
 * Hoisting is a JavaScript mechanism where variable and function declarations
 * are "moved to the top" of their scope before the code executes.
 * 
 * In reality, the code is not physically moved. Instead, JavaScript handles
 * running your program in two distinct phases:
 * 
 *   - Phase 1 (Memory Creation Phase): JavaScript reads the code and allocates
 *     memory for variables. For 'var', it assigns a default value of 'undefined'.
 *   - Phase 2 (Code Execution Phase): JavaScript runs the code line by line and
 *     assigns the actual values to those variables.
 * 
 * Because of this, you can try to use a 'var' variable before it is actually 
 * defined in the code, and it won't crash your program!
 * ============================================================================
 */


// ==========================================
// EXAMPLE 1: HOISTING WITH 'var'
// ==========================================
console.log("=========== 1. HOISTING WITH 'var' ===========");

// Watch what happens when we try to print 'firstName' BEFORE we create it:
console.log("Before declaration, firstName is: ", firstName); // Outputs: undefined

// Now we actually declare and assign a value to it
var firstName = "Sanjay";

console.log("After declaration, firstName is: ", firstName); // Outputs: Sanjay

/*
Why did it say 'undefined' instead of giving an Error? 
BEHIND THE SCENES, JavaScript saw this:

  var firstName = undefined;        // Phase 1 (Memory Creation: Variable is hoisted)
  console.log(firstName);           // Phase 2 (Code Execution: It is currently 'undefined')
  firstName = "Sanjay";             // Phase 2 (Code Execution: Real value is assigned)
*/

console.log("\n");


// ==========================================
// EXAMPLE 2: HOISTING WITH 'let' and 'const'
// ==========================================
console.log("=========== 2. HOISTING WITH 'let' / 'const' ===========");

/* 
Important Note for Beginners:
'let' and 'const' ARE technically hoisted in memory, but modern JavaScript strictly 
does NOT allow you to use them before they are declared in the code. 
*/

// If you uncomment the line below, the program will crash with a strict ERROR:
// console.log(age); // ERROR: Cannot access 'age' before initialization!

let age = 25;
console.log("After declaration, age is: ", age); // Outputs: 25

console.log("\n");


// ==========================================
// 3. COMMON INTERVIEW QUESTIONS (BEGINNER LEVEL)
// ==========================================
/*
Q1: What is Hoisting in summary?
A1: Hoisting is JavaScript's default behavior of allocating memory for variable 
    and function declarations before the code actually runs line-by-line.

Q2: What happens if you try to print a 'var' variable before it is declared?
A2: It will not throw an error. Instead, it will print 'undefined'.

Q3: What happens if you try to print a 'let' or 'const' variable before it is declared?
A3: It will throw a ReferenceError and crash the program. You must declare them first!
*/