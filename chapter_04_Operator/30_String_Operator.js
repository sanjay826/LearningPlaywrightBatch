// string Operator 
/**
 * String Operator
 * @description Operators used to concatenate, compare, or manipulate string values in JavaScript.
 * String operators allow you to work with text data by combining strings, checking equality,
 * or performing other string-related operations. The primary string operator is the concatenation
 * operator (+), which joins two or more strings together to form a new string.
 * 
 * @example
 * // Concatenation Operator (+)
 * let s = "Hi";
 * let greeting = s + " World"; // "Hi World"
 * let result = "Hello" + " " + "Playwright"; // "Hello Playwright"
 * 
 * @example
 * // String Comparison
 * "abc" === "abc"; // true
 * "abc" == "abc"; // true
 * "abc" !== "xyz"; // true
 * 
 * @example
 * // Template Literals (String Interpolation)
 * let name = "Playwright";
 * let message = `Welcome to ${name}`; // "Welcome to Playwright"
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#string_operators
 */
let s = "Hi";
s+="Sanjay";
console.log(s);