// url = "https://jsonplaceholder.typicode.com/users"

// async function getUsers() {
//     var res = await fetch(url)
//     var users = await res.json()
//     console.table(users);
// }

// getUsers()


[].reduce()



// //call stack P0
// console.log("Start");

// //task queue P2
// setTimeout(() => {
//     console.log("Set Timeout");
// }, 0)

// //micro task queue P1
// Promise.resolve().then(() => {
//     console.log("Promise");
// })

// //callstack P0
// console.log("End");



















// function add(...arr) {
//     sum = 0
//     for(let x of arr)
//         sum = sum + x
//     console.log(sum);
    
// }

// add(1, 2)
// add(1, 2, 3)
// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5)

// arr1 = [1, 2, 3]
// arr2 = [4, 5, 6]
// arr3 = [...arr1, ...arr2]
// console.log(arr3);
// arr4 = [...arr2, 7, 8, 9]
// console.log(arr4);