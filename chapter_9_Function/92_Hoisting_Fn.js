/**
 * Demonstrates JavaScript hoisting behavior with functions.
 * 
 * @description
 * Function declarations are hoisted to the top of their scope,
 * allowing them to be called before they are defined in the code.
 * However, function expressions and arrow functions are not hoisted
 * and will result in a ReferenceError if called before declaration.
 * 
 * @example
 * // Function declaration - can be called before definition
 * sayHello(); // Works fine
 * 
 * function sayHello() {
 *   console.log("Hello");
 * }
 * 
 * @example
 * // Function expression - cannot be called before definition
 * greet(); // ReferenceError: Cannot access 'greet' before initialization
 * 
 * const greet = function() {
 *   console.log("Greetings");
 * };
 * 
 * 
 */
