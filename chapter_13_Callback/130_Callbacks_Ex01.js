function greetTester(name, callback){
    console.log("Welcome , " +name);
    callback();
}

greetTester("Dev", function(){
    console.log("Lets start testing")
});

// callback with parameters 
function runTest(testName ,callback){
    let status = "Pass";
    callback(testName, status);  
}

runTest("Login Test", function(name , result){
    console.log(name + "->" +result)
});


let bugs =["UI glitch," , "API timeout ","wrong redirect"];

bugs.forEach(function( bug, i){
    console.log("Bug#" +(i+1)+ ":" +bug);
})

console.log("Total Bugs:" +bugs.length); 

// 103:36