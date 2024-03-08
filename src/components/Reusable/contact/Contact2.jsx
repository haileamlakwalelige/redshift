import React from "react";
import sol1 from "../../../assets/sol2.png";
import lin from "../../../assets/lin.png";

const Contact2 = () => {
  return (
    <div className="lg:mt-44">
      <div className="bg-[#D9D9D9] flex flex-col justify-center items-center xl:w-[346px] px-3 pb-6 xl:min-h-[449px] w-full h-full relative rounded-2xl">
        <img
          src={sol1}
          alt=""
          className="top-0 xl:w-[440px] xl:h-[217px] relative flex flex-col"
        />
        <img
          src={lin}
          alt=""
          className="absolute flex -mt-32 lg:-mt-44 w-[102px] h-[110px] text-center"
        />
        <p className="text-primary font-bold text-[16px] md:text-[20px] lg:text-[24px] py-2">
          LinkedIn
        </p>
        <p className="text-black text-[14px] text-center">
          Join us on LinkedIn for a journey into sustainable mobility. Redshift
          - Driving the future, one electric tricycle at a time. Connect with us
          now!
        </p>
        <p className="text-primary text-[16px] font-bold md:text-[20px] lg:text-[24px] cav leading-tight">
          J o i n...
        </p>
      </div>
    </div>
  );
};

export default Contact2;
