const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('User', schema);
