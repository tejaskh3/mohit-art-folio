import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { ArtworkContext } from '../../../context/ArtworkContext';
import { Button } from '@material-tailwind/react';
const defaultDetails = {
  name: '',
  description: '',
  story: '',
  price: '',
  imageURL: '',
  images: []
};
const CreateArtworkForm = ({ isOpen, onClose }) => {
  const [artworkDetails, setArtworkDetails] = useState(defaultDetails);
  const { name, description, price, story, imageURL, images } = artworkDetails;
  const { createArtwork, updateArtwork, deleteArtwork } =
    useContext(ArtworkContext);
  const [url, setUrl] = useState('');
  const [file, setFile] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    setArtworkDetails({ ...artworkDetails, [name]: value });
  };
<<<<<<< HEAD

  const handleImageUpload = e => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageURL = URL.createObjectURL(file);
      setArtworkDetails({ ...artworkDetails, imageURL });
    }
  };


  const handleSubmit = async e => {
    e.preventDefault();
    console.log('trying hitting the api');
    // console.log(artworkDetails);
    await createArtwork(artworkDetails);
    setArtworkDetails(defaultDetails);
=======
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    // try {
    // const res = await
    axios.post('http://localhost:3000/api/v1/upload', formData).then(res => {
      console.log(res.data);
      setArtworkDetails({ ...artworkDetails, imageURL: res.data });
      alert('image uploaded')
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    console.log('trying hitting the create artwork api');
    createArtwork(artworkDetails);
    // setArtworkDetails(defaultDetails);
    console.log(artworkDetails);
>>>>>>> backend
    onClose();
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
          <div className="mb-4">
            <label
              htmlFor="imageURL"
              className="block text-white text-sm font-medium mb-2"
            >
              Image:
            </label>
            <input
              type="file"
<<<<<<< HEAD
              // id={imageURL}
              accept="image/*"
              onChange={handleImageUpload}
              // name="imageURL"
              className="w-full px-4 py-2 rounded-lg border border-lightCream focus:outline-none focus:border-purpleMain"
            />
          </div>
=======
              id="image"
              name="image"
              accept="image/*"
              onChange={e => setFile(e.target.files[0])}
              className="w-full px-4 py-2 rounded-lg border border-lightCream focus:outline-none focus:border-purpleMain"
            />
          </div>
          <button
            type="button"
            className="w-full bg-medPurple text-white py-2 rounded-lg hover:bg-purpleMain"
            onClick={handleUpload}
          >
            Upload Photo
          </button>
>>>>>>> backend
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
    // <div>
    //   <input type="file" onChange={e => setFile(e.target.files[0])} />
    //   <Button onClick={handleImageUpload} className="bg-lightPurple text-white">
    //     Upload
    //   </Button>

    //   {imageUrl && (
    //     <div>
    //       <p>Uploaded Image:</p>
    //       <img src={imageUrl} alt="Uploaded Artwork" width="200" height="200" />
    //     </div>
    //   )}
    // </div>
  );
};

export default CreateArtworkForm;
