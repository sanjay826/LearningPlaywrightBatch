let grade ;
let score =75;

if(typeof score!== "number"){
    console.log("Are you Chutiya !!!");
    return;
}

if(score< 0 || score >100){
    console.log("Definataly you are big Chutiya !!");
    return;
}

if(score >90){
    grade = "A"
} else if(score> 80){
    grade ="B"
} else if(score >70){
    grade ="C"
} else if(score> 60) {
    grade = "F"
}

console.log(`Your score is ${score} and your Grade : ${grade}`);