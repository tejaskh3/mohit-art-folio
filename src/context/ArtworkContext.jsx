import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ArtworkContext = createContext({
  artwork: [],
  createArtwork: () => {}
});

const ArtworkProvider = ({ children }) => {
  const [artwork, setArtwork] = useState([]);

  //function for adding a new artwork
  const createArtwork = async artworkDetails => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/v1/artwork',
        artworkDetails
      );
      console.log('Artwork created:', res.data);
    } catch (error) {
      console.log('error while creation of a new artwork', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/api/v1/artwork');
      console.log(res.data);
      setArtwork(res.data);
    };
    fetchData();
  }, []);

  const value = { artwork, createArtwork };

  return (
    <ArtworkContext.Provider value={value}>{children}</ArtworkContext.Provider>
  );
};

export { ArtworkProvider, ArtworkContext };
