import React from "react";

const HomePartners = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px]">
          PARTNERS
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-10 min-w-[222px]  bg-primary"></span>
      </div>
      <div className="mt-3">
        <div className="carousel gap-10 lg:gap-16 mx-2 sm:mx-4 md:mx-8 lg:mx-16">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Burger"
              className="h-[200px] w-[200px]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Burger"
              className="h-[200px] w-[200px]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Burger"
              className="h-[200px] w-[200px]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Burger"
              className="h-[200px] w-[200px]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
              className="h-[200px] w-[200px]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Burger"
              className="h-[200px] w-[200px]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Burger"
              className="h-[200px] w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePartners;
