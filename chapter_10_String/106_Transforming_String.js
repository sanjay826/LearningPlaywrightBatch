// Transforming String

// Upper case and lower cases method 
let str = "   Hello World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim whitespaces 

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// replace 

let msg = "Test :Fail. retry : Fail" ;
console.log(msg.replace("Fail" , "Pass")); //  Test :Pass. retry : Fail (first only)

console.log(msg.replaceAll("Fail" , "Pass")); //Test :Pass. retry : Pass

console.log(msg.replaceAll(/Fail/g, "Pass"));  // replace all with Regex

// concatenation
"Hello" + " " + "World"
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;


let url = "https://app.vwo.com?q=search=promod"
console.log(url.replace(/app/g , "qa"));

// Splitting and Joining
"pass , fail, skip" .split(" , ") // ["pass" ,"fail", "skip"]
"Hello" .split("") // ["H","e","l","l","o"]

"test_login_pass".split("_").join(" ");  // "test login pass"

// Interview Question
// template literal (joining with format)
let parts = ["2024" ,"03", "07"];
let date = parts.join("-");
console.log(date); // 2024-03-07


