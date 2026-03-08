//var , let, const
// var - function scoped.

var a = 10; // Global Scope

// Defination of the function
function test() {
  console.log("Hello Mr. Sanjay Kumar");
  var a = 20; // local Scope
  console.log(a);
  if (true) {
    var a = 30;
    console.log(a);
  }
  console.log(a);
}
// Calling of the function
test();

// let is block scope 
console.log("===========let is Block Scope=======");
let b =20;
console.log(b);

function printHello()
{
    console.log("Hell Mr. Sanjay Kumar");
    let b=30;
    console.log(b);
    if(true)
    {
        let b=40;
        console.log(b);
    }
}
printHello();

/* var nn="Sanjay";
   let nn="Sanjay"; // Error : Identifier nn has already been declared. */


// Const is block scope
/* const pi=3.14;
   console.log(pi);
   pi=3.14159 // Error : Assignment to constant variable. */




