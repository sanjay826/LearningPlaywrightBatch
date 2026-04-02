# Loop Interview Questions and Concepts

## 1. What is a Loop?
In programming, a loop is a control structure that allows a block of code to be executed repeatedly as long as a specified condition is true, or for a specific number of times. Loops are used to automate repetitive tasks, making code more efficient, concise, and easier to maintain.

## 2. Types of Loops (Common in JavaScript/Programming)
1.  **`for` loop**: Used when the number of iterations is known in advance. It includes initialization, condition, and increment/decrement within a single line.
2.  **`while` loop**: Used when the number of iterations is not known, and the loop continues as long as a specified condition remains true. The condition is checked *before* executing the loop body.
3.  **`do-while` loop**: Similar to the `while` loop, but the block of code is executed at least once before the condition is tested.
4.  **`for...in` loop (JavaScript)**: Iterates over the enumerable property keys of an object.
5.  **`for...of` loop (JavaScript)**: Iterates over iterable objects (like arrays, strings, maps, sets, etc.), returning the values.

## 3. Commonly Asked Interview Questions Related to Loops

### Q1: What is the difference between a `for` loop and a `while` loop?
**Answer:** 
- A **`for` loop** is generally used when you know exactly how many times you want to iterate (the number of iterations is fixed). 
- A **`while` loop** is used when the exact number of iterations isn't known beforehand, and the loop merely runs until a certain condition becomes false.

**Example:**
```javascript
// for loop (known iterations)
for (let i = 0; i < 5; i++) {
  console.log(i); // runs exactly 5 times
}

// while loop (unknown iterations)
let num = 1;
while (num < 100) {
  num = num * 2; // runs until num exceeds 100
  console.log(num);
}
```

### Q2: What is the difference between `while` and `do-while` loops?
**Answer:** 
- **`while` loop**: This is an entry-controlled loop. The condition is evaluated first; if it's true, the loop body executes. If it's false initially, the loop never runs.
- **`do-while` loop**: This is an exit-controlled loop. The loop body is executed at least once *before* the condition is checked for the next iteration.

**Example:**
```javascript
// while loop
let x = 10;
while (x < 5) {
  console.log("This will never run");
}

// do-while loop
let y = 10;
do {
  console.log("This runs at least once");
} while (y < 5);
```

### Q3: How do you break out of a loop early?
**Answer:** 
You can use the `break` statement. When `break` is encountered, the loop immediately terminates, and control passes to the statement following the loop.

**Example:**
```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Stops the loop entirely when i reaches 5
  }
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}
```

### Q4: What does the `continue` statement do in a loop?
**Answer:** 
The `continue` statement skips the remaining code inside the current iteration of the loop and immediately jumps back to the loop's condition check (or increment step in a `for` loop) to begin the next iteration.

**Example:**
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skips the remainder of the block when i is 2
  }
  console.log(i); // Outputs: 0, 1, 3, 4
}
```

### Q5: What is an infinite loop and how does it occur?
**Answer:** 
An infinite loop is a loop that never terminates on its own because its condition never evaluates to false. It typically occurs due to a logical error, such as:
- Forgetting to change the loop counter variable.
- Providing an always-true condition like `while (true)` without providing a `break` statement inside the loop body.

**Example:**
```javascript
// Infinite loop because 'count' is never updated
let count = 0;
while (count < 5) {
  console.log(count);
  // count++; (Missing, which causes the infinite loop)
}
```

### Q6: Can you explain the difference between `for...in` and `for...of` in JavaScript?
**Answer:** 
- **`for...in`** iterates over the *keys* (enumerable property names) of an object. It should generally not be used to iterate over Arrays because the order of iteration is not guaranteed.
- **`for...of`** iterates over the *values* of iterable objects, such as Arrays, Strings, Sets, and Maps.

**Example:**
```javascript
const colors = ["red", "green", "blue"];

// for...in gets indices (keys)
for (let key in colors) {
  console.log(key); // Outputs: '0', '1', '2'
}

// for...of gets values
for (let value of colors) {
  console.log(value); // Outputs: 'red', 'green', 'blue'
}
```

### Q7: Give an example of a nested loop. Why would you use one?
**Answer:** 
A nested loop is a loop inside another loop. They are commonly used when working with multi-dimensional data structures, like a 2D array or a grid.
```javascript
// Example of a nested loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```
However, one should be cautious with nested loops since they can negatively impact performance (O(n²) time complexity or worse).

---

## 4. Tricky Loop Interview Questions

### Q8: What happens in this `for` loop implementation?
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```
**Answer:** It prints `0, 1, 2` after 1 second. Why is this tricky? If you use `var i = 0` instead of `let i = 0`, it would print `3, 3, 3` because `var` is function-scoped while `let` is block-scoped. Using `let` creates a new binding for `i` in each iteration.

### Q9: Can you write a `for` loop without initialization, condition, and increment?
**Answer:** Yes, but it will be an infinite loop unless manually broken.
```javascript
let i = 0;
for (;;) {
  if (i >= 3) break;
  console.log(i);
  i++;
}
```

---

## 5. How Are Loops Used in Playwright?

Loops are essential in Playwright when you are asserting or manipulating multiple elements on a page.

*   **Iterating Over Multiple Elements:** If a page has 5 different items in a shopping cart and you need to verify their text, you fetch them using `page.locator()` and loop through them.
```javascript
const items = page.locator('.cart-item');
const count = await items.count();
for (let i = 0; i < count; i++) {
  const text = await items.nth(i).textContent();
  console.log(text);
}
```
*   **Waiting For Conditions:** While Playwright has built-in auto-waiting, you sometimes write manual `while` loops to poll a specific API or check a visual state repeatedly until a timeout is reached.
*   **Data-Driven Testing:** Using `for...of` loops over an array of test data lets you parameterize tests dynamically:
```javascript
const testData = ['iPhone', 'MacBook', 'iPad'];
for (const item of testData) {
  test(`Search for ${item}`, async ({ page }) => {
    await page.fill('#search', item);
    // ... complete test
  });
}
```