import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: String, required: true},
    note: {type: String, required: true}
})

export default mongoose.model('Post', Post)