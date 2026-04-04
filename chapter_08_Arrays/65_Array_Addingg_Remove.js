/**
 * ============================================================
 *  FILE     : 65_Array_Addingg_Remove.js
 *  CHAPTER  : 08 - Arrays in JavaScript
 *  TOPIC    : Adding & Removing Elements from Arrays
 *  AUTHOR   : Promod Dutta
 * ============================================================
 *
 *  METHODS COVERED IN THIS FILE:
 *  ─────────────────────────────
 *  1. push()   → Adds one or more elements to the END
 *  2. pop()    → Removes the LAST element
 *  3. unshift()→ Adds one or more elements to the BEGINNING
 *  4. shift()  → Removes the FIRST element
 *  5. splice() → Adds / Removes / Replaces elements at any index
 *
 *  VISUAL SUMMARY (Quick Reference):
 *  ──────────────────────────────────
 *
 *   ┌─────────────────────────────────────────────┐
 *   │  unshift()  →→→  [ A, B, C, D ]  →→→  push() │
 *   │  shift()    ←←←  [ A, B, C, D ]  ←←←  pop()  │
 *   │               splice() → anywhere inside       │
 *   └─────────────────────────────────────────────┘
 *
 *  REAL-WORLD CONTEXT (Playwright / Test Automation):
 *  ───────────────────────────────────────────────────
 *  These methods are essential when dynamically building test
 *  data arrays — e.g., adding new test browsers to a queue,
 *  removing already-tested browsers, or injecting a specific
 *  browser at a certain index for priority testing.
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
// Initial Array Setup
// ─────────────────────────────────────────────────────────────
let arr = [1, 2, 3];
console.log("═══════════════════════════════════════════════");
console.log("  Initial Array");
console.log("═══════════════════════════════════════════════");
console.log("arr →", arr); // [1, 2, 3]


// ─────────────────────────────────────────────────────────────
// SECTION 1: push() — Add to the END
// ─────────────────────────────────────────────────────────────
/**
 * .push(...items)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Adds one or more elements to the END of an array.
 *              Returns the NEW length of the array after adding.
 * RETURN TYPE: Number (new length of the array)
 * MUTATES    : YES — modifies the original array in place.
 * SYNTAX     : array.push(item1, item2, ...)
 *
 * REAL-WORLD USE: Dynamically add a new browser or URL to the
 * end of your test queue before the suite begins execution.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 1: push() — Add to the END");
console.log("═══════════════════════════════════════════════");

arr.push(4);                    // Adds single element at the end
console.log("After push(4)      →", arr);  // [1, 2, 3, 4]

arr.push(5, 6);                 // Adds multiple elements at once
console.log("After push(5, 6)   →", arr);  // [1, 2, 3, 4, 5, 6]


// ─────────────────────────────────────────────────────────────
// SECTION 2: pop() — Remove from the END
// ─────────────────────────────────────────────────────────────
/**
 * .pop()
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Removes the LAST element from the array and
 *              returns that removed element.
 * RETURN TYPE: The removed element, or undefined if array is empty.
 * MUTATES    : YES — modifies the original array in place.
 * SYNTAX     : array.pop()
 *
 * REAL-WORLD USE: Remove the last browser from the queue after
 * its tests have been completed (LIFO — Last In, First Out).
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 2: pop() — Remove from the END");
console.log("═══════════════════════════════════════════════");

let poppedItem = arr.pop();     // Removes and returns last element (6)
console.log("Removed via pop()  →", poppedItem);   // 6
console.log("Array after pop()  →", arr);           // [1, 2, 3, 4, 5]


// ─────────────────────────────────────────────────────────────
// SECTION 3: unshift() — Add to the BEGINNING
// ─────────────────────────────────────────────────────────────
/**
 * .unshift(...items)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Adds one or more elements to the BEGINNING of
 *              an array. All existing elements are shifted right
 *              (their indexes increase). Returns the new length.
 * RETURN TYPE: Number (new length of the array)
 * MUTATES    : YES — modifies the original array in place.
 * SYNTAX     : array.unshift(item1, item2, ...)
 *
 * PERFORMANCE NOTE: Slower than push() for large arrays because
 * every existing element must be re-indexed.
 *
 * REAL-WORLD USE: Insert a high-priority browser (e.g., Chrome)
 * at the front of the test queue so it runs first.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 3: unshift() — Add to the BEGINNING");
console.log("═══════════════════════════════════════════════");

arr.unshift(0);                 // Adds 0 at the very beginning
console.log("After unshift(0)   →", arr);  // [0, 1, 2, 3, 4, 5]


// ─────────────────────────────────────────────────────────────
// SECTION 4: shift() — Remove from the BEGINNING
// ─────────────────────────────────────────────────────────────
/**
 * .shift()
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : Removes the FIRST element from the array and
 *              returns that removed element. All remaining
 *              elements are re-indexed (shifted left by 1).
 * RETURN TYPE: The removed element, or undefined if array is empty.
 * MUTATES    : YES — modifies the original array in place.
 * SYNTAX     : array.shift()
 *
 * REAL-WORLD USE: Process browsers in a queue order (FIFO —
 * First In, First Out). Remove from the front after running tests.
 *
 * KEY DIFFERENCES (Quick Reference):
 * ┌──────────┬──────────────────┬────────────────────────────┐
 * │ Method   │ Position         │ Action                     │
 * ├──────────┼──────────────────┼────────────────────────────┤
 * │ push()   │ END              │ ADD one or more elements   │
 * │ pop()    │ END              │ REMOVE one element         │
 * │ unshift()│ BEGINNING        │ ADD one or more elements   │
 * │ shift()  │ BEGINNING        │ REMOVE one element         │
 * └──────────┴──────────────────┴────────────────────────────┘
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 4: shift() — Remove from the BEGINNING");
console.log("═══════════════════════════════════════════════");

let shiftedItem = arr.shift();  // Removes and returns first element (0)
console.log("Removed via shift() →", shiftedItem);  // 0
console.log("Array after shift() →", arr);           // [1, 2, 3, 4, 5]


// ─────────────────────────────────────────────────────────────
// SECTION 5: splice() — Add / Remove / Replace ANYWHERE
// ─────────────────────────────────────────────────────────────
/**
 * .splice(startIndex, deleteCount, ...itemsToInsert)
 * ─────────────────────────────────────────────────────────────
 * DEFINITION : The most powerful array mutation method.
 *              It can REMOVE, INSERT, or REPLACE elements at
 *              any position in the array simultaneously.
 *              Returns an array of the REMOVED elements.
 *
 * PARAMETERS:
 *   startIndex    → The index at which to start making changes.
 *                   Negative values count from the end (-1 = last).
 *   deleteCount   → Number of elements to remove from startIndex.
 *                   Pass 0 to insert without removing anything.
 *   ...itemsToInsert → (Optional) Elements to INSERT at startIndex
 *                   after deletion.
 *
 * RETURN TYPE: Array of removed elements (empty array if none removed)
 * MUTATES    : YES — modifies the original array in place.
 * SYNTAX     : array.splice(startIndex, deleteCount, item1, item2, ...)
 *
 * REAL-WORLD USE: Inject a specific test case or browser at a
 * precise position, or remove a faulty entry mid-list.
 */
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 5: splice() — Add / Remove / Replace");
console.log("═══════════════════════════════════════════════");
console.log("Array before splice operations →", arr); // [1, 2, 3, 4, 5]

