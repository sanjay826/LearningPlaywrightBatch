/**
 * Ternary Operator
 * 
 * A concise conditional operator that evaluates a boolean expression and returns 
 * one of two values based on the result.
 * 
 * Syntax: condition ? valueIfTrue : valueIfFalse
 * 
 * Use Cases:
 * - Inline conditional assignments
 * - Concise alternative to if-else statements
 * - Functional programming patterns
 */

/**
 * Example 1: Age Verification
 * Determines if a user can travel based on age requirement
 */
const age = 40;
const travelPermission = age > 18 ? "Eligible to travel" : "Not eligible to travel";
console.log(travelPermission); // Output: "Eligible to travel"

/**
 * Example 2: User Role Assignment
 * Assigns role based on user type
 */
const isAdmin = true;
const userRole = isAdmin ? "Administrator" : "User";
console.log(userRole); // Output: "Administrator"

/**
 * Example 3: Nested Ternary (Use with caution - consider if-else for readability)
 * Assigns grade based on score
 */
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // Output: "B"