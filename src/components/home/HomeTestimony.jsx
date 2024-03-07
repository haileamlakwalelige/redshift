import React from "react";
import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.png";

const HomeTestimony = () => {
  return (
    <div>
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px]">
          TESTIMONY
        </p>
        <span class="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[222px]  bg-primary"></span>
      </div>
      <div>
        <div>
          <div>
            <img src={test1} alt="" />
            <p className="red "></p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimony;
