// Accessing & Modifying 
let statuses = ["Pass","Fail","Skip"];

console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1)); // last element 
console.log(statuses.at(-2)); 
console.log(statuses.at(-3)); 
console.log(statuses.at(-4)); 

// modify 
statuses[1] = "Blocked";
console.log(statuses);

// length
console.log(statuses.length);