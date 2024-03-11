import React from "react";
import Model2 from "../Reusable/Model2";
import Model3 from "../Reusable/Model3";
import Model1 from "../Reusable/Model1";

const ProductThree = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 mt-5">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end border-b-4  border-primary max-w-full font-extrabold vie text-secondary text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] px-2">
          THREE-WHEELER VEHICLES
        </p>
      </div>
      <div className="mt-5">
        <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
          Red Shift takes pride in offering a range of three-wheeler vehicles
          designed to meet diverse transportation needs. Our commitment to
          quality, safety, and innovation is evident in the detailed features of
          each model.
        </p>
      </div>

      {/* Models */}
      <Model1 />
      <Model2 />
      <Model3 />
      <div>
        <div className="mt-5">
          <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
            Red Shift's three-wheeler vehicles embody modern mobility, offering
            a harmonious blend of comfort, safety, and sustainability. With
            versatile fuel options and cutting-edge features, our models
            redefine urban transportation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductThree;
