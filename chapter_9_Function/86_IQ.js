
function runTest(name,status, duration){
    return `${name},${status},(${duration} ms)`;
}

// argument 
 test =runTest('Login','Pass','320');
console.log(test);
