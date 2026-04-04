/**
 * ============================================================
 *  FILE     : 67_Array_Searching.js
 *  CHAPTER  : 08 - Arrays in JavaScript
 *  TOPIC    : Searching & Finding Elements in Arrays
 *  AUTHOR   : Promod Dutta
 * ============================================================
 *
 *  METHODS COVERED IN THIS FILE:
 *  ─────────────────────────────
 *  1. indexOf()       → Returns FIRST index of a value, or -1
 *  2. lastIndexOf()   → Returns LAST index of a value, or -1
 *  3. includes()      → Returns true/false if value exists
 *  4. find()          → Returns FIRST element matching condition
 *  5. findIndex()     → Returns index of FIRST matching element
 *  6. findLast()      → Returns LAST element matching condition
 *  7. findLastIndex() → Returns index of LAST matching element
 *
 *  VISUAL: indexOf vs lastIndexOf
 *  ────────────────────────────────
 *
 *  Array   →  [ "Pass", "fail", "pass", "error", "fail" ]
 *  Index   →      0        1       2        3       4
 *
 *  indexOf("fail")     → 1  (searches left → right, stops at 1st match)
 *  lastIndexOf("fail") → 4  (searches right → left, stops at 1st match)
 *
 *  REAL-WORLD CONTEXT (Playwright / Test Automation):
 *  ───────────────────────────────────────────────────
 *  Searching arrays is critical in test automation. Examples:
 *  - Checking if "fail" or "error" exists in test result arrays
 *  - Finding the index of a specific test to update its status
 *  - Using find() to locate a failing test object from a dataset
 * ============================================================
 */


// ─────────────────────────────────────────────────────────────
// Dataset 1: Test Results (string array)
// ─────────────────────────────────────────────────────────────
let results = ["Pass", "fail", "pass", "error", "fail"];

console.log("═══════════════════════════════════════════════");
console.log("  Dataset: results array");
console.log("═══════════════════════════════════════════════");
console.log("results →", results);


