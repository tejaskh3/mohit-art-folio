import axios from 'axios';
import { useContext, useState } from 'react';
import {ArtworkContext }from '../../../context/ArtworkContext';
const defaultDetails = {
  name: '',
  description: '',
  story: '',
  price: '',
  imageURl: '',
  images: []
};
const CreateArtworkForm = ({ isOpen, onClose }) => {
  const [artworkDetails, setArtworkDetails] = useState(defaultDetails);
  const { name, description, price, story,imageURl,images} = artworkDetails;
  const {createArtwork} = useContext(ArtworkContext);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(value);
    setArtworkDetails({ ...artworkDetails, [name]: value });
  };

  const handleSubmit = async e => {
    try {
      // Send a POST request to your server's API endpoint
      e.preventDefault();
      console.log('trying hitting the api');
      // console.log(artworkDetails);
      // const response = await axios.post(
      //   'http://localhost:3000/api/v1/artwork',
      //   artworkDetails
      // )

      // // Assuming a successful response, you can handle the response data here
      // console.log('Artwork created:', response.data);

      // Reset the form and close the modal
      await createArtwork(artworkDetails);
      setArtworkDetails(defaultDetails);
      onClose();
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error creating artwork:', error);
    }
  };

  return (
    <div
      className={`${
        isOpen ? 'fixed' : 'hidden'
      } inset-0 overflow-y-auto flex items-center justify-center z-50`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-50 bg-purpleMain p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl text-white font-bold mb-6">Create Artwork</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id={name}
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-lightCream focus:outline-none focus:border-purpleMain text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-white text-sm font-medium mb-2"
            >
              Description:
            </label>
            <input
              type="text"
              id={description}
              name="description"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-lightCream focus:outline-none focus:border-purpleMain text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-white text-sm font-medium mb-2"
            >
              Price:
            </label>
            <input
              type="number"
              id={price}
              onChange={handleChange}
              name="price"
              className="w-full px-4 py-2 rounded-lg border border-lightCream focus:outline-none focus:border-purpleMain text-black"
            />
          </div>
          {/* <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-white text-sm font-medium mb-2"
            >
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="w-full px-4 py-2 rounded-lg border border-lightCream focus:outline-none focus:border-purpleMain"
            />
          </div> */}
          <button
            type="submit"
            className="w-full bg-medPurple text-white py-2 rounded-lg hover:bg-purpleMain"
            onClick={handleSubmit}
          >
            Create Artwork
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateArtworkForm;
