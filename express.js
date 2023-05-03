const express = require('express');

const app = express();

// app.get("/", function (req, res) {
//     res.send("Homee Page");
// });

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen('8080', function () {
    console.log("hooray server started at port 8080");
});