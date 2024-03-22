import React from "react";
import vision from "../../assets/vision.png";
import mission from "../../assets/mission.png";
import goal from "../../assets/goal.png";
import about from "../../assets/aboutback.png";
import "./style.css";
import Button from "../Reusable/button/Button";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div
      style={{ backgroundImage: `url(${about})` }}
      className="pt-6 bg-cover bg-center bg-no-repeat"
    >
      <div className="flex justify-start items-start ml-2 py-6">
        <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[25px] md:text-[30px] lg:text-[32px] pb-2">
          ABOUT
        </p>
        <div>
          <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[20px] sm:text-[25px] ml-8 md:text-[30px] lg:text-[32px] pb-2">
            REDSHIFT
          </p>
          <span className="absolute h-1 -mt-1 lg:-mt-2    min-w-[100px]  bg-primary"></span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center px-2 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 md:gap-10 lg:gap-20">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="justify-center items-center flex"
            >
              <div className="bg-[#F8F9FA] imo rounded-xl min-h-[420px] max-w-[338px] px-2   py-8">
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
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex justify-center items-center"
            >
              <div className="bg-[#F8F9FA] imo rounded-xl min-h-[420px] max-w-[338px] px-2   py-8">
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
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex justify-center items-center"
            >
              <div className="bg-[#F8F9FA] imo rounded-xl min-h-[420px] max-w-[338px] px-2   py-8">
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
      <Link to="/about">
        <Button type="button" title="Read More" />
      </Link>
    </div>
  );
};

export default HomeAbout;
