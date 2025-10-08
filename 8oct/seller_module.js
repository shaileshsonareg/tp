const express = require("express")
const router = express.Router()


router.route("/")
.get((req, res) => {
    res.send("I am from get seller")
})
.post((req, res) => {
    res.send("I am from post seller")
})

module.exports = router