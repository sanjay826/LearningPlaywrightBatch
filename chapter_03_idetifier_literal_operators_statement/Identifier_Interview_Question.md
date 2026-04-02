# JavaScript Fundamentals: Identifiers, Literals, Operators, Statements, and Operands

## 1. Identifiers in JavaScript
**What is an Identifier?**
An identifier is simply a name. In JavaScript, identifiers are used to name variables, functions, properties, parameters, and classes. They are the names you create to identify different entities in your code.

**How it works:**
- It is a sequence of characters that must start with a letter (a-z, A-Z), an underscore (`_`), or a dollar sign (`$`).
- Subsequent characters can also be digits (0-9).
- Identifiers are case-sensitive (`myVar` is different from `myvar`).
- You cannot use reserved keywords (like `if`, `for`, `class`) as identifiers.

**Identifier vs. Variable:**
- **Identifier:** The *name* itself (e.g., `userName`).
- **Variable:** The actual *container* in memory that holds a value, which is referred to by the identifier. 
*(Analogy: If a variable is a box holding items, the identifier is the label written on the box).*

**Common Interview Questions:**
1. What are the rules for naming identifiers in JavaScript?
2. Are JavaScript identifiers case-sensitive? Provide an example.
3. Can we use reserved words as identifiers?

---

## 2. Literals in JavaScript
**What is a Literal?**
A literal is a fixed, exact value written directly into the source code. It is data that is not stored in a variable during its declaration.

**How it works:**
Whenever you write exactly what the data is, you are using a literal. For example, in `let age = 25;`, `25` is a number literal.
Types of literals include:
- Numeric Literals: `100`, `3.14`
- String Literals: `"Hello"`, `'World'`
- Boolean Literals: `true`, `false`
- Object Literals: `{ name: "John", age: 30 }`
- Array Literals: `[1, 2, 3]`

**Literal vs. Variable:**
- **Literal:** The actual raw, fixed value itself (`"John"`).
- **Variable:** The container that *stores* the literal (`let firstName = "John";`).

**Common Interview Questions:**
1. What is a literal in JavaScript? Can you name at least 3 types?
2. What is an Object Literal? How is it different from creating an object using the `new` keyword?
3. What is a Template Literal and how does it differ from a String Literal?

---

## 3. Operators in JavaScript
**What is an Operator?**
An operator is a special mathematical or logical symbol that tells the JavaScript engine to perform a specific operation on one or more values (operands) to produce a result.

**How it works:**
Operators take inputs, perform an action, and return an output. For example, in `5 + 3`, the `+` operator adds the numbers and returns `8`. Types of operators include Arithmetic (`+`, `-`, `*`), Assignment (`=`, `+=`), Comparison (`==`, `===`), and Logical (`&&`, `||`).

**Operator vs. Expression:**
- **Operator:** The symbol performing the action (e.g., `*`).
- **Expression:** A combination of values, variables, and operators that resolves to a *single value*. (e.g., `5 * 3` is an expression). An operator is a *part* of an expression.

**Common Interview Questions:**
1. What is the difference between `==` and `===`?
2. Explain the difference between prefix and postfix increment operators (`++x` vs `x++`).
3. What are short-circuit logical operators?

---

## 4. Statements in JavaScript
**What is a Statement?**
A statement is an instruction or a command that tells the JavaScript engine to *do something*. A JavaScript program is basically a sequence of statements.

**How it works:**
Statements perform actions but do not necessarily produce a value themselves. For example, declaring a variable, looping, or conditional branching. Statements usually end with a semicolon (`;`).
Examples: `let x = 10;` (declaration statement), `if (x > 5) { ... }` (conditional statement).

**Statement vs. Expression:**
- **Expression:** Produces a value. (e.g., `2 + 2` evaluates to `4`).
- **Statement:** Performs an action or controls flow. (e.g., `if (true) { ... }`).
*(Note: A statement can contain expressions, but an expression cannot contain a statement).*

**Common Interview Questions:**
1. What is the difference between an Expression and a Statement?
2. Is `console.log(5)` an expression or a statement? (Tricky: The whole line represents an expression statement, but `console.log(5)` itself evaluates to `undefined`, making it an expression used as a statement).
3. Why are semicolons typically used at the end of statements?

---

## 5. Operands in JavaScript
**What is an Operand?**
An operand is the actual data, value, or variable that an operator performs its action upon.

