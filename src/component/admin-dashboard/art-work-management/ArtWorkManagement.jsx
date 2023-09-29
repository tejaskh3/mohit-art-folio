import React, { useState } from 'react';
import CreateArtworkModal from './CreateArtworkForm';
import ArtworkItems from './ArtworkItems';
import {Button} from '@material-tailwind/react';
const ArtWorkManagement = () => {
  const [isCreateArtworkModalOpen, setCreateArtworkModalOpen] = useState(false);

  const openCreateArtworkModal = () => {
    setCreateArtworkModalOpen(true);
  };

  const closeCreateArtworkModal = () => {
    setCreateArtworkModalOpen(false);
  };

  return (
    <div>
      <p>artwork management</p>
      <Button onClick={openCreateArtworkModal} className='bg-purpleMain'>Create Artwork</Button>
      <CreateArtworkModal
        isOpen={isCreateArtworkModalOpen}
        onClose={closeCreateArtworkModal}
      />
      <ArtworkItems/>
    </div>
  );
};

export default ArtWorkManagement;
