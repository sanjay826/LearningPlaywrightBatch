// Higher Function 
// A function that takes a function as argument  or returns a function 

function runWithLogin(testfn , testName){
    console.log(`starting :  ${testName}`);
    let result = testfn();
    console.log(`Finished : ${testName} -> ${result}`);
    return result;
}

function loginTest(){
    return "pass"
}

function loginTestFailed(){
    return 'Fail'
}

runWithLogin(loginTest , "Login Test");
runWithLogin(loginTestFailed , "Dashboard Failed Test");