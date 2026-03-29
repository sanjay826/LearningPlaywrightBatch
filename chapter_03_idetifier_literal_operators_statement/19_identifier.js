/**
 * ============================================================================
 * JAVASCRIPT CORE CONCEPTS: IDENTIFIERS, LITERALS, AND OPERATORS
 * ============================================================================
 * 
 * This file breaks down three fundamental building blocks of JavaScript:
 * 1. Identifiers (Names given to variables)
 * 2. Literals (Actual raw data values)
 * 3. Operators (Symbols that perform actions on data)
 * ============================================================================
 */


// ==========================================
// 1. IDENTIFIERS
// ==========================================
/*
 DEFINITION: 
 An identifier is simply the "name" given to a variable, function, or class 
 so you can identify and refer to it later in your code.
 
 Rules for naming identifiers:
 1. Must start with a letter, an underscore (_), or a dollar sign ($).
 2. Cannot start with a number.
 3. Cannot be a reserved keyword (like 'class', 'return', 'let', etc.).
 4. Cannot contain spaces or hyphens.
 5. They are case-sensitive ('myVar' and 'myvar' are different).
*/

console.log("=========== 1. IDENTIFIERS ===========");

// --- Valid Identifiers ---
let myVariable = 10;
let _myVariable = 20;
let $myVariable = 30;
let myVariable1 = 40;

// --- Invalid Identifiers --- 
// (If you uncomment these, JavaScript will throw a strict Syntax Error)
// let 1myVariable = 50; // ERROR: Cannot start with a number
// let my-variable = 60; // ERROR: Cannot contain hyphens (JS thinks it's subtraction)
// let my variable = 70; // ERROR: Cannot contain spaces
// let class = 80;       // ERROR: Cannot use reserved keywords like 'class' or 'return'

// Note: Some words look like keywords but aren't actually reserved.
// You *can* use them, but you NEVER should because it is extremely confusing!
let undefinedVar = '10'; // Valid, but bad naming practice
let InfinityValue = 15;  // Valid, but confusing

console.log("Identifiers successfully configured!");
console.log("\n");


// ==========================================
// 2. LITERALS
// ==========================================
/*
 DEFINITION: 
 A literal is a fixed value that is directly written into your code. 
 While the 'Identifier' is the container's name, the 'Literal' is the actual 
 raw data physically sitting inside that container.
*/

console.log("=========== 2. LITERALS ===========");

let age = 25; 
// 'age' is the Identifier
// 25 is a NUMERIC Literal

let greetingMessage = "Hello World"; 
// "Hello World" is a STRING Literal

let isStudentOnline = true; 
// true is a BOOLEAN Literal

let emptyValue = null; 
// null is a NULL Literal

console.log("Numeric Literal Example:", age);
console.log("String Literal Example:", greetingMessage);
console.log("\n");


// ==========================================
// 3. OPERATORS
// ==========================================
/*
 DEFINITION: 
 An operator is a mathematical or logical symbol that performs an operation 
 on one or more pieces of data.
*/

console.log("=========== 3. OPERATORS ===========");

let num1 = 10;
let num2 = 5;

// --- Arithmetic Operators (Doing Math) ---
console.log("Addition (+):", num1 + num2);         // Outputs: 15
console.log("Subtraction (-):", num1 - num2);      // Outputs: 5
console.log("Multiplication (*):", num1 * num2);   // Outputs: 50
console.log("Division (/):", num1 / num2);         // Outputs: 2
console.log("Remainder/Modulo (%):", num1 % num2); // Outputs: 0 (10 divided by 5 has no remainder)


// --- Assignment Operators (Updating variables quickly) ---
let myScore = 10;  // The '=' is the standard assignment operator
myScore += 5;      // This literally means: myScore = myScore + 5 (Updates to 15)
myScore -= 3;      // This literally means: myScore = myScore - 3 (Updates to 12)
console.log("Score after assignment operations:", myScore); // Outputs: 12


// --- Comparison Operators (Returns true or false) ---
console.log("Is num1 equal to num2? (==):", num1 == num2);       // false
console.log("Is num1 greater than num2? (>):", num1 > num2);     // true
console.log("Is num1 less than num2? (<):", num1 < num2);        // false


// --- Logical Operators (Combining true/false conditions) ---
let conditionA = true;
let conditionB = false;

console.log("AND (&&):", conditionA && conditionB); // false (Both MUST be true)
console.log("OR (||):", conditionA || conditionB);  // true (Only ONE needs to be true)
console.log("NOT (!):", !conditionA);               // false (Reverses the boolean to the opposite)

console.log("\n");


// ==========================================
// 4. COMMON INTERVIEW QUESTIONS (BEGINNER LEVEL)
// ==========================================
/*
Q1: What is the main difference between an Identifier and a Literal?
A1: Think of a shipping box. The Identifier is the *label* written on the outside 
    of the box (e.g., 'weight'). The Literal is the actual *item* placed inside 
    the box (e.g., the number 50).

Q2: Which of the following is an invalid identifier and why? `let 1stPlace = "John";`
A2: It is completely invalid because variable identifiers can never start with a number.

Q3: What does the Modulo (%) operator do?
A3: It returns the remainder of a division. For example, 10 % 3 equals 1, because 
    3 goes into 10 exactly three times (which is 9), leaving a remainder of 1.

Q4: If I type `let x = "Hello"`, what type of literal is "Hello"?
A4: It is a String literal.
*/
