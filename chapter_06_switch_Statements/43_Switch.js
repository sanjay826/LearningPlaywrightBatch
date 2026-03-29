/**
 * ============================================================================
 *                       JAVASCRIPT SWITCH STATEMENT
 * ============================================================================
 * 
 * What is a switch statement and how does it work?
 * - The `switch` statement is a control flow mechanism used to execute different 
 *   blocks of code based on the value of an expression.
 * - It evaluates an expression, matching the expression's value to a `case` 
 *   clause, and executes statements associated with that case.
 * 
 * Why use it?
 * - It provides a cleaner and more readable alternative to deep, complex 
 *   `if...else if...else` chains, especially when comparing the same variable
 *   against multiple distinct values.
 */

/*
 * ----------------------------------------------------------------------------
 * Syntax of a switch statement
 * ----------------------------------------------------------------------------
 * 
 * switch (expression) {
 *   case value1:
 *     // Code to execute if expression === value1
 *     break; // Stops execution and exits the switch block
 * 
 *   case value2:
 *     // Code to execute if expression === value2
 *     break;
 * 
 *   default:
 *     // Code to execute if no matching case is found (optional but recommended)
 * }
 */

/**
 * ----------------------------------------------------------------------------
 * Key Differences: `switch` vs `if-else if`
 * ----------------------------------------------------------------------------
 * 1. Readability: `switch` is often cleaner when checking a single variable 
 *    against many possible values.
 * 2. Evaluation: `switch` uses strict equality (`===`) for comparison. It means 
 *    the data type and value must both match exactly.
 * 3. Fall-through: In a `switch` statement, if you forget the `break` keyword, 
 *    the execution will "fall through" to the next cases until a `break` or the 
 *    end of the block is reached. `if-else` does not have this behavior.
 */

// ============================================================================
// Example: Demonstrating a Switch Statement (Day of the Week)
// ============================================================================

// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, etc.
let dayOfWeek = 2; // Let's set it to Tuesday

console.log("Evaluating day of the week...");

switch (dayOfWeek) {
    case 0:
        console.log("Sunday - Rest Day 😴");
        break; // Essential to prevent falling through to the next case

    case 1:
        console.log("Monday - Sprint Planning 📅");
        break;

    case 2:
        console.log("Tuesday - Development 💻");
        break;

    case 3:
        console.log("Wednesday - Code Review 🔍");
        break;

    case 4:
        console.log("Thursday - Testing 🧪");
        break;

    case 5:
        console.log("Friday - Deployment & Retro 🚀");
        break;

    case 6:
        console.log("Saturday - Rest Day 🏖️");
        break;

    default:
        // Executes if none of the cases match
        console.log("Invalid Day ❌ - Please provide a number between 0 and 6.");
}

/**
 * IMPORTANT INTERVIEW QUESTIONS:
 * 
 * Q: What happens if you omit the `break` statement?
 * A: It causes a "fall-through". The code will continue to execute the next 
 *    case's block regardless of if the condition evaluates to true, until it 
 *    encounters a `break` or the switch block ends.
 * 
 * Q: Does `switch` check for data type?
 * A: Yes, `case` comparisons are evaluated using strict equality (`===`).
 *    For example, `case "1"` will NOT match `let value = 1;`.
 */
