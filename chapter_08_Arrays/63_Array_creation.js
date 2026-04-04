/**
 * ============================================================
 *  FILE     : 63_Array_creation.js
 *  CHAPTER  : 08 - Arrays in JavaScript
 *  TOPIC    : Creating Arrays — All Methods Explained
 *  AUTHOR   : Promod Dutta
 * ============================================================
 *
 *  CONCEPTS COVERED IN THIS FILE:
 *  ─────────────────────────────────
 *  1. Array Literal  [ ]       → Most common & recommended way
 *  2. new Array()              → Array constructor (with gotcha!)
 *  3. Array.of()               → Creates array from arguments
 *  4. Array.from()             → Creates array from iterable/string
 *  5. Mixed-type Arrays        → JS allows any data type in one array
 *  6. Bracket Notation [ ]     → Accessing elements by index
 *  7. .length Property         → Total count of elements
 *
 *  VISUAL: Array Structure & Zero-Based Indexing
 *  ───────────────────────────────────────────────
 *
 *  let arr = [ 10,  20,  30,  40 ]
 *  Index  →     0    1    2    3
 *
 *  arr[0] → 10   (first element)
 *  arr[3] → 40   (last element)
 *  arr[4] → undefined (out of bounds)
 *
 *  REAL-WORLD CONTEXT (Playwright / Test Automation):
 *  ───────────────────────────────────────────────────
 *  Arrays are the backbone of test automation. In Playwright,
 *  you create arrays to store: browser names, test URLs,
 *  test result statuses, user credentials, and more.
 *  Knowing all the ways to CREATE arrays gives you flexibility
 *  when generating test data dynamically.
 * ============================================================
 */


// ─────────────────────────────────────────────────────────────
// SECTION 1: Empty Array — Placeholder for Dynamic Data
// ─────────────────────────────────────────────────────────────
/**
 * Empty Array Literal: let arr = []
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Creates an empty array with zero elements.
 *              Used when you plan to populate the array later
 *              dynamically (e.g., via push() inside a loop).
 * SYNTAX     : let arr = []
 */
console.log("═══════════════════════════════════════════════");
console.log("  SECTION 1: Empty Array");
console.log("═══════════════════════════════════════════════");

let fruit = [];            // Empty array — ready to be filled
console.log("fruit (empty)  →", fruit);         // []
console.log("fruit.length   →", fruit.length);  // 0


