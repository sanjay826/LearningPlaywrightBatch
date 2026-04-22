//  *
//  * * 
//  * * * 

let n=3;

for(let i=1; i<=n;i++){
    let row = "";
    for(let j=1;  j<=i; j++ ){
        row += "* ";
    }
    console.log(row.trim());
}

// ForEach Loop 
console.log("---------ForEach Loop -----------");

let m = 4;

// create an array of size n
Array.from({ length: m }).forEach((_, i) => {
    let row = "";

    // inner loop using forEach
    Array.from({ length: i + 1 }).forEach(() => {
        row += "* ";
    });

    console.log(row.trim());
});

// 2. Pyramid Shape (Centered Triangle)
/* 
      *
     * *
    * * *
   * * * *
  * * * * *
 
 */
console.log("----------Pyramid Shape (Centered Triangle");
let str=5;
for(i=1;i<=str; i++){
    let row="";
    // spaces
    for(let s= 1; s<=str-1; s++){
        row += " ";
    }
    // star
    for(let j=1; j<=i; j++){
        row +="* ";
    }
    console.log(row.trimEnd());
}