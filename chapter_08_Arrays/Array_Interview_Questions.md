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

---

## 8. Deep-Dive: `slice` · `concat` · Spread `...` · `join`

> 📌 Based on examples from `71_Array_Slicing.js`

---

### 📌 CATEGORY 9: Slicing, Combining & Joining — Interview Q&A

---

### Q36: What does `slice()` do? Does it mutate the original array?

**Answer:**
`slice(start, end)` returns a **new array** containing elements from `start` index up to (but **not including**) the `end` index.

- It does **NOT** mutate the original array.
- `end` is **exclusive** → actual range is `[start, end - 1]`.
- If `end` is omitted, it slices from `start` to the last element.

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3));  // [2, 3]        → indices 1 and 2 only (not 3)
console.log(arr.slice(2, 4));  // [3, 4]        → indices 2 and 3
console.log(arr.slice(2));     // [3, 4, 5]     → index 2 to end
console.log(arr.slice(0));     // [1, 2, 3, 4, 5] → full copy
console.log(arr);              // [1, 2, 3, 4, 5] → original UNCHANGED ✅
```

---

### Q37: How does negative indexing work in `slice()`?

**Answer:**
Negative indices count from the **end** of the array.
- `-1` = last element, `-2` = second to last, and so on.
- `slice(-2)` → last 2 elements.
- `slice(-5)` on a 5-element array → entire array (same as `slice(0)`).

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(-2));    // [4, 5]           → last 2 elements
console.log(arr.slice(-5));    // [1, 2, 3, 4, 5]  → all (same as slice(0))
console.log(arr.slice(2, 5));  // [3, 4, 5]        → index 2 to end (explicit)
```

> **Rule:** `slice(-n)` is equivalent to `slice(arr.length - n)`.

---

### Q38: What is the difference between `slice()` and `splice()`?

**Answer:**

| Feature | `slice()` | `splice()` |
|---------|-----------|------------|
| Mutates original? | ❌ **No** | ✅ **Yes** |
| Purpose | Extract a portion | Add / remove / replace in place |
| Returns | New array (copy) | Array of removed elements |
| Arguments | `(start, end)` | `(start, deleteCount, ...items)` |

```javascript
let arr = [1, 2, 3, 4, 5];

// slice — does NOT touch original
let part = arr.slice(1, 3);
console.log(part); // [2, 3]
console.log(arr);  // [1, 2, 3, 4, 5] ← untouched

// splice — MODIFIES original
let removed = arr.splice(1, 2);
console.log(removed); // [2, 3]
console.log(arr);     // [1, 4, 5] ← mutated!
```

> **Memory trick:** `sl**i**ce` → output **i**s a new array. `sp**l**ice` → **l**ives in the original.

---

### Q39: How do you use `slice()` to make a shallow copy of an entire array?

**Answer:**
Call `slice()` with no arguments — or `slice(0)`. Both return a full shallow copy.

```javascript
let original = [1, 2, 3, 4, 5];

let copy1 = original.slice();    // most common
let copy2 = original.slice(0);   // explicit start-from-0

copy1.push(99);
console.log(original); // [1, 2, 3, 4, 5] ← safe ✅
console.log(copy1);    // [1, 2, 3, 4, 5, 99]
```

> **"Shallow"** means: if the array contains objects, only the object **references** are copied, not the objects themselves.

---

### Q40: What does `concat()` do? Does it mutate the original array?

**Answer:**
`concat()` merges two or more arrays (or values) and returns a **new array**. It does **NOT** mutate the originals.

```javascript
let a = [1, 2, 3];
let b = [4, 5, 6];

let c = a.concat(b);
console.log(c); // [1, 2, 3, 4, 5, 6]
console.log(a); // [1, 2, 3] ← untouched ✅
console.log(b); // [4, 5, 6] ← untouched ✅
```

You can also concat single values and multiple arrays in one call:
```javascript
let result = [1].concat(2, 3, [4, 5], [6]);
console.log(result); // [1, 2, 3, 4, 5, 6]
```

---

### Q41: What is the Spread Operator (`...`) and how does it replace `concat()`?

**Answer:**
The **spread operator** (`...`) is an ES6 feature that expands an iterable (like an array) into individual elements. It is the **modern alternative** to `concat()` for merging arrays.

```javascript
let a = [1, 2, 3];
let b = [4, 5, 6];

// Old way: concat
let merged1 = a.concat(b);
console.log(merged1); // [1, 2, 3, 4, 5, 6]

// Modern way: spread
let merged2 = [...a, ...b];
console.log(merged2); // [1, 2, 3, 4, 5, 6]
```

> **Advantage of spread:** You can insert elements anywhere inline:
> ```javascript
> let merged3 = [...a, 99, ...b, 100];
> console.log(merged3); // [1, 2, 3, 99, 4, 5, 6, 100]
> ```

