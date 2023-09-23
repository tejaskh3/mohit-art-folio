const Artwork = require('../models/Artwork');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name to a unique value (timestamp + original name)
  },
});

const upload = multer({ storage: storage });

// Create artwork with photo upload
const createArtwork = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file.filename; // Get the uploaded image file name

    const artwork = await Artwork.create({ name, description, price, image });

    if (!artwork) {
      res.send('Please enter something');
    }

    res.status(201).json({ success: true, data: artwork });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update artwork with photo upload
const updateArtwork = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file.filename; // Get the uploaded image file name

    const artwork = await Artwork.findByIdAndUpdate(
      req.params.id,
      { name, description, price, image },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!artwork) {
      return res.status(404).json({ success: false, error: 'Artwork not found' });
    }

    res.status(200).json({ success: true, data: artwork });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all artwork
const getAllArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.find();
    res.status(200).json({ success: true, data: artwork });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Get single artwork
const getArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      return res.status(404).json({ success: false, error: 'Artwork not found' });
    }
    res.status(200).json({ success: true, data: artwork });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// Delete artwork
const deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndRemove(req.params.id);
    if (!artwork) {
      return res.status(404).json({ success: false, error: 'Artwork not found' });
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
