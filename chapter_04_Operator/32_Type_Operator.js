/**
 * ============================================
 * TYPE OPERATOR IN JAVASCRIPT
 * ============================================
 * 
 * The typeof operator returns a string indicating the type of the unevaluated operand.
 * It is used to determine the data type of a variable or expression.
 * 
 * Syntax: typeof operand
 * 
 * Common Return Values:
 * - "string"    : Text values
 * - "number"    : Numeric values (integers and floats)
 * - "boolean"   : true or false
 * - "undefined" : Variable declared but not assigned
 * - "object"    : Objects, arrays, null (null is a special case)
 * - "function"  : Function declarations and expressions
 * - "symbol"    : Unique identifiers (ES6+)
 */

// ============================================
// EXAMPLES WITH EXPLANATIONS
// ============================================

// 1. STRING TYPE
console.log(typeof "Hello");        // Output: "string"
console.log(typeof "JavaScript");   // Output: "string"

// 2. NUMBER TYPE
console.log(typeof 123);            // Output: "number"
console.log(typeof 12.5);           // Output: "number"
console.log(typeof -45);            // Output: "number"

// 3. BOOLEAN TYPE
console.log(typeof true);           // Output: "boolean"
console.log(typeof false);          // Output: "boolean"

// 4. UNDEFINED TYPE
let undefinedVar;
console.log(typeof undefinedVar);   // Output: "undefined" (declared but not assigned)

// 5. NULL TYPE (SPECIAL CASE)
console.log(typeof null);           // Output: "object" (this is a known bug in JavaScript)
// Note: null is actually a primitive, but typeof returns "object"

// 6. ARRAY TYPE
console.log(typeof []);             // Output: "object" (arrays are objects in JS)
console.log(typeof [1, 2, 3]);      // Output: "object"

// 7. OBJECT TYPE
console.log(typeof {name: "John"}); // Output: "object"

// 8. FUNCTION TYPE
console.log(typeof function(){});   // Output: "function"
console.log(typeof console.log);    // Output: "function"
