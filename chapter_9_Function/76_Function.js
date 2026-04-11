/**
 * What is function ?
 * A function is reusable block of code that perform a specific task 
 * Instead of repeating logic you define it once call it whenever needed.
 *        
 *        1. Define / Defination a function 
 *        2. Calling of functions 
 *     Syntax : 
 *             function name(param){
 *                  code that you want to execute 
 *                  }
 *              Calling
 *              name(90);
 *   
 *   Basic function 
 *                   function greet(){
 *                     console.log("Hi")
 *                      }
 * 
 *  
 */ 

  

let score =85;
let result1 = score >= 70 ? "Pass" : "Fail";
console.log(result1);

let score1 =45;
let result = score1 >= 70 ? "Pass" : "Fail";
console.log(result);

function getResult(){
    
    return score1 >= 70 ? "Pass" : "Fail";

}

getResult(80);
getResult(50);

