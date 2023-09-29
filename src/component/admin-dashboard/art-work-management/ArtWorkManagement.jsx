import React, { useState } from 'react';
import CreateArtworkModal from './CreateArtworkForm';
import ArtworkItems from './ArtworkItems';

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
      <button onClick={openCreateArtworkModal}>Create Artwork</button>
      <CreateArtworkModal
        isOpen={isCreateArtworkModalOpen}
        onClose={closeCreateArtworkModal}
      />
      <ArtworkItems/>
    </div>
  );
};

export default ArtWorkManagement;