// ─────────────────────────────────────────────────────────────
// SECTION 2: Array Literal — Most Common & Recommended
// ─────────────────────────────────────────────────────────────
/**
 * Array Literal: let arr = [val1, val2, val3]
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : The most widely used and recommended way to create
 *              arrays. Values are listed between square brackets,
 *              separated by commas. Simple, readable, and fast.
 * SYNTAX     : let arr = [element1, element2, ...]
 *
 * REAL-WORLD USE: Define your list of test browsers, test URLs,
 * or expected result values directly in a clean, readable format.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 2: Array Literal (Recommended)");
console.log("═══════════════════════════════════════════════");

let freshFruits  = ["Apple", "Banana", "Cherry"];
let browsers     = ["Chrome", "Firefox", "Safari"];
let testResults  = ["Pass", "Fail", "Pass", "Skip"];

console.log("freshFruits  →", freshFruits);
console.log("browsers     →", browsers);
console.log("testResults  →", testResults);


// ─────────────────────────────────────────────────────────────
// SECTION 3: Mixed-Type Arrays — JS Allows Any Data Type
// ─────────────────────────────────────────────────────────────
/**
 * Mixed-Type Array
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Unlike strictly-typed languages (Java, C#),
 *              JavaScript arrays can hold elements of ANY data
 *              type — numbers, strings, booleans, null, undefined,
 *              objects, functions, and even other arrays — all in
 *              the SAME array.
 * NOTE       : While possible, mixing types can reduce readability.
 *              Use typed arrays for clarity when possible.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 3: Mixed-Type Array");
console.log("═══════════════════════════════════════════════");

let mixed = [1, "Hello", true, null];
console.log("mixed →", mixed); // [1, "Hello", true, null]


// ─────────────────────────────────────────────────────────────
// SECTION 4: Accessing Elements by Index & .length Property
// ─────────────────────────────────────────────────────────────
/**
 * Bracket Notation: array[index]
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Access any element using its zero-based numeric
 *              index. The first element is at index 0.
 *              Accessing beyond the last index returns undefined.
 *
 * .length Property
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Returns the total number of elements.
 *              It is a PROPERTY, not a METHOD — so no parentheses!
 *              arr.length  ✅  (correct)
 *              arr.length() ❌  (wrong — TypeError)
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 4: Accessing Elements & .length");
console.log("═══════════════════════════════════════════════");

let arr = [10, 20, 30, 40];
console.log("arr           →", arr);
console.log("arr.length    →", arr.length); // 4  (property, NOT method)
console.log("arr[0]        →", arr[0]);     // 10 (first element)
console.log("arr[1]        →", arr[1]);     // 20
console.log("arr[2]        →", arr[2]);     // 30
console.log("arr[3]        →", arr[3]);     // 40 (last element)
console.log("arr[4]        →", arr[4]);     // undefined (out of bounds)


// ─────────────────────────────────────────────────────────────
// SECTION 5: new Array() Constructor
// ─────────────────────────────────────────────────────────────
/**
 * new Array(element1, element2, ...)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Creates an array using the Array constructor.
 *              When passed multiple arguments, creates an array
 *              with those values. Less preferred than array literal.
 *
 * ⚠  GOTCHA — Single Number Argument:
 *   new Array(3)        → Creates [ , , ] (3 EMPTY slots!) NOT [3]
 *   new Array(1, 2, 3)  → Creates [1, 2, 3] (correct)
 *   This inconsistency is why array literals are always preferred!
 *
 * SYNTAX     : new Array(element1, element2, ...)
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 5: new Array() Constructor");
console.log("═══════════════════════════════════════════════");

let emptySlots = new Array(3);           // ⚠ Creates 3 empty slots, NOT [3]
let scores     = new Array(1, 2, 3);     // Creates [1, 2, 3]
let numbers    = new Array(100, 200, 300, 400);

console.log("new Array(3)              →", emptySlots); // [ <3 empty items> ]
console.log("new Array(1, 2, 3)        →", scores);     // [1, 2, 3]
console.log("new Array(100,200,300,400)→", numbers);    // [100, 200, 300, 400]


// ─────────────────────────────────────────────────────────────
// SECTION 6: Array.of() — Fix for the new Array() Gotcha
// ─────────────────────────────────────────────────────────────
/**
 * Array.of(element1, element2, ...)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Creates a new array from all the arguments passed
 *              to it. Introduced in ES6 to fix the single-number
 *              gotcha in new Array().
 * RETURN TYPE: A new Array
 * MUTATES    : No (creates a new array)
 * SYNTAX     : Array.of(element1, element2, ...)
 *
 * KEY DIFFERENCE vs new Array():
 *   new Array(3)   → [ <3 empty items> ]  ← 3 empty slots!
 *   Array.of(3)    → [3]                  ← an array with value 3 ✅
 *
 * REAL-WORLD USE: Safely create an array from a known set of
 * dynamic values without the single-number pitfall.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 6: Array.of()");
console.log("═══════════════════════════════════════════════");

let testScores = Array.of(10, 20, 30, 40, 50);
console.log("Array.of(10,20,30,40,50) →", testScores);    // [10, 20, 30, 40, 50]
console.log("testScores[0]            →", testScores[0]); // 10
console.log("Array.of(3)              →", Array.of(3));   // [3] ✅ not 3 empty slots


// ─────────────────────────────────────────────────────────────
// SECTION 7: Array.from() — Create Array from Iterables
// ─────────────────────────────────────────────────────────────
/**
 * Array.from(iterable, mapFn?)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Creates a new Array from an array-like or iterable
 *              object (e.g., String, Set, Map, NodeList, arguments).
 *              An optional map function can transform each element
 *              during creation.
 * RETURN TYPE: A new Array
 * MUTATES    : No (creates a new array)
 * SYNTAX     : Array.from(iterable)
 *              Array.from(iterable, element => transformation)
 *
 * COMMON USES:
 *   Array.from("Hello")       → ['H','e','l','l','o']  (string → array)
 *   Array.from(new Set([...]))→ Convert a Set back to an array
 *   Array.from({length: 3}, (_, i) => i) → [0, 1, 2] (range generator)
 *
 * REAL-WORLD USE IN PLAYWRIGHT:
 *   Converting a NodeList of DOM elements into an Array so you
 *   can use map(), filter(), etc. on the elements.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 7: Array.from()");
console.log("═══════════════════════════════════════════════");

let chars   = Array.from("Hello");                         // String → Array
let range   = Array.from({length: 5}, (_, i) => i + 1);   // [1, 2, 3, 4, 5]
let fromSet = Array.from(new Set([1, 2, 2, 3, 3]));        // Remove duplicates

console.log('Array.from("Hello")              →', chars);    // ['H','e','l','l','o']
console.log("Array.from({length:5}, i => i+1) →", range);   // [1, 2, 3, 4, 5]
console.log("Array.from(new Set([1,2,2,3,3])) →", fromSet); // [1, 2, 3]


// ─────────────────────────────────────────────────────────────
// QUICK REFERENCE: All Array Creation Methods
// ─────────────────────────────────────────────────────────────
/**
 * ┌────────────────────┬──────────────────────────────────────────┐
 * │ Method             │ When to Use                              │
 * ├────────────────────┼──────────────────────────────────────────┤
 * │ []  literal        │ Always preferred for static/simple data  │
 * │ new Array(x,y,z)   │ Avoid — use literal instead             │
 * │ Array.of(x,y,z)    │ Safely create array from known values   │
 * │ Array.from(iter)   │ Convert string, Set, NodeList to array  │
 * └────────────────────┴──────────────────────────────────────────┘
 */

console.log("\n═══════════════════════════════════════════════");
console.log("  END OF DEMO");
console.log("═══════════════════════════════════════════════");