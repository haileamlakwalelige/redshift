import React from "react";

const AboutWhat = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] px-2">
          WHAT IS RED SHIFT?
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[222px]  bg-primary"></span>
      </div>
      <div>
        <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px] lg:-mt-4">
          Red Shift Corp is a dynamic company operating at the forefront of
          innovation in various sectors. With a diverse portfolio spanning
          construction, manufacturing, and consultancy, Red Shift brings over
          seven years of combined expertise to deliver quality and value. We
          pride ourselves on transforming ideas into tangible realities,
          contributing to positive change across different industries.
        </p>
      </div>
    </div>
  );
};

export default AboutWhat;
