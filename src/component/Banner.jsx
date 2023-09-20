import BannerImage from '../assets/banner.jpg';
const Banner = () => {
  return (
    <img
      src={BannerImage}
      alt="Biography Image"
      className="h-screen w-4/5 rounded-lg m-auto object-center shadow-xl shadow-blue-gray-900/50"
    />
  );
};

export default Banner;
