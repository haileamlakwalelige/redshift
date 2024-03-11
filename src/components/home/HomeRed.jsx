import React from "react";

const HomeRed = () => {
  return (
    <div>
      <div className="flex justify-center items-start flex-col ml-2 py-3">
        <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
          REDSHIFT
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
      </div>
      <div className="flex  justify-center items-center p-4">
        <div className="flex flex-wrap lg:flex-nowrap px-2 sm:px-4 justify-center items-center gap-10">
          <div>
            <p className="text-primary text-center font-bold text-[24px] md:text-[30px] lg:text-[36px] pb-6">
              Redshift Revolution
            </p>
            <p className="text-secondary text-center text-16px] md:text-[20px] lg:text-[24px]">
              Embark on a visual journey with Redshift, unveiling our commitment
              to transforming transportation. Explore our state-of-the-art
              manufacturing, witness the elegance of our tricycle models, and
              hear from satisfied customers. With a focus on sustainability and
              innovation, Redshift is driving Ethiopia's green mobility
              revolution. Choose Redshift for a transformative ride.
            </p>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/2yBk1giIfqE"
              title="Parallax Scrolling Effect | HTML CSS &amp; JavaScript"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-screen lg:w-[600px] h-[450px] rounded-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRed;
