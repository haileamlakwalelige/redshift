import React from "react";
import market from "../../assets/market.png";

const AboutMarket = () => {
  return (
    <div data-aos="fade-left"
    data-aos-duration="3000" className="px-2 sm:px-6 md:px-12 lg:px-20 mt-5">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[18px] lg:text-[20px]  px-2 pb-2">
          MARKET SIZE{" "}
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[172px]  bg-primary"></span>
      </div>
      <div className="flex justify-center items-center lg:min-h-[70vh]">
        <div>
          <img src={market} alt="" />
        </div>
      </div>
      <div className="mt-5">
        <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
          Operating in Amhara, Oromia, and Southern regions, Redshift taps into
          a substantial market. Our market size data is visually depicted,
          showcasing the vast potential and growing customer base.
        </p>
      </div>
    </div>
  );
};

export default AboutMarket;
