import React from "react";
import bg from "../../assets/serbg.png";
import hov from "../../assets/mat.gif";

const ServiceCards = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-2 sm:px-4 md:px-8 lg:px-16">
          <div className="flex flex-col  relative max-w-[420px]">
            <img src={bg} alt="" className="max-h-[550px] max-w-[420px]" />

            <div className="absolute mt-4 max-w-[420px]">
              <p className="text-secondary text-[20px] md:text-[24px] lg:text-[28px]">
                Hybrid Vehicle <br /> Manufacturing
              </p>
              <p className="mt-28 px-3">
                As a forward-thinking manufacturer, Redshift is at the forefront
                of producing eco-friendly electric and hybrid vehicles. Our
                state-of-the-art manufacturing plant, operational since 2018, is
                dedicated to crafting tricycles and other modern mobility
                solutions with a focus on sustainability.
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
