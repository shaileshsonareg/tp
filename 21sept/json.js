// rec = ["ajay nagar", 23, "adarsh nagar"]

rec = {
    "name": "Ajay Nagar", 
    "age": 23, 
    "address": {
        "area": "Adarsh Nagar",
        "city": "Mumbai",
        "state": "MH"
    },
    "hobbies": ["Football", "Cricket", "Travel"]
}

console.log(rec.hobbies[2]);


console.log("City: ", rec.address.city);

console.log(rec);
console.log("Address", rec["address"]);

console.log("Name: ", rec.name);






emps = [
    {name: "Jitesh", age: 18, salary: 21000},
    {name: "Sneha", age: 21, salary: 22000},
    {name: "Ani", age: 20, salary: 23000},
    {name: "Vj", age: 31, salary: 24000},
]

console.log("Anirudha ka salary: ", emps[2].salary);

total_salary = 0;
for(i = 0; i < emps.length; i++) {
    total_salary = total_salary + emps[i].salary
}

console.log("Total salary: ", total_salary);

//CW: WAP to find highest salaried employees from array


