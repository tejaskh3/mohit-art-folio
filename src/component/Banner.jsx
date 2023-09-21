
const Banner = ({imageUrl}) => {
  return (
    <img
      src={imageUrl}
      alt="Biography Image"
      className="h-screen w-4/5 rounded-lg m-auto object-center shadow-xl shadow-blue-gray-900/50"
    />
  );
};

export default Banner;
