import React from "react";
import Testimony1 from "../Reusable/testimony/Testimony1";
import Testimony from "../Reusable/testimony/Testimony";
import Testimony2 from "../Reusable/testimony/Testimony2";

const HomeTestimony = () => {
  return (
    <div>
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[25px] sm:text-[25px] md:text-[30px] lg:text-[32px] ">
          TESTIMONY
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[222px]  bg-primary"></span>
      </div>
      <div className="flex justify-center items-center px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 xl:gap-32 mt-10">
          <Testimony1 />
          <Testimony2 />
          <Testimony />
        </div>
      </div>
    </div>
  );
};

export default HomeTestimony;
