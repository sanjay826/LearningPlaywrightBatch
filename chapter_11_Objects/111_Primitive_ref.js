// Primitive Data type  - call by value 
// Primitive- number , string , boolean , null , undefined 

let a = 10;
let b=a ; 
b=99; 
console.log(a);
a=90;
console.log(a);

// Object - copied by REFERENCE , call by ref
// Reference - Object , array , function 
let obj1 = {val : 10};
let obj2 = obj1;
obj2.val =99;
console.log(obj1.val);
