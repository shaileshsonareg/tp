const express = require("express"); //npm install express
const app = express();
const mysql = require("mysql2");


const db = mysql.createConnection({
    host: "abadabhadada",
    user: "jakhskdjfksd",
    password: "qwertyuio",
    database: "tpdb"
});

app.get("/emps", (req, res) => {
    
    db.query("SELECT * FROM employee", (err, results) => {
        res.json(results);
    });

})


app.get("/todos", (req, res) => {

    var todos = [
        {"title": "girlfriend se jhagda karna hai", "status": "todo"},
        {"title": "girlfriend ko manana hai", "status": "todo"},
        {"title": "falavar leke jana hai", "status": "todo"}
    ]

    res.send(todos)
})


app.get("/hi", (req, res) => {
    
    res.send("hello from hi end point")
    
})











app.listen(3000, () => {
  console.log(`Server running at port 3000`);
});