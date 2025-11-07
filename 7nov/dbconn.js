const express = require("express")
const app = express();
const mysql = require("mysql2");

// ✅ Create MySQL connection pool
const pool = mysql.createPool({
  host: "ciacloud.in",     // your MySQL host
  user: "tpuser",          // your MySQL username
  password: "Shift + 5",  // your MySQL password
  database: "tpdb", // your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Test DB connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database!");
    connection.release();
  }
});


app.get("/employee", (req, res) => {

    const query = "SELECT * FROM employee";

  pool.query(query, (err, results) => {    
      res.json(results);
  });

})

app.use(express.json())

app.post("/employee", (req, res) => {

    var new_rec = {name: req.body.name, salary: req.body.salary, dept: req.body.dept}

    const query = `INSERT INTO employee (id, name, department, salary) VALUES (NULL, '${new_rec.name}', '${new_rec.dept}', ${new_rec.salary})`;

    pool.query(query, (err, results) => {    
        res.json(results);
    });

    res.json(new_rec)
})


app.delete("/employee/:id", (req, res) => {

    const query = `DELETE FROM employee WHERE id = ${req.params.id}`;

    pool.query(query, (err, results) => {    
        res.json(results);
    });
})


app.put("/employee/:id", (req, res) => {

    var id = req.params.id
    var salary = req.body.salary;

    const query = `UPDATE employee SET salary = '${salary}' WHERE id = ${id}`;

    pool.query(query, (err, results) => {    
        res.json(results);
    });

})


app.listen(3000, () => {
    console.log(`Serving on port 3000`);
})