**How it works:**
Operators need operands to work. 
- If an operator needs one operand, it's a **unary** operator (e.g., `typeof x` -> `x` is the operand).
- If it needs two, it's a **binary** operator (e.g., `x + y` -> `x` and `y` are the operands).
- If it needs three, it's a **ternary** operator (e.g., `condition ? a : b` -> `condition`, `a`, `b` are the operands).

**Example:**
In the expression `10 * 5`:
- `10` and `5` are the **operands**.
- `*` is the **operator**.

**Common Interview Questions:**
1. What is an operand? Give an example involving a binary operator.
2. What are unary, binary, and ternary operators concerning operands?

---

## 6. Nullish Coalescing Operator (`??`)
**What is it?**
The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is **null** or **undefined**, and otherwise returns its left-hand side operand.

**How it works:**
It is specifically designed to provide default values when dealing with `null` or `undefined`. It differentiates between "no value" (`null`/`undefined`) and "falsy values" (like `0`, `""`, or `false`).

**Example with Details:**
```javascript
let userName = null;
let defaultName = "Guest";

// Using ??
let displayName = userName ?? defaultName;
console.log(displayName); // Output: "Guest" (because userName is null)

// The crucial difference between ?? and || (Logical OR)
let score = 0;

let finalScoreOr = score || 10; 
console.log(finalScoreOr); // Output: 10 (because 0 is a "falsy" value, || moves to the right)

let finalScoreNullish = score ?? 10;
console.log(finalScoreNullish); // Output: 0 (because 0 is NOT null or undefined, ?? stops at the left)
```

---

## 7. Tricky Interview Questions

**Q1: What will be the output of the following identifier declaration?**
```javascript
let 1variable = "Hello";
let $var = "World";
let _var = "!";
```
**Answer:** The `1variable` declaration will throw a `SyntaxError: Invalid or unexpected token`. Identifiers cannot start with a number. The other two (`$var` and `_var`) are perfectly valid.

**Q2: What will this expression log and why? (Operators & Operands)**
```javascript
console.log(1 + 2 + "3" + 4 + 5);
```
**Answer:** `3345`.
- `1 + 2` evaluates to numeric `3`.
- `3 + "3"` evaluates to string `"33"` (because the `+` operator coerces the number into a string when one operand is a string).
- From there on, the operation remains string concatenation: `"33" + 4` -> `"334"`, and `"334" + 5` -> `"3345"`.

**Q3: Can an expression be used as a statement? Can a statement be used as an expression?**
**Answer:** Yes, an expression can be a statement (called an "expression statement"), like `console.log("Hi");` or `x = 5;`. However, a statement **cannot** be used as an expression. For instance, you cannot do `let result = if(true) { return 5 };` because `if` is a statement and does not produce a value that can be assigned to a variable.

**Q4: Tricky Nullish Coalescing (`??`) vs Logical OR (`||`)**
```javascript
let val1 = "" ?? "Fallback";
let val2 = "" || "Fallback";
console.log(val1, val2);
```
**Answer:** `"" "Fallback"`.
- `val1` evaluates to `""` (empty string) because `""` is neither `null` nor `undefined`, so `??` stops immediately at the left operand.
- `val2` evaluates to `"Fallback"` because `""` is a falsy value, so `||` moves to the right operand.

---

## 8. How Are These Concepts Used in Playwright?

When writing automation scripts in Playwright, you constantly use these foundational JavaScript concepts.

*   **Identifiers:** You heavily use identifiers to name locators, test descriptions, browser contexts, and page instances. e.g., `const loginButton = page.locator('#login');` (`loginButton`, `page`, `locator` are identifiers).
*   **Literals:** Selectors are almost always passed as String Literals. e.g., `await page.click('.submit-btn')` (`'.submit-btn'` is a string literal). Object Literals are used everywhere for passing options, e.g., `await page.goto(url, { waitUntil: 'load' })` (`{ waitUntil: 'load' }` is an object literal).
*   **Operators:** You use comparison operators to natively compare states, or calculate conditions before interacting. e.g., `let index = currentIndex + 1;`
*   **Statements:** Playwright scripts consist of asynchronous statements. Your test files contain declaration statements, `if/else` control flow statements (like deciding to click a banner only if it's visible), and iterative statements (like using a `for...of` loop to iterate over multiple elements on the screen).
*   **Nullish Coalescing (`??`):** In UI testing, you often process environment variables or configuration data. If an environment variable is missing (`undefined`), you use `??` to supply a local default. e.g., `const testUrl = process.env.BASE_URL ?? "http://localhost:3000";` (this avoids bugs where an environment variable is unintentionally an empty string, where you'd want it to *stay* an empty string rather than fallback).
