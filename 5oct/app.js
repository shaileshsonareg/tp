const express = require("express");
const app = express();

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "abdadhabda.in",
    user: "abbaauuubb",
    password: "",
    database: "tpdb"
});



app.get("/hi", (req, res) => {
    res.send("Hello World");
})

app.get("/tasks", (req, res) => {

    var tasks = [
        {"name":"grocery leni hai", "status": "in process"},
        {"name":"wife se jhagda karna hai", "status": "to do"},
        {"name":"wife ko manana hai falavar lena hai", "status": "wip"},
    ]

    res.send(tasks)
    // res.send("I am from tasks")

})

app.get("/emps", (req, res) => {
    db.query("SELECT * FROM employee", (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to fetch users" });
            return;
        }
        res.json(results);
    });
})

app.listen(3000, () => {
    console.log("Node express serving on PORT: 3000")
});