import React from "react";

const DetailConstruction = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-12">
      <div className=" flex justify-center items-center flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold  text-secondary text-start text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] px-2">
          CONSTRUCTION EXPERTISE AND SOLUTIONS
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[550px] bg-primary"></span>
      </div>
      <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[20px]">
        At Redshift Corp, our commitment to excellence extends beyond
        manufacturing electric and hybrid vehicles; we bring our expertise to
        the construction sector, delivering comprehensive solutions tailored to
        meet diverse project requirements. With over seven years of combined
        experience, Redshift Corp has established itself as a key player in the
        construction industry.
      </p>
    </div>
  );
};

export default DetailConstruction;
