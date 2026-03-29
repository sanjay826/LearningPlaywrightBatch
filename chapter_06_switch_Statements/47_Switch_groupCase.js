/**
 * ============================================================================
 *               JAVASCRIPT SWITCH STATEMENT: GROUPING CASES
 * ============================================================================
 * 
 * What is a switch group case?
 * - Grouping cases (also known as intentional "fall-through") allows you to 
 *   execute the exact same block of code for multiple different case conditions.
 * - Simply stack the `case` clauses together without `break` statements between 
 *   them.
 * 
 * Why use it?
 * - It eliminates code duplication, ensuring you don't rewrite the same logic 
 *   multiple times.
 * - It serves as a more readable and concise equivalent to writing multiple 
 *   conditions in an `if...else if` statement connected by an OR (`||`) operator.
 */

// ============================================================================
// Example 1: Differentiating Weekdays from Weekends
// ============================================================================

let dayNumber = 3; // Let's set the day to Wednesday

switch (dayNumber) {
    case 1: // Monday
    case 2: // Tuesday
    case 3: // Wednesday
    case 4: // Thursday
    case 5: // Friday
        console.log("It's a Weekday 💻. Time to work!");
        break;

    case 6: // Saturday
    case 7: // Sunday
        console.log("It's the Weekend 🏖️. Time to relax!");
        break;

    default:
        console.log("Invalid day number! Please provide a number between 1 and 7.");
}

// ============================================================================
// Example 2: Categorizing Browsers by their Core Engine
// ============================================================================

let userBrowser = "Edge";

switch (userBrowser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        // This block will execute for Chrome, Edge, Brave, OR Opera
        console.log(`${userBrowser} is based on the Chromium Project 🌐`);
        break;

    case "Firefox":
        console.log(`${userBrowser} is based on the Mozilla Project 🦊`);
        break;
        
    case "Safari":
        console.log(`${userBrowser} is based on WebKit 🍏`);
        break;

    default:
        console.log("Unknown Browser - manual testing needed 🚧");
}

/**
 * ============================================================================
 *                       IMPORTANT INTERVIEW QUESTIONS
 * ============================================================================
 * 
 * Q: How exactly do grouped cases work under the hood?
 * A: When a case matches the switch expression, execution begins and continues 
 *    downward. By omitting the `break` keyword (an intentional fall-through), 
 *    all stacked cases share the behavior of the first code block and `break` 
 *    they encounter.
 * 
 * Q: How does a grouped switch statement compare to an `if-else` statement?
 * A: Grouping cases is structurally equivalent to combining multiple equality 
 *    checks using the logical OR (`||`) operator in an `if` condition. 
 *    Example: `if (day === 6 || day === 7)` is the same as:
 *             `case 6: \n case 7: \n // code`
 *    However, the `switch` approach is generally more concise and readable when 
 *    dealing with many values of the same variable.
 */