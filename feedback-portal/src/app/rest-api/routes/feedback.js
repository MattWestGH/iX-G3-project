const express = require('express');
const feedbackController = require('../controller/FBpost')
const router = express.Router();
router.get('/posts', feedbackController.getPosts)
router.post('/post', feedbackController.createPost);
router.put('/:id', feedbackController.updatePost);
router.delete('/:id', feedbackController.deletePost);
module.exports = router;