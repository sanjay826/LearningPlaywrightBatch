// Slicing & Combining

let arr = [1, 2, 3, 4, 5]

// slice(start , end) - returns new array, does NOT mutate  Actual -> (start , end -1) index =0 ; 
// Dont give the end, it will automatically take start to end !
console.log(arr.slice(1,3));
console.log(arr.slice(2,4));

console.log(arr.slice(-2));
console.log(arr.slice(2)); // Start from 2 and last of index  [ 3, 4, 5 ]
console.log(arr.slice(0));
console.log(arr.slice(-5));
console.log(arr.slice(2 , 5));

// Concatination  

let arr1 = [1, 2, 3, 4, 5]

let a = [1, 2, 3];
let b = [4 , 5 , 6];
let c  = a.concat(b);
console.log(c)

// Spread (modern way)  -> concatenation . (...)

let d = [...a,...b];
console.log(d);

// ..., ==== 
// Join 
let s = ["pass", "fail" , "skip"].join(" | ");
console.log(s)

//   


