import React from "react";
import vis from "../../assets/vis.png";
import mis from "../../assets/mis.png";

const HomeAbout = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-start items-start ml-2 py-6">
        <p className="  items-end font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px] pr-3">
          ABOUT
        </p>
        <div>
          <p className="relative  items-end max-w-[100px] font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px]">
            REDSHIFT
          </p>
          <span className="absolute h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
        </div>
      </div>
      <div className="flex justify-center items-center px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold text-primary text-[20px] md:text-[22px] lg:text-[24px] text-center">
                Our Vision
              </p>
              <p className="text-secondary text-[16px] text-center">
                To become a leading player in the electric and hybrid vehicle
                market in Ethiopia, contributing to cleaner air, reduced carbon
                footprint, and enhanced economic growth.
              </p>
            </div>
            <div>
              <img src={vis} alt="" />
            </div>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold text-primary text-[20px] md:text-[22px] lg:text-[24px] text-center">
                Mission
              </p>
              <p className="text-secondary text-[16px] text-center">
                To empower individuals and businesses by providing them with
                cost-effective and environmentally friendly tricycle vehicles,
                while also fostering a sustainable ecosystem through the Crowd
                funding Model.
              </p>
            </div>
            <div>
              <img src={mis} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
