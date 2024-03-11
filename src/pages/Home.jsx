import React from 'react'
import HomeIntro from '../components/home/HomeIntro'
import HomeRed from '../components/home/HomeRed'
import HomeAbout from "../components/home/HomeAbout";
import HomeService from "../components/home/HomeService";
import HomeProducts from "../components/home/HomeProducts";
import Scroll from "../components/Reusable/Scroll";
import Button from "../components/Reusable/Button";
import Button2 from "../components/Reusable/Button2";
import HomeTestimony from "../components/home/HomeTestimony";
import HomePartners from "../components/home/HomePartners";
import FAQ from "../components/home/FAQ";
import backgroundImage from "../assets/homeback.png";

const Home = () => {
  return (
    <div className="mt-32 overflow-x-hidden w-full h-full bg-white">
      <HomeIntro />
      <HomeRed />
      <HomeAbout />
      <HomeService />
      <HomeProducts />
      <Scroll />
      {/* <Button /> */}
      {/* <Button2 /> */}
      <HomeTestimony />
      <HomePartners />
      <FAQ />
    </div>
  );
};

export default Home