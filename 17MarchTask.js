//1.
console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}
//ans: c.Hello, Alice!

//2.
console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";
//ans: b.error

//3.
function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();
//ans: c.null

//4.
function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());
//ans= c.3

//5.Which is a pure function? a) function log(msg) { console.log(msg); } b) function add(a, b) { return a + b; } c) function getTime() { return Date.now(); } d) function push(arr, val) { arr.push(val); return arr; }
//ans = b

//6.
function test(...args) {
  return args.length;
}
console.log(test("login", "pass", 200, true));
//ans= c.4

//7.
const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());
//ans- b. undefined


//8.
function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
console.log([1, 2, 3].map(double).map(addOne)); 
//ans- b.[3, 5, 7] 



//9.
function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`)); 
//ans= b) "Running: Login"

//10.
function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());
//ans: b)30