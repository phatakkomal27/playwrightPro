//multi dimentional array

let matrix=[1,2,3];
console.log(matrix);
let m2 = [
[12,13],
[14,15]
];
console.log("2*2 array="+m2);

let m3 = [
[1,2,3],
[4,5,6,7],
[8,9]
];
console.log("m*n="+ m3);
for(let i=0;i<m3.length;i++)
{
    for(let j=0;j<m3.length-1;j++)
    {
        console.log(m3[i][j]);
    }
}