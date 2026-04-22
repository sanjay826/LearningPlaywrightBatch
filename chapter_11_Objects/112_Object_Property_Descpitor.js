let obj = {name : "Login"};
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// Value : login
// writable : true  - can change the value 
// enumerable - true   <- shows  int for...in / Object.keys()
// configurable : true  <- can delete or redefine 


