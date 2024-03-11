import React from 'react'
// import test2 from "../../assets/test2.png";
import test2 from "../../../assets/test2.png";


const Testimony2 = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col lg:mt-20">
        <img
          src={test2}
          alt=""
          className="pb-2 h-[200px] w-[200px] lg:h-[230px] lg:w-[230px]"
        />
        <p className="text-primary text-[16px] lg:text-[22px] font-bold">
          Danait K
        </p>
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
      </div>
    </div>
  );
}

export default Testimony2