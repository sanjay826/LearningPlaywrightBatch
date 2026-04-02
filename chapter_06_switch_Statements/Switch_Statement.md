# JavaScript Switch Statement & Interview Questions

## 1. What is a Switch Statement and How Does it Work?

The `switch` statement in JavaScript is a control flow structure that evaluates an expression and repeatedly matches the result against multiple possible `case` clauses. When a match is found, it executes the associated block of code.

It provides a cleaner and more readable way to handle multiple possible conditions compared to writing a long, nested `if-else if-else` chain, especially when all conditions depend on the value of a single variable.

### How it works:
1. The `switch` **expression** is evaluated once.
2. The value of the expression is compared with the values of each `case`.
3. The comparison uses **strict equality** (`===`), meaning both the data type and the value must match exactly.
4. If there is a match, the associated block of code is executed.
5. The `break` statement stops the execution and exits the `switch` block. If `break` is omitted, the execution will "fall through" to the next case (even if the next case condition doesn't match).
6. If no matches are found, the optional `default` block is executed.

**Example:**
```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName); // Outputs: "Wednesday"
```

## 2. Difference Between `switch` and `if-else` Statements

| Feature | `switch` Statement | `if-else` Statement |
| :--- | :--- | :--- |
| **Use Case** | Best for testing a single variable/expression against multiple specific constant values. | Best for complex boolean logic, evaluating ranges (e.g., `x > 10`), or testing multiple different variables. |
| **Comparison Type** | Always uses strict equality checking (`===`). | Can evaluate any truthy/falsy condition, including `==`, `>`, `<`, `!=`, etc. |
| **Readability** | Much cleaner and easier to read when dealing with many cases for the exact same variable. | Can become cluttered and very hard to read if nested deeply or if the chain is extremely long. |
| **Execution Flow** | Follows "fall-through" behavior if `break` is missing. Jumps directly to the matched case. | Evaluates sequentially top-to-bottom and exits immediately once a condition is met. |

## 3. Common Interview Questions Related to Switch Statements

### Q1: What happens if you forget to put a `break` in a `switch` statement?
**Answer:**
If you omit the `break` statement, the `switch` statement will experience **"fall-through."** This means it will continue executing the code in all the subsequent cases, even if those cases don't match the expression, until it hits another `break` or the end of the `switch` block.

**Example:**
```javascript
let color = "red";
switch (color) {
  case "red":
    console.log("Color is red"); // This runs
  case "blue":
    console.log("Color is blue"); // This runs too because of fall-through
    break;
  case "green":
    console.log("Color is green");
}
// Outputs both: "Color is red" and "Color is blue"
```

### Q2: Does the `switch` statement perform type coercion (type conversion)?
**Answer:**
No. The `switch` statement uses strictly equality (`===`) to compare the expression with the cases. This means both the value and the data type must be identical. For example, `case 1` will *not* match `"1"`.

**Example:**
```javascript
let value = "2";
switch (value) {
  case 2:
    console.log("Number 2");
    break;
  case "2":
    console.log("String 2"); // This will execute
    break;
}
```

### Q3: Can you use multiple cases to execute the same block of code?
**Answer:**
Yes. You can stack multiple `case` statements together without `break` statements between them to execute the same block of code for multiple values. This is essentially exploiting the fall-through behavior intentionally.

**Example:**
```javascript
let fruit = "apple";
switch (fruit) {
  case "apple":
  case "mango":
  case "banana":
    console.log("This is a common fruit.");
    break;
  default:
    console.log("Unknown fruit.");
}
```

### Q4: Can we use an expression in a `case` clause?
**Answer:**
Yes. While cases are usually fixed constant values (like strings or numbers), JavaScript allows you to use expressions inside the `case`. A common pattern is to write `switch (true)` if you need to evaluate complex logical expressions within the cases.

**Example:**
```javascript
let age = 20;
switch (true) {
  case (age < 18):
    console.log("Minor");
    break;
  case (age >= 18 && age < 65):
    console.log("Adult"); // This runs since 20 >= 18 && 20 < 65 is true
    break;
  default:
    console.log("Senior");
}
```

### Q5: Can we use variables in `switch` cases instead of hardcoded values?
**Answer:**
Yes, the value evaluated in the `case` clause can be another variable.

**Example:**
```javascript
let secretCode = 123;
let guess = 123;

switch (guess) {
  case secretCode:
    console.log("Access Granted!");
    break;
  default:
    console.log("Access Denied!");
}
```

---

## 4. Tricky Switch Interview Questions

### Q6: What is the output of the following nested switch?
```javascript
let a = 1;
let b = 0;
switch (a) {
  case 1:
    switch (b) {
      case 0:
        console.log("A is 1, B is 0");
        break;
      case 1:
        console.log("A is 1, B is 1");
        break;
    }
  case 2:
    console.log("A is 2");
    break;
}
```
**Answer:** Output will be:
`A is 1, B is 0`
`A is 2`
*Why?* The inner switch breaks successfully, but it only breaks out of the *inner* switch block. The outer `case 1` does not have a `break`, triggering fall-through into `case 2` in the outer switch!

### Q7: If you use an object property inside a switch, what gets evaluated?
```javascript
const config = { env: "prod" };
switch (config.env) {
  case "dev": console.log("Development"); break;
  case "prod": console.log("Production"); break;
}
```
**Answer:** `Production`. The expression `config.env` strictly evaluates to `"prod"` right at runtime and matches `case "prod"`.

---

## 5. How Are Switch Statements Used in Playwright?

Switch statements are mostly used in UI automation frameworks for handling configuration and varying environment setups.

*   **Handling Environments (Dev, QA, Staging, Prod):** Playwright tests often run against different environments. You would use a switch statement on `process.env.ENV` to load the appropriate URLs and credentials.
```javascript
let baseUrl;
switch (process.env.TEST_ENV) {
  case 'QA':
    baseUrl = 'https://qa.example.com';
    break;
  case 'STAGING':
    baseUrl = 'https://staging.example.com';
    break;
  case 'PROD':
    baseUrl = 'https://example.com';
    break;
  default:
    baseUrl = 'http://localhost:3000';
}
await page.goto(baseUrl);
```
*   **Handling Browsers/Devices Contexts dynamically:** If you're running custom utility functions and you specifically need Chrome vs Firefox to behave slightly differently, you might use a variable passing the browserName into a switch case.
