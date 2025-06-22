// // backend/routes/blogs.js
// const express = require('express');
// const router = express.Router();
// const Blog = require('../models/Blog'); // Mongoose model

// router.get('/', async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     res.json(blogs);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch blogs' });
//   }
// });

// module.exports = router;
