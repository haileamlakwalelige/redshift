import React from "react";
import sol1 from "../../../assets/sol3.png";
import tik from "../../../assets/twit.png";

const Contact3 = () => {
  return (
    <div className="lg:-mt-44">
      <div className="bg-[#D9D9D9] flex flex-col justify-center items-center xl:w-[340px] px-3 pb-6 xl:min-h-[350px] w-full h-full relative rounded-2xl">
        <img
          src={sol1}
          alt=""
          className="top-0 min-h-[200px] relative flex flex-col"
        />
        <img
          src={tik}
          alt=""
          className="absolute flex -mt-32 lg:-mt-44 w-[102px] h-[110px] text-center"
        />
        <p className="text-primary font-bold text-[16px] md:text-[20px] lg:text-[24px] py-2">
          Tik Tok
        </p>
        <p className="text-black text-[14px] text-center">
          Hop on the trend of green innovation! Follow Redshift on TikTok for
          electrifying content on our cutting-edge electric and hybrid tricycle
          models. Let's ride the wave of change together!
        </p>
        <p className="text-primary text-[16px] font-bold md:text-[20px] lg:text-[24px] cav leading-tight">
          J o i n...
        </p>
      </div>
    </div>
  );
};

export default Contact3;
