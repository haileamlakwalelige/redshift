import React, { useState } from "react";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import Button from "../Reusable/button/Button";
import { Link } from "react-router-dom";

const HomeService = () => {
  const [isHover1, setIsHovered1] = useState(false);
  const [isHover2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <div className="mt-10 overflow-x-hidden bg-[#F8F9FA] overflow-y-hidden">
      <div className="flex justify-start items-start ml-2 py-6">
        <div>
          <p className="relative  items-end  pb-3 font-extrabold vie text-secondary text-[25px] md:text-[30px] lg:text-[32px]">
            WHAT WE DO
          </p>
          <span className="absolute h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center flex-wrap lg:flex-nowrap items-center gap-6 md:gap-12 lg:gap-20">
          <div data-aos="flip-left" className="max-w-[470px]  p-2 pb-10 ">
            <img
              src={!isHover1 ? ser1 : car1}
              alt=""
              className="lg:max-w-[440px] h-[280px]  rounded-xl object-center transition-opacity duration-1000"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            />
            <p className="font-bold text-primary text-[20px] md:text-[22px] lg:text-[24px] text-start py-6 px-4">
              Tricycle Manufacturing
            </p>
            <p className="text-black text-[16px] text-start px-2">
              We specialize in crafting electric and hybrid tricycles, offering
              models (110, 125, 150, 175, and 200) that stand out for their
              innovation and reliability. Our manufacturing capacity of 0.2
              million sets per year ensures top-notch quality.
            </p>
          </div>

          <div className="border-r-[1px] lg:flex hidden border-gray-500 min-h-[300px]"></div>
          {/* Service two */}
          <div
            data-aos="flip-right"
            className="max-w-[470px] rounded-xl p-2 pb-10 "
          >
            <img
              src={!isHover2 ? ser2 : car2}
              alt=""
              className=" lg:max-w-[440px] h-[280px]  rounded-xl"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            />
            <p className="font-bold text-primary text-[20px] md:text-[22px] lg:text-[24px] text-start py-6 px-4">
              Express Cars for Sustainable Travel
            </p>
            <p className="text-secondary text-[16px] text-start px-2">
              Redshift's express cars provide a sustainable and efficient mode
              of transportation. With features like fuel efficiency and modern
              design, our express cars meet the demands of eco-conscious
              consumers and businesses.
            </p>
          </div>
        </div>
      </div>
      <Link to="/service">
        <Button title="Read More" type="button" />
      </Link>
    </div>
  );
};

export default HomeService;
