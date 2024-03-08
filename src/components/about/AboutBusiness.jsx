import React from "react";
import business from "../../assets/business.png";

const AboutBusiness = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 mt-5">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px] px-2">
          BUSINESS MODALITY AND MARKET PENETRATION
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[172px]  bg-primary"></span>
      </div>
      <div className="flex justify-center items-center lg:min-h-[70vh]">
        <div>
          <img src={business} alt="" />
        </div>
      </div>
      <div className="mt-5">
        <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
          Our business modality involves strategic market penetration. Divided
          into batches, each phase aims at supplying tricycles to different
          regions, creating a sustainable and widespread impact.
        </p>
      </div>
    </div>
  );
};

export default AboutBusiness;