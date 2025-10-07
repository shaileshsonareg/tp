const express = require("express");
const app = express();
const mysql = require("mysql2")

app.use(express.json()); //middleware to receive json objects as payload

const db = mysql.createConnection({
    host: "localhost", // 192.168.1.123
    user: "root",
    password: "",
    database: "ecomm"
});

db.connect(e => {
    if(e) throw e;        
    console.log("Connected succesfully");
})


app.get("/products", (req, res) => {

    var sql = "SELECT * FROM products ORDER BY id DESC LIMIT 0, 10"

    db.query(sql, (err, result) => {

        res.send(result)

    })

})


app.get("/products/:id", (req, res) => {

    const id = req.params.id

    var sql = `SELECT * FROM products WHERE id = ${id}`

    db.query(sql, (err, result) => {

        res.send(result)

    })

})

app.post("/products", (req, res) => {

    // console.log(req.body);

    const { title, price, stocks } = req.body

    var sql = `INSERT INTO products (id, title, price, stocks) VALUES (NULL, '${title}', '${price}', '${stocks}')`

    db.query(sql, (err, result) => {

        res.send(result)

    })

})

app.delete("/products/:id", (req, res) => {

    const id = req.params.id

    var sql = `DELETE FROM products WHERE id = ${id}`

    db.query(sql, (err, result) => {
        res.send(result);
    })

})


app.put("/products/:id", (req, res) => {

    const id = req.params.id

    const {title, price, stocks} = req.body

    var sql = `UPDATE products SET title = '${title}', price = ${price}, stocks = ${stocks} WHERE id = ${id}`

    db.query(sql, (err, result) => {
        res.send(result);
    })

})


app.listen(3000, () => {
    console.log("App serving on port 3000");
})
