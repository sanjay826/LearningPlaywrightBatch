/* 

Exercise 1 : API Response Validation
You receive an array of API response codes. Write code to:
Check if ALL responses are successful (200–299)
Find the FIRST non-success code
Return all unique error codes
let responses = [200, 201, 404, 500, 404, 200, 503]; 

*/

/* 

Exercise 2 — Spot the Bug
What is wrong with this code? Fix it.
let responseTimes = [320, 85, 1200, 450, 99];
console.log("Fastest:", sorted[0]);

 */

let responseTimes = [320, 85, 1200, 450, 99];
//let sorted = responseTimes.sort();
let sorted = responseTimes.sort((a, b) => a - b);
console.log("Fastest:", sorted[0]);