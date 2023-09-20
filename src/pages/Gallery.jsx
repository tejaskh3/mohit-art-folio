import images1 from '../assets/img1.jpg';
import images2 from '../assets/img2.jpg';
import images3 from '../assets/img3.jpg';
import images4 from '../assets/img4.jpg';
import images5 from '../assets/img5.jpg';


const Gallery = () => {
  return (
    <>
    <img
      src={images1}
      className="h-auto max-w-sm rounded-lg shadow-none w-full m-auto  transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
      alt="" />
      {/* <img
      src={images2}
      className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
      alt="" />
      <img
      src={images3}
      className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
      alt="" /> */}
      </>
  )
}

export default Gallery
