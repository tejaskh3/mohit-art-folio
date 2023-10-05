
const Banner = ({imageUrl,style}) => {
  return (
    <img
      src={imageUrl}
      alt="Biography Image"
      // className="h-screen w-4/5 rounded-lg m-auto object-center shadow-xl shadow-blue-gray-900/50"
      className="w-full h-auto md:h-screen md:w-4/5 rounded-lg m-auto object-center shadow-xl shadow-blue-gray-900/50 p-3"
      style={style}
    />
  );
};

export default Banner;
