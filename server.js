const express = require('express')
const mongoose = require('mongoose');

var app = express()
var Data = require('./noteSchema')

mongoose.connect('mongodb://localhost/newDB', { useNewUrlParser: true } )


mongoose.connection.once("open", () => {

    console.log("Connected to DataBase")
}).on("error", (error) => {
console.log("Failed to connect " + error)
})

app.post("/create", (req, res) => {

    var note  = Data ({
        note: req.get("note"),
        title: req.get("title"),
        data: req.get("date")
    })

    note.save().then(() => {

if (note.isNew == false) {
    console.log("Saveed data")
    res.send("Saved data.")
} else {
    console.log("Fail to save data.")
}
    })
})

 var server  = app.listen("8081", "192.168.1.5", () => {
    console.log("Server is running.")  
 })