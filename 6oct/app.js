const express = require("express");
const app = express();

// app.get( endpoint , functionality )
app.get("/hi", (req, res) => {
    res.send("Hello from hi endpoint")
})

app.listen(3000, () => {
    console.log("App serving on port 3000");
})