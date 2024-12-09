const express = require('express')
const { BlogModel } = require('../model/blogModel') // Adjust the path as needed
const blogRouter = express.Router()

// POST route to create a new blog
blogRouter.post('/addBlogs', async (req, res) => {
  try {
    // Destructure blog data from request body
    const { title, description, timestamp, admin, likes } = req.body

    // Validate data
    if (!title || !description || !admin) {
      return res.status(400).json({
        message: 'Title, description, and admin are required'
      })
    }

    // Create a new blog document (timestamp is handled by schema default)
    const newBlog = new BlogModel({
      title,
      description,
      timestamp: new Date().toISOString(),
      admin,
      likes: likes || 0 // Default to 0 if likes are not provided
    })

    // Save the blog document to the database
    const savedBlog = await newBlog.save()

    // Send success response
    res.status(201).json({
      message: 'Blog created successfully',
      blog: savedBlog
    })
  } catch (err) {
    console.error('Error creating blog:', err)
    res.status(500).json({
      message: 'Internal server error while creating the blog',
      error: err.message
    })
  }
})

// GET route to fetch all blogs
blogRouter.get('/allBlogs', async (req, res) => {
  try {
    const data = await BlogModel.find()
    res.status(200).json(data) // Send the blogs as JSON
  } catch (error) {
    console.error('Error fetching blogs:', error)
    res.status(500).json({
      message: 'Error fetching blogs from the database',
      error: error.message
    })
  }
})

module.exports = blogRouter
