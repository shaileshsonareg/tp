const express = require("express")

const app = express();

//https://ominous-umbrella-4jj57qr447w52jj54-3000.app.github.dev/

app.get("/", (req, res) => {
    res.send("Hello FROM node express api")
})

var emps = [{name: "Divya", salary: 23000}, {name: "Pooja", salary: 23000}]

app.get("/employee", (req, res) => {

    res.json(emps)

})

app.use(express.json())

app.post("/employee", (req, res) => {

    var new_rec = {name: req.body.name, salary: req.body.salary}

    emps.push(new_rec)

    res.json(new_rec)
})


app.delete("/employee/:name", (req, res) => {

    var name = req.params.name

    emps = emps.filter(e => {
        if(name == e.name)
            return false
        else 
            return true
    })

    res.json(emps)
})


app.put("/employee/:name", (req, res) => {

    var name = req.params.name


    emps = emps.map(e => {
        if(name == e.name){
            e.salary = req.body.salary
        }
        return e
    })

    res.json(emps)
})


app.listen(3000, () => {
    console.log(`Serving on port 3000`);
})
