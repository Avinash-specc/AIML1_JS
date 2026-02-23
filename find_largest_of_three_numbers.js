let a = 10;
let b = 14;
let c = 12;

let largest = (a>b)?(a>c?a:c):(b>c?b:c)
console.log(`${largest} is largest.`)