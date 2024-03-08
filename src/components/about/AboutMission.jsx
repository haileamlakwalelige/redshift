import React from "react";

const AboutMission = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-2 sm:px-6 md:px-12 lg:px-20">
      <div className="lg:col-span-2">
        <div className=" flex justify-center items-center flex-col ml-2 py-6">
          <p className="items-end max-w-full font-extrabold vie text-secondary text-center text-[30px] md:text-[35px] lg:text-[40px] px-2">
            MISSION{" "}
          </p>
          <span className="h-1 -mt-1 lg:-mt-2 min-w-[200px]   bg-primary"></span>
        </div>
        <div>
          <p className="text-secondary text-center font-light text-[16px] md:text-[20px] lg:text-[24px]">
            Our mission at Red Shift is to pioneer sustainable solutions and
            drive positive transformation. We are committed to revolutionizing
            transportation through the manufacturing of innovative electric and
            hybrid vehicles, promoting eco-friendly alternatives, reducing
            carbon emissions, and fostering economic growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
