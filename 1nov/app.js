const express = require("express")

const app = express();

x = 10
y = 5

app.get("/hi", (req, res) => {
    res.send("Hello from hi endpoint")
})

app.get("/employee", (req, res) => {
    res.send("Employee GET")
})

app.post("/employee", (req, res) => {
    res.send("Employee POST")
})

app.put("/employee", (req, res) => {
    res.send("Employee PUT")
})

app.delete("/employee", (req, res) => {
    res.send("Employee DELETE")
})


//Create calc endpoint 
//GET => addition
//POST => subtraction
//PUT => multiplication
//DELETE => division

app.listen(3000, () => {
    console.log("Running on port 3000");
})