/**
 * ============================================================
 *  FILE     : 66_Array.Real_Example.js
 *  CHAPTER  : 08 - Arrays in JavaScript
 *  TOPIC    : Real-World Array Methods with Practical Examples
 *  AUTHOR   : Promod Dutta
 * ============================================================
 *
 *  METHODS COVERED IN THIS FILE:
 *  ─────────────────────────────
 *  1. Array.length  → Gets the total count of elements
 *  2. Array.pop()   → Removes and returns the LAST element
 *  3. Array.shift() → Removes and returns the FIRST element
 *  4. for loop      → Iterates through each element by index
 *
 *  REAL-WORLD CONTEXT (Playwright / Test Automation):
 *  ───────────────────────────────────────────────────
 *  In Playwright, arrays are heavily used to manage lists of
 *  browsers, test URLs, user roles, and DOM element collections.
 *  Knowing how to add/remove items and loop through them is
 *  a fundamental skill for automation engineers.
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
// SECTION 1: Array Declaration
// ─────────────────────────────────────────────────────────────
/**
 * We declare an array of browser names.
 * In Playwright, 'webkit' represents Safari, 'chromium' represents
 * Chrome/Edge, and 'firefox' represents Firefox.
 * This list simulates a cross-browser testing suite.
 */
let browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge'];


// ─────────────────────────────────────────────────────────────
// SECTION 2: Array.length Property
// ─────────────────────────────────────────────────────────────
/**
 * .length
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : A built-in property that returns the total number
 *              of elements currently in the array.
 * RETURN TYPE: Number
 * MUTATES    : No (read-only in standard usage)
 * SYNTAX     : array.length
 *
 * NOTE: 'length' is always one more than the highest index, because
 *       arrays are zero-indexed (first element is at index 0).
 */
console.log("═══════════════════════════════════════");
console.log("  SECTION 2: .length Property");
console.log("═══════════════════════════════════════");
console.log("Initial browsers array   :", browsers);
console.log("Total browsers (length)  :", browsers.length); // Output: 5


// ─────────────────────────────────────────────────────────────
// SECTION 3: Array.pop() Method
// ─────────────────────────────────────────────────────────────
/**
 * .pop()
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Removes the LAST element from the array and
 *              returns that removed element.
 * RETURN TYPE: The removed element (any type), or undefined if
 *              the array is empty.
 * MUTATES    : YES — modifies the original array in place.
 * SYNTAX     : array.pop()
 *
 * REAL-WORLD USE: Use pop() to remove the last browser from your
 * test queue once it has been processed, or to undo an
 * accidentally pushed browser target.
 */
console.log("\n═══════════════════════════════════════");
console.log("  SECTION 3: .pop() Method");
console.log("═══════════════════════════════════════");

let removedFromEnd = browsers.pop(); // Removes 'Edge' (last element)

console.log("Removed element (pop)    :", removedFromEnd);  // Edge
console.log("Array after pop()        :", browsers);        // ['Chrome', 'Firefox', 'Safari', 'Opera']
console.log("New length after pop()   :", browsers.length); // 4


// ─────────────────────────────────────────────────────────────
// SECTION 4: Array.shift() Method
// ─────────────────────────────────────────────────────────────
/**
 * .shift()
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Removes the FIRST element from the array and
 *              returns that removed element. All remaining
 *              elements are re-indexed (shifted down by 1).
 * RETURN TYPE: The removed element (any type), or undefined if
 *              the array is empty.
 * MUTATES    : YES — modifies the original array in place.
 * SYNTAX     : array.shift()
 *
 * PERFORMANCE NOTE: shift() is slower than pop() for very large
 * arrays because it must re-index every remaining element.
 *
 * REAL-WORLD USE: Use shift() to process browsers in a queue
 * (FIFO - First In, First Out) — e.g., run tests on Chrome
 * first, then remove it and move to the next browser.
 *
 * DIFFERENCE vs pop():
 *   pop()   → removes from the END   (last  element)
 *   shift() → removes from the START (first element)
 */
console.log("\n═══════════════════════════════════════");
console.log("  SECTION 4: .shift() Method");
console.log("═══════════════════════════════════════");

let removedFromStart = browsers.shift(); // Removes 'Chrome' (first element)

console.log("Removed element (shift)  :", removedFromStart); // Chrome
console.log("Array after shift()      :", browsers);         // ['Firefox', 'Safari', 'Opera']
console.log("New length after shift() :", browsers.length);  // 3


// ─────────────────────────────────────────────────────────────
// SECTION 5: Array Iteration using for Loop
// ─────────────────────────────────────────────────────────────
/**
 * for Loop with Array
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : A standard 'for' loop iterates over each element
 *              of the array using its numeric index (0, 1, 2...).
 * SYNTAX     : for (let i = 0; i < array.length; i++) { }
 *
 * WHY USE INDEX-BASED LOOP?
 * When you need the current index number alongside each element
 * (e.g., for logging, conditional checks, or accessing nearby
 *  elements), the index-based 'for' loop is the best choice.
 *
 * REAL-WORLD USE IN PLAYWRIGHT:
 * Loop through a list of browsers, launch each one, and run
 * your test suite — checking for incompatible browsers to skip.
 */
console.log("\n═══════════════════════════════════════");
console.log("  SECTION 5: Iterating Remaining Browsers");
console.log("═══════════════════════════════════════");

for (let i = 0; i < browsers.length; i++) {

    // Print the current browser name along with its index position
    console.log(`  [Index ${i}] Browser: ${browsers[i]}`);

    // Conditional check — Playwright does NOT support Opera officially
    if (browsers[i] === "Opera") {
        console.log(`  ⚠  WARNING: "${browsers[i]}" is NOT supported in Playwright.`);
        console.log(`     Playwright supports only: Chromium, Firefox, and WebKit.`);
    }
}

console.log("\n═══════════════════════════════════════");
console.log("  END OF DEMO");
console.log("═══════════════════════════════════════");
