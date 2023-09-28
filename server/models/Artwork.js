const mongoose = require('mongoose');
const ArtworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, "name can't be more then 20 characters."]
  },
  description: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, "name can't be more then 20 characters."]
  },
  story: {
    type: String
  },
  price: {
    type: Number,
    default: 200
  },
  imageURL: {
    type: String
  },
  imageUrls: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model('Artwork', ArtworkSchema);
