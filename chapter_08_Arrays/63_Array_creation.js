// Array
let fruit=[]; // Emplty array 
let fruits_fresh = ["Apple", "Banana", "Cheery"]

let arr = [10,20,30,40] //
console.log(arr.length); // why don't use small baraket in arr.lenth()? lenth is property 
console.log(arr[0]); // 10
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

let testResult = ["Pass", "Fail", "Pass", "skip"]

let mixed =[1, "Hello", true, null]; // JS array can hold any type 

// Creating Array 

// array Literal (preferred)
let browser = ["Chrome","Firfox", "Safari"];


// Array cunstructor 
let scroes = new Array(3);
let score = new Array(1,2,3);

let numbers = new Array(100,200,300,400);
console.log(numbers);

let test =Array.of(10,20,30,40,50);
console.log(test);
console.log(test[0]);

// Array.from
let chars = Array.from("Hello");
console.log(chars);