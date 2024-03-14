import React from "react";
import view from "../../assets/view.png";

const DetailView = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16 pt-10">
      <div>
        <p className="cav font-semibold text-primary text-start text-[25px] sm:text-[25px] md:text-[30px] lg:text-[32px]  py-3">
          VIEW DETAILS
        </p>
      </div>
      <img src={view} alt="" className="max-h-[90vh] w-screen" />
    </div>
  );
};

export default DetailView;
