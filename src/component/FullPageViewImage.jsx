import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';
import image5 from '../assets/img5.jpg';
import ArtWorkItems from './ArtWorkItems';
const FullPageViewImage = ({ imageSrc }) => {
  return (
    <SlideshowLightbox
      fullScreen={true}
      className="container grid grid-cols-3 gap-2 mx-auto"
      showThumbnails={true}
    >


      <img
        className="w-full rounded"
        src="https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <img
        className="w-full rounded"
        src="https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </SlideshowLightbox>
  );
};
export default FullPageViewImage;
