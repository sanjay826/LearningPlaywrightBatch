/**
 * ============================================================================
 * JAVASCRIPT CORE CONCEPTS: IDENTIFIERS AND LITERALS
 * ============================================================================
 * 
 * 1. DEFINITIONS:
 * - Identifier: A name given to a container (variable, function, class, etc.) 
 *               to identify it uniquely within the code.
 * - Literal:    A fixed value that is directly written into the code and 
 *               assigned to an identifier.
 * 
 * Example: 
 * var age = 25; 
 * // 'age' -> Identifier (The name of the container)
 * // 25    -> Literal (The actual data value: can be number, string, boolean, etc.)
 * 
 * ----------------------------------------------------------------------------
 * 2. RULES FOR NAMING IDENTIFIERS:
 * - Must start with a letter (a-z, A-Z), an underscore (_), or a dollar sign ($).
 * - After the first character, it may contain letters, numbers (0-9), _, or $.
 * - Cannot start with a numeric character.
 * - Cannot be a reserved JavaScript keyword (like var, if, for, etc.).
 * - Cannot contain spaces or special characters (other than _ and $).
 * - Identifiers are case-sensitive (e.g., 'name' and 'Name' are different).
 * ============================================================================
 */

// --- EXAMPLES OF LITERALS & IDENTIFIERS ---

var a = 10;           // 'a' is the Identifier, '10' is a numeric literal
a = 20;               // Reassigning a new literal '20' to identifier 'a'
console.log(a);       // Outputs: 20

var greeting = 'Hello'; // 'greeting' is the Identifier, 'Hello' is a string literal
console.log(greeting);  // Outputs: Hello


// --- EXAMPLES OF VALID IDENTIFIER RULES ---

// 1. Starting with a dollar sign ($) is valid
var $name = 'Hello';
console.log($name);

// 2. Starting with an underscore (_) is valid
var _name = 'Hello';
console.log(_name);

// 3. Containing numbers (but not starting with them) is valid
var name1 = 'Hello';
console.log(name1);

// 4. Mixing letters, numbers, dollar signs, and underscores is valid
var name$1 = 'Hello';
console.log(name$1);

var name_1 = 'Hello';
console.log(name_1);

var name_1$1 = 'Hello';
console.log(name_1$1);

var name1$1_2 = 'Hello';
console.log(name1$1_2);


// --- IDENTIFIERS ARE CASE-SENSITIVE ---

// 'name' and 'NAME' are treated as two entirely different variables
var NAME = "Sanjay";
var name = "Kumar";

console.log(NAME);  // Outputs: Sanjay
console.log(name);  // Outputs: Kumar


// --- UNICODE CHARACTERS IN IDENTIFIERS ---

// JavaScript allows Unicode characters in identifiers (e.g., Greek letters)
var π = 3.4;        // Using the Pi symbol is valid in JS!
console.log(π);     // Outputs: 3.4