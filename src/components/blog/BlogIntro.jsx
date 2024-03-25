import React, { useState } from "react";
// import Wave from "react-wavify";
import footer from "../../assets/group.png";

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
      className="min-h-screen"
    >
      <div>
        <div className="min-h-screen flex flex-col items-start justify-center">
          <div className="md:w-full">
            <div className=" px-2 sm:px-4 md:px-6 lg:px-10 py-4 ">
              <p className="text-white text-center font-bold text-[26px] md:text-[29px] lg:text-[40px] xl:text-[50px] pt-4 pb-2 inter">
                Blog
              </p>
              <p className="text-white text-center font-normal pb-2 mt-10 px-[2%] sm:px-[10%] md:px-[15%] lg:px-[25%] text-lg lg:text-xl">
                Explore our diverse collection of blogs where we delve into
                various topics related to our mission, vision, and the
                industries we operate in. Red Shift is not just a manufacturer;
                we are a source of valuable information, insights, and updates.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIntro;