---

### Q42: What are the differences between `concat()` and the Spread Operator?

**Answer:**

| Feature | `concat()` | Spread `[...a, ...b]` |
|---------|------------|----------------------|
| ES Version | ES5 | ES6+ |
| Syntax | Method call | Inline literal |
| Flexibility | Fixed — always appends | Insert elements anywhere |
| Works with any iterable? | Partially | ✅ Yes (strings, Sets, Maps) |
| Readability | Verbose | Clean & modern |

```javascript
let a = [1, 2];
let b = [3, 4];

// concat — appends at end only
let r1 = a.concat(b);        // [1, 2, 3, 4]

// spread — can insert anywhere
let r2 = [...a, 99, ...b];   // [1, 2, 99, 3, 4]

// Both create NEW arrays — neither mutates originals
```

> **Interview tip:** Spread also works with strings: `[..."hello"]` → `["h","e","l","l","o"]`

---

### Q43: What does `join()` do? What is the default separator?

**Answer:**
`join(separator)` converts all elements of an array into a **single string**, separated by the given separator.

- Default separator is a **comma (`,`)** if none is provided.
- It does **NOT** mutate the original array.

```javascript
let statuses = ["pass", "fail", "skip"];

console.log(statuses.join(" | ")); // "pass | fail | skip"
console.log(statuses.join(", "));  // "pass, fail, skip"
console.log(statuses.join(""));    // "passfailskip"
console.log(statuses.join());      // "pass,fail,skip"  ← default comma
```

---

### Q44: What is the relationship between `join()` and `split()`?

**Answer:**
They are **exact inverses** of each other:
- `split(separator)` → converts a **string** into an **array**
- `join(separator)` → converts an **array** into a **string**

```javascript
// String → Array → String (round-trip)
let original = "pass | fail | skip";
let arr = original.split(" | ");  // ["pass", "fail", "skip"]
let back = arr.join(" | ");       // "pass | fail | skip"

console.log(arr);  // ["pass", "fail", "skip"]
console.log(back); // "pass | fail | skip"
console.log(original === back); // true ✅
```

> **Playwright use-case:** Grab all dropdown option texts with `allTextContents()` (returns array), then `join(" | ")` to log a clean summary string.

---

### Q45: What happens when `join()` encounters `null` or `undefined` in an array?

**Answer:**
`null` and `undefined` elements are converted to an **empty string** (`""`) by `join()`. They do NOT throw an error.

```javascript
let arr = ["pass", null, "skip", undefined, "fail"];
console.log(arr.join(" | ")); // "pass |  | skip |  | fail"
//                                         ^ empty  ^ empty
```

> This is useful to know in test automation where some values might be missing or optional.

---

### Q46: Tricky — What is the output of `[1, 2, 3].join()` vs `[1, 2, 3].toString()`?

**Answer:**
Both produce the same result in this case: `"1,2,3"`.

```javascript
console.log([1, 2, 3].join());      // "1,2,3"
console.log([1, 2, 3].toString());  // "1,2,3"
```

**But `join()` is more powerful** because you can control the separator:
```javascript
console.log([1, 2, 3].join(" → ")); // "1 → 2 → 3"
// toString() cannot do this
```

---

### Q47: How do you safely sort an array without mutating it using `slice()` and spread?

**Answer:**
Both `slice()` and spread `[...]` create a shallow copy that you can then sort safely.

```javascript
let original = [3, 1, 4, 1, 5, 9];

// Option 1: using slice()
let sorted1 = original.slice().sort((a, b) => a - b);

// Option 2: using spread
let sorted2 = [...original].sort((a, b) => a - b);

console.log(original); // [3, 1, 4, 1, 5, 9] ← safe ✅
console.log(sorted1);  // [1, 1, 3, 4, 5, 9]
console.log(sorted2);  // [1, 1, 3, 4, 5, 9]
```

> This is the **recommended Playwright pattern** for verifying whether UI elements are sorted (see Q2).

---

### Q48: Tricky — What does `[...a]` actually do? Is it the same as `a.slice()`?

**Answer:**
Yes — for plain arrays, `[...a]` and `a.slice()` **both create a shallow copy**. They behave identically for standard arrays.

```javascript
let a = [1, 2, 3];

let copy1 = [...a];
let copy2 = a.slice();

console.log(copy1);         // [1, 2, 3]
console.log(copy2);         // [1, 2, 3]
console.log(copy1 === a);   // false → different reference ✅
console.log(copy2 === a);   // false → different reference ✅
```

**Difference:** Spread works with **any iterable** (strings, Sets, Maps). `slice()` only works on arrays.

```javascript
let chars = [..."hello"];   // ["h", "e", "l", "l", "o"] ✅
// "hello".slice() → returns a string, not an array
```

