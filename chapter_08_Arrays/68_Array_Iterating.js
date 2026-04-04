/**
 * ============================================================
 *  FILE     : 68_Array_Iterating.js
 *  CHAPTER  : 08 - Arrays in JavaScript
 *  TOPIC    : Iterating (Looping) Over Arrays
 *  AUTHOR   : Promod Dutta
 * ============================================================
 *
 *  METHODS & LOOPS COVERED IN THIS FILE:
 *  ────────────────────────────────────────
 *  1. for loop          → Classic index-based iteration
 *  2. for...of loop     → Clean value-based iteration (ES6)
 *  3. forEach()         → Callback-based iteration (no return)
 *  4. entries()         → Iterate with BOTH index AND value
 *  5. for...in loop     → Iterates over INDEXES (keys) only
 *
 *  VISUAL: Which Loop to Choose?
 *  ───────────────────────────────
 *
 *  Need the INDEX?        → for loop  OR  entries()  OR  for...in
 *  Need only the VALUE?   → for...of  OR  forEach()
 *  Need to BREAK/SKIP?    → for loop  OR  for...of   (use break/continue)
 *  Need ASYNC/AWAIT?      → for loop  OR  for...of   (forEach is NOT await-friendly!)
 *  Need both INDEX+VALUE? → entries() with for...of
 *
 *  REAL-WORLD CONTEXT (Playwright / Test Automation):
 *  ───────────────────────────────────────────────────
 *  Looping over arrays in Playwright is essential when:
 *  - Running the same test across multiple browsers or URLs
 *  - Iterating through all rows of a data table in the DOM
 *  - Processing a list of test cases one by one
 *  - Logging test names with their pass/fail index number
 * ============================================================
 */


// ─────────────────────────────────────────────────────────────
// Dataset: Test names array
// ─────────────────────────────────────────────────────────────
let tests = ["Login", "Checkout", "Search"];

console.log("═══════════════════════════════════════════════");
console.log("  Dataset");
console.log("═══════════════════════════════════════════════");
console.log("tests →", tests);


