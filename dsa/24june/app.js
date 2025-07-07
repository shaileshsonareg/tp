let tailer = (flag) => {
    return new Promise((resolve, reject) => {
        console.log("Preparing Dress started...");
        setTimeout(() => {
            if(flag)
                resolve("Apka designer dress ready hai");
            else
                reject("dress press karte time jal gayi")
        }, 8000)

    })
}

let chef = new Promise((resolve, reject) => {
    console.log("Cake preparation started...");
    
    setTimeout(() => {
        resolve("Cake ready hai")
    }, 3000)
})


tailer(false).then((res) => {
    console.log(res);
}).catch((rej) => {
    console.error(rej);
})

chef.then((res) => {
    console.log(res);
})























//Javascript => Browser Engine
    //chrome => V8
    //firefox => spidermonkey

// console.log("Hello World");

// setTimeout(() => { //macro queue
//     console.log("Set Timeout 1");
// }, 0)

// Promise.resolve().then(() => { //micro queue
//     console.log("Promise 1");
// })

// setTimeout(() => { //macro queue
//     console.log("Set Timeout 2");
// }, 0)

// Promise.resolve().then(() => { //micro queue
//     console.log("Promise 2");
// })

// console.log("Bye World")






















// arr = [1, 3, 5, 9, 13, 17, 19]

// search = 9

// O(1)
// O(n)

// space complexity => O(1)

// HW: WAP to find number using binary search

// arr1 = [1, 2, 4, 6, 9]
// //algorithm 
// //Time complexity best and worst
// //Space complexity 
// console.log(arr2) //[1, 3, 16, 36, 81]



















/** WAP to print following patter 
 * 
o/p:-
1
12
123
1234
12345

12345
1234
123
12
1
*/
//WAP to print fibonacci series

// HW: WAP to print Pyramid pattern
//     *
//    ***
//   *****
//  *******
// *********



// n = 5
// cnt = 0;
// for(let row = 0; row < n; row++) {

//     output = ""
//     for(let col = 0; col < n; col++) {
//         cnt++;
//         output += " * "
//     }
//     console.log(output);
    
// }
// console.log("COUNT", cnt);

