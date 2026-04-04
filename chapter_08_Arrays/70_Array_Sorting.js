/**
 * ============================================================
 *  FILE     : 70_Array_Sorting.js
 *  CHAPTER  : 08 - Arrays in JavaScript
 *  TOPIC    : Sorting Arrays — sort() and reverse()
 *  AUTHOR   : Promod Dutta
 * ============================================================
 *
 *  METHODS COVERED IN THIS FILE:
 *  ─────────────────────────────────
 *  1. sort()             → Sorts array in-place (alphabetical by default)
 *  2. sort(compareFn)    → Custom numeric or object sorting
 *  3. reverse()          → Reverses array order in-place
 *  4. toSorted()         → ES2023 — sorts WITHOUT mutating original
 *  5. toReversed()       → ES2023 — reverses WITHOUT mutating original
 *
 *  ⚠  BIGGEST GOTCHA IN JAVASCRIPT ARRAYS:
 *  ──────────────────────────────────────────
 *  [1, 2, 10].sort()  →  [1, 10, 2]  ← WRONG for numbers!
 *
 *  Why? sort() converts elements to STRINGS first, then
 *  compares by UTF-16 character codes.
 *  "10" < "2"  because "1" < "2" alphabetically!
 *
 *  Fix: Always use a compare function for numbers:
 *  [1, 2, 10].sort((a, b) => a - b)  →  [1, 2, 10]  ✅
 *
 *  REAL-WORLD CONTEXT (Playwright / Test Automation):
 *  ───────────────────────────────────────────────────
 *  Sorting is critical for:
 *  - Verifying that a UI dropdown or table is sorted correctly
 *  - Sorting test results by score/duration for ranked reporting
 *  - Alphabetically sorting a list of browser names or test IDs
 * ============================================================
 */


// ─────────────────────────────────────────────────────────────
// SECTION 1: sort() — Default Alphabetical Sorting (Strings)
// ─────────────────────────────────────────────────────────────
/**
 * .sort()
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Sorts the elements of an array IN-PLACE and
 *              returns the sorted array. By default, elements
 *              are converted to STRINGS and compared by their
 *              UTF-16 character code values (alphabetical order).
 * RETURN TYPE: The same array (sorted in-place)
 * MUTATES    : YES — modifies the ORIGINAL array directly!
 * SYNTAX     : array.sort()
 *
 * ✅ Works correctly for STRINGS (alphabetical order)
 * ❌ Does NOT work correctly for NUMBERS (use compareFn)
 *
 * REAL-WORLD USE: Sort browser names alphabetically before
 * displaying them in a test configuration report.
 */
console.log("═══════════════════════════════════════════════");
console.log("  SECTION 1: sort() — Alphabetical (Strings)");
console.log("═══════════════════════════════════════════════");

let fruits = ["Banana", "Apple", "Cherry", "Mango"];
console.log("Before sort() →", fruits); // ["Banana", "Apple", "Cherry", "Mango"]

fruits.sort(); // Sorts alphabetically in-place
console.log("After sort()  →", fruits); // ["Apple", "Banana", "Cherry", "Mango"]


