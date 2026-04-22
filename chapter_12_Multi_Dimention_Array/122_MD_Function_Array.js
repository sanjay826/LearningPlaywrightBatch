let score = [
    [85,90,78],
    [65,45,70],
    [95,88,93]
];

let rowSums = score.map(row => row.reduce((a,b) => a + b ,0));
console.log(rowSums);

let suitResults = [
    ["login pass" , "register-pass", "logout-pass"], // auth suite 
    ["Search pass", "filter fail","short pass"] ,  // search suite 
    ["checkout-fail", "payment-fail", "confirm-pass"]
];

for(let i=0;i<suitResults.length;i++){
    for(let j=0; j<suitResults[i].length;j++){
        if(suitResults[i][j].includes("fail")){
            console.log(suitResults[i][j]);
        }
    }
}

let execTimes = [
    [120, 340, 89, 450], // dev
    [200, 410, 100, 520], // staging
    [180, 390, 95, 490]   // prod
];

let envNames = ["DEV", "STAGING", "PROD"];

for (let i = 0; i < execTimes.length; i++) {
    for (let j = 0; j < execTimes[i].length; j++) {
        if (execTimes[i][j] > 200) {
            console.log(
                `${envNames[i]} → API ${j + 1} is slow: ${execTimes[i][j]} ms`
            );
        }
    }
}
console.log("--------For Each Loop -------")
// Another way : 
execTimes.forEach((env, i) => {
    env.forEach((time, j) => {
        if (time > 200) {
            console.log(`Env ${i} → API ${j + 1}: ${time} ms (SLOW)`);
        }
    });
});