// ES6 
// - let & const

// const PI = 3.14
// console.log(PI);

// for(i = 0; i < 10; i++) {
//     // console.log(i);
// }
// console.log(i);
    












// const PI = 3.14
// var x = 10

// - arrow function

// function sqr(x) {
//     console.log(x * x)
// }

// sqr = function(x) {
//     return x * x
// }

// sqr = (x) => {
//     return x * x 
// }

// sqr = (x) => x * x

// console.log(sqr(5))
// console.log(sqr(6))
// console.log(sqr(7))











// - for / of
// arr = [1, 3, 5, 7, 9]
// for(let i = 0; i < arr.length; i++) 
//     console.log(arr[i]);
    
// for(let x of arr)
//     console.log(x);
    












// - spread and rest
// function add(...arr) {
//     // console.log(arr);

//     sum = 0
//     for(let x of arr)
//         sum = sum + x

//     console.log(`Total: ${sum}`);
    
// }

// add(5, 6)
// add(5, 6, 7)
// add(1, 2, 3, 4, 5)


// arr1 = [1, 2, 3]

// arr3 = [...arr1, 5, 6, 7]
// console.log(arr3);





// - destructuring
// user = {name: "Shrushti", city: "Mumbai"}

// console.log(`Hello ${user.name} How's weather in ${user.city}`);

// const {name, city} = user

// console.log(`Hello ${name} How's weather in ${city}`);













// - array methods (map, filter, reduce)
nums = [1, 2, 3, 4, 5]
// sqr_nums = nums.map(function(x) { 
//     return x * x;
// } )

// sqr_nums = nums.map(x => x * x)
// console.log(sqr_nums);

// even_nums = nums.filter(x => x % 2 == 0)
// console.log(even_nums);

// total_nums = nums.reduce((t, x) => t + x)
// console.log(total_nums);






// - event loop
//sync
// console.log("Start");


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(res => {
    //     console.log(res[0].name);
    // })
    
    // //macrotask
    // setTimeout(() => {
        //     console.log("Set Timeout")
        // }, 0)
        
// //microtask
// Promise.resolve().then(() => {
    //   console.log("Promise");
    // });
    
// //sync
// console.log("End");





// - promises / async..await
// async function getUsers() {
//     var res = await fetch('https://jsonplaceholder.typicode.com/users')
//     var users = await res.json()
//     console.log(users)
//     console.table(users)
// }

// getUsers();











// - classes
// class Circle {
//     constructor(r) {
//         this.radius = r
//     }
//     area() {
//         console.log(`I am from circle area ${this.radius}`);    
//     }
//     circumference() {}
// }

// class Rectangle {
//     constructor(l, b) {
//         this.length = l
//         this.breadth = b
//     }
//     area(){
//         console.log(`I am from rectangle area l = ${this.length} b = ${this.breadth}`);
//     }   
//     perimeter() {}
// }

// c = new Circle(5)   //it will call constructor
// c.area()

// r = new Rectangle(5, 6)
// r.area()