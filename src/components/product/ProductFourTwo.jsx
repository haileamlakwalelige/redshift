import React from "react";
import ModelFour from "../Reusable/ModelFour";
import ModelFour2 from "../Reusable/ModelFour2";

const ProductFourTwo = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 mt-5">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end border-b-4  border-primary max-w-full font-extrabold vie text-secondary text-[18px] lg:text-[20px]  px-2">
          FOUR-WHEEL MODEL
        </p>
      </div>
      <div className="mt-5">
        <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
          Red Shift introduces a range of four-wheel electric vehicles that
          redefine urban transportation with a focus on sustainability,
          innovation, and modernity. Our four-wheel models combine style and
          functionality to cater to various mobility needs.
        </p>
      </div>

      {/* Models */}
      <ModelFour />
      <ModelFour2 />
      <div>
        <div className="mt-5">
          <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
            Red Shift's four-wheel electric vehicles are designed for
            efficiency, comfort, and environmental consciousness. With advanced
            features and a commitment to sustainability, our models lead the way
            in shaping the future of urban transportation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductFourTwo;
