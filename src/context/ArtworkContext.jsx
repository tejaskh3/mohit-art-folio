import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ArtworkContext = createContext({
  artwork: [],
  createArtwork: () => {}
});

const ArtworkProvider = ({ children }) => {
  const [artwork, setArtwork] = useState([]);
  // setting up artwork to render on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/artwork');
        console.log(res.data);
        setArtwork(res.data);
      } catch (error) {
        console.error('Error fetching artwork:', error);
      }
    };
    fetchData();
  }, []);

  //function for adding a new artwork
  const createArtwork = async artworkDetails => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/v1/artwork',
        artworkDetails
      );
      console.log('Artwork created:', res);
    } catch (error) {
      console.log('error while creation of a new artwork', { error });
    }
  };
  // updating artwork
  const updateArtwork = async (artworkId, updatedDetails) => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/api/v1/artwork/${artworkId}`,
        updatedDetails
      );
      console.log(artworkId);
      console.log('Artwork updated:', res.data);

      // Update the artwork state after successful update only updating the field given by user
      const newState = artwork.data.map(obj => {
        if (obj._id === artworkId) {
          return { ...obj, ...updatedDetails };
        }
        return obj;
      });

      setArtwork({ ...artwork, data: newState });
    } catch (error) {
      console.log('Error while updating artwork:', { error });
    }
  };

  // delete Artwork
  const deleteArtwork = async artworkId => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/v1/artwork/${artworkId}`
      );
      console.log('Artwork deleted:', res.data);

      // Remove the deleted artwork from the artwork state
      setArtwork(prevArtwork =>
        prevArtwork.filter(art => art._id !== artworkId)
      );
    } catch (error) {
      console.log('Error while deleting artwork:', error.message);
    }
  };

  // getSingle artwork by id
  const getSingleArtwork = async artworkId => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/artwork/${artworkId}`
      );
      console.log('Single Artwork fetched:', res.data.data);
      // You can do something with the single artwork data if needed
    } catch (error) {
      console.log('Error while fetching single artwork:', error.message);
    }
  };

  const value = {
    artwork,
    createArtwork,
    updateArtwork,
    deleteArtwork,
    getSingleArtwork
  };

  return (
    <ArtworkContext.Provider value={value}>{children}</ArtworkContext.Provider>
  );
};

export { ArtworkProvider, ArtworkContext };
