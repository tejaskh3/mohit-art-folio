import ArtWorkCard from "./ArtWorkItemCard";

import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';
import image5 from '../assets/img5.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image2,
  image3,
  image4,
  image5
];

const ArtWorkItems = () => {
  return (
    <div className="flex flex-wrap justify-center mt-5">
      {images.map((image, index) => (
        <ArtWorkCard
          key={index}
          imageUrl={image}
          imageName="Name" // Replace with actual image name
          imageDescription={
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repellendus'
          } // Replace with actual image description
        />
      ))}
    </div>
  );
};

export default ArtWorkItems;
