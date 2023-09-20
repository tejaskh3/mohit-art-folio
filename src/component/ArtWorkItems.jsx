import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from '@material-tailwind/react';
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

const ArtWorkCard = ({ imageUrl, imageName, imageDescription }) => {
  return (
    <Card className="w-2/3  mx-4 mb-20   md:w-72 transition-transform transform hover:scale-105 hover:shadow-xl">
      <CardHeader floated={false} className="h-48">
        <img
          src={imageUrl}
          alt="profile-picture"
          // className="w-full h-full object-cover "
          className="w-full h-full object-cover transform scale-100 transition-transform ease-in-out duration-300 hover:scale-105 hover:translateZ-10"
        />
      </CardHeader>
      <CardBody className="text-center">
     
        <Typography variant="h4" color="red" className="mb-2">
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
        <div>Buy</div>
      </CardBody>
    </Card>
  );
};

const ArtWorkItems = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
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
