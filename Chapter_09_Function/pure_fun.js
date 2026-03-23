//pure and impure function
//pure : direct passing value
//impure : passing value through veriable

function calculatePassRate(total,passed)
{
    return ((total/passed)*100).toFixed();
}

console.log(calculatePassRate(10,7));

let threshold =70;
function isPassing(score)
{
    return score>=threshold;
}

console.log(isPassing(threshold));