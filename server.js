import express from 'express';
import mongoose from 'mongoose'
import router from "./router.js";

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.vld4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()
app.use(express.json())
app.use('/api', router)

async function startApplication() {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true}, {useUnifiedTopology: true}, {useFindAndModify: false})
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT))

    } catch (e) {
        console.log(e)
    }
}

startApplication()