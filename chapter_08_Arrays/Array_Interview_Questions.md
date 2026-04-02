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
