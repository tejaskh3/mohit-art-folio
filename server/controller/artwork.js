const Artwork = require('../models/Artwork');

// Create artwork with photo upload
const createArtwork = async (req, res) => {
  try {
    const { name, description, price, imageURL, images, story } = req.body;

    const artwork = await Artwork.create(req.body);

    if (!artwork) {
      res.send('Please enter something');
    }

    res.status(201).json(artwork);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update artwork with photo upload
const updateArtwork = async (req, res) => {
  try {
    const { name, description, price, imageURL, images, story } = req.body;

    const artwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!artwork) {
      return res
        .status(404)
        .json({ success: false, error: 'Artwork not found' });
    }

    // res.status(200).json({ success: true, data: artwork });
    res.status(200).json(artwork);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all artwork
const getAllArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.find();
    // res.status(200).json({ success: true, data: artwork });
    res.status(200).json(artwork);
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Get single artwork
const getArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      return res
        .status(404)
        .json({ success: false, error: 'Artwork not found' });
    }
    // res.status(200).json({ success: true, data: artwork });
    res.status(200).json(artwork);
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Delete artwork
const deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndRemove(req.params.id);
    if (!artwork) {
      return res
        .status(404)
        .json({ success: false, error: 'Artwork not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

module.exports = {
  getAllArtwork,
  createArtwork,
  getArtwork,
  updateArtwork,
  deleteArtwork
};

module.exports = {
  getAllArtwork,
  createArtwork,
  getArtwork,
  updateArtwork,
  deleteArtwork
};
