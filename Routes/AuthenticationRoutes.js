const express = require('express');
const router = express.Router();
const { handleToken, fetchPosts, login } = require('../Controller/AuthController');

router.post('/login', login);
router.get('/posts', handleToken, fetchPosts);

module.exports = router;