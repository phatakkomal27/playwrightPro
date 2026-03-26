  /*
   *
  ***
 *****
*******
*/

let n=5;
for(let i=1; i<=n;i++)
{ 
    let r="";
    for(let k=1;k<=n-i;k++)
    {
       r+=" ";
    }
    
    for (let j=1;j<=2*i-1;j++)
    {
        r=r + "*";
    }
    console.log(r);
}