---

### ✅ Quick Summary: slice · concat · spread · join

| Method | Mutates? | Input | Returns | Use For |
|--------|:--------:|-------|---------|---------|
| `slice(start, end)` | ❌ No | Array | New sub-array | Extract portion / make copy |
| `concat(...arrays)` | ❌ No | Array(s) / values | New merged array | Merge arrays (classic) |
| `[...a, ...b]` spread | ❌ No | Any iterable | New merged array | Merge / copy (modern) |
| `join(separator)` | ❌ No | Array | String | Convert array → string |

> **🔑 Key Rule:** `slice`, `concat`, spread, and `join` are ALL **non-mutating**. They never change the original array.

---

### ➕ More: Edge Cases & Tricky Questions

---

### Q49: What happens when `slice()` indices are out of bounds?

**Answer:**
`slice()` handles out-of-bounds gracefully — it does **NOT** throw an error.
- If `start` ≥ array length → returns an **empty array `[]`**
- If `end` > array length → JavaScript clips it to the array length automatically

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(10));     // []         → start beyond length → empty
console.log(arr.slice(2, 100)); // [3, 4, 5]  → end clipped to arr.length
console.log(arr.slice(-1));     // [5]         → last element only
console.log(arr.slice(3, 2));   // []          → start > end → empty
```

> **Interview trap:** `slice(3, 2)` — since start > end, it quietly returns `[]`, no error.

---

### Q50: Does `concat()` flatten nested arrays?

**Answer:**
**No** — `concat()` only flattens **one level** of nested arrays that are passed as **direct arguments**. It does NOT recursively flatten nested arrays inside the arrays being concatenated.

```javascript
let a = [1, 2];
let nested = [[3, 4], [5, 6]];

// concat flattens the direct argument (one level)
let r1 = a.concat([3, 4]);
console.log(r1); // [1, 2, 3, 4]  ← flattened ✅

// But nested arrays inside are NOT flattened
let r2 = a.concat(nested);
console.log(r2); // [1, 2, [3, 4], [5, 6]]  ← still nested ⚠️

// To fully flatten, use flat()
let r3 = r2.flat();
console.log(r3); // [1, 2, 3, 4, 5, 6] ✅
```

> **Key rule:** `concat([3, 4])` → spreads `3, 4` into the result. But `concat([[3, 4]])` → keeps `[3, 4]` as a sub-array.

---

### Q51: How do you immutably INSERT or REMOVE an element without `splice()` (using `slice` + `concat` or spread)?

**Answer:**
Since `splice()` **mutates** the array, for immutable patterns (React state, functional programming) you can combine `slice()` with `concat()` or spread:

```javascript
let arr = ["a", "b", "c", "d", "e"];

// ── Immutable INSERT at index 2 ──────────────────────────────
// Using slice + concat
let inserted1 = arr.slice(0, 2).concat(["X"], arr.slice(2));
console.log(inserted1); // ["a", "b", "X", "c", "d", "e"]

// Using spread
let inserted2 = [...arr.slice(0, 2), "X", ...arr.slice(2)];
console.log(inserted2); // ["a", "b", "X", "c", "d", "e"]

// ── Immutable REMOVE at index 2 ──────────────────────────────
let removed = [...arr.slice(0, 2), ...arr.slice(3)];
console.log(removed);  // ["a", "b", "d", "e"]

console.log(arr); // ["a", "b", "c", "d", "e"] ← original SAFE ✅
```

> **Playwright / React use-case:** Removing a test step from a steps array without touching the original configuration.

---

### Q52: Can you chain `slice()` and `concat()` together?

**Answer:**
Yes — since both return **new arrays**, they can be chained freely.

```javascript
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];

// Take last 2 of 'a', then first 3 of 'b', merge them
let result = a.slice(-2).concat(b.slice(0, 3));
console.log(result); // [4, 5, 6, 7, 8]
```

> This pattern is useful when working with paginated data or combining segments of test data sets.

---

### Q53: How do you use spread to remove duplicates from a combined array?

**Answer:**
Combine the spread operator with `Set` — a `Set` automatically removes duplicates, then spread it back into an array:

```javascript
let a = [1, 2, 3];
let b = [2, 3, 4, 5];

// Merge both arrays, then remove duplicates
let unique = [...new Set([...a, ...b])];
console.log(unique); // [1, 2, 3, 4, 5]
```

> This is the **cleanest one-liner** for merging and deduplicating arrays in modern JavaScript.

---

### Q54: How do you use `slice()` + `join()` to get a readable subset of an array as a string?

**Answer:**
You can chain `slice()` and `join()` to extract a portion and display it as a string — very useful for logging in test reports:

```javascript
let testResults = ["pass", "pass", "fail", "skip", "pass", "fail"];

