import BannerImage from '../assets/banner.jpg';
import { Typography } from '@material-tailwind/react';
const Banner = () => {
  return (
    <>
      <Typography variant="h1" className="text-3xl text-center mb-5 ">
        Biography
      </Typography>
      <div
        className="
     "
      >
        <img
          src={BannerImage}
          alt="Biography Image"
          className="h-screen w-4/5 rounded-lg m-auto object-center shadow-xl shadow-blue-gray-900/50"
        />
        
      </div>
    </>
  );
};

export default Banner;
