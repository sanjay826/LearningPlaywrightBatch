/**
 * ==========================================
 * JavaScript Statements (if / else if / else)
 * ==========================================
 *
 * The `else if` statement allows us to specify a new condition if the first condition is false.
 * It is used when we need to test multiple conditions consecutively. The code blocks are evaluated 
 * from top to bottom. As soon as a condition evaluates to `true`, the corresponding code block is 
 * executed, and the rest of the `else if` ladder is skipped.
 */

// Example 1: Age Verification
let age = 25;

if (age > 25) {
    console.log("You can go to Goa and drink also");
} else if (age >= 18 && age <= 25) {
    console.log("You can go to Goa but can't drink");
} else {
    console.log("Go to home and watch POGO channel, Shinchan");
}

// Example 2: Grading System
let score = 78;

if (score >= 90) {
    console.log("Grade A - Excellent !!");
} else if (score >= 80) {
    console.log("Grade B - Good !!");
} else if (score >= 70) {
    console.log("Grade C - Average !!");
} else if (score >= 60) {
    console.log("Grade D - Below Average !!");
} else {
    console.log("Grade F - Fail !!");
}

/**
 * ==========================================
 * Twist / Tricky Interview Question
 * ==========================================
 * 
 * Question: What would be the output if we arranged the grading conditions from smallest to largest?
 * 
 * let testScore = 85;
 * if (testScore >= 60) {
 *     console.log("Grade D");
 * } else if (testScore >= 80) {
 *     console.log("Grade B");
 * }
 * 
 * Answer: 
 * The output will be "Grade D"! 
 * Why? Because `85 >= 60` is `true`. Even though `85 >= 80` is also true, JavaScript executes 
 * the FIRST condition that matches and then immediately exists the entire `if / else if` chain.
 * This is why order is critical when evaluating multiple conditions. Always put your most 
 * restrictive or highest priority conditions at the top!
 */
