// Rest parameter 

function logResult(suitName, ...results){
    console.log(`Suite : ${suitName}`);
    console.log(`Result : ${results.join(" ,")}`);

}

logResult("Auth Suite", "pass", "Fail","Pass","Skip")

function add(a, b , c){
    return a+b+c;
}

let nums = [1,2,3]

add(...nums) // same as add(1,2,3) -> 6

// Spread response code into validator 

function hasError(...codes){
    return codes.some(c => c>=400);
}

let responseCode = [200,2001,404];
hasError(...responseCode);