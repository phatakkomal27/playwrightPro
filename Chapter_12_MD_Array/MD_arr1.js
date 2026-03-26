let grid = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];
console.log(grid[0][0]);
console.log(grid[0][1]);

grid[1][1]=50;
console.log(grid[1][1]);

console.log(grid.length);//no of row
console.log(grid[0].length);//no of column 

let testMatrix = [
   ["login","pass",200],
   ["checkout","fail",400],
   ["search","pass",500]

];

for(let i=0;i<testMatrix.length;i++)
{
    for(let j=0;j<testMatrix[i].length;j++)
    {
        console.log(testMatrix[i][j]);
    }
    console.log("");
}
console.log("-----------------------------");
for(let r in testMatrix)
{
    for (let cell of r)
    {
        console .log(cell);
    }
}