const user = {

    name : "Sam",
    age: 30,
    email: "sam@example.com"
}

console.log(user)

// Accessing properties
console.log(user.name);
console.log(user.age);
console.log(user.email);

// Dynamic property access
const key = "email";
console.log(user[key]);

// Dynamic / modifying properties 
user.city = "NYC";
user.age = 35
console.log(user);

// Primitive data type  - call by value 
// Primitive , number , string , boolean , null , undefined 
let a = 10;
let b= a;
b=99;
console.log(a);

