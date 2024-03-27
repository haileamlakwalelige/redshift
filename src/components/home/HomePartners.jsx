import React from "react";
import bg from "../../assets/party.png";
import Sliding from "../Reusable/Sliding";

const HomePartners = () => {
  return (
    <div data-aos-duration="2500" className="mt-5">
      <div className="flex justify-center items-start flex-col ml-1 py-4">
        <p className="items-end max-w-[80px] pb-2 font-extrabold vie text-secondary text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px]">
          PARTNERS
        </p>
        <span className="h-0.5 -mt-0.5 lg:-mt-1 ml-2 lg:ml-8 min-w-[180px] bg-primary"></span>
      </div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="mt-2 pl-[9%] pr-[4.5%] py-8 bg-cover bg-no-repeat bg-center"
      >
        <Sliding />
      </div>
    </div>
  );
};

export default HomePartners;