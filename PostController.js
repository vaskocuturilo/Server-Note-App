import Post from "./Post.js";

class PostController {
    async create(req, res) {
        try {
            const {title, date, note} = req.body
            const post = await Post.create({title, date, note})
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const post = await Post.find()
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async remove(req, res) {
        try {
            const {id} = req.query
            if (!id) {
                res.status(400).json({message: 'Please add id'})
            }
            const post = await Post.findByIdAndDelete(id)
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) {
                res.status(400).json({message: 'Please add id'})
            }
            const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})

            return res.json(updatePost)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();