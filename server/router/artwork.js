const express = require('express');
const router = express.Router();
const {
  getAllArtwork,
  createArtwork,
  getArtwork,
  updateArtwork,
  deleteArtwork
} = require('../controller/artwork');

router.route('/').get(getAllArtwork).post(createArtwork);
router.route('/:id').get(getArtwork).patch(updateArtwork).delete(deleteArtwork);

module.exports = router;
