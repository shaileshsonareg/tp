const express = require("express");
const cors = require("cors"); // import CORS

const app = express();



let x = 10;
let y = 20;

app.use(express.json()) //middleware to receive json payload
app.use(cors())

app.get("/calc", (req, res , err) =>{
    
    const a = Number(req.query.num1); // ✅ use req.query
    const b = Number(req.query.num2); // ✅ use req.query
    
    res.send(`${a} + ${b} = ${a + b}`)
    
})

app.post("/calc", (req, res , err) =>{

    a = req.body.num1
    b = req.body.num2
    res.send(`substraction is ${a-b}` )
})

app.put("/calc", (req, res , err) =>{
    res.send(`multiplication is ${x*y}` )
})

app.delete("/calc", (req, res , err) =>{
    res.send(`division is ${x/y}` )
})

app.listen(3000, () => {
    console.log("Running on port 3000");
})
