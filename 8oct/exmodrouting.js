const express = require("express"); //npm install express
const app = express();
const seller = require("./seller_module")
const customer = require("./customer")

// orders
// products

app.use("/seller", seller)
app.use("/customer", customer)
// app.use("/orders", order)
// app.use("/products", products)


app.listen(3000, () => {
    console.log("App serving on port 3000");
})