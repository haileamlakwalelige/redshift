import React from "react";

const AboutVision = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-2 sm:px-6 md:px-12 lg:px-20 mt-10">
      <div className="lg:col-span-2">
        <div className=" flex justify-center items-center flex-col ml-2 py-6">
          <p className="items-end max-w-full font-extrabold vie text-secondary text-center text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] px-2">
            VISION
          </p>
          <span className="h-1 -mt-1 lg:-mt-2 min-w-[160px]   bg-primary"></span>
        </div>
        <div>
          <p className="text-secondary text-center font-light text-[16px] md:text-[20px] lg:text-[24px]">
            To be a leading force in the electric and hybrid vehicle market, Red
            Shift envisions a future with cleaner air, a reduced carbon
            footprint, and enhanced economic prosperity. We aspire to create a
            greener, more sustainable world through our cutting-edge products
            and initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