// ─────────────────────────────────────────────────────────────
// SECTION 2: sort() GOTCHA — Numbers Sort as Strings by Default
// ─────────────────────────────────────────────────────────────
/**
 * .sort() with Numbers — The Classic JavaScript Gotcha
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Without a compare function, sort() converts
 *              numbers to strings and sorts them lexicographically
 *              (character by character), NOT numerically.
 *
 * EXAMPLE OF THE BUG:
 *   [1, 2, 10, 20].sort()  →  [1, 10, 2, 20]  ← WRONG ❌
 *   Because: "10" < "2" alphabetically (compares "1" vs "2")
 *
 * THE FIX — Compare Function:
 *   (a, b) => a - b  →  ascending  order ✅
 *   (a, b) => b - a  →  descending order ✅
 *
 * HOW THE COMPAREFN WORKS:
 *   If result < 0  → a comes BEFORE b
 *   If result > 0  → b comes BEFORE a
 *   If result = 0  → order stays the same
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 2: sort() GOTCHA — Numbers");
console.log("═══════════════════════════════════════════════");

let scores = [1, 2, 10, 20, 100];

// ❌ Wrong — sorts as strings
let wrongSort = [...scores].sort();
console.log("sort() without compareFn  →", wrongSort);  // [1, 10, 100, 2, 20] ❌

// ✅ Correct — ascending numeric sort
let ascSort = [...scores].sort((a, b) => a - b);
console.log("sort((a,b) => a-b) ASC    →", ascSort);    // [1, 2, 10, 20, 100] ✅

// ✅ Correct — descending numeric sort
let descSort = [...scores].sort((a, b) => b - a);
console.log("sort((a,b) => b-a) DESC   →", descSort);   // [100, 20, 10, 2, 1] ✅


// ─────────────────────────────────────────────────────────────
// SECTION 3: reverse() — Reverse the Array Order
// ─────────────────────────────────────────────────────────────
/**
 * .reverse()
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Reverses the order of the elements of an array
 *              IN-PLACE (first becomes last, last becomes first).
 *              Returns the same reversed array.
 * RETURN TYPE: The same array (reversed in-place)
 * MUTATES    : YES — modifies the ORIGINAL array directly!
 * SYNTAX     : array.reverse()
 *
 * TIP: To sort in descending order, sort() first then reverse():
 *   arr.sort().reverse()  →  reverse alphabetical order
 *
 * REAL-WORLD USE: Display test results in newest-first order
 * after sorting them by date ascending.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 3: reverse() — Reverse Order");
console.log("═══════════════════════════════════════════════");

let browsers = ["Chrome", "Firefox", "Safari", "Edge"];
console.log("Before reverse() →", browsers); // ["Chrome","Firefox","Safari","Edge"]

browsers.reverse(); // Reverses in-place
console.log("After reverse()  →", browsers); // ["Edge","Safari","Firefox","Chrome"]


// ─────────────────────────────────────────────────────────────
// SECTION 4: toSorted() & toReversed() — Non-Mutating (ES2023)
// ─────────────────────────────────────────────────────────────
/**
 * .toSorted(compareFn?)  and  .toReversed()
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : ES2023 introduced non-mutating alternatives to
 *              sort() and reverse(). They return a NEW sorted/
 *              reversed array WITHOUT changing the original.
 * RETURN TYPE: A NEW sorted/reversed array
 * MUTATES    : NO — original array stays unchanged ✅
 * SYNTAX     : array.toSorted()
 *              array.toSorted((a, b) => a - b)
 *              array.toReversed()
 *
 * WHY USE THEM?
 *   sort() and reverse() mutate the original array, which can
 *   cause unexpected bugs if you need the original data later.
 *   toSorted() and toReversed() are safer choices.
 *
 * REAL-WORLD USE: Display test results in sorted order in a
 * report WITHOUT altering the original results array that
 * other parts of your code may still depend on.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 4: toSorted() & toReversed() — ES2023");
console.log("═══════════════════════════════════════════════");

let testNames = ["Login", "Checkout", "Dashboard", "Search"];
console.log("Original array          →", testNames);

let sortedCopy   = testNames.toSorted();    // New sorted array
let reversedCopy = testNames.toReversed();  // New reversed array

console.log("toSorted()              →", sortedCopy);   // alphabetical order
console.log("toReversed()            →", reversedCopy); // reversed order
console.log("Original (UNCHANGED)    →", testNames);    // still original ✅


// ─────────────────────────────────────────────────────────────
// QUICK REFERENCE: Sorting Methods Compared
// ─────────────────────────────────────────────────────────────
/**
 * ┌──────────────────────┬─────────────────────────┬────────────┬────────────┐
 * │ Method               │ What It Does            │ Mutates?   │ ES Version │
 * ├──────────────────────┼─────────────────────────┼────────────┼────────────┤
 * │ sort()               │ Alphabetical (default)  │ YES ⚠      │ ES1        │
 * │ sort((a,b) => a-b)   │ Numeric ascending       │ YES ⚠      │ ES1        │
 * │ sort((a,b) => b-a)   │ Numeric descending      │ YES ⚠      │ ES1        │
 * │ reverse()            │ Reverse order           │ YES ⚠      │ ES1        │
 * │ toSorted()           │ Sort (non-mutating)     │ NO  ✅     │ ES2023     │
 * │ toReversed()         │ Reverse (non-mutating)  │ NO  ✅     │ ES2023     │
 * └──────────────────────┴─────────────────────────┴────────────┴────────────┘
 */

console.log("\n═══════════════════════════════════════════════");
console.log("  END OF DEMO");
console.log("═══════════════════════════════════════════════");
