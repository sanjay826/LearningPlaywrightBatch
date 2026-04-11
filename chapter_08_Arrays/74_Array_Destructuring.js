/* let [first , second , third] = [10 , 20 , 30]; 
console.log(first);
console.log(second);
console.log(third); */

let [first , second , ...third] = [10 , 20 , 30 , 40, 50, 60 ,70]; 
console.log(first);
console.log(second);
console.log(third);

/** 
 * What does ["pass" , "fail" , "skip"].indexOf("skip") return ? 
 * a) 1
 * b) 2
 * c) 3
 * d) -1
 * Ans =  B 2 
*/
let b =["pass" , "fail" , "skip"].indexOf("skip"); 
console.log(b); // 2

/**
 * Which method returns a NEW array without mutating the original? 
 *  a) push()
 *  b) splice()
 *  c) filter()
 *  d) sort()
 * Ans - Filter()
 */

