import React from 'react'
import HomeIntro from '../components/home/HomeIntro'
import HomeRed from '../components/home/HomeRed'
import HomeAbout from "../components/home/HomeAbout";
import HomeService from "../components/home/HomeService";
import HomeProducts from "../components/home/HomeProducts";
import Scroll from "../components/Reusable/Scroll";

// import HomeTestimony from "../components/home/HomeTestimony";
import HomePartners from "../components/home/HomePartners";
import FAQ from "../components/home/FAQ";

import Slider from "../components/Reusable/sliding/Slider";
import HomeJoin from "../components/home/HomeJoin";
// import Try from '../components/Reusable/try/Try';
import TestimonialSection from '../components/Reusable/try/TestimonialSection';

const Home = () => {
  return (
    <div className=" overflow-x-hidden overflow-y-hidden w-full h-full bg-white">
      <Slider />
      <HomeRed />
      <HomeAbout />
      <HomeService />
      <HomeProducts />
      <Scroll />
      {/* <HomeTestimony /> */}
      <TestimonialSection />
      {/* <Try /> */}
      <HomePartners />
      <HomeJoin />
      <FAQ />
    </div>
  );
};

export default Home