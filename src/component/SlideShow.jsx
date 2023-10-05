
import React, { useContext, useState } from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { Spinner, Button } from '@material-tailwind/react';
import Banner from './Banner';
import { ArtworkContext } from '../context/ArtworkContext';
const SlideShow = () => {
  const {artwork} = useContext(ArtworkContext);
  const images = artwork.map((art) => ({
    src: art.imageURL,
    alt: art.name,
  }));
  const [isOpen, setIsOpen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleClick = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setIsOpen(true);
    }, 1000);
  };

  return (
    <>
      <div className="text-center">
        <Button onClick={handleClick} className="mt-4 bg-lightCream mx-auto">
          Open SlideShow
        </Button>
      </div>

      {showSpinner ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Spinner size="xl" color="blue" />
        </div>
      ) : null}

      <SlideshowLightbox
        images={images}
        showThumbnails={true}
        open={isOpen}
        lightboxIdentifier="lbox1"
        onClose={() => {
          setIsOpen(false);
        }}
      ></SlideshowLightbox>
    </>
  );
};

export default SlideShow;
