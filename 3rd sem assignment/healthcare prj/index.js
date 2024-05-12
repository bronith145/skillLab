const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Import models
const Author = require('./models/author');
const Blog = require('./models/blog');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/author', async (req, res) => {
  try {
    const { name, email } = req.body;
    const author = new Author({ name, email });
    await author.save();
    res.json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/blog', async (req, res) => {
  try {
    const { title, blogContent, authorName } = req.body;
    const blog = new Blog({ title, blogContent, authorName });
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});