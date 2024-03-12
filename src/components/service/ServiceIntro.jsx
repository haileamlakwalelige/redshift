import React, { useState } from "react";
import Wave from "react-wavify";

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="min-h-[83vh] service"
    >
      <div className="min-h-screen flex flex-col items-end justify-center">
        <div className="md:w-full lg:w-2/4 ">
          <div className="bg px-2 sm:px-4 md:px-6 lg:px-10 py-4 ">
            <p className="text-white text-start font-bold text-[26px] md:text-[29px] lg:text-[32px] pt-4 pb-2 inter">
              Redshift Services
            </p>
            <p className="text-white text-start font-normal pb-2 mt-10">
              Redshift Services, where innovation meets excellence. Explore our
              diverse range of offerings, including state-of-the-art electric
              and hybrid vehicles, cutting-edge construction expertise, and
              sustainable mobility solutions.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Wave
          fill="#45C3FE"
          paused={isHovered ? false : true}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.3,
            points: 2,
          }}
          className="bottom-0 -mb-2 z-10 -mt-8 rounded-b-2xl relative"
        />
      </div>
    </div>
  );
};

export default ServiceIntro;