// --- 5a: REMOVE 1 element at index 2 ---
let removed1 = arr.splice(2, 1);   // Removes element at index 2 (value: 3)
console.log("\n  splice(2, 1) → Remove 1 item at index 2");
console.log("  Removed elements →", removed1);  // [3]
console.log("  Array after      →", arr);        // [1, 2, 4, 5]

// --- 5b: INSERT at index 2 without removing anything ---
arr.splice(2, 0, 99);   // Inserts 99 at index 2, removes nothing
console.log("\n  splice(2, 0, 99) → Insert 99 at index 2 (no removal)");
console.log("  Array after      →", arr); // [1, 2, 99, 4, 5]

// --- 5c: REPLACE 2 elements starting at index 1 with 10 and 20 ---
arr.splice(1, 2, 10, 20); // Removes 2 elements at index 1, inserts 10 & 20
console.log("\n  splice(1, 2, 10, 20) → Replace 2 items at index 1");
console.log("  Array after          →", arr); // [1, 10, 20, 4, 5]


// ─────────────────────────────────────────────────────────────
// SECTION 6: Final Operations (pop + push)
// ─────────────────────────────────────────────────────────────
console.log("\n═══════════════════════════════════════════════");
console.log("  SECTION 6: Final pop() and push()");
console.log("═══════════════════════════════════════════════");

arr.pop();              // Removes last element (5)
console.log("After final pop()  →", arr);   // [1, 10, 20, 4]

arr.push(6);            // Adds 6 at the end
console.log("After final push(6)→", arr);   // [1, 10, 20, 4, 6]

console.log("\n═══════════════════════════════════════════════");
console.log("  END OF DEMO — Final Array:", arr);
console.log("═══════════════════════════════════════════════");
