const express = require("express"); //npm install express
const app = express();


// app.get( endpoint , functionality )
// cURL: http://localhost:3000/hi
app.get("/hi", (req, res) => {
    res.send("Hello from hi endpoint")
})

//CW1: Create Endpoint /calc with 4 methods (GET, POST, PUT, DELETE) 
//CW2: receive data using json payload {"num1": 30, "num2": 2} and perform folllowing operations
//GET => addition
//POST => subtraction
//PUT => multiplication
//DELETE => division
//CW3: Create endpoint /sqr/5 and find square of a number => Square of 5 is 25

app.use(express.json())
app.post("/calc",(req, res)=>{
    var x = req.body.num1;
    var y = req.body.num2;

    res.send(`${x} - ${y} = ${x - y}`)
})

// /add/:num1/:num2

// endpoint: /users/products/:id
app.get("/sqr/:num", (req, res) => {
    var num = req.params.num;
    res.send(`Square of ${num} is ${num * num}`);
})



app.listen(3000, () => {
    console.log("App serving on port 3000");
})
