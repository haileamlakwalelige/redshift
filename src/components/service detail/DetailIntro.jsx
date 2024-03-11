import React from "react";

const DetailIntro = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16">
      <div className=" flex justify-center items-center flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold  text-secondary text-center text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] px-2">
          INNOVATIVE ELECTRIC AND HYBRID <br /> VEHICLE MANUFACTURING
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[550px] bg-primary"></span>
      </div>
      <div>
        <div className="flex justify-center items-start flex-col ml-2 py-3">
          <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
            PROBLEM
          </p>
          <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
        </div>
        <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[20px]">
          The transportation landscape in Ethiopia faces challenges marked by a
          lack of cost-effective and environmentally friendly tricycle vehicles.
          The market is saturated with liquid metal and low-quality tricycles,
          leading to increased running costs for mobility devices. Additionally,
          there's a gap in offering modern, sustainable solutions to meet the
          diverse needs of consumers.
        </p>
      </div>

      {/* Two */}
      <div>
        <div className="flex justify-center items-start flex-col ml-2 py-3">
          <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
            SOLUTION
          </p>
          <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
        </div>
        <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[20px]">
          Enter Redshift Corp, a forward-thinking manufacturer specializing in
          electric and hybrid vehicles. Redshift identifies the need for safe,
          economical, and modern mobility options, and our innovative tricycle
          models address these shortcomings. With unique features such as a
          fully enclosed cabin, steering wheel operation, and a powerful 300cc
          engine, Redshift's tricycles stand out in the market, offering a
          reliable and efficient solution for transportation needs.
        </p>
      </div>

      {/* Three */}
      <div>
        <div className="flex justify-center items-start flex-col ml-2 py-3">
          <p className="  items-end  font-extrabold vie text-secondary text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
            OUR APPROACH
          </p>
          <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
        </div>
        <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[20px]">
          Redshift has strategically evolved since its establishment in 2016,
          transitioning from a construction business to a manufacturing
          powerhouse focused on electric and hybrid vehicles. The company has
          expanded its footprint internationally, opening branches in Rwanda and
          incorporating partnerships to become a sole manufacturer of tricycles
          in East Africa.
        </p>
      </div>

      {/* Four */}
      <div>
        <div className="flex justify-center items-start flex-col ml-2 py-3">
          <p className="  items-end font-extrabold vie text-secondary text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
            PRODUCT FEATURES
          </p>
          <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
        </div>
        <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[20px]">
          Explore Redshift's range of electric and hybrid vehicles, including
          three and four-wheel models and E-cabs. With advanced features like a
          digital dashboard, full car body, luxury interior, and a unique
          combination of electric and gasoline options, our tricycles redefine
          modern mobility.
        </p>
      </div>
    </div>
  );
};

export default DetailIntro;
