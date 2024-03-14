import React, { useState } from "react";
import Wave from "react-wavify";
import footer from "../../assets/blogbg.png";

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
      style={{
        background: `url(${footer})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // width: "100vw" // You can include or exclude this line as needed
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="min-h-[83vh] blog"
    >
      <div className="min-h-[85vh] flex flex-col items-start justify-center">
        <div className="md:w-full lg:w-2/4 ">
          <div className="bg px-2 sm:px-4 md:px-6 lg:px-10 py-4 ">
            <p className="text-white text-start font-bold text-[26px] md:text-[29px] lg:text-[32px] pt-4 pb-2 inter">
              Blog
            </p>
            <p className="text-white text-start font-normal pb-2 mt-10">
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
