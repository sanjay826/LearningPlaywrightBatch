//@Question -  What is callback function 
// A callback is a function passed as an argument to another function , to be called later. 

function runTest(testName, callback ){
    let result = 'Pass';
    callback(testName , result);
}

function onComplete(name , result){
    console.log(`${name} finished with : ${result}`)
}

runTest("loginTest", onComplete);