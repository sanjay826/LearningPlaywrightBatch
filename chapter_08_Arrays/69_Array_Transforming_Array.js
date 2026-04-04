/**
 * ============================================================
 *  FILE     : 69_Array_Transforming_Array.js
 *  CHAPTER  : 08 - Arrays in JavaScript
 *  TOPIC    : Transforming Arrays — map, filter, reduce, flat
 *  AUTHOR   : Promod Dutta
 * ============================================================
 *
 *  METHODS COVERED IN THIS FILE:
 *  ─────────────────────────────────
 *  1. map()     → Transform every element → returns a NEW array
 *  2. filter()  → Keep elements passing a test → returns a NEW array
 *  3. reduce()  → Accumulate all elements → returns a SINGLE value
 *  4. flat()    → Flatten nested arrays → returns a NEW array
 *
 *  VISUAL: How Each Method Works
 *  ──────────────────────────────
 *
 *  Original: [45, 82, 91, 60, 73]
 *
 *  map()    → ["Fail","Pass","Pass","Fail","Pass"]  (same length, transformed)
 *  filter() → [82, 91, 73]                          (shorter, only >=70 kept)
 *  reduce() → 351                                   (single sum value)
 *
 *  REAL-WORLD CONTEXT (Playwright / Test Automation):
 *  ───────────────────────────────────────────────────
 *  These are the most powerful functional array methods in JS.
 *  In Playwright/test automation they are used to:
 *  - map()    : Convert raw scores into Pass/Fail labels
 *  - filter() : Extract only the failing tests from results
 *  - reduce() : Calculate total test duration or total score
 *  - flat()   : Merge nested test data arrays into one flat list
 * ============================================================
 */


// ─────────────────────────────────────────────────────────────
// Dataset: Test scores
// ─────────────────────────────────────────────────────────────
let scores = [45, 82, 91, 60, 73];

console.log("═══════════════════════════════════════════════");
console.log("  Dataset");
console.log("═══════════════════════════════════════════════");
console.log("scores →", scores); // [45, 82, 91, 60, 73]


