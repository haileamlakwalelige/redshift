import React from "react";

const DetailSupply = () => {
  return (
    <div className="px-2 sm:px-4 pb-10">
      <div>
        <div className=" flex justify-center items-start flex-col ml-2 py-6 px-2 sm:px-4 md:px-8 lg:px-12">
          <p className="items-end max-w-full font-extrabold  text-secondary text-start text-[18px] lg:text-[20px] px-2 pb-2">
            OUR SUPPLY CAPACITY
          </p>
          <span className="h-[2px] -mt-1 lg:-mt-2 min-w-[300px]  bg-primary"></span>
        </div>
        <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[18px]">
          The production capacity of our parent company is 0.2 million sets per
          year. Presently, we offer over 100 different types of main products
          (110, 125, 150, 175, and 200) organized into five series. These
          products have been widely distributed across every region in our
          homeland, and their sales volume consistently ranks at the top within
          the industry. Specializing in the production and sales of electric
          tricycles, three-wheel motorcycles, sanitation cars, express cars,
          four-wheel electric vehicles, and various spare parts, our diverse
          range caters to various transportation needs.
          <br />
          <br /> Our products are predominantly available through more than 400
          outlets across China, and we have successfully penetrated foreign
          markets in over 20 countries, including Africa, the Middle East,
          Southeast Asia, South America, and more. Presently, we hold the
          exclusive manufacturing agency for tricycles in East Africa and have
          commenced operations in Rwanda, Ethiopia, and Kenya. With a commitment
          to quality and innovation, we continue to expand our presence both
          domestically and internationally, providing reliable and efficient
          transportation solutions to a global clientele.
        </p>
      </div>
    </div>
  );
};

export default DetailSupply;
