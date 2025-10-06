const express = require("express");
const app = express();

// app.get( endpoint , functionality )
app.get("/hi", (req, res) => {
    res.send("Hello from hi endpoint")
})

var products = [
    {"id": 1, "title": "iphone", "price": 50000},
    {"id": 2, "title": "oppo", "price": 25000},
]

app.get("/products", (req, res) => {
    res.send(products)
})

app.use(express.json()); //middleware to receive json objects as payload

app.post("/products", (req, res) => {
    // var rec = {"id": 3, "title": "macbook", "price": 70000}

    console.log(req.body)
    var rec = req.body
    products.push(rec)

    res.send("Product added succesfully")
})









app.put("/products", (req, res) => {
    res.send("Products put method")
})


app.delete("/products", (req, res) => {
    res.send("Products delete method")
})



app.listen(3000, () => {
    console.log("App serving on port 3000");
})