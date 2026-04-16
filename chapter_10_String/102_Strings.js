// Strings 
let url = 'https://app.vwo.com';
let status = 'pass';
let message = `Test completed  in ${320}ms`;  // template literal 


// Hwo to Create String 

//1.  Single  Quotes 
let a = 'hello';

// Template literals (backticks ) - allows expressions  & multiline 
let name1 = "world";
let msg  = `Hello , ${name1}! 2+4 = ${2+4}`;
console.log(msg);

// Multiline 
let report = `Test : Login Status : Pass Duration: 320ms `

// String() constructor (converts other types)
console.log(String(200));
String(true); // true
String(null)  // null 
String([1,2]); // [1,2]