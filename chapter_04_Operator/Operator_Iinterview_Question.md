# JavaScript Operators and Interview Questions

## 1. What is an Operator?

An **operator** in JavaScript is a special symbol or keyword that performs an operation on one or more values (called operands) and produces a result. Operators are the fundamental building blocks of expressions.

**Key Characteristics:**
- Operators act on operands to produce a value.
- They are used to perform arithmetic, logical, comparison, and other operations.
- They have different precedence levels, which determine the order of evaluation.

**Examples:**
```javascript
// Arithmetic operators
let a = 10;
let b = 5;
let sum = a + b; // + is an operator, a and b are operands, sum is the result

// Comparison operator
let isGreater = a > b; // > is an operator

// Logical operator
let result = (a > 5) && (b < 10); // && is an operator
```

## 2. Difference Between Operators and Expressions

This is a crucial distinction in JavaScript.

| Feature | Operator | Expression |
| :--- | :--- | :--- |
| **Definition** | A symbol or keyword that performs an operation. | A combination of values, variables, and operators that evaluates to a single value. |
| **Nature** | Performs an action or computation. | Produces a value. |
| **Components** | Operands (values/variables) + Operator = Result | Values + Operators + Variables |
| **Examples** | `+`, `-`, `*`, `/`, `%`, `==`, `===`, `&&`, `||`, `!` | `5`, `x + 2`, `a > b`, `myFunction()`, `(x + y) * 2` |

**Illustrative Example:**
```javascript
let x = 10;
let y = 5;

// Operators: +, >, &&
// Operands: x, y, 10, 5

// Expression: (x + y) * 2
// This expression evaluates to: (10 + 5) * 2 = 15 * 2 = 30
// The expression produces a value (30).

// Statement: let result = (x + y) * 2;
// This is a statement because it performs an action (assignment).
```

## 3. Common Interview Questions Related to Operators

### Q1: What is the difference between `==` and `===` in JavaScript?
**Answer:**
- **`==` (Equality Operator):** Performs loose equality comparison. It checks if two values are equal after performing type coercion (converting one or both values to a common type).
- **`===` (Strict Equality Operator):** Performs strict equality comparison. It checks if two values are equal *without* performing type coercion. Both the value and the data type must be the same.

**Example:**
```javascript
console.log(5 == "5");   // true (type coercion: "5" becomes 5)
console.log(5 === "5");  // false (different types: number vs string)

console.log(0 == false); // true (type coercion: false becomes 0)
console.log(0 === false); // false (different types: number vs boolean)
```

### Q2: What is the purpose of the ternary operator?
**Answer:**
The ternary operator is a shorthand for an `if-else` statement. It's a conditional operator that takes three operands and is used to make decisions based on a condition.

**Syntax:**
```javascript
condition ? expressionIfTrue : expressionIfFalse
```

**Example:**
```javascript
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
// If age is 20 (true), status becomes "Adult"
// If age was 15 (false), status would become "Minor"
```

### Q3: Explain the difference between the unary `+` and unary `-` operators.
**Answer:**
- **Unary `+`:** Attempts to convert its operand to a number. If the operand is already a number, it does nothing. If it's a string representation of a number, it converts it to a number.
- **Unary `-`:** Converts its operand to a number and then negates it (flips the sign).

**Example:**
```javascript
let numStr = "123";
let negNum = -45;

console.log(+numStr); // 123 (converts string to number)
console.log(-numStr); // -123 (converts to number and negates)

console.log(+negNum); // -45 (already a number, no change)
console.log(-negNum); // 45 (negates the negative number)
```

### Q4: What is the difference between `++x` (pre-increment) and `x++` (post-increment)?
**Answer:**
The difference lies in when the value is incremented and when it's returned:

- **`++x` (Pre-increment):** Increments the value of `x` *first*, and then returns the *new* value.
- **`x++` (Post-increment):** Returns the *current* value of `x` *first*, and then increments the value.

**Example:**
```javascript
let x = 5;

console.log(++x); // 6 (x becomes 6, then 6 is returned)
console.log(x);   // 6

let y = 5;

console.log(y++); // 5 (5 is returned, then y becomes 6)
console.log(y);   // 6
```

### Q5: How do logical operators (`&&`, `||`, `!`) work with non-boolean values?
**Answer:**
JavaScript's logical operators don't just work with booleans. They perform "truthy/falsy" checks and can return values that are not booleans:

- **`&&` (AND):** Returns the first "falsy" value encountered, or the last value if all are "truthy".
- **`||` (OR):** Returns the first "truthy" value encountered, or the last value if all are "falsy".
- **`!` (NOT):** Converts the operand to a boolean and negates it.

**Example:**
```javascript
// && operator
console.log(0 && 5);        // 0 (0 is falsy, so it's returned immediately)
console.log(1 && 5);        // 5 (1 is truthy, so it moves to 5, which is returned)
console.log("hello" && ""); // "" (empty string is falsy)

// || operator
console.log(0 || 5);        // 5 (0 is falsy, so it moves to 5, which is returned)
console.log(1 || 5);        // 1 (1 is truthy, so it's returned immediately)
console.log(null || undefined); // undefined (both are falsy, last one is returned)

// ! operator
console.log(!0);          // true
console.log(!"hello");    // false
console.log(!null);         // true
```

---

## 4. Tricky Operator Interview Questions

### Q6: What will be the output of `[] == ![]`?
**Answer:** `true`. 
*Why?* It's heavily based on type coercion. The `!` operator converts the empty array `[]` on the right (which is truthy) into the boolean `false`. So we have `[] == false`. When comparing an array to a boolean, both convert to numbers. `false` becomes `0`. The empty array `[]` uses its `toString()` which returns an empty string `""`, and `Number("")` is `0`. Thus `0 == 0` evaluates to `true`.

### Q7: What is the output of `3 > 2 > 1`?
**Answer:** `false`.
*Why?* The evaluation moves left-to-right. First, `3 > 2` is evaluated, returning `true`. The expression is now `true > 1`. In JavaScript, `true` coerces to the number `1`. Therefore, it compares `1 > 1`, which is `false`.

### Q8: What does this line do: `let a = 10, b = 20, c = 30;` ?
**Answer:** This uses the comma operator (`,`). It evaluates each of its operands from left to right and separates variable declarations. When used to assign values, e.g., `let x = (1, 2, 3);`, `x` would receive the value of the last evaluated expression (`3`).

---

## 5. How Are Operators Used in Playwright?

Operators are universally central when validating or manipulating data states around your automation.

*   **Assertions and Truthiness:** Logical operators (`&&`, `||`) are heavily used when dealing with complex state waits. 
```javascript
// Click if the banner is visible AND the close button is loaded
if (await page.isVisible('.banner') && await page.isVisible('.close-btn')) {
    await page.click('.close-btn');
}
```
*   **Ternary Operator for Dynamic Waiting:** Often used to assign dynamic timeouts or states.
```javascript
let timeoutToUse = process.env.SLOW_NETWORK ? 60000 : 15000;
await page.locator('.submit').click({ timeout: timeoutToUse });
```
*   **Strict Equality (`===`):** Using assertions in Playwright involves checking exact values returned from the DOM against expected string or integer counterparts.
```javascript
const cartItems = await page.locator('.cart-item').count();
expect(cartItems === 5).toBeTruthy(); // Checking strictly that it's the number 5, not a string "5"
```