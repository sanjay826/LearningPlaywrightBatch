/**
 * ============================================================================
 *                               FOR LOOP
 * ============================================================================
 * 
 * What is a for loop?
 * - The `for` loop is a control flow statement that allows you to execute a 
 *   block of code repeatedly for a specific number of times.
 * - It is most commonly used when you know exactly how many iterations you 
 *   need to perform.
 * 
 * Syntax:
 *   for (initialization; condition; increment/decrement) {
 *     // Code to be executed
 *   }
 * 
 * The three parts of the `for` loop header:
 * 1. Initialization: Executed once before the loop starts. Usually used to 
 *    declare and initialize a counter variable (e.g., `let i = 0`).
 * 2. Condition: Evaluated before each iteration. If it evaluates to `true`, 
 *    the loop body executes. If `false`, the loop terminates.
 * 3. Increment/Decrement: Executed after each iteration. Usually used to 
 *    update the counter (e.g., `i++` or `i--`).
 */

// ============================================================================
// Example 1: Basic Counting (1 to 5)
// ============================================================================
console.log("--- Counting from 1 to 5 ---");

for (let i = 1; i <= 5; i++) {
    console.log("Current number:", i);
}

// ============================================================================
// Example 2: Counting Down (5 to 1)
// ============================================================================
console.log("\n--- Counting down from 5 to 1 ---");

for (let count = 5; count >= 1; count--) {
    console.log("Countdown:", count);
}

// ============================================================================
// Example 3: Iterating through an Array
// ============================================================================
console.log("\n--- Iterating through an Array ---");

const fruits = ["Apple", "Banana", "Cherry", "Date"];

// Arrays are 0-indexed, so we start `i` at 0 and go up to `length - 1`
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// ============================================================================
// Example 4: Skipping Values (Increment by 2)
// ============================================================================
console.log("\n--- Printing only Even Numbers (0 to 10) ---");

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

/**
 * ============================================================================
 *                       IMPORTANT INTERVIEW QUESTIONS
 * ============================================================================
 * 
 * Q1: Can I declare the counter variable outside the `for` loop?
 * A1: Yes. If you declare `let i = 0;` before the loop, `i` will be accessible 
 *     (in the global scope or parent function scope) even after the loop 
 *     finishes. If declared inside the loop (`let i = 0`), it is block-scoped 
 *     and only exists within the loop.
 * 
 * Q2: What happens if the condition is always true?
 * A2: You create an "Infinite Loop". The code inside the loop will run forever 
 *     until the program crashes or is manually stopped. 
 *     Example: `for (let i = 0; i >= 0; i++)`
 * 
 * Q3: Can I use `break` and `continue` inside a `for` loop?
 * A3: Yes. `break` immediately exits the loop. `continue` skips the current 
 *     iteration and proceeds to the next one.
 */
