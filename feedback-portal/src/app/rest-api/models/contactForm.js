const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
        type: String,
        required: true,
      },
    number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('contactPost', postSchema);

