import PostService from "./PostService.js";
import Post from "./Post.js";
import {request} from "express";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const updatePost = await PostService.update(req.body)
            return res.json(updatePost)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async remove(req, res) {
        try {
            const {id} = req.query
            const post = await PostService.remove(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();