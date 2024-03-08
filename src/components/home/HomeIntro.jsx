import React from "react";
import bg from "../../assets/bg.png";

const HomeIntro = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      className="bg-[#F6FDFE] relative lg:bg-[url(${contact})] lg:bg-cover flex justify-center items-center lg:bg-center min-h-[81vh]  lg:py-0 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="lg:col-span-2">
          <p className="text-primary py-10 font-bold text-center vie text-[24px] md:text-[30px] lg:text-[36px]">
            Revolutionizing Mobility for a <br /> Sustainable Future
          </p>
          <p className="text-white text-center text-16px] md:text-[20px] lg:text-[24px]">
            Welcome to Redshift, where innovation meets sustainability to
            reshape Ethiopia's transportation landscape. We are not just a
            manufacturer of motor vehicles; we are pioneers of change, driven by
            a mission to promote eco-friendly solutions, reduce carbon
            emissions, and propel economic growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
