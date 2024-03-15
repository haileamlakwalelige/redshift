import React from "react";
import problem from "../../assets/problem.png";
import solution from "../../assets/solution.png";

const DetailIntro = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16">
      <div className=" flex justify-center items-center flex-col ml-2 py-6">
        <p className="items-end max-w-full font-bold  text-secondary text-center text-[16px] md:text-[18px] lg:text-[20px]  px-2 pb-2">
          INNOVATIVE ELECTRIC AND HYBRID VEHICLE MANUFACTURING
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[650px] bg-primary"></span>
      </div>

      {/* Problem */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10 mt-10">
        <div className="w-full lg:w-3/5">
          <div className="flex justify-center items-start flex-col ml-2 py-3 mb-3">
            <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[18px] pb-2  lg:text-[20px]">
              PROBLEM
            </p>
            <span className="h-[3px] -mt-1 lg:-mt-2 ml-3  lg:ml-3 min-w-[112px]  bg-primary"></span>
          </div>
          <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[18px]">
            The transportation landscape in Ethiopia faces challenges marked by
            a lack of cost-effective and environmentally friendly tricycle
            vehicles. The market is saturated with liquid metal and low-quality
            tricycles, leading to increased running costs for mobility devices.
            Additionally, there's a gap in offering modern, sustainable
            solutions to meet the diverse needs of consumers.
          </p>
        </div>
        <div className="lg:w-2/5">
          <img src={problem} alt="" />
        </div>
      </div>

      {/* Solution */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10 mt-10">
        <div className="w-full lg:w-3/5">
          <div className="flex justify-center items-start flex-col ml-2 py-3 mb-3">
            <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[18px] pb-2  lg:text-[20px]">
              SOLUTION
            </p>
            <span className="h-[3px] -mt-1 lg:-mt-2 ml-3  lg:ml-3 min-w-[112px]  bg-primary"></span>
          </div>
          <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[18px]">
            Enter Redshift Corp, a forward-thinking manufacturer specializing in
            electric and hybrid vehicles. Redshift identifies the need for safe,
            economical, and modern mobility options, and our innovative tricycle
            models address these shortcomings. With unique features such as a
            fully enclosed cabin, steering wheel operation, and a powerful 300cc
            engine, Redshift's tricycles stand out in the market, offering a
            reliable and efficient solution for transportation needs.
          </p>
        </div>
        <div className="lg:w-2/5">
          <img src={solution} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailIntro;
