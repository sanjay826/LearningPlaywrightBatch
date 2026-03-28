
/**
 * Assignment Operators in JavaScript
 * 
 * Assignment operators are used to assign values to variables. They can also perform
 * arithmetic operations and assign the result to the variable in a single operation.
 * 
 * Common Assignment Operators:
 * - =    : Assigns a value to a variable
 * - +=   : Adds a value to a variable and assigns the result
 * - -=   : Subtracts a value from a variable and assigns the result
 * - *=   : Multiplies a variable by a value and assigns the result
 * - /=   : Divides a variable by a value and assigns the result
 * - %=   : Performs modulus operation on a variable and assigns the result
 * - **=  : Performs exponentiation and assigns the result
 * 
 * Definition:
 * Assignment operators assign values to JavaScript variables. The basic assignment
 * operator is the equals sign (=), which assigns the value on the right to the variable
 * on the left. Compound assignment operators combine an arithmetic operation with
 * assignment to provide a shorthand notation.
 * 
 * @example
 * // Basic assignment
 * let x = 10;
 * 
 * // Compound assignments
 * x += 10;  // x = x + 10, result: 20
 * x -= 3;   // x = x - 3, result: 17
 * x *= 2;   // x = x * 2, result: 34
 * x /= 4;   // x = x / 4, result: 8.5
 * x %= 4;   // x = x % 4, result: 0.5
 */
// Assignment operator 
let x = 10;
//x = x + 20;
x += 10;  // x = 20
console.log(x);  
x -= 3;   // x = 17
console.log(x); 
x *= 2;   // x = 34
console.log(x); 
x /= 4;   // x = 8.5
console.log(x);
x %= 4;   // x = 0.5
console.log(x);


