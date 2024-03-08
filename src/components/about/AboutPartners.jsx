import React from "react";
import market from "../../assets/part.png";

const AboutPartners = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 mt-5">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px] px-2">
          OUR PARTNERS
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[172px]  bg-primary"></span>
      </div>
      <div className="flex justify-center items-center lg:min-h-[70vh]">
        <div>
          <img src={market} alt="" />
        </div>
      </div>
      <div className="mt-5">
        <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
          Redshift proudly collaborates with key partners such as Yaolon, Ahadu
          Bank, Blue Zone Trading, and skilled agents. Together, we drive the
          vision of sustainable mobility and economic growth.
        </p>
      </div>
    </div>
  );
};

export default AboutPartners;