// Show only the first 3 results as a readable string
let summary = testResults.slice(0, 3).join(" → ");
console.log(summary); // "pass → pass → fail"

// Show only failed results
let failedOnly = testResults.filter(r => r === "fail").join(", ");
console.log(failedOnly); // "fail, fail"
```

> **Playwright use-case:** After collecting all row statuses from a table, `slice` the first page worth and `join` them into a log message.

---

### Q55: Playwright-Specific — How do you combine multiple locator text arrays into one clean string report?

**Answer:**
A common automation task is collecting texts from multiple UI sections and combining them:

```javascript
// Simulating texts from two different sections of the page
const menuItems = ["Home", "About", "Contact"];
const footerLinks = ["Privacy", "Terms", "Help"];

// Combine all into one array using spread, then join for a report
const allLinks = [...menuItems, ...footerLinks];
const report = allLinks.join(" | ");

console.log(report);
// "Home | About | Contact | Privacy | Terms | Help"

// In real Playwright:
// const menuTexts   = await page.locator('.menu-item').allTextContents();
// const footerTexts = await page.locator('.footer-link').allTextContents();
// const fullReport  = [...menuTexts, ...footerTexts].join(" | ");
```

> This pattern is great for **generating assertion messages** or **logging full page navigation structure** in test reports.

---

### 📌 CATEGORY 10: Array Destructuring, Copying & Loops — Interview Gotchas

---

### Q56: Why should you NOT use the `for...in` loop to iterate over an array?

**Answer:**
`for...in` is meant for iterating over the properties of plain objects, not arrays. Using it on arrays is dangerous because:
1. **Iterates over indices as STRINGS:** It yields `"0"`, `"1"`, `"2"`, not numbers, which can cause math bugs (e.g., `"0" + 1` = `"01"`).
2. **Iterates over prototype properties:** If the array's prototype was modified by an external library, `for...in` will iterate over those extra properties too.
3. **No guaranteed order:** The iteration order is not strictly guaranteed.

**Always use:** `for...of` (for values), a classic `for` loop, or `forEach()` for iterating through arrays.

---

### Q57: Look at this code. What will be the output and why? (Reference vs Copy)
```javascript
let arr = [1, 2, 3];
let copy = arr;
copy.push(4);
console.log(arr.length);
```

**Answer:**
The output is **`4`**.
*Why?* Arrays in JavaScript are objects. `let copy = arr;` does **NOT** create a new array. It only copies the **reference** (memory address) to the array. Both `arr` and `copy` point to the exact same array in memory. Modifying `copy` also modifies `arr`.

---

### Q58: What are the best ways to create a "Shallow Copy" of an array?

**Answer:**
A **shallow copy** creates a brand new array, but if it contains nested objects/arrays, the references within are still shared.
To safely create a new array (shallow copy), use one of these methods:

1. **Spread Operator (`...`)** — (Modern & Preferred)
   ```javascript
   let copy1 = [...arr];
   ```
2. **`slice()` method**
   ```javascript
   let copy2 = arr.slice();
   ```
3. **`Array.from()`**
   ```javascript
   let copy3 = Array.from(arr);
   ```
4. **`concat()` method**
   ```javascript
   let copy4 = [].concat(arr);
   ```

---

### Q59: How do you extract specific elements from an array using Destructuring, and what is the Rest operator?

**Answer:**
**Array Destructuring** allows you to unpack values from arrays into distinct variables based on their position.
```javascript
let statuses = ["pass", "fail", "skip"];
let [first, second] = statuses;

console.log(first);  // "pass"
console.log(second); // "fail"
```

The **Rest operator (`...`)** is used inside a destructuring pattern to collect all remaining elements into a new array. It must always be the **last** element in the pattern.
```javascript
let scores = [10, 20, 30, 40, 50];
let [a, b, ...remaining] = scores;

console.log(a);         // 10
console.log(b);         // 20
console.log(remaining); // [30, 40, 50]
```

---

### ✅ Final Master Summary: Slicing & Combining

| Scenario | Best Tool | Mutates? |
|----------|-----------|:--------:|
| Extract part of array | `slice(start, end)` | ❌ No |
| Get last N elements | `slice(-N)` | ❌ No |
| Make a full copy | `slice()` or `[...arr]` | ❌ No |
| Merge two arrays (classic) | `concat()` | ❌ No |
| Merge two arrays (modern) | `[...a, ...b]` spread | ❌ No |
| Insert at position (immutable) | `[...slice, item, ...slice]` | ❌ No |
| Remove at position (immutable) | `[...slice(0,i), ...slice(i+1)]` | ❌ No |
| Merge + deduplicate | `[...new Set([...a, ...b])]` | ❌ No |
| Array → string | `join(separator)` | ❌ No |
| Subset → string | `slice(start, end).join(sep)` | ❌ No |