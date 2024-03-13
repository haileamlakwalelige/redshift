import React from "react";
import bg from "../../assets/white.png";
import join from "../../assets/join.png";
import globe from "../../assets/globe.png";

const HomeJoin = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-[426px] w-screen"
    >
      <div
        style={{ backgroundImage: `url(${join})` }}
        className="min-h-[426px] px-2 sm:px-6 md:px-12 lg:px-32 flex flex-col justify-center items-start bg-cover bg-center bg-no-repeat"
      >
        <div className="flex gap-3">
          <img src={globe} alt="" className="w-[50px] h-[50px]" />
          <p className="text-[25px] md:text-[30px] lg:text-[32px] font-bold">
            Join the Green Mobility Revolution
          </p>
        </div>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] pt-3">
          Explore a cleaner, greener future with us. By choosing our innovative
          solutions, you become a vital contributor to Ethiopia's green mobility
          revolution. We're dedicated to reducing carbon emissions, promoting
          sustainability, and fostering economic growth. Embrace the change –
          join us on the journey to a more sustainable tomorrow.
        </p>
      </div>
    </div>
  );
};

export default HomeJoin;
