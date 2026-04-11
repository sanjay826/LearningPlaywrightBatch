let original = [1,2,3]; 

// Method- 1 to copy 
let copy1= [...original]; 
console.log(copy1);

// Method- 2 to copy 
let copy2 = original.slice();
console.log(copy2);

// Method- 3 to copy
let copy3 = Array.from(original);
console.log(copy3);

// Method- 4 to copy
let copy4 = original.concat();
console.log(copy4);

//============= Shallow Copy - Original is not going to change 
copy1.push(99);
console.log("Original One :",original);
console.log("Copy One :",copy1);

// Depp Copy (JSON)
original.push(99);
console.log(original);
console.log(copy1);


