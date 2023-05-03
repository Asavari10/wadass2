const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/magesDB");

console.log("Database si created");

const mageSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    power_type: {
        type: String,
        require: true
    },
    mana_power: Number,
    health: Number,
    gold: Number
});

const Mage = new mongoose.model("Mage", mageSchema);

const mage1 = new Mage({
    name: "Kakashi",
    power_type: "Fire",
    mana_power: 500,
    health: 100,
    gold: 10000000
});

mage1.save().then(function (req, res) {
    console.log("data saved");
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send(mage1);
});

app.listen("8000", function () {
    console.log("Server started at port 8000");
});