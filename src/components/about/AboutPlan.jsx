import React from "react";
import plan1 from "../../assets/plan1.png";
import plan2 from "../../assets/plan2.png";

const AboutPlan = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px] px-2">
          PLAN AND STRATEGY
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[222px]  bg-primary"></span>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:min-h-[70vh]">
          <div className="col-span-1 lg:col-span-2">
            <img src={plan1} alt="" />
          </div>
          <div>
            <img src={plan2} alt="" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
          At Redshift, our plan is simple yet powerful – to revolutionize
          transportation through electric and hybrid tricycles. Our strategy
          involves sustainable mobility solutions, cutting-edge technology, and
          a commitment to environmental impact.
        </p>
      </div>
    </div>
  );
};

export default AboutPlan;
