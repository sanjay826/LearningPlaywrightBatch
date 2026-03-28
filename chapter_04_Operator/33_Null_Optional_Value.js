/**
 * Nullish Coalescing Operator (??)
 * 
 * The ?? operator provides a concise way to handle null or undefined values
 * by returning the right-hand operand when the left-hand operand is nullish.
 * 
 * Syntax: leftOperand ?? rightOperand
 */

// Example 1: Basic nullish coalescing
let val = null ?? "default";
console.log(val); // Output: "default"

// Example 2: Distinguishing from logical OR operator
// The ?? operator only checks for null/undefined, unlike || which checks all falsy values
let count = 0;
let result = count ?? 10; // Result: 0 (preserves falsy non-nullish values)

// Example 3: Practical test data initialization
let testUsername = null ?? "testUser@example.com";
let testPassword = undefined ?? "defaultPassword123";

val = val + "Sanjay";
console.log(val); // Output: "defaultSanjay"

/**
 * Comparison: Nullish Coalescing (??) vs Logical OR (||)
 * 
 * | Operator | null | undefined | 0 | "" | false |
 * |-----------|------|-----------|---|----|----- |
 * | ??        | ✓    | ✓         | ✗ | ✗  | ✗    |
 * | ||        | ✓    | ✓         | ✓ | ✓  | ✓    |
 * 
 * Recommendation: Use ?? for optional configuration values and test data handling.
 */