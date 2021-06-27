import express from 'express';
import mongoose from 'mongoose'
import Post from "./Post.js";

const PORT = 5000;
const DB_URL = 'This is you mongoDB account for database'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    try {
        res.status(200).json("Server is work fine.")
    } catch (e) {
        res.status(500).json(e)
    }
})

app.get('/fetch', async (req, res) => {
    try {
        const post = await Post.find({})
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json(e)
    }

})

app.post("/create", async (req, res) => {
    try {
        const {title, date, note} = req.body
        const post = await Post.create({title, date, note})
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json(e)
    }
})

app.post("/remove", async (req, res) => {
    try {
        const id = req.body
        const post = await Post.remove({id: req.get("id")})
        res.status(200).json('Item was delete.')
    } catch (e) {
        res.status(500).json(e)
    }
})

app.post("/update", async (req, res) => {
    try {
        const id = req.body
        const {title, date, note} = req.body
        const post = await Post.findOneAndUpdate({
                id: req.get("id")
            },
            {
                title: req.get("title"),
                date: req.get("date"),
                note: req.get("note"),
            }, {new: true})
    } catch (e) {
        res.status(500).json(e)
    }
})

async function startApplication() {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true}, {useUnifiedTopology: true}, {useFindAndModify: false})
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT))

    } catch (e) {
        console.log(e)
    }
}

startApplication()