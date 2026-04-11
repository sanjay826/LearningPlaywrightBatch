// checking Array
// check if something IS an array 

let result = Array.isArray([1 ,2 , 3]); 
console.log(result);

let result1 = Array.isArray(" a "); 
console.log(result1);

// every  : element should be true or pass 
let s = [80, 90 , 85,60].every(s => s < 70);
let s1 = [80, 90 , 85].every(s => s >= 70);
console.log(" Every Element : ",s);
console.log(" Every Element : ", s1);

// some - At Least one must pass 
let r = [80, 90 , 85 ,60].some(s => s < 70);
let r1 = [80, 90 , 85].some(s => s >= 70);
console.log("Some Element:" ,r);
console.log("Some Element:" ,r1);