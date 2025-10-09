const express = require("express")
const app = express()

const checkAuth = (req, res, next) => {

    // console.log(req.headers)
    var token = req.headers.authorization.split(" ")[1]
    console.log(token)

    var unm = "admin";
    var pwd = "admin@123"

    if (token == btoa(`${unm}:${pwd}`)) {
        console.log(true);
    } else {
        console.log(false)
        res.status(403).json({
            "errmsg": "Your ticket is not valid"
        })
    }

    console.log("Hello from checkAuth")
    next()
}

// app.use(checkAuth)



app.use(express.json())

app.post("/login", (req, res) => {

    console.log(req.body);


    var username = req.body.username
    var password = req.body.password

    res.send(btoa(`${username}:${password}`))
})


app.get("/hi", (req, res) => {
    res.send("I am from hi");
})

app.get("/hello", (req, res) => {
    res.send("I am from hello");
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})


// var str = "Abdul Rehman"

// console.log(str.split(" ")[1]);


// headers = "Basic Abcxyz"
// token = "Abcxyz";

// if(headers.split(" ")[1] == token) {
//     console.log(true);
// } else {
//     console.log(false);
// }
