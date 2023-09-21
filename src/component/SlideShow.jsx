import images1 from '../assets/img1.jpg';
import images2 from '../assets/img2.jpg';
import images3 from '../assets/img3.jpg';
import images4 from '../assets/img4.jpg';
import images5 from '../assets/img5.jpg';
import images6 from '../assets/img6.jpg';
import images7 from '../assets/img7.jpg';
import images8 from '../assets/img8.jpg';
import images9 from '../assets/img9.jpg';
import images10 from '../assets/img10.jpg';
import banner from '../assets/img12.jpg';
import React, { useState } from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { Spinner, Button } from '@material-tailwind/react';
import Banner from './Banner';
const SlideShow = () => {
  const images = [
    {
      src: images1,
      alt: 'Naked man'
    },
    {
      src: images2,
      alt: 'alternative words'
    },
    {
      src: images3,
      alt: 'alternative'
    },
    {
      src: images4,
      alt: 'alternative'
    },
    {
      src: images5,
      alt: 'alternative'
    },
    {
      src: images6,
      alt: 'alternative'
    },
    {
      src: images7,
      alt: 'alternative'
    },
    {
      src: images8,
      alt: 'alternative'
    },
    {
      src: images9,
      alt: 'alternative'
    },
    {
      src: images10,
      alt: 'alternative'
    }
  ];

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
    <div className="">
      <div className="flex flex-col justify-center items-center p-5 h-3/4 gap-10">
        <Button
          onClick={handleClick}
          className="mt-4 bg-lightCream"
        >
          Open SlideShow
        </Button>
        <Banner imageUrl={banner}  />
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
    </div>
  );
};

export default SlideShow;
