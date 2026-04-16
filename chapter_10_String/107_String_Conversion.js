// string conversion

// to String 
(200).toString(); // 200
true.toString();  // true 

Number("42") // 42
parseInt("42px");  // 42

parseFloat("3.14rem")   // 3.14

let str = "Hello"  // Things are immutable in nature in JavaScript
str[0] = "H";
console.log(str);
console.log(str); 

let upper = str.toUpperCase();

console.log(str)
console.log(upper);