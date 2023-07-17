const express = require('express');
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/', getPosts);
router.post('/', createPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);

module.exports = router;