import SlideShow from '../component/SlideShow';
import Banner from '../component/Banner';
import banner from '../assets/img12.jpg';

const Gallery = () => {
  return (
    <div>
      <SlideShow />
      <Banner imageUrl={banner}
      // style={{ height: '80vh', width: '80%vh' }}
      />
    </div>
  );
};

export default Gallery;
