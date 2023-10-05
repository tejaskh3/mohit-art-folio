import React, { useContext, useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogBody
} from '@material-tailwind/react';
import { ReactComponent as Whatsapp } from '../assets/whatsapp.svg';
import { Link } from 'react-router-dom';
import { ArtworkContext } from '../context/ArtworkContext';
import EditArtwork from './admin-dashboard/art-work-management/EditArtwork';

const ArtWorkCard = ({ imageUrl, imageName, imageDescription, isAdmin,artworkId}) => {
  const [isEditArtworkModalOpen, setIsEditArtworkModalOpen] = useState(false);

  const openCreateArtworkModal = () => {
    setIsEditArtworkModalOpen(true);
  };

  const closeCreateArtworkModal = () => {
    setIsEditArtworkModalOpen(false);
  };
  const {  deleteArtwork } = useContext(ArtworkContext);
  const handleDelete = () =>{
    deleteArtwork(artworkId);
  }
  const handleUpdate = ()=>{
    console.log("update button");
    alert(`update ${artworkId}`)
  }
  return (
    <>
      <Card className="w-2/3 mx-4 mb-20 md:w-72 transition-transform transform hover:scale-105 hover:shadow-xl">
        <CardHeader floated={false} className="h-48">
          <img
            src={imageUrl}
            alt="profile-picture"
            className="w-full h-full object-cover transform scale-100 transition-transform ease-in-out duration-300 hover:scale-105 hover:translateZ-10 cursor-pointer"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="red" className="mb-1">
            {imageName}
          </Typography>
          <Typography
            color="blue-gray"
            variant="paragraph"
            className="font-medium"
            textGradient
          >
            {imageDescription}
          </Typography>
          <div className=" grid justify-items-center mt-3 mb-0 gap-2">
            {isAdmin ? (
              <Button  className='bg-lightCream' onClick={openCreateArtworkModal}>Update</Button>
            ) : (
              <Button variant="outlined" size="sm">
                Full Page view
              </Button>
            )}

            {isAdmin ? (
              <Button onClick={handleDelete}>Delete</Button>
            ) : (
              <Link to="https://wa.me/919560259746">
                <Button
                  className="flex flex-row justify-center gap-2"
                  size="sm"
                >
                  Buy
                  <Whatsapp className="h-4 p-0" />
                </Button>
              </Link>
            )}

            <div className="flex"></div>
          </div>
        </CardBody>
      </Card>
      <EditArtwork
        isOpen={isEditArtworkModalOpen}
        onClose={closeCreateArtworkModal}
        artworkId={artworkId}
      />
    </>
  );
};

export default ArtWorkCard;
