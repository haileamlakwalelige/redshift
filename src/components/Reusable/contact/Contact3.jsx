import React from "react";
import sol1 from "../../../assets/sol3.png";
import tik from "../../../assets/twit.png";

const Contact3 = () => {
  return (
    <div className="lg:-mt-44">
      <div className="bg-[#D9D9D9] flex flex-col justify-center items-center xl:w-[340px] px-3 pb-2 xl:min-h-[350px] w-full h-full relative rounded-2xl">
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
          Twitter
        </p>
        <p className="text-black text-[14px] text-center">
          Revolutionize your feed! Follow Redshift on Twitter for real-time
          updates, industry insights, and glimpses into the future of electric
          and hybrid vehicles. Tweet with us using #RedshiftRevolution.
        </p>
        <p className="text-primary text-[16px] font-bold md:text-[20px] lg:text-[24px] cav leading-tight">
          J o i n...
        </p>
      </div>
    </div>
  );
};

export default Contact3;
