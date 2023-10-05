import React, { useState } from 'react';
import CreateArtworkModal from './CreateArtworkForm';
import ArtworkItems from './ArtworkItems';
<<<<<<< HEAD
import {Button} from '@material-tailwind/react';
=======
import { Button } from '@material-tailwind/react';
>>>>>>> backend
const ArtWorkManagement = () => {
  const [isCreateArtworkModalOpen, setCreateArtworkModalOpen] = useState(false);

  const openCreateArtworkModal = () => {
    setCreateArtworkModalOpen(true);
  };

  const closeCreateArtworkModal = () => {
    setCreateArtworkModalOpen(false);
  };

  return (
<<<<<<< HEAD
    <div>
      <p>artwork management</p>
      <Button onClick={openCreateArtworkModal} className='bg-purpleMain'>Create Artwork</Button>
=======
    <div className='flex items-center flex-col min-h-screen mt-0'>
      <Button className='bg-purpleMain' onClick={openCreateArtworkModal}>Create Artwork</Button>
>>>>>>> backend
      <CreateArtworkModal
        isOpen={isCreateArtworkModalOpen}
        onClose={closeCreateArtworkModal}
      />
      <ArtworkItems/>
    </div>
  );
};

export default ArtWorkManagement;