// ─────────────────────────────────────────────────────────────
// SECTION 1: map() — Transform Every Element
// ─────────────────────────────────────────────────────────────
/**
 * .map(callbackFn)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Creates a NEW array by calling the callback
 *              function on EVERY element of the original array.
 *              The result of the callback becomes the new element.
 *              The original array is NOT changed.
 * RETURN TYPE: A NEW array of the same length as the original
 * MUTATES    : No — always returns a brand new array
 * SYNTAX     : array.map(element => transformation)
 *
 * KEY RULE: map() ALWAYS returns an array of the SAME LENGTH.
 *   Original: 5 elements → Result: always 5 elements
 *
 * DIFFERENCE vs forEach():
 *   forEach() → executes a function, returns undefined
 *   map()     → executes a function, RETURNS A NEW ARRAY ✅
 *
 * REAL-WORLD USE: Convert each raw test score into a "Pass" or
 * "Fail" label for a report. Map browser names to their
 * Playwright engine names (e.g., "Chrome" → "chromium").
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 1: map() — Transform Every Element");
console.log("═══════════════════════════════════════════════");

let grades = scores.map(s => s >= 70 ? "Pass" : "Fail");

console.log("Original scores  →", scores); // [45, 82, 91, 60, 73] (UNCHANGED)
console.log("Mapped grades    →", grades);  // ["Fail", "Pass", "Pass", "Fail", "Pass"]
console.log("Same length?     →", scores.length === grades.length); // true


// ─────────────────────────────────────────────────────────────
// SECTION 2: filter() — Keep Only Matching Elements
// ─────────────────────────────────────────────────────────────
/**
 * .filter(callbackFn)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Creates a NEW array containing ONLY the elements
 *              for which the callback function returns TRUE.
 *              Elements that return false are excluded.
 *              The original array is NOT changed.
 * RETURN TYPE: A NEW array (can be shorter, same, or empty)
 * MUTATES    : No — always returns a brand new array
 * SYNTAX     : array.filter(element => condition)
 *
 * KEY RULE: filter() may return a SHORTER array than the original.
 *   If NO elements match → returns an empty array []
 *   If ALL elements match → returns a copy of the original
 *
 * DIFFERENCE vs map():
 *   map()    → transforms elements, SAME length always
 *   filter() → selects elements, VARIABLE length
 *
 * REAL-WORLD USE: Extract only the failing test scores to
 * report on them separately. Filter only "error" results
 * from a mixed array of test statuses.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 2: filter() — Keep Matching Elements");
console.log("═══════════════════════════════════════════════");

let passing = scores.filter(s => s >= 70);
let failing  = scores.filter(s => s < 70);

console.log("Original scores     →", scores);   // [45, 82, 91, 60, 73] (UNCHANGED)
console.log("Passing (>= 70)     →", passing);  // [82, 91, 73]
console.log("Failing  (< 70)     →", failing);  // [45, 60]


// ─────────────────────────────────────────────────────────────
// SECTION 3: reduce() — Accumulate to a Single Value
// ─────────────────────────────────────────────────────────────
/**
 * .reduce(callbackFn, initialValue)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Executes a "reducer" callback on each element,
 *              accumulating a single output value (the accumulator).
 *              Starts from the initialValue (or first element if
 *              no initialValue is provided).
 * RETURN TYPE: A SINGLE value (number, string, object, array...)
 * MUTATES    : No — does not modify the original array
 * SYNTAX     : array.reduce((accumulator, currentValue) => ..., initialValue)
 *
 * PARAMETERS (callback):
 *   accumulator  → The running total / result so far
 *   currentValue → The current element being processed
 *   initialValue → Starting value for the accumulator
 *
 * ⚠  ALWAYS provide an initialValue (the 2nd argument).
 *    Without it, the first element is used, which can cause
 *    unexpected bugs with empty arrays.
 *
 * COMMON USES:
 *   Sum of numbers, product, finding max/min, flattening arrays,
 *   grouping objects, counting occurrences
 *
 * REAL-WORLD USE: Calculate the total test duration from an
 * array of individual test times. Sum up all scores for an
 * average calculation in a test results report.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 3: reduce() — Accumulate to Single Value");
console.log("═══════════════════════════════════════════════");

// Sum all scores
let totalScore = scores.reduce((accumulator, current) => accumulator + current, 0);

// Calculate average
let averageScore = totalScore / scores.length;

console.log("Original scores  →", scores);                          // [45, 82, 91, 60, 73]
console.log("Total score      →", totalScore);                      // 351
console.log("Average score    →", averageScore.toFixed(2));         // 70.20
console.log("Total (count)    →", scores.length, "students");       // 5 students


// ─────────────────────────────────────────────────────────────
// SECTION 4: flat() — Flatten Nested Arrays
// ─────────────────────────────────────────────────────────────
/**
 * .flat(depth?)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Creates a NEW array with all sub-arrays
 *              "flattened" (merged) into it, up to the specified
 *              depth. Default depth is 1.
 * RETURN TYPE: A NEW flattened array
 * MUTATES    : No — always returns a brand new array
 * SYNTAX     : array.flat()         → flattens 1 level deep
 *              array.flat(2)        → flattens 2 levels deep
 *              array.flat(Infinity) → flattens ALL levels deep
 *
 * WHEN TO USE:
 *   ✅ Merging test data from multiple groups into one flat list
 *   ✅ Flattening API response data that comes in nested arrays
 *   ✅ Processing 2D arrays (e.g., rows from a table)
 *
 * REAL-WORLD USE: Combine test cases from multiple test suites
 * (each suite being a sub-array) into one flat array for
 * running in a single batch.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 4: flat() — Flatten Nested Arrays");
console.log("═══════════════════════════════════════════════");

let nested      = [[1, 2], [3, 4], [5]];
let deepNested  = [[1, [2, 3]], [4, [5, 6]]];

console.log("Nested array          →", nested);                          // [[1,2],[3,4],[5]]
console.log("nested.flat()         →", nested.flat());                   // [1, 2, 3, 4, 5]
console.log("Deep nested           →", deepNested);                      // [[1,[2,3]],[4,[5,6]]]
console.log("deepNested.flat(1)    →", deepNested.flat(1));              // [1,[2,3],4,[5,6]]
console.log("deepNested.flat(2)    →", deepNested.flat(2));              // [1,2,3,4,5,6]
console.log("deepNested.flat(Inf)  →", deepNested.flat(Infinity));       // [1,2,3,4,5,6]


// ─────────────────────────────────────────────────────────────
// SECTION 5: Chaining Methods — Real Power Combo
// ─────────────────────────────────────────────────────────────
/**
 * Method Chaining: array.filter(...).map(...).reduce(...)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Since map(), filter(), and flat() all return NEW
 *              arrays, they can be CHAINED together to build
 *              powerful data pipelines in a single expression.
 *
 * REAL-WORLD USE: First filter only the passing scores, then
 * map them to grade letters, or sum only the failing ones.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 5: Method Chaining — Combining Methods");
console.log("═══════════════════════════════════════════════");

// Chain: filter passing scores → map to "PASS: score" labels
let passingLabels = scores
    .filter(s => s >= 70)
    .map(s => `PASS: ${s}`);

// Chain: filter failing → sum of failing scores
let failingTotal = scores
    .filter(s => s < 70)
    .reduce((sum, s) => sum + s, 0);

console.log("Passing labels       →", passingLabels); // ["PASS: 82", "PASS: 91", "PASS: 73"]
console.log("Sum of failing scores→", failingTotal);  // 105  (45 + 60)


// ─────────────────────────────────────────────────────────────
// QUICK REFERENCE: All Transformation Methods Compared
// ─────────────────────────────────────────────────────────────
/**
 * ┌──────────────┬──────────────────────────────┬────────────────────────┬────────────┐
 * │ Method       │ What It Does                 │ Returns                │ Mutates?   │
 * ├──────────────┼──────────────────────────────┼────────────────────────┼────────────┤
 * │ map()        │ Transform every element      │ New array (same length)│ No         │
 * │ filter()     │ Keep elements passing test   │ New array (≤ length)   │ No         │
 * │ reduce()     │ Accumulate to single value   │ Single value           │ No         │
 * │ flat()       │ Flatten nested arrays        │ New flattened array    │ No         │
 * └──────────────┴──────────────────────────────┴────────────────────────┴────────────┘
 */

console.log("\n═══════════════════════════════════════════════");
console.log("  END OF DEMO — Original scores unchanged:", scores);
console.log("═══════════════════════════════════════════════");
