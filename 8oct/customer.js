const express = require("express")

const router = express.Router()

router.route("/customer")
    .get((req, res) => {
        res.send("Hello Karan Welcome to Ecomm site")
    })

module.exports = router;


