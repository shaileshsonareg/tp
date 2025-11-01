const express = require("express")
const app = express();

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'ciacloud.in',
  user: 'tpuser',
  password: 'Shift+5',
  database: 'tpdb'
});

db.connect(err => {
    if(!err) {
        console.log('Connected to MySQL database!');
    } else {
        console.log(err)
    }
});


app.get("/employee", (req, res) => {
    var sql = 'SELECT * FROM employee ORDER BY id DESC';

    db.query(sql, (err, results, fields) => {
        res.send(results);
    });

})

app.use(express.json())
app.post("/employee", (req, res) => {

    var name = req.body.name;

    var sql = `INSERT INTO employee (id, name, department, salary) VALUES (NULL, '${name}', 'HR', '23000')`;

    db.query(sql, (err, results, fields) => {
        res.send(results);
    });

})

app.delete("/employee/:id", (req, res) => {

    var id = req.params.id
    var sql = `DELETE FROM employee WHERE id = ${id}`

    db.query(sql, (err, results, fields) => {
        res.send(results);
    });
})



app.listen(3000, () => {
    console.log("running on port 3000")
})

/**
 * 
 * CREATE 
INSERT INTO employee (id, name, department, salary) VALUES (NULL, 'suhani', 'HR', '23000')


READ
SELECT * FROM employee ORDER BY id DESC;

SELECT * FROM `ORDER` ORDER BY `update` DESC;


UPDATE
UPDATE employee SET salary = 50000 WHERE id = 12


DELETE
DELETE FROM employee WHERE id = 12
 */