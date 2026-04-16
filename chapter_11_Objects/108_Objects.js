// Object 
// Keys and value 

let student1 = {name : 'Amit', age : 35}
console.log(student1);
let student2 = {name : 'Sanjay'}
let student3 = {name : 'Sanjay', age: 34, phone: 7004187984};

// keys will not be the doubt quotes 
// below key in doubt is actually JSON 

let JSON_student4 = {name : "Sanjay", age : 87, phone : 7004187984}

let a = {status : "Pass"};
console.log(a.status);
console.log(a["status"]);

// let a = {status id:  "pass"}; invalid

// Keys are case sensitive
let a1={status : "Pass", Status : "Fail"}
console.log(a1["status"]);
console.log(a1["Status"]);


let b =a; // b copies the Reference , not the object 
b.status = 'fail';
console.log(a.status);

// Two separate objects  - different memory
let c = {status : "pass"};
let d = {status : "pass"}
console.log(c===d); 

const t_Json = {
    "name" : "Sanjay",
    "age" : 30    
}
console.log(t_Json);


const t_Json = {
    name : "Sanjay",
    age : 30    
}
console.log(t_Json);




