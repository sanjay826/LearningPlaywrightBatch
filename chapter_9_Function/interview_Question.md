# Function Interview Questions & Answers (JavaScript & Playwright)

This document contains a curated list of interview questions divided into three sections: Core JavaScript, Playwright Applications, and Advanced/Tough Scenarios.

---

## Section 1: Common JavaScript Function Questions

### 1. What is the difference between a Function Declaration and a Function Expression?
**Answer:**
- **Function Declaration:** Uses the `function` keyword as a standalone statement. It is **hoisted**, meaning it can be called before it is defined in the code.
- **Function Expression:** A function is assigned to a variable. It is **not hoisted**, so it cannot be called before the variable is initialized.
```javascript
// Declaration (Hoisted)
greet(); // Works
function greet() { console.log("Hello!"); }

// Expression (Not Hoisted)
// sayHi(); // Error: Cannot access 'sayHi' before initialization
const sayHi = function() { console.log("Hi!"); };
```

### 2. What are Arrow Functions and how differ from regular functions?
**Answer:**
Introduced in ES6, Arrow Functions `() => {}` provide a concise syntax. 
Key differences:
- **`this` context:** Arrow functions do not have their own `this`; they inherit `this` from the surrounding (lexical) scope. Regular functions bind `this` based on how they are called.
- **`arguments` object:** Arrow functions do not have the implicitly injected `arguments` object.
- **Constructors:** Arrow functions cannot be used as constructors (with the `new` keyword).

### 3. What is a Callback Function?
**Answer:**
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are foundational to handling asynchronous actions in JavaScript (before Promises and Async/Await).

### 4. What are Higher-Order Functions?
**Answer:**
A Higher-Order Function is a function that does at least one of the following:
- Takes one or more functions as arguments (e.g., array methods like `.map()`, `.filter()`, `.reduce()`).
- Returns a function as its result.

### 5. What is an IIFE?
**Answer:**
IIFE stands for **Immediately Invoked Function Expression**. It is a JavaScript function that runs as soon as it is defined. It is heavily used to create isolated scopes and avoid polluting the global namespace.
```javascript
(function() {
    let temp = "I am private";
})();
```

---

## Section 2: Functions in Playwright Automation Testing

### 1. Why do we extensively use `async/await` functions in Playwright?
**Answer:**
Playwright communicates with the browser using WebSockets asynchronously. Nearly all Playwright API methods (like `page.click()`, `page.fill()`, `page.waitForSelector()`) return **Promises**. 
By marking our test functions as `async` and using the `await` keyword, we force JavaScript execution to pause until the Promise resolves (i.e., until the browser completes the action). This makes asynchronous UI automation read like synchronous, easy-to-follow code.

### 2. How do you construct reusable helper functions or Page Object Model (POM) methods?
**Answer:**
You encapsulate Playwright actions inside `async` class methods or standard async functions, passing the `page` object as an argument.
```javascript
// POM Method Example
class LoginPage {
    constructor(page) {
        this.page = page;
    }
    
    // Async Function
    async login(username, password) {
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('#loginBtn');
    }
}
```

### 3. How do you execute JavaScript functions directly inside the browser using Playwright?
**Answer:**
You use the `page.evaluate()` function. This Playwright method takes a JavaScript function, serializes it, sends it to the browser, and executes it in the context of the current web page.
```javascript
// Grabbing window.location.href directly from the browser instance
const url = await page.evaluate(() => {
    return window.location.href;
});
```

### 4. How does `page.waitForFunction()` work in Playwright?
**Answer:**
This method accepts a function and continuously polls it executing inside the browser context until the function returns a truthy value. It's incredibly useful for waiting on unobservable, custom state changes (e.g., waiting for an internal frontend framework variable to be true).
```javascript
// Wait until 'isDataLoaded' becomes true inside the browser's window object
await page.waitForFunction(() => window.isDataLoaded === true);
```

---

## Section 3: Tough / Advanced Questions (JS & Playwright)

### 1. How does Playwright Handle "Closures" in `page.evaluate()`? What is the common pitfall?
**Answer:**
**The Trap:** Functions passed into `page.evaluate()` are serialized (`.toString()`) and sent to the browser. They **do not retain their Node.js lexical scope (closure)**. 
If you try to reference a variable from your Node.js test file inside the browser context, you will get a `ReferenceError`.
**The Fix:** You must pass Node.js variables explicitly as arguments into the `page.evaluate()` function.
```javascript
// ❌ FAILS: The browser doesn't know what 'textColor' is.
const textColor = 'red';
await page.evaluate(() => { document.body.style.color = textColor; });

// ✅ SUCCEEDS: Passing the argument correctly.
const textColor = 'red';
await page.evaluate((color) => { 
    document.body.style.color = color; 
}, textColor);
```

### 2. Explain the "this" context issue when writing JS hooks (like `beforeEach`, `test`) using Arrow Functions. 
**Answer:**
If you are coming from test runners like Mocha, using Arrow Functions `() => {}` inside a `suite` or `test` is an anti-pattern because Arrow Functions do not have their own `this`. This means you cannot access `this.timeout(5000)` or `this.retries()`.
*Note on Playwright Runner:* Playwright's native test runner `@playwright/test` utilizes **Fixtures** (e.g., `test('name', async ({ page }) => { })`) instead of the `this` context, making Arrow functions entirely safe and standard to use, unlike Mocha. 

### 3. What is Function Currying, and how could it be used in Automation?
**Answer:**
**Function Currying** is evaluating a function with multiple arguments into a sequence of functions, each with a single argument (`f(a, b)` becomes `f(a)(b)`).
In automation, currying is excellent for creating specialized test data generators or user-role abstractions.
```javascript
// Curried Helper
const loginAsRole = (role) => async (page) => {
    console.log(`Logging in as ${role}...`);
    // login logic...
};

// Usage setup
const loginAsAdmin = loginAsRole('Admin');
const loginAsUser = loginAsRole('User');

// Execution in Test
test('Admin Test', async ({ page }) => {
    await loginAsAdmin(page);
});
```

### 4. What happens if you forget the `await` keyword before an asynchronous function call in a Playwright test?
**Answer:**
This is a critical failure point. If you call an `async` function (e.g., `page.click()`) but omit `await`, the function immediately returns a pending `Promise`, and JavaScript moves to the next line without waiting for the click to finish.
This can cause:
1. Operations happening out-of-order.
2. "Target closed" or "Session closed" errors if the test finishes while the Promise is still trying to resolve.
3. Unhandled Promise Rejection exceptions, causing flaky or falsely passing tests.
