import Post from "./Post.js";

class PostService {

    async create(post) {
        const createPost = await Post.create(post)

        return createPost;
    }

    async getAll() {
        const posts = await Post.find()

        return posts;
    }

    async update(post) {
        if (!post._id) {
            throw new Error("Please add id")
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})

        return updatePost;
    }

    async remove(id) {
        if (!id) {
            throw new Error("Please add id")
        }
        const removePost = await Post.findByIdAndDelete(id)

        return removePost;
    }
}

export default new PostService();