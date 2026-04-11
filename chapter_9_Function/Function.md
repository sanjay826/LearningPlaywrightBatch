# JavaScript Functions: Comprehensive Guide & Interview Preparation

## 1. What is a function and what are the types of functions?
A **function** in JavaScript is a reusable block of code designed to perform a particular task. It is executed when "something" invokes (calls) it. Functions allow you to write code once and use it many times, with different arguments to produce different results.

### Core Types of Functions in JavaScript:
1. **Named Function Declarations**: Standard functions with a name.
2. **Function Expressions**: Functions assigned to a variable (can be anonymous).
3. **Arrow Functions**: Shorter syntax introduced in ES6 `() => {}`.
4. **IIFE (Immediately Invoked Function Expression)**: Functions that run as soon as they are defined.

*Note: Depending on arguments and return values, basic functions can be categorized into 4 distinct structural types (Types 1-4 below).*

---

## 2. Type 1: No Argument, No Return Type
This is the simplest form of a function. It doesn't take any input parameters from the user and doesn't output (return) any value back to the caller. It simply executes the logic written inside its block.

### Example:
```javascript
// Function Declaration
function greetUser() {
    console.log("Hello! Welcome to the application.");
}

// Function Call
greetUser(); 
// Output: Hello! Welcome to the application.
```

---

## 3. Type 2: With Argument/Parameter, No Return Type
This function takes one or more inputs (arguments) to perform an operation, but it does not return a value to the caller. It typically performs actions like DOM manipulation, logging, or saving data.

### Example:
```javascript
// Function Declaration
function printUserDetails(name, age) {
    console.log(`User's name is ${name} and age is ${age}.`);
}

// Function Call
printUserDetails("Sanjay", 28); 
// Output: User's name is Sanjay and age is 28.
```

---

## 4. Type 3: Without Argument, With Return Value
This function doesn't need any input from the caller, but it performs some internal logic and gives a value back (returns) to where it was called. 

### Example:
```javascript
// Function Declaration
function getPiValue() {
    return 3.14159;
}

// Function Call - we need to store or use the returned value
let pi = getPiValue();
console.log(`The value of PI is approximately ${pi}`); 
// Output: The value of PI is approximately 3.14159
```

---

## 5. Type 4: With Argument/Parameter and With Return Value
This is the most flexible and commonly used type of function. It accepts input, processes it, and returns the result back to the caller.

### Example:
```javascript
// Function Declaration
function calculateArea(length, width) {
    let area = length * width; // Process the inputs
    return area;               // Return the result
}

// Function Call
let roomArea = calculateArea(10, 15);
console.log(`The total area is ${roomArea} sq. units.`); 
// Output: The total area is 150 sq. units.
```

---

## 6. What is an Arrow Function?
Introduced in ES6 (ES2015), **Arrow Functions** provide a more concise syntax for writing function expressions. They omit the `function` keyword and use the `=>` (fat arrow) syntax.

**Key characteristics:**
- Shorter syntax.
- **Implicit return:** If the function body is a single expression, you can omit the `{}` and `return` keyword.
- **Lexical `this`:** They do not have their own `this` binding (they inherit `this` from the parent scope, which is highly useful in callbacks).

### Example:
```javascript
// Traditional Function Expression
const addTraditional = function(a, b) {
    return a + b;
};

// Arrow Function implementation
const addArrow = (a, b) => {
    return a + b;
};

// Even shorter: Implicit Return (no `{}` and `return` needed)
const multiply = (a, b) => a * b;

console.log(addArrow(5, 5)); // Output: 10
console.log(multiply(4, 3)); // Output: 12
```

---

## 7. What is an IIFE (Immediately Invoked Function Expression)?
An **IIFE** is a JavaScript function that runs as soon as it is defined. 

It is a design pattern used to create a local scope, preventing variables from polluting the global object (which avoids variable name conflicts). The function is enclosed in parentheses `()` to treat it as an expression, followed by another pair of parentheses `()` to immediately invoke it.

### Example:
```javascript
(function() {
    // This variable exists only inside this function scope
    let secretCode = "XYZ-123";
    console.log("IIFE executed immediately!");
    console.log(`Secret is safe: ${secretCode}`);
})();

// console.log(secretCode); // ReferenceError: secretCode is not defined
```

---

## 8. What is a Default Parameter in a function?
Introduced in ES6, **Default Parameters** allow you to initialize named parameters with default values if no value or `undefined` is passed into the function call.

### Example:
```javascript
// 'Guest' is the default value for 'name' and 'Hello' for 'greeting'
function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet("Sanjay", "Good morning"); // Output: Good morning, Sanjay!
greet("Pramod");                 // Output: Hello, Pramod!
greet();                         // Output: Hello, Guest!
```

---

## 9. What is a Rest Parameter in a function?
The **Rest Parameter** syntax (`...`) allows a function to accept an indefinite number of arguments as an array. It is extremely useful when you don't know how many arguments will be passed to your function.

*Note: The rest parameter must always be the **last** parameter in the function definition.*

### Example:
```javascript
// ...numbers collects all passed arguments into an array called 'numbers'
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumAll(1, 2));          // Output: 3
console.log(sumAll(10, 20, 30, 40)); // Output: 100
console.log(sumAll());              // Output: 0
```

---

## 10. Hoisting in Functions
Function declarations are specifically hoisted to the top of their scope before code execution. This means you can call a function before it is structurally defined in your script.

### Example of Hoisting:
```javascript
// Calling the function BEFORE it is declared
hoistedFunction(); // Output: Yes! This function was hoisted.

// Function Declaration
function hoistedFunction() {
    console.log("Yes! This function was hoisted.");
}
```

> **🎯 Interview-Ready Answer**:
> “This works because function declarations in JavaScript are hoisted. During compilation, the entire function is moved to the top of its scope, allowing it to be called before its actual declaration in the code. Note that Function Expressions and Arrow Functions are not hoisted in the same way.”
