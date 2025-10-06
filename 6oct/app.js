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

    // var prod = {
    //         "id": 2,
    //         "title": "oppo",
    //         "price": 50000
    //     }

    var prod = req.body;
    
    products = products.map(p => {
                    if(p.id == prod.id) {
                        p.title = prod.title;
                        p.price = prod.price;
                    }

                    return p;
                })

    res.send("Product updated succesfully")
})

app.delete("/products/:id", (req, res) => {

    // var id = 1
    console.log("PARAMS: ", req.params)
    console.log("QUERY: ", req.query)
    var id = Number(req.params.id)

    products = products.filter(p => {
        return p.id !== id;
    })

    res.send("Product deleted succesfully")
})


app.listen(3000, () => {
    console.log("App serving on port 3000");
})
