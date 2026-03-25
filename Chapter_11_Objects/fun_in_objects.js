let calculator = {
 value : 0,
 add(n)
 {
    this.value+=n;
    return this;
 },
 substraction(n)
 {
    this.value-=n;
    return this;
 }

};
let v= calculator.add(5).substraction(2).value;
console.log(v);