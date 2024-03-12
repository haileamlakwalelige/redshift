import React from "react";

const BlogIntro = () => {
  return (
    <div className="min-h-[83vh] blog">
      <div className="min-h-[70vh] flex items-center">
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
    </div>
  );
};

export default BlogIntro;
