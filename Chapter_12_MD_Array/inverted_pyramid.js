let n=5;
for(let i=n; i>=1;i--)
{ 
    let r="";
    for(let k=0;k<n-i;k++)
    {
       r+=" ";
    }
    
    for (let j=0;j<2*i-1;j++)
    {
        r=r + "*";
    }
    console.log(r);
}
