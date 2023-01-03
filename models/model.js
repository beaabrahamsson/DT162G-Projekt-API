const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'This field is required.'
      },
      image: {
        type: String,
        required: 'This field is required.'
      },
      author: {
        type: String,
        required: 'This field is required.'
      },
      published: {
        type: Date,
        required: 'This field is required.'
      },
      isbn: {
        type: Number,
        required: 'This field is required.'
      },
      pages: {
        type: Number,
        required: 'This field is required.'
      },
      language: {
        type: String,
        required: 'This field is required.'
      },
      rating: {
        type: Number,
        required: 'This field is required.'
      }
})

module.exports = mongoose.model('Data', dataSchema)