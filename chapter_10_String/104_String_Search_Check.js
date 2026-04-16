// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes() -  return True & false value 
url.includes("staging"); // true
url.includes("Production")    // false

// StartWith  / endWith
url.startsWith("https");      // true 
url.startsWith("http");      // false
url.endsWith("true")    // true


// indexOf  / lastIndexOf 
url.indexOf("a") ;    // 10
console.log(url.lastIndexOf("a"))    // 24
console.log(url.indexOf("Nothere"));

// search() - accepts regex  return index 
// Search basically works in a way that it search with regex 

console.log(url.search(/login/)); // regex 

