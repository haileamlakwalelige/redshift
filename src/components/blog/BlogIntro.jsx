import React, { useState } from "react";
import Wave from "react-wavify";

const BlogIntro = () => {
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
      className="min-h-[83vh] blog"
    >
      <div className="min-h-[70vh] flex flex-col items-start justify-center">
        <div className="md:w-full lg:w-2/4 ">
          <div className="bg mx-2 sm:mx-4 md:mx-6 lg:mx-10 px-4 py-4 ">
            <p className="text-white text-start font-bold text-[26px] md:text-[29px] lg:text-[32px] pt-4 pb-2 inter">
              Blog
            </p>
            <p className="text-white text-start font-normal pb-2">
              Explore our diverse collection of blogs where we delve into
              various topics related to our mission, vision, and the industries
              we operate in. Red Shift is not just a manufacturer; we are a
              source of valuable information, insights, and updates.{" "}
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

export default BlogIntro;
