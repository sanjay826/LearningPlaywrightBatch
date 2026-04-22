console.log("Test 1: Started");
setTimeout(function (){
    console.log("Test 2 : API Response received")
},2000);
console.log("Test 3: Moving to the next last");

/* 
# Why does Test 3 print before Test 2  
Ans: Because setTimeout is async - it says run this after 2 seconds and javascript is 
     immediately moves to the next line. it does NOT wait 
*/