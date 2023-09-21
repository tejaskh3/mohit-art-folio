import React, { useState } from 'react';
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


const ArtWorkCard = ({ imageUrl, imageName, imageDescription }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card className="w-2/3 mx-4 mb-20 md:w-72 transition-transform transform hover:scale-105 hover:shadow-xl">
        <CardHeader floated={false} className="h-48">
          <img
            src={imageUrl}
            alt="profile-picture"
            className="w-full h-full object-cover transform scale-100 transition-transform ease-in-out duration-300 hover:scale-105 hover:translateZ-10 cursor-pointer"
            onClick={handleOpen}
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
            <Button variant="outlined" size="sm" onClick={handleOpen}>
              Full Page view
            </Button>

            <Button className="flex flex-row justify-center gap-2" size="sm">
              Buy
              <Whatsapp className="h-4 p-0" />
            </Button>

            <div className="flex"></div>
          </div>
        </CardBody>
      </Card>


    </>
  );
};

export default ArtWorkCard;
