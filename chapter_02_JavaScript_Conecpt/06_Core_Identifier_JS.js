/**
 * Demonstrates JavaScript identifiers, literals, and variable declaration concepts.
 * 
 * This module illustrates the fundamental rules governing identifier naming conventions
 * and variable assignment in JavaScript.
 * 
 * Identifiers: Variable names or labels used to identify values, functions, or objects.
 * Literals: Fixed values assigned to identifiers (numbers, strings, booleans, null, undefined).
 * 
 * @typedef {string} Identifier
 * @description A valid identifier must adhere to the following rules:
 * - Must start with a letter, underscore (_), or dollar sign ($)
 * - May contain letters, numbers, underscores, or dollar signs
 * - Cannot start with a numeric character
 * - Cannot be a reserved JavaScript keyword
 * - Cannot contain spaces
 * - Cannot contain special characters other than underscore and dollar sign
 * - Case-sensitive (a and A are different identifiers)
 * 
 * @example
 * var a = 10;  // 'a' is the identifier, '10' is the literal
 * a = 20;      // Reassignment of value to the same identifier
 * console.log(a); // Output: 20
 */
 

var a =10;
a=20;
console.log(a);

// Variable name = Identifier - a (name which is given to the container)
// Variable value = literal -> 10,20 "Hello", true, false, null, undefined
var name = 'Hello';
console.log(name)

var $name = 'Hello';
console.log($name);

var _name = 'Hello';
console.log(_name);

var name1 = 'Hello';
console.log(name1);

var name$1 = 'Hello';
console.log(name$1);

var name_1 = 'Hello';
console.log(name_1)
var name_1$1 = 'Hello';
console.log(name_1$1)

var name1$1_2 = 'Hello';
console.log(name1$1_2);

var NAME = "Sanjay";
var name = "Kumar";
console.log(NAME);
console.log(name);
var π=3.4;
console.log(π);