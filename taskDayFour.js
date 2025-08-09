// //Q1 

// //a | generate random number (1 - 100) using Math 

let a = Math.random() * 100;
let b = Math.floor(a);
console.log(b);

// //b | find max and min

let arr=[23,45,67,12,89,3];

console.log(Math.min(...arr));
console.log(Math.max(...arr));

// //c | func to find sqaure root

function squareRoot(num){
    let x = Math.sqrt(num);
    console.log(x);
}
squareRoot(25);

//Q2 add to array-from of integer

let num = [1,2,3,4,0,0];
let k = 85;
console.log(String(Number(num.join(""))+k).split("").map(Number));
