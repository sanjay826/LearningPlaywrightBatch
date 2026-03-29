/**
 * ============================================================================
 *                          JAVASCRIPT LOOPS (INTRODUCTION)
 * ============================================================================
 * 
 * What is a Loop?
 * - A loop is a programming construct used to repeatedly execute a specific 
 *   block of code as long as a certain condition is met.
 * 
 * Why use Loops?
 * - DRY Principle (Don't Repeat Yourself): Instead of writing `console.log` 
 *   100 times, you can write a loop that runs 100 times.
 * - Processing Data: They are highly useful for iterating through collections 
 *   (like Arrays, Objects) to process or display data.
 */

// ----------------------------------------------------------------------------
// Without a loop (Redundant and hard to maintain):
// ----------------------------------------------------------------------------
console.log("--- Printing numbers WITHOUT a loop ---");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// ... doing this 100 times would be terrible!

/**
 * ============================================================================
 *                       TYPES OF LOOPS IN JAVASCRIPT
 * ============================================================================
 * 
 * IMPORTANT CLARIFICATION: There are only a few core logical loops in JS. 
 * Methods like `.map()`, `.forEach()`, and `.filter()` are Array Iteration 
 * METHODS, NOT fundamental loop control structures.
 * 
 * The main control flow loops are:
 * 1. `for` loop       - Best when you know the exact number of iterations.
 * 2. `while` loop     - Best when iterations depend on a dynamic condition.
 * 3. `do...while`     - Same as `while`, but guaranteed to run at least ONCE.
 * 4. `for...in`       - Used to loop over keys/properties of an Object.
 * 5. `for...of`       - Used to loop over values of iterable objects (Arrays, Strings).
 */

// ----------------------------------------------------------------------------
// Example: Using a basic `for` loop
// ----------------------------------------------------------------------------
console.log("\n--- Printing numbers WITH a basic for loop ---");

// Syntax: for (initialization; condition; increment/decrement)
for (let i = 1; i <= 5; i++) {
    console.log("Loop iteration number:", i);
}

/**
 * ============================================================================
 *                       IMPORTANT INTERVIEW QUESTIONS
 * ============================================================================
 * 
 * Q1: What is the core difference between a `for` loop and a `while` loop?
 * A1: Use a `for` loop when you know exactly how many times the loop should 
 *     run (e.g., looping 10 times). Use a `while` loop when the number of 
 *     iterations is unknown and depends on a specific condition becoming false.
 * 
 * Q2: What is the difference between `while` and `do-while` loops?
 * A2: A `while` loop evaluates the condition BEFORE executing the code block. 
 *     A `do-while` loop evaluates the condition AFTER the code block runs. 
 *     Therefore, a `do-while` loop is guaranteed to execute at least once, 
 *     even if the condition is false from the very beginning.
 * 
 * Q3: Are `.map()` and `.forEach()` considered types of loops?
 * A3: Strictly speaking, no. They are Higher-Order Array Iteration Methods 
 *     that execute a callback function under the hood (which may internally 
 *     use a loop). The core loop constructs are `for`, `while`, `do-while`, 
 *     `for-in`, and `for-of`.
 */