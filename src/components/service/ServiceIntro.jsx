import React, { useState } from "react";
// import Wave from "react-wavify";
import footer from "../../assets/servicebg.png";
import { Link } from "react-router-dom";
import "../Reusable/button/button.css";

// import Button from "../Reusable/button/Button";

const ServiceIntro = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  }; // Added closing curly brace here

  return (
    <div
      style={{
        background: `url(${footer})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // width: "100vw" // You can include or exclude this line as needed
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen"
    >
      <div className="min-h-screen bg flex flex-col items-center justify-between gap-20 pt-32">
        <div className="md:w-full">
          <div className=" px-2 sm:px-4 md:px-6 lg:px-10 py-4 ">
            <p className="text-white text-center font-bold text-[26px] md:text-[29px] lg:text-[40px] xl:text-[50px] pt-4 pb-2 inter">
              Redshift Services
            </p>
            <p className="text-white text-center font-normal pb-2 mt-10 px-[2%] sm:px-[10%] md:px-[15%] lg:px-[25%] text-lg lg:text-xl">
              Redshift Services, where innovation meets excellence. Explore our
              diverse range of offerings, including state-of-the-art electric
              and hybrid vehicles, cutting-edge construction expertise, and
              sustainable mobility solutions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 w-screen bottom-0 md:grid-cols-2 lg:grid-cols-3 justify-center items-center lg:-mb-8">
          <div
            data-aos="slide-up"
            data-aos-duration="1000"
            className="min-h-[250px] bg-primary w-[450px] rounded-xl  border-r-2 border-sub text-white flex flex-col justify-center items-center"
          >
            <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Hybridization
            </p>
            <Link to="/service-detail#hybrid">
            <button className="mt-8 bg-sub px-6 rounded-xl py-2 hover:bg-primary border-2 border-gray-500 hover:border-white duration-500">Learn More</button>
            </Link>
          </div>
          <div
            data-aos="slide-up"
            data-aos-duration="1500"
            className="min-h-[250px] bg-primary w-[450px] rounded-xl border-r-2 border-t-2 md:border-t-transparent border-sub text-white flex flex-col justify-center items-center"
          >
            <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Construction
            </p>
            <Link to="/service-detail#construction">
            <button className="mt-8 bg-sub px-6 rounded-xl py-2 hover:bg-primary border-2 border-gray-500 hover:border-white duration-500">Learn More</button>

            </Link>
          </div>
          <div
            data-aos="slide-up"
            data-aos-duration="2000"
            className="min-h-[250px] bg-primary w-[450px] rounded-xl border-r-2 border-t-2 lg:border-t-transparent border-sub text-white flex flex-col justify-center items-center"
          >
            <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              EcoMobility
            </p>
            <Link to="/service-detail">
            <button className="mt-8 bg-sub px-6 rounded-xl py-2 hover:bg-primary border-2 border-gray-500 hover:border-white duration-500">Learn More</button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
