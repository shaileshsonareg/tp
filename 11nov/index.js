const express = require("express")
const app = express()
app.use(express.json())

app.post("/sqr/:num", (req, res) => {

    var num = req.params.num

    res.send(`Square of ${num} is ${num * num}`)
})


app.post("/add", (req, res) => {

    var num1 = req.body.num1
    var num2 = req.body.num2

    res.send(`${num1} + ${num2} = ${num1+num2}`)
})



app.post("/sub", (req, res) => {

    var num1 = req.body.num1
    var num2 = req.body.num2

    res.send(`${num1} - ${num2} = ${num1-num2}`)
})














app.get("/hi", (req, res) => {
    res.send("Hi endpoint")
})

app.get("/calc", (req, res) => {
    res.send("Hi from calc get")
})

app.post("/calc", (req, res) => {
    res.send("Hi from calc post")
})

app.put("/calc", (req, res) => {
    res.send("Hi from calc put")
})

app.delete("/calc", (req, res) => {
    res.send("Hi from calc delete")
})



app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})
