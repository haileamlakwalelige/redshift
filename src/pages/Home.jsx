import React from "react";
import HomeRed from "../components/home/HomeRed";
import HomeAbout from "../components/home/HomeAbout";
import HomeService from "../components/home/HomeService";
import HomeProducts from "../components/home/HomeProducts";
import Scroll from "../components/Reusable/Scroll";

import HomePartners from "../components/home/HomePartners";
import FAQ from "../components/home/FAQ";

import Slider from "../components/Reusable/sliding/Slider";
import HomeJoin from "../components/home/HomeJoin";
import TestimonialSection from "../components/Reusable/try/TestimonialSection";
import Testimoial from "../components/Reusable/testimony/Testimoial";

const Home = () => {
  return (
    <div className=" overflow-x-hidden overflow-y-hidden w-full h-full bg-white">
      <Slider />
      <HomeRed />
      <HomeAbout />
      <HomeService />
      <HomeProducts />
      <Scroll />
      {/* <TestimonialSection /> */}
      <Testimoial />
      <HomePartners />
      <HomeJoin />
      <FAQ />
    </div>
  );
};

export default Home;
