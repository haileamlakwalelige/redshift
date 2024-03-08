import React from "react";
import test1 from "../../../assets/test1.png";

const Testimony1 = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center flex-col lg:-mt-80">
        <img src={test1} alt="" className="pb-2" />
        <p className="text-primary text-[16px] font-bold">Danait K</p>
        <p className="text-[14px] font-bold text-[#c03b3b] pb-2">
          Nairobi, Kenya
        </p>
        <p className="text-center text-black text-[14px]">
          As an agent for Redshift, I've seen the positive response from
          customers firsthand. The crowd funding model is inclusive and allows
          people from all walks of life to be part of the green mobility
          movement. Redshift's commitment to quality and sustainability makes it
          a brand I'm proud to represent.
        </p>
      </div>{" "}
    </div>
  );
};

export default Testimony1;
