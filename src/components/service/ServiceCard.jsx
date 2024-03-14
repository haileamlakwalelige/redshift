import React, { useState } from "react";
import { IoTodayOutline } from "react-icons/io5";
import Wave from "react-wavify";

const ServiceCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[18px] lg:text-[20px]  px-2">
          REDSHIFT SERVICES
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[172px]  bg-primary"></span>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 sm:px-4 md:px-8 lg:px-16">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="min-h-[450px] flex flex-col justify-between bg-white rounded-xl border-[1px] z-20 overflow-y-hidden shadow-xl"
          >
            <p className="text-primary py-10 inter border-b-[2px] border-primary font-bold text-[16px] md:text-[18px] lg:text-[20px]">
              Sustainable Mobility Insights
            </p>
            <p className="text-black text-center text-[14px] py-5 px-4 inter">
              Stay informed about the latest trends, technologies, and
              innovations in the realm of sustainable mobility. Our experts
              share insights into the future of electric and hybrid vehicles,
              contributing to a greener and more eco-friendly world.
            </p>
            <div className="flex justify-start items-center gap-6  px-4">
              <IoTodayOutline className="font-bold" />
              <p className="font-light text-[#00297A] text-[12px] inter">
                Dec 13, 23 12:00pm
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Wave
                fill="#36A0D2"
                paused={isHovered ? false : true}
                options={{
                  height: 60,
                  amplitude: 40,
                  speed: 0.3,
                  points: 2,
                }}
                className="bottom-0 -mb-2 z-10 -mt-8 rounded-b-2xl relative"
              />
              <p className="absolute text-primary font-bold text-[16px] md:text-[18px] lg:text-[20px] pt-14 z-20">
                Read More ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
