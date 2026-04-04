# JavaScript Arrays and Interview Questions

## 1. What is an Array in JavaScript and How to Create It?

An **Array** in JavaScript is a special type of object used for storing multiple values in a single variable. Unlike arrays in some strongly-typed languages (like C or Java), JavaScript arrays can hold elements of mixed data types (e.g., numbers, strings, objects, and even other arrays) and dynamically resize themselves.

### How to Create an Array

There are two primary ways to create an array in JavaScript:

**1. Array Literal (Most common and recommended):**
```javascript
let fruits = ["Apple", "Banana", "Mango"];
let mixedArray = [1, "Hello", true, null, { name: "John" }];
```

**2. The `Array()` Constructor:**
```javascript
let cars = new Array("Volvo", "BMW", "Ford");

// Watch out: If you pass a single number to the constructor, it creates an empty array of that length!
let emptySlots = new Array(5); // Creates an array with 5 empty slots, NOT an array with [5]
```

## 2. Types of Arrays in JavaScript

Technically, JavaScript only has one type of Array object. However, logically, developers categorize how they use them:
1.  **1D Arrays:** Standard flat list of items (e.g., `[1, 2, 3]`).
2.  **Multi-dimensional Arrays (Nested Arrays):** Arrays within arrays, used for matrices or grids (e.g., `[[1, 2], [3, 4]]`).
3.  **Typed Arrays:** Introduced in ES6 for handling raw binary data (e.g., `Int8Array`, `Float32Array`). Used for WebGL, canvas data, or WebAssembly where strict performance and memory allocation are needed.

## 3. Differences Between Array and Other Data Structures

### Array vs. List
*   **In JavaScript:** Logically, JavaScript Arrays *act* exactly like Lists in other languages (they are dynamically sized and allow mixed types). 
*   **In Traditional CS:** Traditional Arrays have a fixed size and occupy contiguous memory blocks. Traditional Lists (like Linked Lists) are scattered in memory and dynamically sized. JavaScript arrays are technically implemented more like dynamic lists/hash maps under the hood.

