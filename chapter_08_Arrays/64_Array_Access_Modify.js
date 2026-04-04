/**
 * ============================================================
 *  FILE     : 64_Array_Access_Modify.js
 *  CHAPTER  : 08 - Arrays in JavaScript
 *  TOPIC    : Accessing & Modifying Array Elements
 *  AUTHOR   : Promod Dutta
 * ============================================================
 *
 *  CONCEPTS COVERED IN THIS FILE:
 *  ────────────────────────────────
 *  1. Bracket Notation [ ]   → Access element by positive index
 *  2. Array.at()             → Access element by positive OR negative index
 *  3. Direct Assignment [ ]  → Modify an element at a specific index
 *  4. Array.length           → Get the total number of elements
 *
 *  VISUAL: How Array Indexing Works
 *  ─────────────────────────────────
 *
 *  Array  →  [ "Pass",  "Fail",  "Skip" ]
 *
 *  Positive Index →    0        1        2
 *  Negative Index →   -3       -2       -1
 *
 *  Tip: Negative index counts from the END of the array.
 *       -1 always refers to the LAST element.
 *
 *  REAL-WORLD CONTEXT (Playwright / Test Automation):
 *  ───────────────────────────────────────────────────
 *  In QA automation, arrays of test statuses like
 *  ["Pass", "Fail", "Skip"] are commonly used to track
 *  and report test results. Knowing how to ACCESS a specific
 *  result and MODIFY it (e.g., updating "Fail" to "Blocked")
 *  is a key skill for building dynamic test reporters.
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
// Initial Array Setup
// ─────────────────────────────────────────────────────────────
/**
 * A test result statuses array — a real-world example
 * used in Playwright reports to categorize test outcomes.
 */
let statuses = ["Pass", "Fail", "Skip"];

console.log("═══════════════════════════════════════════════");
console.log("  Initial Array");
console.log("═══════════════════════════════════════════════");
console.log("statuses →", statuses); // ["Pass", "Fail", "Skip"]


// ─────────────────────────────────────────────────────────────
// SECTION 1: Bracket Notation [ ] — Access by Positive Index
// ─────────────────────────────────────────────────────────────
/**
 * Bracket Notation: array[index]
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : The most common way to access an element from
 *              an array using its zero-based numeric position
 *              (index). The first element is always at index 0.
 * RETURN TYPE: The element at the given index, or 'undefined'
 *              if the index is out of range.
 * MUTATES    : No (read-only access)
 * SYNTAX     : array[index]
 *
 * NOTE: Arrays are ZERO-INDEXED in JavaScript.
 *       Index 0 → first element
 *       Index 1 → second element
 *       Index (length - 1) → last element
 *
 * REAL-WORLD USE: Access the first test result or a specific
 * result by its position in the report array.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 1: Bracket Notation [ ] — Positive Index");
console.log("═══════════════════════════════════════════════");

console.log("statuses[0]  →", statuses[0]);  // "Pass"  (1st element, index 0)
console.log("statuses[2]  →", statuses[2]);  // "Skip"  (3rd element, index 2)
console.log("statuses[5]  →", statuses[5]);  // undefined (out-of-range index)


// ─────────────────────────────────────────────────────────────
// SECTION 2: Array.at() — Access by Positive OR Negative Index
// ─────────────────────────────────────────────────────────────
/**
 * .at(index)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : A modern (ES2022) method that returns the element
 *              at a given index, just like bracket notation.
 *              Its SUPERPOWER is accepting NEGATIVE indexes,
 *              which count backwards from the END of the array.
 * RETURN TYPE: The element at the given index, or 'undefined'
 *              if the index is out of range.
 * MUTATES    : No (read-only access)
 * SYNTAX     : array.at(index)
 *
 * NEGATIVE INDEX REFERENCE:
 *   array.at(-1)  →  LAST element       (same as array[length - 1])
 *   array.at(-2)  →  SECOND to last
 *   array.at(-3)  →  THIRD to last
 *   array.at(-4)  →  Out of range → undefined
 *
 * WHY USE .at() OVER BRACKET NOTATION?
 *   With bracket notation, getting the last element requires:
 *     array[array.length - 1]   ← verbose and error-prone
 *   With .at(), it's simply:
 *     array.at(-1)              ← clean and readable ✅
 *
 * REAL-WORLD USE: Quickly get the last test status in a results
 * array without knowing its total length.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 2: .at() — Positive & Negative Index");
console.log("═══════════════════════════════════════════════");

console.log("statuses.at(-1)  →", statuses.at(-1)); // "Skip"      (last element)
console.log("statuses.at(-2)  →", statuses.at(-2)); // "Fail"      (2nd from end)
console.log("statuses.at(-3)  →", statuses.at(-3)); // "Pass"      (3rd from end)
console.log("statuses.at(-4)  →", statuses.at(-4)); // undefined   (out of range)


// ─────────────────────────────────────────────────────────────
// SECTION 3: Modifying Elements — Direct Assignment
// ─────────────────────────────────────────────────────────────
/**
 * Direct Assignment via Bracket Notation: array[index] = newValue
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : You can OVERWRITE the value of any existing
 *              element in an array by assigning a new value
 *              directly to its index using bracket notation.
 *              This does NOT add or remove elements — it only
 *              REPLACES the value at that specific index.
 * RETURN TYPE: N/A (assignment operation, not a method)
 * MUTATES    : YES — modifies the original array in place.
 * SYNTAX     : array[index] = newValue
 *
 * IMPORTANT: If you assign to an index BEYOND the current length,
 *            JavaScript will expand the array and fill the gap
 *            with empty (undefined) slots.
 *
 * REAL-WORLD USE: Update a test result from "Fail" to "Blocked"
 * when a bug is found, without reconstructing the entire array.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 3: Modifying Elements — Direct Assignment");
console.log("═══════════════════════════════════════════════");

console.log("Before modification  →", statuses); // ["Pass", "Fail", "Skip"]

statuses[1] = "Blocked"; // Overwrites "Fail" at index 1 with "Blocked"

console.log("After statuses[1] = 'Blocked' →", statuses); // ["Pass", "Blocked", "Skip"]


// ─────────────────────────────────────────────────────────────
// SECTION 4: length Property
// ─────────────────────────────────────────────────────────────
/**
 * .length
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : A built-in property that returns the total count
 *              of elements in the array. It is always one more
 *              than the highest index (because of zero-indexing).
 * RETURN TYPE: Number
 * MUTATES    : No (read-only in standard usage)
 * SYNTAX     : array.length
 *
 * TIP: Use (array.length - 1) to get the index of the last element.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 4: .length Property");
console.log("═══════════════════════════════════════════════");

console.log("Total statuses (length)  →", statuses.length); // 3
console.log("Last element index       →", statuses.length - 1); // 2
console.log("Last element value       →", statuses[statuses.length - 1]); // "Skip"

console.log("\n═══════════════════════════════════════════════");
console.log("  END OF DEMO — Final Array:", statuses);
console.log("═══════════════════════════════════════════════");