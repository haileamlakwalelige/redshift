import React from "react";
import market from "../../assets/pro.png";

const ProductIntro = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 my-10 max-h-screen z-10">
      <div className="flex justify-center items-center ">
        <div>
          <img src={market} alt="" className="w-full h-full"/>
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

export default ProductIntro;
