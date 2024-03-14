import React, { useState } from "react";
import Wave from "react-wavify";
import footer from "../../assets/1.png";

const AboutWhat = () => {
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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        // width: "100vw" // You can include or exclude this line as needed
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="min-h-[83vh]"
    >
      <div className="min-h-[85vh] flex flex-col items-end justify-center">
        <div className="md:w-full lg:w-2/4 ">
          <div className="bg px-2 sm:px-4 md:px-6 lg:px-10 py-4 ">
            <p className="text-white text-start font-bold text-[26px] md:text-[29px] lg:text-[32px] pt-4 pb-2 inter">
              WHAT IS RED SHIFT?
            </p>
            <p className="text-white text-start font-normal pb-2 mt-10">
              Red Shift is a dynamic company operating at the forefront of
              innovation in various sectors.
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

export default AboutWhat;
