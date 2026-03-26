
let scores = [
[1,2,3],
[4,5,6,7],
[8,9]
];

let rowSum = scores.map(row=>row.reduce((a,b)=>a+b,0));
console.log(rowSum);