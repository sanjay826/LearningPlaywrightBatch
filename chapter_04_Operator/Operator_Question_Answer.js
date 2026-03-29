/**
 * ============================================================================
 * JAVASCRIPT CORE CONCEPTS: OPERATOR INTERVIEW QUESTIONS & ANSWERS
 * ============================================================================
 * 
 * This file answers common beginner questions regarding JavaScript Operators.
 * Each answer is accompanied by a practical, running code example so you can
 * see exactly how the operators work "Behind the Scenes".
 * ============================================================================
 */

let a = 10;
let b = 5;

// ============================================================================
// Q1 & Q2: What is an operator? What is an operand?
// ============================================================================
/*
  A1: An OPERATOR is a mathematical or logical symbol that performs an action (like +, -, *).
  A2: An OPERAND is the actual data or variable that the operator works on.
*/
console.log("=========== Q1 & Q2: Operators & Operands ===========");

// In the expression below, 'a' and 'b' are OPERANDS. The '+' is the OPERATOR.
let sum = a + b;
console.log(`Applying '+' operator to operands a (${a}) and b (${b}) equals:`, sum);
console.log("\n");


// ============================================================================
// Q3: What is the difference between == and ===?
// ============================================================================
/*
  A3: '==' checks for equality of VALUE only (it converts types if necessary).
      '===' is strict! It checks for equality of VALUE AND TYPE. Always use ===!
*/
console.log("=========== Q3: Loose vs Strict Equality (== vs ===) ===========");
console.log('1 == "1" (Value only):', 1 == "1");       // true (JS converts the String to a Number)
console.log('1 === "1" (Value AND Type):', 1 === "1"); // false (A Number is not a String)
console.log("\n");


// ============================================================================
// Q4 & Q5: What is the difference between +, ++, -, and --?
// ============================================================================
/*
  A4/A5: '+' and '-' are standard arithmetic operators used to add or subtract two values.
         '++' (Increment) quickly adds exactly 1 to a single variable.
         '--' (Decrement) quickly subtracts exactly 1 from a single variable.
*/
console.log("=========== Q4 & Q5: Increment & Decrement ===========");
let count = 5;
console.log("Standard Addition (count + 2):", count + 2); // Outputs 7

count++; // Shortcut to add 1 to 'count'
console.log("After Increment (count++):", count);         // Outputs 6

count--; // Shortcut to subtract 1 from 'count'
console.log("After Decrement (count--):", count);         // Outputs 5
console.log("\n");


// ============================================================================
// Q6 & Q7: Multiplication, Exponentiation, Division, and Modulus (*, **, /, %)
// ============================================================================
/*
  A6/A7: '*' multiplies values.         '**' is exponentiation (to the power of).
         '/' divides values normally.   '%' is modulus (it returns the remainder of division).
*/
console.log("=========== Q6 & Q7: Advanced Math ===========");
console.log("Multiplication (3 * 3):", 3 * 3);        // Outputs 9
console.log("Exponentiation (3 ** 3):", 3 ** 3);      // Outputs 27 (3 to the power of 3)
console.log("Division (10 / 3):", 10 / 3);            // Outputs 3.3333333333333335
console.log("Modulus/Remainder (10 % 3):", 10 % 3);   // Outputs 1 (3 goes into 10 three times, leaving 1 leftover)
console.log("\n");


// ============================================================================
// Q8 & Q9: Logical Operators (&&, ||, !, !!)
// ============================================================================
/*
  A8: '&&' (AND) returns true ONLY if both sides are true.
      '||' (OR) returns true if at least ONE side is true.
  A9: '!' (NOT) reverses a boolean. True becomes false.
      '!!' (Double NOT) converts any value to its raw boolean true/false state.
*/
console.log("=========== Q8 & Q9: Logical Operators ===========");
console.log("true && false (AND):", true && false); // Outputs false
console.log("true || false (OR):", true || false);  // Outputs true

let isRaining = true;
console.log("!isRaining (NOT):", !isRaining);       // Outputs false

// Converting a string to a boolean using !!
console.log("!!'Hello' (Double NOT):", !!"Hello");  // Outputs true (Because strings are not empty)
console.log("\n");


// ============================================================================
// Q10, Q11, & Q12: Assignment Operators (+=, -=, *=, /=, %=, **=)
// ============================================================================
/*
  A10-12: These are shortcuts to update a variable quickly without typing it twice.
          For example, "x += 5" is the exact same as typing "x = x + 5".
*/
console.log("=========== Q10 - Q12: Assignment Shortcuts ===========");
let score = 10;
console.log("Initial Score:", score);

score += 5; // Same as: score = score + 5
console.log("After score += 5:", score); // Outputs 15

score *= 2; // Same as: score = score * 2
console.log("After score *= 2:", score); // Outputs 30

score %= 4; // Same as: score = score % 4 
console.log("After score %= 4:", score); // Outputs 2
console.log("\n");

