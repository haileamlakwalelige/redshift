import React from "react";
import serdet1 from "../../assets/serdet1.png";
import white from "../../assets/white.jpg";

const DetailImage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${white})` }}
      className="px-2 bg-white sm:px-4 md:px-8 lg:px-16 bg-center bg-cover bg-no-repeat"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center bg-white">
        <div>
          {/* Three */}
          <div className="w-full">
            <div className="flex justify-center items-start flex-col ml-2 py-3 mb-3">
              <p className="  items-end font-extrabold vie text-secondary text-[18px] pb-4  lg:text-[20px]">
                OUR APPROACH
              </p>
              <span className="h-[3px] -mt-1 lg:-mt-2 ml-3  lg:ml-3 min-w-[112px]  bg-primary"></span>
            </div>
            <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[18px]">
              Redshift has strategically evolved since its establishment in
              2016, transitioning from a construction business to a
              manufacturing powerhouse focused on electric and hybrid vehicles.
              The company has expanded its footprint internationally, opening
              branches in Rwanda and incorporating partnerships to become a sole
              manufacturer of tricycles in East Africa.
            </p>
          </div>

          {/* Four */}
          <div className="w-full mt-16">
            <div className="flex justify-center items-start flex-col ml-2 py-3 mb-3">
              <p className="  items-end font-extrabold vie text-secondary text-[18px] pb-4  lg:text-[20px]">
                PRODUCT FEATURES
              </p>
              <span className="h-[3px] -mt-1 lg:-mt-2 ml-3  lg:ml-3 min-w-[112px]  bg-primary"></span>
            </div>
            <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[18px]">
              Explore Redshift's range of electric and hybrid vehicles,
              including three and four-wheel models and E-cabs. With advanced
              features like a digital dashboard, full car body, luxury interior,
              and a unique combination of electric and gasoline options, our
              tricycles redefine modern mobility.
            </p>
          </div>
        </div>
        <div>
          <img src={serdet1} alt="" className="max-h-[90vh] mt-10 w-screen" />
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
