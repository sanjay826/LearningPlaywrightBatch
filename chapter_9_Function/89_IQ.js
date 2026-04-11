// Return value 
// IQ : 1
function getStatus(code){
    if(code >= 200 && code <300) return "Success";
    if(code>= 400 &&  code < 500) return "Client Error";
    if(code>= 500) return "Server Error";
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));

// IQ :2 
function logTest(name){
    console.log(`Running : ${name}`)

}
 let results = logTest('Login');
 console.log(results);

 // IQ : 3

 greet("Alice")

 function greet(name){
    return `Hello, ${name}`;
 }

 // IQ : 4  : 

 sayHi("Alice"); // ❌ Error

const sayHi = function(name){
   return `Hello, ${name}`;
};

/**
 *  Reason:
 * const greet is hoisted, but not initialized
 * It stays in Temporal Dead Zone (TDZ) 
 * 
 */

/*
Quick Comparison:

Type              Hoisted?  Can call before declaration?
Function Decl.    Yes       Yes
Function Expr.    No        No
Arrow Function    No        No
*/

