// What is the output ?
let arr= [1,2,3];
let copy = arr;
copy.push(4);
console.log(arr.length); 
// A - 3 , B - 4 , C- Undefined , D- Error 

// Ans - B - 4 -> Copy is reference, not a new array. Both point the same array 

//Which expression correctly extracts `"staging"` from `https://staging.example.com` according to the notes?

 // staging

let url = "https://staging.example.com";
console.log(url.split(".")[0]);

// A - url.split(".")[1];
// B - url.split(".")[0];
// C - url.split(".")[2];
// D - url.split(".")[3];

// Ans - A - url.split(".")[1]; 

// 4. You have let codes = [200, 404, 500, 201] . Which correctly checks if ANY request failed 
let codes = [200, 404, 500, 201];
let anyFailed = codes.some(status => status >= 400);
console.log(anyFailed); // true if any request failed

//5.  What is ouput ? [10 ,1, 21, 2].sort() return? 
 // A. [1 ,2 ,10 ,21]
 // B. [ 1, 10, 2, 21]
 // C. [21 , 10, 2, 1]
 // D. [10 , 1 ,21 ,2]

 // B . B. [ 1, 10, 2, 21] - default sort compares as strings, not number

 //6. What is output ?
 let tests  = ["login", "Search", "Checkout"];
 console.log(tests.at(-1));

 // 1. Undefined 
 // 2. Login
 // 3. Checkout
 // 4. -1 
 // Answer - Checkout

 // 7. Which method would you use to turn ["2024", "03","7"];
 // a. Concat()
 // b. Join("-")
 // C. toStrung()
 // D. Flat()

 // Answer - B. Join("-")

 //8. What does Array.isArray({length :3 , 0: "a"}) return ?
 // A. True 
 // B . false 
 // c. undefined 
 // d. Error 
  let q8=Array.isArray({length :3 , 0: "a"});
  console.log(q8);
 // Ans : false  it's an array like object, not an actual array 
 
 // 9. What is output? 
let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc ,r ) => {
    acc[r] = (acc[r] || 0) +1 ; 
    return acc; 

}, {});
console.log(counts.pass);