### Array vs. Set
*   **Array:** Can contain duplicate values. Elements are ordered and accessed by a numeric index (0, 1, 2).
*   **Set:** A collection of **unique** values. Duplicates are strictly not allowed. There is no index-based access (you can't do `mySet[0]`).

### Array vs. Map
*   **Array:** Stores ordered values accessed by an integer index.
*   **Map:** Stores key-value pairs where the key can be *any* data type (objects, functions, strings). Maps maintain insertion order like Arrays, but you access data via keys, not index numbers.

### Array vs. Object
*   **Array:** Uses numbered (numeric) indexes to access data. Best used for ordered lists of data.
*   **Object:** Uses named (string/symbol) keys to access data. Best used to represent a single entity with characteristics (e.g., `{ firstName: 'John', lastName: 'Doe' }`).
*   *(Note: Arrays are actually a special type of Object in JS, where the keys are just '0', '1', '2', etc., and it has a special `length` property).*

### Array vs. Tuple
*   **Array:** Dynamically sized. You can add or remove elements freely. Usually used to store elements of the same category.
*   **Tuple:** (Found in TypeScript/Python, not native JS). A fixed-length array where each specific index has a strictly defined data type. Useful for grouping related data of different types (e.g., `[string, number]` to represent a coordinate).

## 4. How Are Arrays Used in Playwright?

Arrays are the backbone of bulk operations and data-driven testing in Playwright.

**1. Data-Driven Testing:**
You use an array of objects/strings to run the same test multiple times with different inputs.
```javascript
const userRoles = ["Admin", "Editor", "Viewer"];

for (const role of userRoles) {
    test(`Login test for ${role}`, async ({ page }) => {
        await page.goto(`/login?role=${role}`);
        // perform login flow...
    });
}
```

**2. Handling Multiple Elements (Array of Locators):**
When fetching a list of elements from the DOM (like dropdown options or table rows), Playwright handles them in array-like structures.
```javascript
const rows = await page.locator('table tr').all(); // .all() returns a JavaScript Array of Locators
for (let row of rows) {
    const text = await row.textContent();
    console.log("Row data:", text);
}
```

**3. Array Methods in Assertions:**
Extensively using methods like `.map()` or `.filter()` to evaluate UI state.
```javascript
// Get all text contents into an array and assert
const itemTexts = await page.locator('.cart-item').allTextContents(); // Returns a string Array
expect(itemTexts).toContain("Laptop"); // Array assertion
```

## 5. Tricky Interview Questions (Playwright / Array Focus)

### Q1: What gets logged in this Playwright snippet and why?
```javascript
const items = page.locator('.items');
console.log(typeof items); 
console.log(Array.isArray(items));
```
**Answer:**
`typeof items` will log `object`. 
`Array.isArray(items)` will log `false`.
*Why?* The `locator()` method does not return a JavaScript array. It returns a Playwright `Locator` object. Even if the locator points to multiple DOM elements, it's a single object managing them. To get an actual JavaScript array of individual locators, you must call `await items.all()`.

### Q2: How do you verify that an array of elements returned by the UI is sorted alphabetically using Playwright?
**Answer:**
This is a common task. You pull the text into an array, copy it, sort the copy, and compare the two arrays.
```javascript
const originalTexts = await page.locator('.product-name').allTextContents();
// Create a shallow copy and sort it
const sortedTexts = [...originalTexts].sort(); 

// In Jest/Playwright, expect().toEqual does a deep array comparison
expect(originalTexts).toEqual(sortedTexts);
```

### Q3: What happens if you run `[1, 2, 10].sort()` in standard JavaScript without a comparator?
**Answer:** It returns `[1, 10, 2]`. 
*Why?* Because by default, the JavaScript `sort()` method converts all elements to strings and compares their UTF-16 character codes. The string `"10"` comes before the string `"2"`. To sort numbers correctly, you need a comparator: `[1, 2, 10].sort((a,b) => a - b)`.

### Q4: You want to click all 'Delete' buttons on a page simultaneously using `Promise.all()`. How do you pass the locators?
```javascript
const deleteBtns = await page.locator('.delete-btn').all(); // returns Array of Locators
// Map the array of locators into an array of click promises, then wait for all
await Promise.all(deleteBtns.map(btn => btn.click()));
```
**Tricky point:** While this executes clicks simultaneously (which is faster), it can lead to flaky tests if the DOM shifts after the first click. It's often safer to use a standard `for...of` loop to await each click sequentially in UI automation.

### Q5: What is the difference between `pop()` and `shift()` methods in an array?
**Answer:**
*   **`pop()`:** Removes the **last** element from an array and returns that element. It modifies the original array and changes its length. It is generally faster than `shift()` because it doesn't require re-indexing the remaining elements.
*   **`shift()`:** Removes the **first** element from an array and returns that element. It also modifies the original array and changes its length. However, it requires all subsequent elements to be shifted down to a lower index, making it potentially slower for very large arrays.

### Q6: Can you explain how the `length` property works in JavaScript arrays? Can it be manually modified?
**Answer:**
The `length` property returns the number of elements in an array. 
Yes, it can be manually modified. 
*   If you set the `length` to a value **smaller** than its current length, the array is truncated, and elements at the end are permanently deleted. 
*   If you set it to a **larger** value, the array expands, and the new slots are filled with empty items (which evaluate to `undefined` when accessed).

---

## 6. Array Methods — Complete Interview Q&A Guide

> JavaScript arrays have a rich set of built-in methods. These are organized by category below.

---

### 📌 CATEGORY 1: Adding & Removing Elements

---

### Q7: What is the difference between `push()` and `unshift()`?

**Answer:**
| Method | Action | Where | Returns |
|--------|--------|--------|---------|
| `push()` | Adds one or more elements | **End** of array | New `length` |
| `unshift()` | Adds one or more elements | **Beginning** of array | New `length` |

```javascript
let arr = [2, 3];
arr.push(4);       // [2, 3, 4]
arr.unshift(1);    // [1, 2, 3, 4]
```
> **Note:** `unshift()` is slower for large arrays because all existing elements must be re-indexed.

---

### Q8: What does `splice()` do? How is it different from `slice()`?

**Answer:**
*   **`splice(start, deleteCount, ...items)`** — **Mutates** the original array. It can remove, replace, or insert elements at any position. It returns an array of the removed elements.
*   **`slice(start, end)`** — **Does NOT mutate** the original array. It returns a **shallow copy** of a portion of the array from `start` up to (but not including) `end`.

```javascript
// splice — modifies original
let colors = ["red", "green", "blue", "yellow"];
let removed = colors.splice(1, 2, "purple"); // removes 2 from index 1, inserts "purple"
console.log(colors);  // ["red", "purple", "yellow"]
console.log(removed); // ["green", "blue"]

// slice — original untouched
let fruits = ["apple", "banana", "cherry", "date"];
let picked = fruits.slice(1, 3);
console.log(picked);  // ["banana", "cherry"]
console.log(fruits);  // ["apple", "banana", "cherry", "date"] ← unchanged
```

---

### Q9: How do you remove duplicates from an array?

**Answer:** The most elegant modern approach uses the `Set` object combined with the spread operator:
```javascript
let nums = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4, 5]
```
Alternatively, using `filter()` with `indexOf()`:
```javascript
let unique = nums.filter((val, idx) => nums.indexOf(val) === idx);
```

---

### 📌 CATEGORY 2: Searching & Finding Elements

---

### Q10: What is the difference between `indexOf()` and `findIndex()`?

**Answer:**
| Method | Argument | Finds | Returns |
|--------|----------|-------|---------|
| `indexOf(value)` | A **value** | First exact match | Index or `-1` |
| `findIndex(callback)` | A **function** | First element matching a condition | Index or `-1` |

```javascript
let scores = [10, 25, 30, 25, 50];

// indexOf — finds exact value
console.log(scores.indexOf(25));  // 1

// findIndex — finds by condition
console.log(scores.findIndex(s => s > 20)); // 1 (first element > 20)
```
> **Key difference:** `indexOf()` uses strict equality (`===`), so it cannot find objects by their content. `findIndex()` uses a callback, making it far more flexible.

---

### Q11: What is the difference between `find()` and `filter()`?

**Answer:**
| Method | Returns | Behavior |
|--------|---------|----------|
| `find()` | The **first matching element** (or `undefined`) | Stops after first match |
| `filter()` | A **new array** of all matching elements | Iterates entire array |

```javascript
let users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

let firstActive = users.find(u => u.active);
console.log(firstActive); // { id: 1, name: "Alice", active: true }

let allActive = users.filter(u => u.active);
console.log(allActive); // [{ id: 1, ... }, { id: 3, ... }]
```

---

### Q12: What is the difference between `includes()` and `some()`?

**Answer:**
*   **`includes(value)`** — Checks if a specific **value** exists in the array. Returns `true` or `false`. Uses `===` comparison (with special handling for `NaN`).
*   **`some(callback)`** — Checks if **at least one element** satisfies a given **condition**. Returns `true` or `false`.

```javascript
let ages = [12, 18, 25, 30];

console.log(ages.includes(18));        // true
console.log(ages.some(age => age >= 18)); // true — at least one is adult
console.log(ages.every(age => age >= 18)); // false — not ALL are adults
```

---

### Q13: What does `lastIndexOf()` do?

**Answer:** `lastIndexOf(value, fromIndex)` searches the array **from right to left** and returns the index of the **last occurrence** of the value, or `-1` if not found.
```javascript
let items = ["a", "b", "c", "b", "a"];
console.log(items.lastIndexOf("b")); // 3
console.log(items.lastIndexOf("b", 2)); // 1 — searches only up to index 2
```

---

### 📌 CATEGORY 3: Transformation Methods

---

### Q14: What does `map()` do? Does it mutate the original array?

**Answer:** `map()` creates a **new array** by calling a provided function on every element in the original array. It does **NOT** mutate the original array.

```javascript
let prices = [100, 200, 300];
let discounted = prices.map(price => price * 0.9);
console.log(discounted); // [90, 180, 270]
console.log(prices);     // [100, 200, 300] ← original unchanged
```
> **Playwright use-case:** `await page.locator('li').allTextContents()` returns a string array, and you can use `.map()` to transform it (e.g., `.trim()` each item).

---

### Q15: How does `reduce()` work? Explain with an example.

**Answer:** `reduce(callback, initialValue)` executes a **reducer function** on each element, accumulating a single output value (could be a number, string, object, or array). The callback receives `(accumulator, currentValue, currentIndex, array)`.

```javascript
// Sum all numbers
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Count occurrences of each item
let fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, cherry: 1 }
```
> **Tricky:** If no `initialValue` is provided, `reduce()` uses the first array element as the initial accumulator and starts iterating from the second element. Calling `reduce()` on an empty array without an `initialValue` throws a `TypeError`.

---

### Q16: What is `reduceRight()` and when would you use it?

**Answer:** `reduceRight()` works exactly like `reduce()` but iterates the array from **right to left** (from the last element to the first). Useful for processing items in reverse order or for right-to-left function composition.
```javascript
let words = ["world", "hello"];
let sentence = words.reduceRight((acc, word) => acc + " " + word, "");
console.log(sentence.trim()); // "hello world"
```

---

### Q17: What is `flatMap()` and how does it differ from `map()`?

**Answer:** `flatMap()` is equivalent to calling `map()` followed by `flat(1)`. It maps each element and then **flattens the result by one level**. It's more efficient than chaining the two methods separately.

```javascript
let sentences = ["Hello World", "Foo Bar"];

// map() returns nested arrays
let words1 = sentences.map(s => s.split(" "));
console.log(words1); // [["Hello", "World"], ["Foo", "Bar"]]

// flatMap() maps then flattens one level
let words2 = sentences.flatMap(s => s.split(" "));
console.log(words2); // ["Hello", "World", "Foo", "Bar"]
```

---

### Q18: What does `flat()` do?

**Answer:** `flat(depth)` creates a new array with all sub-array elements concatenated into it recursively up to the specified `depth`. The default depth is `1`.

```javascript
let nested = [1, [2, 3], [4, [5, 6]]];

console.log(nested.flat());    // [1, 2, 3, 4, [5, 6]] — depth 1
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6]   — depth 2
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6] — fully flatten
```

---

### 📌 CATEGORY 4: Sorting & Ordering

---

### Q19: Why does the default `sort()` give unexpected results with numbers? How do you fix it?

**Answer:** By default, `sort()` converts elements to strings and compares their **UTF-16 code values**. This means `"10"` sorts before `"9"` because `"1"` < `"9"` character-by-character.

**Fix:** Always provide a comparator function for numbers.
```javascript
let nums = [40, 1, 5, 200, 10];

// BAD: string comparison
console.log(nums.sort()); // [1, 10, 200, 40, 5]

// GOOD: numeric comparison
console.log(nums.sort((a, b) => a - b)); // [1, 5, 10, 40, 200] — ascending
console.log(nums.sort((a, b) => b - a)); // [200, 40, 10, 5, 1]  — descending
```

---

### Q20: Does `sort()` mutate the original array?

**Answer:** **Yes**, `sort()` mutates the original array **in place** and also returns a reference to the same (now sorted) array. If you need to keep the original order, sort a **copy** first.
```javascript
let original = [3, 1, 2];
// Safe approach: sort a shallow copy
let sorted = [...original].sort((a, b) => a - b);
console.log(original); // [3, 1, 2] ← untouched
console.log(sorted);   // [1, 2, 3]
```

---

### Q21: What does `reverse()` do? Does it mutate the original array?

**Answer:** `reverse()` reverses the elements of the original array **in place** (mutates it). It also returns a reference to the reversed array.
```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
```
> **ES2023 Non-mutating version:** `Array.prototype.toReversed()` returns a new reversed array without modifying the original.

---

### 📌 CATEGORY 5: Iteration Methods

---

### Q22: What is the difference between `forEach()` and `map()`?

**Answer:**
| Feature | `forEach()` | `map()` |
|---------|-------------|---------|
| Return Value | `undefined` | A **new array** |
| Purpose | Side effects (logging, DOM updates) | Transforming data |
| Can be chained? | ❌ No | ✅ Yes |

```javascript
let nums = [1, 2, 3];

// forEach — no return value
nums.forEach(n => console.log(n * 2)); // logs 2, 4, 6

// map — creates a new array
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```
> **Rule of thumb:** If you need to transform data into a new array → use `map()`. If you just want to do something with each element and don't need a result → use `forEach()`.

---

### Q23: Can you break out of a `forEach()` loop early?

**Answer:** **No**, you cannot use `break` or `return` to exit a `forEach()` loop early. The `return` statement inside the callback only exits the current iteration's callback, not the entire loop.

Use a standard `for...of` loop or `for` loop if you need to break early. Alternatively, `some()` or `every()` can be cleverly used as they stop as soon as the condition is met/failed.

```javascript
let nums = [1, 2, 3, 4, 5];

// This does NOT stop the loop at 3
nums.forEach(n => {
  if (n === 3) return; // only skips this iteration
  console.log(n); // logs 1, 2, 4, 5
});

// Use for...of to break early
for (let n of nums) {
  if (n === 3) break;
  console.log(n); // logs 1, 2
}
```

---

### Q24: How do `every()` and `some()` short-circuit?

**Answer:**
*   **`every(callback)`** — Returns `true` if the callback returns `true` for **all** elements. It **stops (short-circuits)** and returns `false` the moment it finds an element where the callback returns `false`.
*   **`some(callback)`** — Returns `true` if the callback returns `true` for **at least one** element. It **stops (short-circuits)** and returns `true` the moment it finds a matching element.

```javascript
let ages = [22, 25, 17, 30];

// every stops at 17 (returns false immediately)
let allAdults = ages.every(age => age >= 18); // false

// some stops at 22 (returns true immediately)
let hasAdult = ages.some(age => age >= 18);   // true
```

---

### Q25: What are the `entries()`, `keys()`, and `values()` methods?

**Answer:** These three methods return **Array Iterator** objects:
*   **`keys()`** — Iterates over the **indices** (0, 1, 2...).
*   **`values()`** — Iterates over the **values** of each element.
*   **`entries()`** — Iterates over **[index, value]** pairs (most useful for getting both at once).

```javascript
let fruits = ["apple", "banana", "cherry"];

for (let key of fruits.keys()) {
  console.log(key); // 0, 1, 2
}

for (let [index, value] of fruits.entries()) {
  console.log(`${index}: ${value}`); // "0: apple", "1: banana", "2: cherry"
}
```
> **Playwright use-case:** Use `.entries()` in a `for...of` loop when you need both the index and value while iterating locator arrays.

---

### 📌 CATEGORY 6: Joining & Combining Arrays

---

### Q26: What is the difference between `concat()` and the spread operator for merging arrays?

**Answer:** Both create a new merged array without mutating the originals.
*   **`concat()`** — A method for joining arrays. It also accepts non-array values.
*   **Spread Operator (`...`)** — More modern and flexible ES6 syntax. Can merge arrays inline within literals and works with any iterable.

```javascript
let a = [1, 2];
let b = [3, 4];

// concat
let merged1 = a.concat(b, [5, 6]);
console.log(merged1); // [1, 2, 3, 4, 5, 6]

// spread
let merged2 = [...a, ...b, 5, 6];
console.log(merged2); // [1, 2, 3, 4, 5, 6]
```

---

### Q27: What does `join()` do? What is the default separator?

**Answer:** `join(separator)` creates and returns a new **string** by joining all elements of an array with a specified separator. The default separator is a **comma (`,`)**.

```javascript
let words = ["Hello", "World", "from", "JS"];

console.log(words.join());      // "Hello,World,from,JS"
console.log(words.join(" "));   // "Hello World from JS"
console.log(words.join(" - ")); // "Hello - World - from - JS"
console.log(words.join(""));    // "HelloWorldfromJS"
```
> **Note:** `join()` is the inverse of `String.prototype.split()`. `"a,b,c".split(",")` → `["a","b","c"]` and `["a","b","c"].join(",")` → `"a,b,c"`.

---

### 📌 CATEGORY 7: Static / Utility Methods

---

### Q28: What is `Array.isArray()` and why is it preferred over `typeof`?

**Answer:** `Array.isArray(value)` returns `true` if the value is an Array, and `false` otherwise. It's specifically designed to detect arrays and is the **most reliable** method.

`typeof` is unreliable for arrays because arrays are objects in JavaScript:
```javascript
let arr = [1, 2, 3];
console.log(typeof arr);          // "object" ← not helpful!
console.log(Array.isArray(arr));  // true ← correct!

// Also handles edge cases across different frames/windows
console.log(Array.isArray(null));   // false
console.log(Array.isArray("abc")); // false
```

---

### Q29: What does `Array.from()` do?

**Answer:** `Array.from(iterable, mapFn)` creates a **new array instance** from an array-like or iterable object. It accepts an optional mapping function as a second argument.

```javascript
// From a string
console.log(Array.from("hello")); // ["h", "e", "l", "l", "o"]

// From a Set
console.log(Array.from(new Set([1, 2, 2, 3]))); // [1, 2, 3]

// Creating a range of numbers
let range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range); // [1, 2, 3, 4, 5]

// In Playwright: NodeList from DOM querySelectorAll is not an array
// Array.from() converts it to a real array
```

---

### Q30: What does `Array.of()` do and how is it different from `new Array()`?

**Answer:** `Array.of()` creates a new Array instance from the arguments passed to it. It resolves the confusing behavior of the `Array()` constructor:

```javascript
// new Array() with a single number creates sparse array!
let a = new Array(3);
console.log(a);        // [ <3 empty items> ]
console.log(a.length); // 3

// Array.of() always creates an array with those exact elements
let b = Array.of(3);
console.log(b);        // [3]
console.log(b.length); // 1

// Consistent with multiple arguments
let c = Array.of(1, 2, 3);
console.log(c); // [1, 2, 3]
```

---

### Q31: What is `Array.prototype.fill()`?

**Answer:** `fill(value, start, end)` fills all elements in an array between `start` and `end` (not inclusive) with a static value. It **mutates** the original array.

```javascript
let arr = [1, 2, 3, 4, 5];

arr.fill(0, 2, 4); // fill with 0 from index 2 to 3
console.log(arr); // [1, 2, 0, 0, 5]

// Initialize an array of 5 zeros
let zeros = new Array(5).fill(0);
console.log(zeros); // [0, 0, 0, 0, 0]
```

---

### Q32: What does `copyWithin()` do?

**Answer:** `copyWithin(target, start, end)` copies a portion of the array to another location within the **same array** without changing its length. It **mutates** the original array.

```javascript
let arr = [1, 2, 3, 4, 5];

// Copy elements from index 3 onwards to position 0
arr.copyWithin(0, 3);
console.log(arr); // [4, 5, 3, 4, 5]
```
> **Note:** This is a low-level method primarily used for performance-sensitive code manipulating typed arrays and buffers.

---

### 📌 CATEGORY 8: ES2023+ Modern Array Methods

---

### Q33: What are `toSorted()`, `toReversed()`, and `toSpliced()`?

**Answer:** These are **non-mutating** alternatives (introduced in ES2023) to `sort()`, `reverse()`, and `splice()`. They always return a **new array** and leave the original unchanged.

```javascript
let arr = [3, 1, 2];

// Non-mutating sort
let sorted = arr.toSorted((a, b) => a - b);
console.log(arr);    // [3, 1, 2] ← original safe
console.log(sorted); // [1, 2, 3]

// Non-mutating reverse
let reversed = arr.toReversed();
console.log(arr);      // [3, 1, 2] ← original safe
console.log(reversed); // [2, 1, 3]

// Non-mutating splice
let spliced = arr.toSpliced(1, 1, 99);
console.log(arr);     // [3, 1, 2] ← original safe
console.log(spliced); // [3, 99, 2]
```

---

### Q34: What is `Array.prototype.with()`? (ES2023)

**Answer:** `with(index, value)` creates a new array with the element at the given index replaced with the specified value. It is the **non-mutating** version of direct index assignment.

```javascript
let colors = ["red", "green", "blue"];

let updated = colors.with(1, "yellow");
console.log(colors);  // ["red", "green", "blue"] ← original safe
console.log(updated); // ["red", "yellow", "blue"]
```

---

### Q35: What does `Array.prototype.at()` do?

**Answer:** `at(index)` returns the element at the given index. It supports **negative indexing**, where `-1` refers to the last element, `-2` to the second-to-last, etc. This is especially useful for accessing elements from the end without calculating `arr.length - 1`.

```javascript
let fruits = ["apple", "banana", "cherry", "date"];

console.log(fruits.at(0));   // "apple"
console.log(fruits.at(-1));  // "date"    ← last element
console.log(fruits.at(-2));  // "cherry"  ← second to last

// Old way (verbose)
console.log(fruits[fruits.length - 1]); // "date"
```

---

## 7. Quick Reference Cheat Sheet

> Use this section as a fast lookup. Methods are grouped by what they **do**, so you can find the right tool quickly.

---

### ➕ Add & Remove Elements

| Method | Mutates? | Where | Returns |
|--------|:--------:|-------|---------|
| `push(...items)` | ✅ Yes | **End** | New `length` |
| `pop()` | ✅ Yes | **End** | Removed element |
| `unshift(...items)` | ✅ Yes | **Beginning** | New `length` |
| `shift()` | ✅ Yes | **Beginning** | Removed element |
| `splice(start, del, ...items)` | ✅ Yes | **Any position** | Array of removed items |
| `toSpliced(start, del, ...items)` ⭐ ES2023 | ❌ No | Any position | New spliced array |

> **Memory tip:** `push/pop` → Back of the queue. `unshift/shift` → Front of the queue.

---

### 🔍 Searching & Finding

| Method | Argument | Returns | Stops Early? |
|--------|----------|---------|:------------:|
| `indexOf(value)` | Value | Index or `-1` | ✅ Yes |
| `lastIndexOf(value)` | Value | Last index or `-1` | ✅ Yes |
| `includes(value)` | Value | `true` / `false` | ✅ Yes |
| `find(fn)` | Callback | First match or `undefined` | ✅ Yes |
| `findIndex(fn)` | Callback | Index or `-1` | ✅ Yes |
| `some(fn)` | Callback | `true` if ≥1 match | ✅ Yes |
| `every(fn)` | Callback | `true` if all match | ✅ Yes |
| `filter(fn)` | Callback | New array of all matches | ❌ No |

> **Key difference:** `indexOf` / `includes` → exact value match. `find` / `filter` / `some` → condition-based.

---

### 🔄 Transforming Data

| Method | Mutates? | Returns |
|--------|:--------:|---------|
| `map(fn)` | ❌ No | New array (1-to-1 transform) |
| `filter(fn)` | ❌ No | New array (subset) |
| `reduce(fn, init)` | ❌ No | Single accumulated value |
| `reduceRight(fn, init)` | ❌ No | Single value (right-to-left) |
| `flat(depth)` | ❌ No | New flattened array |
| `flatMap(fn)` | ❌ No | New mapped + flattened array |

> `flatMap(fn)` = `map(fn)` + `flat(1)` in a single efficient step.

---

### 🔃 Sorting & Ordering

| Method | Mutates? | Returns |
|--------|:--------:|---------|
| `sort(compareFn)` | ✅ Yes | Same array (sorted in place) |
| `reverse()` | ✅ Yes | Same array (reversed in place) |
| `toSorted(compareFn)` ⭐ ES2023 | ❌ No | New sorted array |
| `toReversed()` ⭐ ES2023 | ❌ No | New reversed array |

> ⚠️ Always use a comparator for numbers: `arr.sort((a, b) => a - b)`  
> Safe pattern: `[...arr].sort(...)` to avoid mutating the original.

---

### 🔁 Iteration Methods

| Method | Returns | Use When |
|--------|---------|----------|
| `forEach(fn)` | `undefined` | Side effects only (logging, DOM updates) |
| `keys()` | Iterator of indices | You need just the index numbers |
| `values()` | Iterator of values | You need just the values |
| `entries()` | Iterator of `[index, value]` | You need both index and value |

> ❌ You **cannot** `break` out of `forEach()`. Use `for...of` if you need early exit.

---

### 🔗 Joining & Combining

| Method | Mutates? | Returns |
|--------|:--------:|---------|
| `concat(...arrays)` | ❌ No | New merged array |
| `join(separator)` | ❌ No | A single string |
| Spread `[...a, ...b]` | ❌ No | New merged array (modern syntax) |

> `join()` ↔ `split()` are inverses of each other.  
> `"a,b,c".split(",")` → `["a","b","c"]` | `["a","b","c"].join(",")` → `"a,b,c"`

---

### 🎯 Accessing Elements

| Method | Mutates? | Returns |
|--------|:--------:|---------|
| `at(index)` | ❌ No | Element or `undefined` |
| `with(index, value)` ⭐ ES2023 | ❌ No | New array with replaced item |
| `slice(start, end)` | ❌ No | New shallow-copy sub-array |

> `at(-1)` = last element. Much cleaner than `arr[arr.length - 1]`.

---

### 🛠️ Utility & In-Place Modification

| Method | Mutates? | Returns |
|--------|:--------:|---------|
| `fill(value, start, end)` | ✅ Yes | Modified array |
| `copyWithin(target, start, end)` | ✅ Yes | Modified array |

---

### 📦 Static Methods (`Array.*`)

| Method | Returns | Use When |
|--------|---------|----------|
| `Array.isArray(value)` | `true` / `false` | Reliably check if something is an array |
| `Array.from(iterable, mapFn?)` | New array | Convert strings, Sets, Maps, NodeLists |
| `Array.of(...values)` | New array | Create array without `new Array()` confusion |

---

### 🚦 Mutation Quick-Glance Summary

| ✅ Mutates Original | ❌ Does NOT Mutate |
|---------------------|-------------------|
| `push`, `pop` | `map`, `filter`, `reduce` |
| `unshift`, `shift` | `slice`, `concat`, `flat`, `flatMap` |
| `splice` | `find`, `findIndex`, `indexOf` |
| `sort`, `reverse` | `includes`, `some`, `every` |
| `fill`, `copyWithin` | `forEach`, `join` |
| | `toSorted`, `toReversed`, `toSpliced`, `with` ⭐ |

> ⭐ = ES2023 — the **safe, non-mutating** modern alternatives.