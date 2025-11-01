// HOMEWORK: WAP to perform CRUD on array of employees;

//add => push
//read => for of
//update => map
//delete => filter


// emps = [
//         {"name": "Sanjana", "salary": 23000},
//         {"name": "Sneha", "salary": 24000},
//         {"name": "Sanjay", "salary": 25000},
//         {"name": "Jitesh", "salary": 26000},
//         {"name": "Adarsh", "salary": 27000},
//         {"name": "Aniruddha", "salary": 21000},
//     ]

// // for(let e of emps) {
// //     console.log(`Hello ${e.name} Your salary ${e.salary} has been credited`);
// // }

// annual_salary = emps.map(e => {
//     return {
//         "name": e.name,
//         "salary": e.salary,
//         "annual_salary": e.salary * 12
//     }
// })

// console.log("Annual Salary: ", annual_salary);

// total_salary = emps.reduce((t, e) => t + e.salary, 0)
// console.log("Total: ", total_salary);

// highest_salaried_emps = emps.filter(e => e.salary > 25000)
// console.log("Highest Salaried Employees: ", highest_salaried_emps);













// nums = [1, 2, 3, 4, 5]

// sqr_nums = nums.map(x => x * x)

// console.log(sqr_nums);

// even_nums = nums.filter(x => x % 2 == 0)
// function getEven(x) {
//     return x % 2 == 0;
// }

// console.log("EVEN NUMS: ", even_nums);

// odd_nums = nums.filter(x => x % 2 != 0)

// console.log("ODD NUMS: ", odd_nums);

// total_nums = nums.reduce((t, x) => t + x)

// console.log("Total Nums: ", total_nums);













// //REST OPERATOR ...
// function add(...nums) {
//     console.log(nums)
// }

// add(5, 6)
// add(5, 6, 7)
// add(1, 2, 3, 4, 5)


// //SPREAD OPERATOR ...
// arr1 = [1, 2, 3]
// arr2 = [4, 5, 6]
// arr3 = [...arr1, ...arr2]

// console.log("ARR3: ", arr3);
















// greet = function()  {
//     console.log("Hello World");
// }

// const greet = (nm) => {
//     console.log(`Hello ${nm}`);
// }

// greet('Ani')
// greet('Adarsh')
// greet('Sanjana')


