import React from 'react';
import Banner from '../component/Banner';
import Biography from '../component/Biography';
import Footer from '../component/Footer';
import BannerImage from '../assets/banner.jpg';
const Home = () => {
  return (
    <>
      <Biography />
      <Banner imageUrl={BannerImage} />
      <Footer />
    </>
  );
};

export default Home;
