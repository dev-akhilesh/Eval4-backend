const Post = require('../models/Post');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ user: req.userId });
        res.json({ posts });
    } catch (error) {
        res.status(500).json({ message: "Failed to get posts" });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, body, device } = req.body;
        const post = await Post.create({ title, body, device, user: req.userId });
        res.json({ post });
    } catch (error) {
        res.status(500).json({ message: "Failed to create post" });
    }
};

const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { title, body, device } = req.body;
        const post = await Post.findOneAndUpdate(
            { _id: postId, user: req.userId },
            { title, body, device },
            { new: true }
        );

        if (!post) {
            res.status(404).json({ message: "Post Not Found" });
        }

        res.json({ post });
    } catch (error) {
        res.status(500).json({ message: "Failed to Update post" });
    }
};


const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const deletedPost = await Post.findOneAndDelete({ _id: postId, user: req.userId });

        if (!deletedPost) {
            res.status(404).json({ message: "Post Not Found" });
        }

        res.json({ message: "Post Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to Delete post" });
    }
};

module.exports = { getPosts, createPost, updatePost, deletePost };
