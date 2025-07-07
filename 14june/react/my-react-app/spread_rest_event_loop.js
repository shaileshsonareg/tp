var store = {}

console.log(store);

store = {...store, x : 10}

console.log(store);

store = {...store, nums: [1, 2, 3, 4, 5]}

console.log(store);


// console.log("Start");


// setTimeout(() => { 
//     console.log("Set Timeout");
// }, 0)

// Promise.resolve().then(() => {
//     console.log("Promise");
// })

// console.log("End");



// function add(...arr) {
//     console.log(arr.reduce((t, x) => t + x));
// }

// add(1, 2)
// add(1, 2, 3)
// add(1, 2, 3, 4, 5)