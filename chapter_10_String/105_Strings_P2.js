// Extracting Substrings

    let str = "Login_Test_Pass_001"

// Slice (start , end ) - negative indexes supported 
console.log(str.slice(0,5));  // 0 - 4
console.log(str.slice(11));  //  will start from 11 Pass_001
console.log(str.slice(-3));   //  001


// substring (start , end ) - no negative ( treats as 0);
console.log(str.substring(6, 10));   // Test
console.log(str.substring(-3));   // Test

// at() for single chars
str.at(0);   // L
str.at(-1) //  1





