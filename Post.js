const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: String, required: true},
    note: {type: String, required: true}
})

module.exports = mongoose.model('Post', Post);