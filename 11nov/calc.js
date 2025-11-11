const express = require("express")
const app = express()

app.use(express.json())

const validMarks = (req, res, next) => {
    var token = req.headers.authorization

    if(token == undefined) {
        res.send("Unauthorized user")
    }

    var marks = req.body.marks;
    if(marks >= 0 && marks <= 100)
        next()
    else 
        res.send("Please enter valid marks")
}

app.post("/result", validMarks, (req, res) => {
    var marks = req.body.marks;

    if(marks >= 40)
        res.send("Student is Pass")
    else 
        res.send("Student is failed")
})





app.listen(3000, () => {
    console.log(`Serving on port 3000`);
})
