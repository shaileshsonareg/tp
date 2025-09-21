const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

emps = [
    {id: 1, name: "Jayesh", salary: 23000}
]

app.get("/emps", (req, res) => {
    return emps;
})

app.post("/emps", (req, res) => {
    var nm = req.body.name;
    var id = req.body.id;
    var salary = req.body.salary;

    emps.push({id: id, name: nm, salary: salary})
    return id;
})

app.get('/hi', (req, res) => {
  res.send('hello');
});


app.get('/sqr', (req, res) => {
  
    var x = req.query.num

    var sqr = x * x;
  
    res.send(`Square of ${x} is ${sqr}`);
});


app.get('/cube/:id', (req, res) => {
  
    var x = req.params.id

    var sqr = x * x * x;
  
    res.send(`Cube of ${x} is ${sqr}`);
});


app.post('/add', (req, res) => {
  
    var x = req.body.num1
    var y = req.body.num2

  
    res.send(`${x} + ${y} = ${x + y}`);
});








app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
