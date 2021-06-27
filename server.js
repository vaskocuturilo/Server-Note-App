import express from 'express';
import mongoose from 'mongoose'
import Post from "./Post.js";

const PORT = 5000;
const DB_URL = 'This is you mongoDB account for database'

const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json("Server is work fine.")
})

app.get('/fetch', async (req, res) =>{
    const post = await Post.find({})
    res.status(200).json(post)
})

app.post("/create", async (req, res) => {
    const {title, date, note} = req.body
    const post = await Post.create({title, date, note})
    res.status(200).json(post)
})

app.post("/create", async (req, res) => {
    const {title, date, note} = req.body
    const post = await Post.create({title, date, note})
    res.status(200).json(post)
})

async function startApplication() {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true}, {useUnifiedTopology: true})
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT))

    } catch (e) {
        console.log(e)
    }
}

startApplication()