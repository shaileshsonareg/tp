const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

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

app.get('/task', (req, res) => {
    var sql = `SELECT * FROM pranit_task order by id desc`;
    db.query(sql, (err, results, fields) => {
        res.send(results);
    });
});

app.post('/task', (req, res) => {
    var title = req.body.title;
    var status = req.body.status;
    var sql = `INSERT INTO pranit_task (id, title, status) VALUES (NULL, '${title}', '${status}')`;
    db.query(sql, (err, results, fields) => {
            res.send('Task added successfully');
        
    });
});

app.delete('/task/:id', (req, res) => {
    var id = req.params.id;
    var sql = `DELETE FROM pranit_task WHERE id = ${id}`;
    db.query(sql, (err, results, fields) => {
            res.send('Task deleted successfully');
    });
});


app.listen(3000, () => {
  console.log('App is running on port 3000');
});
