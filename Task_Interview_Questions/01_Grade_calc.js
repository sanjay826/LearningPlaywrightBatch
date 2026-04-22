let grade ;
let score =75;

if(typeof score!== "number"){
    console.log("Please enter a valid number");
    process.exit();
}

if(score< 0 || score >100){
    console.log("Score must be between 0 and 100");
    process.exit();
}

if(score >90){
    grade = "A"
} else if(score> 80){
    grade ="B"
} else if(score >70){
    grade ="C"
} else if(score> 60) {
    grade = "D"
} else {
    grade = "F"
}

console.log(`Your score is ${score} and your Grade : ${grade}`);