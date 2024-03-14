import React from "react";
import vision from "../../assets/vision.png";
import mission from "../../assets/mission.png";
import goal from "../../assets/goal.png";
import "./style.css";

const HomeAbout = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-start items-start ml-2 py-6">
        <p className="  items-end font-extrabold vie text-secondary text-[18px] lg:text-[20px]  pr-3">
          ABOUT
        </p>
        <div>
          <p className="relative  items-end max-w-[100px] font-extrabold vie text-secondary text-[18px] lg:text-[20px] ">
            REDSHIFT
          </p>
          <span className="absolute h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center px-2 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 md:gap-10 lg:gap-20">
            <div className="justify-center items-center flex">
              <div className="bg-[#F8F9FA] rounded-xl min-h-[420px] max-w-[338px] px-2   py-8">
                <div className="text-center flex justify-center items-center">
                  <img
                    src={vision}
                    alt=""
                    className="text-center h-[160px] w-[139px]"
                  />
                </div>
                <p className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-primary py-3">
                  Our Vision
                </p>
                <p className="text-black text-[16px]">
                  To become a leading player in the electric and hybrid vehicle
                  market in Ethiopia, contributing to cleaner air, reduced
                  carbon footprint, and enhanced economic growth.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-[#F8F9FA] rounded-xl min-h-[420px] max-w-[338px] px-2   py-8">
                <div className="text-center flex justify-center items-center">
                  <img
                    src={mission}
                    alt=""
                    className="text-center h-[160px] w-[139px]"
                  />
                </div>
                <p className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-primary py-3">
                  Mission
                </p>
                <p className="text-black text-[16px]">
                  To empower individuals and businesses by providing them with
                  cost-effective and environmentally friendly tricycle vehicles,
                  while also fostering a sustainable ecosystem through the Crowd
                  funding model.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-[#F8F9FA] rounded-xl min-h-[420px] max-w-[338px] px-2   py-8">
                <div className="text-center flex justify-center items-center">
                  <img
                    src={goal}
                    alt=""
                    className="text-center h-[160px] w-[139px]"
                  />
                </div>
                <p className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-primary py-3">
                  Goal
                </p>
                <p className="text-black text-[16px]">
                  Transforming transportation through sustainable mobility,
                  economic growth, and innovation in electric vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
