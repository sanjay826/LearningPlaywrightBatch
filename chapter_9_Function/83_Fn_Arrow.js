// Arrow Function (ES6)

const greet = function(name1){
    return `Hello - ${name1}`
}

const greet1 = (name2) => `Hello - ${name2}`;

console.log(greet('Sanjay Kumar'));
console.log(greet1('Sanjay Kumar'));

// If you want to make a normal arrow function 
// Remove the keyword function remove the keyword return , remove the curly braces , 

const doubleIT = n => n*2;
console.log(doubleIT(10));

// No params - parans required 
const getEnv = () => "Staging";
console.log(getEnv());

// Suppose we have a multiline . can we use arrow funtion everywhere?
// Multi-Line - needs curly braces + return

const getResult = (score) => {
    if(score >=70) return 'pass';
    return 'fail'; 
}

const getResult1 = (score) => score >= 70 ? 'pass' : 'fail';
