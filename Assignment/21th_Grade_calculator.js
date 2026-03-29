/**
 *  Grade Calculator
 *  Write a Program that calculates and displays the letter grade for a given numerical score (e.g)
 *  (A B C D or F) based on the following grading scale 
 *  A : 90 -100
 *  B : 80 - 89
 *  C : 70 - 79
 *  D : 60 - 69
 *  E : 0 - 59
 */

console.log("===Grade Calculator==");

let score = 92;

if(score >= 90 || score <=100){
    console.log(" Grade - A !")
} else if (score >=80 || score <=89){
    console.log(" Grade - B !")
} else if (score >=70 || score <=79){
    console.log(" Grade - C !")
}else if (score >=60 || score <=69){
    console.log(" Grade - D !")
}else if (score >=0 || score <=59){
    console.log(" Grade - F !")
} else {
    console.log("Incorrect input")
}


// Enhance way 
/**
 * Grade Calculator
 * Calculates letter grade based on score
 */

console.log("=== Grade Calculator ===");

let score1 = "70";

if (score1 >= 0 && score1 <= 100) {
    if (score1 >= 90) {
        console.log("Grade - A");
    } else if (score1 >= 80) {
        console.log("Grade - B");
    } else if (score1 >= 70) {
        console.log("Grade - C");
    } else if (score1 >= 60) {
        console.log("Grade - D");
    } else {
        console.log("Grade - F");
    }
} else {
    console.log("Invalid input! Score must be between 0 and 100.");
}1