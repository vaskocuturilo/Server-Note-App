const express = require('express')
const mongoose = require('mongoose')
var app = express()
var Data = require('./noteSchema')

mongoose.connect('mongoDB://localhost/newDB')

mongoose.connection.once("open", () => {

    console.log("Connected to DataBase")
}).on("error", (error) => {
console.log("Failed to connect" + error)
})

