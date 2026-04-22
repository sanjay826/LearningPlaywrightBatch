let grid = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

//3x3
// access - [row][col]
console.log(grid[0][0]);
   // grid[2][1] - > 80
   // grid[1][2] ->  60

grid[0][0]=99;
console.log(grid[0][0]);
console.log(grid);

// length
console.log(grid.length); // 3- number of rows
console.log(grid[0].length); // 3- number of col in  rows 0

console.log(grid[grid.length-1][grid[0].length-1]); // last element 
// grid[2][2]

let testMatrix = [
    ["login","pass", 200],
    ["checkout","fail",404],
    ["search","pass",180]
];

for(let i=0; i<testMatrix.length;i++){
    for(let j=0;j<testMatrix.length;j++){
        console.log(testMatrix[i][j]);
    }
    console.log();
}

// for of loop 

console.log("-------------------");
for(let row of testMatrix){
    for(let cell of row){
            process.stdout.write(cell +" ");
    }
    console.log();
}
console.log("-----------------------------");

console.log("----ForEach Loop---------");
// ForEach loop
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});

