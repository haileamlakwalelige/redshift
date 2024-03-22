import React from "react";

const DetailProject = () => {
  return (
    <div id="construction" className="px-2 sm:px-4 md:px-8 lg:px-16">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="  items-end  font-extrabold vie text-secondary text-[18px] lg:text-[20px] pb-2">
          PROJECT SHOWCASE
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[152px]  bg-primary"></span>
      </div>
      <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[18px]">
        View images of our construction projects, showcasing the meticulous
        planning, skilled craftsmanship, and attention to detail that defines
        Redshift Corp's construction expertise.
      </p>
    </div>
  );
};

export default DetailProject;