// ─────────────────────────────────────────────────────────────
// SECTION 1: for loop — Classic Index-Based Iteration
// ─────────────────────────────────────────────────────────────
/**
 * for (let i = 0; i < array.length; i++)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : The classic and most flexible loop. Manually
 *              controls the start index, stop condition, and
 *              step increment. Gives direct access to both the
 *              index (i) and the value (array[i]).
 * SUPPORTS   : break, continue, async/await ✅
 * MUTATES    : No (unless you explicitly modify array[i])
 * SYNTAX     : for (let i = 0; i < array.length; i++) { ... }
 *
 * WHEN TO USE:
 *   ✅ When you need the index alongside the value
 *   ✅ When you need to use break or continue
 *   ✅ When using async/await inside the loop
 *   ✅ When iterating in reverse or with custom step sizes
 *
 * REAL-WORLD USE: Run a Playwright test for each URL in a list
 * and log the index number of the currently-running test.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 1: for loop — Index-Based");
console.log("═══════════════════════════════════════════════");

for (let i = 0; i < tests.length; i++) {
    console.log(`  [${i}] Running test: ${tests[i]}`);
}


// ─────────────────────────────────────────────────────────────
// SECTION 2: for...of loop — Clean Value-Based Iteration
// ─────────────────────────────────────────────────────────────
/**
 * for (let value of array)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : An ES6 loop that iterates over the VALUES of any
 *              iterable (arrays, strings, Sets, Maps). Cleaner
 *              and more readable than the classic for loop when
 *              you don't need the index.
 * SUPPORTS   : break, continue, async/await ✅
 * MUTATES    : No
 * SYNTAX     : for (let value of array) { ... }
 *
 * WHEN TO USE:
 *   ✅ Best choice when you only need the VALUE (not the index)
 *   ✅ When code readability and simplicity is a priority
 *   ✅ When using async/await inside a loop
 *   ❌ Avoid when you need the index — use entries() instead
 *
 * REAL-WORLD USE: Loop through each browser name and launch it
 * cleanly without needing the index number.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 2: for...of loop — Value-Based");
console.log("═══════════════════════════════════════════════");

for (let test of tests) {
    console.log(`  Running: ${test}`);
}


// ─────────────────────────────────────────────────────────────
// SECTION 3: forEach() — Callback-Based Iteration
// ─────────────────────────────────────────────────────────────
/**
 * array.forEach((element, index, array) => { ... })
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Executes a provided callback function ONCE for
 *              each element in the array, in order. The callback
 *              receives: (currentElement, currentIndex, fullArray).
 * RETURN TYPE: undefined — forEach() ALWAYS returns undefined.
 *              It cannot be chained like map() or filter().
 * MUTATES    : No (but callback can modify elements if needed)
 * SYNTAX     : array.forEach((element, index) => { ... })
 *
 * ⚠  IMPORTANT LIMITATIONS:
 *   ❌ Cannot use break or continue to exit early
 *   ❌ Does NOT work well with async/await
 *      (the loop won't wait for async operations to finish)
 *   ❌ Cannot be stopped once started
 *
 * WHEN TO USE:
 *   ✅ Simple, synchronous side-effects (logging, DOM updates)
 *   ✅ When you need both index and value conveniently
 *   ❌ Avoid for async operations — use for...of instead
 *
 * REAL-WORLD USE: Log all test names with their index numbers
 * in a test report generator.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 3: forEach() — Callback Iteration");
console.log("═══════════════════════════════════════════════");

tests.forEach((test, index) => {
    console.log(`  [${index}] Test: ${test}`);
});


// ─────────────────────────────────────────────────────────────
// SECTION 4: entries() — Iterate with Index AND Value
// ─────────────────────────────────────────────────────────────
/**
 * array.entries()
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Returns an iterator object that provides
 *              [index, value] pairs for each element. Used with
 *              for...of and array destructuring to get BOTH the
 *              index and value cleanly in a single loop.
 * RETURN TYPE: Iterator of [index, value] pairs
 * MUTATES    : No
 * SYNTAX     : for (let [index, value] of array.entries()) { ... }
 *
 * WHEN TO USE:
 *   ✅ Best of both worlds — clean syntax + index access
 *   ✅ Cleaner alternative to for(i=0; i<arr.length; i++)
 *      when you need the index inside a for...of loop
 *
 * REAL-WORLD USE: Log each test case with its exact row number
 * in a table-style test summary output.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 4: entries() — Index + Value Pairs");
console.log("═══════════════════════════════════════════════");

for (let [i, test] of tests.entries()) {
    console.log(`  Index: ${i} | Test: ${test}`);
}


// ─────────────────────────────────────────────────────────────
// SECTION 5: for...in loop — Iterates Over INDEXES (Keys)
// ─────────────────────────────────────────────────────────────
/**
 * for (let key in array)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Iterates over the ENUMERABLE PROPERTIES (keys)
 *              of an object. For arrays, these keys are the
 *              numeric indexes as STRINGS ("0", "1", "2"...).
 * RETURN TYPE: String key (index as string)
 * MUTATES    : No
 * SYNTAX     : for (let index in array) { ... }
 *
 * ⚠  WARNING — NOT RECOMMENDED FOR ARRAYS:
 *   for...in is designed for PLAIN OBJECTS, not arrays.
 *   For arrays it works but has risks:
 *   ❌ Returns indexes as STRINGS ("0", "1"), not numbers
 *   ❌ May also iterate over inherited (prototype) properties
 *   ❌ Does NOT guarantee order in all environments
 *   ✅ Use for...of or forEach() for arrays instead.
 *   ✅ Use for...in ONLY for plain object property iteration.
 *
 * REAL-WORLD USE: Generally avoid for arrays. Use on plain
 * objects (e.g., { name: "Alice", role: "Admin" }).
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 5: for...in — Iterates Over Keys");
console.log("  ⚠  Use for...of or forEach for arrays!");
console.log("═══════════════════════════════════════════════");

let students = ["Ki", "Ka", "Ku", "Ko", "Ke"];
console.log("students →", students);

for (let index in students) {
    // 'index' here is a STRING ("0", "1", "2"...), not a number
    console.log(`  Key: "${index}" (string) → Value: ${students[index]}`);
}


// ─────────────────────────────────────────────────────────────
// QUICK REFERENCE: All Iteration Methods Compared
// ─────────────────────────────────────────────────────────────
/**
 * ┌──────────────┬───────────────────┬────────────┬────────────┬──────────────────┐
 * │ Loop         │ Gives You         │ break/cont │ async/await│ Best For         │
 * ├──────────────┼───────────────────┼────────────┼────────────┼──────────────────┤
 * │ for          │ index + value     │    ✅      │    ✅      │ Full control     │
 * │ for...of     │ value only        │    ✅      │    ✅      │ Clean iteration  │
 * │ forEach()    │ value + index     │    ❌      │    ❌      │ Simple side fx   │
 * │ entries()    │ index + value     │    ✅      │    ✅      │ Both cleanly     │
 * │ for...in     │ index (as string) │    ✅      │    ✅      │ Plain objects    │
 * └──────────────┴───────────────────┴────────────┴────────────┴──────────────────┘
 */

console.log("\n═══════════════════════════════════════════════");
console.log("  END OF DEMO");
console.log("═══════════════════════════════════════════════");