/**
 * ========================================
 * COMPARISON OPERATORS
 * ========================================
 * These operators compare values and always return true or false
 * 
 * 1️⃣ = → Assignment Operator
 *    Used to assign a value to a variable
 *    Example: let x = 5;
 * 
 * 2️⃣ == → Loose Equality (Flexible Comparison)
 *    Compares only the VALUE
 *    Type conversion is allowed
 *    Example: 5 == "5" → true (values match, type ignored)
 * 
 * 3️⃣ === → Strict Equality (Strict Comparison)
 *    Compares both VALUE and TYPE
 *    No type conversion allowed
 *    Example: 5 === "5" → false (values match but types differ)
 *    More reliable and recommended in modern JavaScript
 */

// > , < ,>= ,<= ,  !  , !=
console.log(3 > 4);
console.log(3 < 4);
console.log(3 >= 4);
console.log(3 <= 4);

console.log(5 == "5")  // lose couple comparison 
console.log(5 === "5")  // stick not allowed 
console.log(5 != "5"); // False , 5 = int , "5" string, both of them are equal? - loose couple


console.log(5 !== "5")  
/**
 * 🔹 What does !== mean? 
 *  1. Value 
 *  2. Type 
 *  If either value OR type is different -> result true 
 *  
 *   5 → number
 *   "5" → string
 *   👉 Even though they look similar, their types are different
 *    
 *    🔹 What JavaScript checks internally
 *     Value: 5 vs "5" → looks same
 *     Type: number vs string → ❌ different
 *     ➡️ Because types are different → result is true
 *  */  

//console.log(5 !=== "5")  
/**
 * Why does this one not exist : console.log(5 !=== "5") ?
 * The short answer is simple: !=== is not a valid operator in JavaScript, so the code doesn’t even run.
 *🔹What operators JavaScript actually supports
 * JavaScript defines these comparison operators:
 *  == → loose equality
 *  === → strict equality
 * != → loose inequality
 * !== → strict inequality
 */

 // === Strick check we will check for data type and value.
 // == lose check we will check either value or data type. 

