import React from "react";
import sec from "../../assets/sec.png";

const DetailSecondIntro = () => {
  return (
    <div>
      <div className=" flex justify-center items-center flex-col ml-2 py-6 px-2">
        <p className="items-end max-w-full font-extrabold  text-secondary text-center text-[30px] md:text-[35px] lg:text-[40px] px-2">
          OPERATING IN BOTH ELECTRIC AND <br /> GASOLINE MAKES IT UNIQUE IN
          SELLING
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[550px] bg-primary"></span>
      </div>
      <div className="flex justify-center items-center mt-6">
        <div className="md:w-1/2 lg:w-3/5 pl-2">
          <img src={sec} alt="" />
        </div>
        <div className="md:w-1/2 lg:w-2/5">
          <p className="text-secondary text-[16px] text-start px-2 lg:px-6 lg:text-[20px]">
            Introducing our revolutionary 300CC hybrid tricycles, equipped with
            cutting-edge features for an unparalleled riding experience. Powered
            by a robust 300CC engine, these tricycles ensure exceptional
            performance. The inclusion of a rear view camera enhances safety,
            providing improved visibility for secure journeys. Experience the
            convenience of automatic transmission, seamless gear transitions,
            and a user-friendly steering wheel mode for easy maneuverability.
            With an impressive 26-liter capacity, travel longer distances
            without frequent refueling.
          </p>
        </div>
      </div>
      <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[18px] py-5">
        Achieving an outstanding 28 kilometers per liter consumption, these
        tricycles are designed for fuel efficiency, saving you money and
        reducing environmental impact. Accommodating up to 7 persons, they offer
        spacious seating for group travel. Embrace sustainability with hybrid
        technology for eco-friendly and efficient rides. Our 300CC hybrid
        tricycles – where innovation meets efficiency, providing a distinctive
        and enjoyable riding experience.
      </p>
    </div>
  );
};

export default DetailSecondIntro;
