console.log("Hello World");

setTimeout(()=> {
    console.log("Hello from set time out");
}, 0)

new Promise((res) => res()).then(() => {
    console.log("Hello from ...then()");
});

console.log("Bye World");


















// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => {
//     console.table(data)
// })


// async function getUsers() {
//     var data = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
//     console.table(data);
// }

// getUsers()


















// dress = (flag) => {
//     return new Promise((res, rej) => {
//         console.log("Dress prepartion started...");
        
//         setTimeout(() => {
//             if(flag == true)
//             res("Dress ready hai, lekar jao")
//             else 
//             rej("Dress jal gaya Baiju bhai, aap diamond ring lekar jao ya fir apne liye bandaid")
//         }, 8000)

//     })

// }

// cake = new Promise((res, rej) => {
//     console.log("Cake prepartion started...");
    
//     setTimeout(() => {
//         res("Cake ready hai, lekar jao")
//     }, 3000)

// })

// dress(false).then(res => {
//     console.log(res);
// }).catch(rej => {
//     console.error(rej);
// })

// cake.then(res => {
//     console.log(res);
// })




























// class Circle {
//     constructor(r) {
//         this.radius = r
//         console.log("I am creating circle object with radius", r);
//     }

//     area(){
//         console.log(3.14 * this.radius * this.radius);
//     }
    
//     circumference() {
//         console.log(2 * 3.14 * this.radius);
//     }

// }

// obj1 = new Circle(5)
// obj1.area()
// obj2 = new Circle(7)
// obj2.area()
// obj2.circumference()



















// rec1 = {name: "Mateen", age: 23, city: "New Mumbai"}
// rec2 = {name: "Abdul", age: 22, city: "Pune"}

// function printRec(temp_rec) {
//     const {name, age, city} = temp_rec
//     console.log(`Hello ${name}, How's weather in ${city}`);
//     console.log(`Hello ${name}, Tera age hai ${age}`);
// }

// printRec(rec1)
// printRec(rec2)





















// var arr1 = [1, 2, 3]

// var arr2 = [4, 5, 6]

// var arr3 = [...arr1, ...arr2]

// console.log(arr3);

// store = {}

// console.log(store);

// store = { name: "Shailesh"}

// console.log(store);

// store = {...store, age : 37}

// console.log(store);

// store = {...store, city: "Nagpur"}

// console.log(store);







// function add(x, y, z = 0){
//     return x + y + z
// }

// function add(...arr){
//     return arr.reduce((t, x) => t + x)
// }

// console.log(add(5, 6))
// console.log(add(5, 6, 7))
// console.log(add(5, 6, 7, 8))
// console.log(add(5, 6, 7, 8, 9))
// console.log(add(5, 6, 7, 8, 9, 10))


























// nums = [1, 2, 3, 4, 5]


// even_arr = []

// for(let x of nums)
//     if(x % 2 == 0)
//         even_arr.push(x)

// even_arr = nums.filter(x => x % 2 == 0)

// console.log(even_arr);










// sqr_arr = []

// for(let x of nums)
//     sqr_arr.push(x * x)

// sqr_arr = nums.map(x => x * x)
// cube_arr = nums.map(x => x * x * x)

// console.log(sqr_arr);
// console.log("Cube Arr: ", cube_arr);






// sum = 50;

// for(let x of nums)
//     sum += x       //sum = sum + x


//KISS => keep it simple stupid
// sum = nums.reduce((sum, x) => sum + x, 50) // where 50 is initial value 


// console.log("SUM: ", sum);




























// arr = [1, 2, 3, 4, 5, 6, 8, 7, 0, 9]

// console.log("Length: ", arr.length);

// for(let i = 0; i < 5; i++)
//     console.log(arr[i]);

// for(let x of arr)
//     console.log(x);
    
    














// function sqr(x) {
//     return x * x;
// }

// const sqr = function(x) {
//     return x * x;
// }

// const sqr = (x) => {
//     return x * x;
// }

// const sqr = (x) => x * x * x

// console.log(sqr(5))
// console.log(sqr(6))
// console.log(sqr(7))







// let x = 10
// x = 11
// console.log(`x = ${x}`);


// const PI = 3.14
// // PI = 4.14
// console.log("PI: ", PI);
