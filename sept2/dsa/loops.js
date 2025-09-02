// for (let i = 1; i <= 10; i++) { 
//     console.log(`${i}. Hello World`);
// }

//CW1: WAP to pring table of number in following format
// 5 * 1 = 5        5 * 10 = 50
// 5 * 2 = 10       5 * 9 = 45
// 5 * 3 = 15       5 * 8 = 40
// ...
// 5 * 10 = 50      5 * 1 = 5

let num = 5;
// for(let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i} \t\t ${num} * ${11 - i} = ${num * (11 - i)}`);
// }


// for(let i = 1, j = 10; i <= 10; i++, j--) {
//     console.log(`${num * i} \t\t ${num * j}`);
// }


//CW2: WAP to pring FizzBuzz from 1 to n
// if number is multiple of 3 print Fizz
// if number is multiple of 5 print Buzz
// if number is multiple of both 3 and 5 print FizzBuzz
// else print the number itself

// var n = 30;
// for(let i = 1; i <= n; i++) {
//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if(i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }







//CW3: WAP to find first n fibonacci numbers
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

var n = 10;

var a = 0, b = 1;

console.log(a);
console.log(b);

for(let i = 3; i <= n; i++) {
    var c = a + b;
    console.log(c);
    a = b;
    b = c;
}

//HW: WAP to print first n prime numbers
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...