// ─────────────────────────────────────────────────────────────
// SECTION 1: indexOf() — Find FIRST occurrence
// ─────────────────────────────────────────────────────────────
/**
 * .indexOf(searchValue, fromIndex?)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Searches the array from LEFT to RIGHT and returns
 *              the INDEX of the FIRST element that STRICTLY EQUALS
 *              (===) the search value. If not found, returns -1.
 * RETURN TYPE: Number (index, or -1 if not found)
 * MUTATES    : No (read-only search)
 * SYNTAX     : array.indexOf(value, fromIndex?)
 *
 * PARAMETERS:
 *   searchValue  → The value to search for (uses strict === match)
 *   fromIndex    → (Optional) Index to start searching from
 *
 * KEY POINT: indexOf() uses STRICT equality (===).
 *   "fail" === "Fail"  → false  (case-sensitive!)
 *   "fail" === "fail"  → true
 *
 * REAL-WORLD USE: Check if a specific test status (e.g., "error")
 * exists and where it first appears in the results list.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 1: indexOf() — First Occurrence");
console.log("═══════════════════════════════════════════════");

console.log('indexOf("fail")   →', results.indexOf("fail"));   // 1 (first match)
console.log('indexOf("pass")   →', results.indexOf("pass"));   // 2
console.log('indexOf("Pass")   →', results.indexOf("Pass"));   // 0 (case-sensitive)
console.log('indexOf("Skip")   →', results.indexOf("Skip"));   // -1 (not found)


// ─────────────────────────────────────────────────────────────
// SECTION 2: lastIndexOf() — Find LAST occurrence
// ─────────────────────────────────────────────────────────────
/**
 * .lastIndexOf(searchValue, fromIndex?)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Searches the array from RIGHT to LEFT and returns
 *              the INDEX of the LAST element that STRICTLY EQUALS
 *              the search value. If not found, returns -1.
 * RETURN TYPE: Number (index, or -1 if not found)
 * MUTATES    : No (read-only search)
 * SYNTAX     : array.lastIndexOf(value, fromIndex?)
 *
 * DIFFERENCE vs indexOf():
 *   indexOf()     → finds the FIRST match (left → right search)
 *   lastIndexOf() → finds the LAST match  (right → left search)
 *
 * REAL-WORLD USE: Find the most recent occurrence of a "fail"
 * status in a test run log to identify the latest failure.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 2: lastIndexOf() — Last Occurrence");
console.log("═══════════════════════════════════════════════");

console.log('lastIndexOf("fail")  →', results.lastIndexOf("fail")); // 4 (last match)
console.log('lastIndexOf("pass")  →', results.lastIndexOf("pass")); // 2
console.log('lastIndexOf("Skip")  →', results.lastIndexOf("Skip")); // -1 (not found)


// ─────────────────────────────────────────────────────────────
// SECTION 3: includes() — Check if Value EXISTS
// ─────────────────────────────────────────────────────────────
/**
 * .includes(searchValue, fromIndex?)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Checks whether the array CONTAINS a specific
 *              value and returns a BOOLEAN (true or false).
 *              It uses STRICT equality (===) for comparison.
 * RETURN TYPE: Boolean (true if found, false if not)
 * MUTATES    : No (read-only check)
 * SYNTAX     : array.includes(value, fromIndex?)
 *
 * DIFFERENCE vs indexOf():
 *   indexOf()  → tells you WHERE it is (returns index or -1)
 *   includes() → tells you IF it exists (returns true/false)
 *
 * WHEN TO USE includes() vs indexOf():
 *   ✅ Use includes() when you only need a YES/NO answer.
 *   ✅ Use indexOf() when you need the exact position.
 *
 * REAL-WORLD USE: Quickly verify whether any "error" result
 * exists in the test suite before generating a failure report.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 3: includes() — Existence Check");
console.log("═══════════════════════════════════════════════");

console.log('includes("error")  →', results.includes("error")); // true
console.log('includes("fail")   →', results.includes("fail"));  // true
console.log('includes("Skip")   →', results.includes("Skip"));  // false
console.log('includes("Fail")   →', results.includes("Fail"));  // false (case-sensitive)


// ─────────────────────────────────────────────────────────────
// Dataset 2: Numeric scores (number array)
// ─────────────────────────────────────────────────────────────
let nums = [10, 25, 30, 35];

console.log("\n═══════════════════════════════════════════════");
console.log("  Dataset: nums array");
console.log("═══════════════════════════════════════════════");
console.log("nums →", nums); // [10, 25, 30, 35]


// ─────────────────────────────────────────────────────────────
// SECTION 4: find() — Get FIRST matching element
// ─────────────────────────────────────────────────────────────
/**
 * .find(callbackFn)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Iterates through each element and returns the
 *              VALUE of the FIRST element for which the callback
 *              function returns true. If no match is found,
 *              it returns undefined.
 * RETURN TYPE: The matched element value, or undefined
 * MUTATES    : No (read-only search)
 * SYNTAX     : array.find(element => condition)
 *
 * DIFFERENCE vs indexOf():
 *   indexOf() → searches for an EXACT value (=== match)
 *   find()    → searches using a CONDITION (callback function)
 *               More powerful for objects and complex conditions.
 *
 * REAL-WORLD USE: Find the first test score above a passing
 * threshold, or locate the first failed test object in an array
 * of test result objects.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 4: find() — First Matching Element");
console.log("═══════════════════════════════════════════════");

let firstAbove20 = nums.find(n => n > 20); // Finds first element > 20
console.log("find(n => n > 20)    →", firstAbove20); // 25 (first match)

let firstAbove100 = nums.find(n => n > 100); // No element > 100
console.log("find(n => n > 100)   →", firstAbove100); // undefined (no match)


// ─────────────────────────────────────────────────────────────
// SECTION 5: findIndex() — Get INDEX of FIRST matching element
// ─────────────────────────────────────────────────────────────
/**
 * .findIndex(callbackFn)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Iterates through each element and returns the
 *              INDEX of the FIRST element for which the callback
 *              returns true. If no match is found, returns -1.
 * RETURN TYPE: Number (index, or -1 if not found)
 * MUTATES    : No (read-only search)
 * SYNTAX     : array.findIndex(element => condition)
 *
 * DIFFERENCE vs find():
 *   find()      → returns the ELEMENT VALUE  (e.g., 25)
 *   findIndex() → returns the ELEMENT INDEX  (e.g., 1)
 *
 * REAL-WORLD USE: Find the position of a failing test in a list
 * so you can update or splice it at that exact index.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 5: findIndex() — Index of First Match");
console.log("═══════════════════════════════════════════════");

let indexAbove20 = nums.findIndex(x => x > 20); // Index of first element > 20
console.log("findIndex(x => x > 20)   →", indexAbove20); // 1 (index of 25)

let indexAbove100 = nums.findIndex(x => x > 100); // No match
console.log("findIndex(x => x > 100)  →", indexAbove100); // -1 (no match)


// ─────────────────────────────────────────────────────────────
// SECTION 6: findLast() — Get LAST matching element
// ─────────────────────────────────────────────────────────────
/**
 * .findLast(callbackFn)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Iterates through the array from RIGHT to LEFT
 *              and returns the VALUE of the LAST element for
 *              which the callback returns true. If no match
 *              is found, returns undefined.
 *              Introduced in ES2023.
 * RETURN TYPE: The matched element value, or undefined
 * MUTATES    : No (read-only search)
 * SYNTAX     : array.findLast(element => condition)
 *
 * DIFFERENCE vs find():
 *   find()     → searches LEFT  → RIGHT, returns FIRST match
 *   findLast() → searches RIGHT → LEFT,  returns LAST match
 *
 * REAL-WORLD USE: Find the last test that failed above a
 * certain score threshold in a sequential test results array.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 6: findLast() — Last Matching Element");
console.log("═══════════════════════════════════════════════");

let lastAbove20 = nums.findLast(n => n > 20); // Last element > 20
console.log("findLast(n => n > 20)    →", lastAbove20); // 35 (last match)


// ─────────────────────────────────────────────────────────────
// SECTION 7: findLastIndex() — Get INDEX of LAST matching element
// ─────────────────────────────────────────────────────────────
/**
 * .findLastIndex(callbackFn)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Iterates through the array from RIGHT to LEFT
 *              and returns the INDEX of the LAST element for
 *              which the callback returns true. If no match
 *              is found, returns -1.
 *              Introduced in ES2023.
 * RETURN TYPE: Number (index, or -1 if not found)
 * MUTATES    : No (read-only search)
 * SYNTAX     : array.findLastIndex(element => condition)
 *
 * DIFFERENCE vs findLast():
 *   findLast()      → returns the ELEMENT VALUE  (e.g., 35)
 *   findLastIndex() → returns the ELEMENT INDEX  (e.g., 3)
 *
 * REAL-WORLD USE: Get the position of the most recent failing
 * test so you can splice/update it at that exact index.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 7: findLastIndex() — Index of Last Match");
console.log("═══════════════════════════════════════════════");

let lastIndexAbove20 = nums.findLastIndex(y => y > 20); // Index of last > 20
console.log("findLastIndex(y => y > 20)  →", lastIndexAbove20); // 3 (index of 35)

let lastIndexAbove100 = nums.findLastIndex(y => y > 100); // No match
console.log("findLastIndex(y => y > 100) →", lastIndexAbove100); // -1 (no match)


// ─────────────────────────────────────────────────────────────
// QUICK REFERENCE: All Searching Methods Compared
// ─────────────────────────────────────────────────────────────
/**
 * ┌──────────────────┬───────────────────┬──────────────────────┬──────────────┐
 * │ Method           │ Searches By       │ Returns              │ Direction    │
 * ├──────────────────┼───────────────────┼──────────────────────┼──────────────┤
 * │ indexOf()        │ Exact value (===) │ First index or -1    │ Left → Right │
 * │ lastIndexOf()    │ Exact value (===) │ Last index or -1     │ Right → Left │
 * │ includes()       │ Exact value (===) │ true / false         │ Left → Right │
 * │ find()           │ Callback function │ First matched value  │ Left → Right │
 * │ findIndex()      │ Callback function │ First matched index  │ Left → Right │
 * │ findLast()       │ Callback function │ Last matched value   │ Right → Left │
 * │ findLastIndex()  │ Callback function │ Last matched index   │ Right → Left │
 * └──────────────────┴───────────────────┴──────────────────────┴──────────────┘
 */

console.log("\n═══════════════════════════════════════════════");
console.log("  END OF DEMO");
console.log("═══════════════════════════════════════════════");