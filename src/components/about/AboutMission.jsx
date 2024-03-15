import React from "react";
import mission from "../../assets/vision.png";

const AboutMission = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center px-2 sm:px-4 my-10">
          <div className="min-h-[355px] flex lg:col-span-2 flex-col justify-center items-start border-2 border-gray-100 rounded-2xl py-10 lg:pb-20 px-2 sm:px-4 md:px-8 lg:px-12 shadow-md">
            <div className=" flex justify-center items-center flex-col ml-2 py-6">
              <p className="items-end max-w-full font-extrabold vie text-secondary text-center text-[25px] md:text-[30px] lg:text-[32px]  px-2 pb-2">
                MISSION
              </p>
              <span className="h-1 -mt-1 lg:-mt-2 min-w-[110px]   bg-primary"></span>
            </div>
            <div>
              <p className="text-secondary  text-start font-light text-[16px] md:text-[18px] lg:text-[20px] ">
                To be a leading force in the electric and hybrid vehicle market,
                Red Shift envisions a future with cleaner air, a reduced carbon
                footprint, and enhanced economic prosperity. We aspire to create
                a greener, more sustainable world through our cutting-edge
                products and initiatives.
              </p>
            </div>
          </div>
          <div className="flex lg:min-h-[355px] flex-col justify-center items-center border-2 border-gray-100 shadow-md rounded-2xl py-10  px-2 sm:px-4 md:px-8 lg:px-12 ">
            <img src={mission} alt="" className="w-[230px] h-[246px] rotat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
