const express = require("express")
const app = express();

const checkMiddleware = (req, res, next) => {
    console.log("I am from middleware")
    next()
}

app.use(checkMiddleware)

app.get("/", (req, res) => {
    res.send("Hi from express")
})

app.get("/foo", (req, res) => {
    res.send("Hi from foo endpoint")
})

app.get("/bar", (req, res) => {
    res.send("Hi from bar endpoint")
})


app.listen(3000, () => {
    console.log(`Serving on port 3000`);
})
