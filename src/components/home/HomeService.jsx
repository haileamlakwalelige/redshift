import React from "react";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";

const HomeService = () => {
  return (
    <div className="mt-10 overflow-x-hidden">
      <div className="flex justify-start items-start ml-2 py-6">
        <p className="  items-end font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px] pr-3">
          OUR
        </p>
        <div>
          <p className="relative  items-end max-w-[100px] font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px]">
            SERVICE
          </p>
          <span class="absolute h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20">
          <div className="max-w-[470px] border-[1px] rounded-xl border-gray-100 p-2 pb-10 shadow-xl">
            <img
              src={ser1}
              alt=""
              className="lg:max-w-[440px] lg:max-h-[365px] rounded-xl"
            />
            <p className="font-bold text-primary text-[20px] md:text-[22px] lg:text-[24px] text-center py-6">
              Tricycle Manufacturing
            </p>
            <p className="text-secondary text-[16px] text-start px-2">
              We specialize in crafting electric and hybrid tricycles, offering
              models (110, 125, 150, 175, and 200) that stand out for their
              innovation and reliability. Our manufacturing capacity of 0.2
              million sets per year ensures top-notch quality.
            </p>
          </div>

          {/* Service two */}
          <div className="max-w-[470px] border-[1px] rounded-xl border-gray-100 p-2 pb-10 shadow-xl">
            <img
              src={ser2}
              alt=""
              className="lg:max-w-[440px] lg:max-h-[365px] rounded-xl"
            />
            <p className="font-bold text-primary text-[20px] md:text-[22px] lg:text-[24px] text-center py-6">
              Express Cars for Sustainable Travel
            </p>
            <p className="text-secondary text-[16px] text-start px-2">
              Redshift's express cars provide a sustainable and efficient mode
              of transportation. With features like fuel efficiency and modern
              design, our express cars meet the demands of eco-conscious
              consumers and businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
