
/**
 * JavaScript Type Coercion with Loose Equality (==)
 * Demonstrates how values are coerced when using loose equality operator
 */
// ============================================
// Numeric Coercion Examples
// ============================================

// Empty string coerces to 0
0 == ""      // true

// String "0" coerces to number 0
0 == "0"     // true

// Boolean false coerces to 0
0 == false   // true

// Whitespace string coerces to 0 in numeric comparison
"\t\n" == 0  // true

// ============================================
// null and undefined Comparison
// ============================================

// null and undefined are loosely equal ONLY to each other
null == undefined  // true

// null is NOT equal to other falsy values
null == 0      // false
null == ""     // false
null == false  // false

// undefined is NOT equal to other falsy values
undefined == 0      // false
undefined == ""     // false
undefined == false  // false
NaN == NaN          // false 

console.log("===== Output=====")
console.log(""=== false); //false 
console.log(""== false);   //  true 
console.log(null == undefined);  // true 
console.log(null === false);    // false 
console.log(0 == false);    // true 

console.log("0" == false) // true 
console.log(""== "0");    // false



