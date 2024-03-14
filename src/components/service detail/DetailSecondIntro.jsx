import React from "react";
import sec from "../../assets/sec.png";
import bg from "../../assets/redbgs.png";

const DetailSecondIntro = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex md:flex-row flex-col justify-center items-center gap-6 mt-6 py-10 px-2 lg:px-6 pb-20">
        <div className="md:w-1/2 lg:w-3/5">
          <div className=" flex justify-center items-center flex-col ml-2 py-6 px-2">
            <p className="items-end max-w-full font-extrabold  text-secondary text-center text-[18px] lg:text-[20px] px-2 pb-6">
              OPERATING IN BOTH ELECTRIC AND GASOLINE MAKES IT UNIQUE IN <br />{" "}
              SELLING
            </p>
            <span className="h-[2px] -mt-1 lg:-mt-2 min-w-[300px] md:min-w-[400px] lg:min-w-[500px] bg-primary"></span>
          </div>
          <p className="text-secondary text-[16px] text-start  lg:text-[18px] mt-10">
            Introducing our revolutionary 300CC hybrid tricycles, equipped with
            cutting-edge features for an unparalleled riding experience. Powered
            by a robust 300CC engine, these tricycles ensure exceptional
            performance. The inclusion of a rearview camera enhances safety,
            providing improved visibility for secure journeys. Experience the
            convenience of automatic transmission, seamless gear transitions,
            and a user-friendly steering wheel mode for easy maneuverability.
            With an impressive 26-liter capacity, travel longer distances
            without frequent refueling. Achieving an outstanding 28 kilometers
            per liter consumption, these tricycles are designed for fuel
            efficiency, saving you money and reducing environmental impact.
            Accommodating up to 7 persons, they offer spacious seating for group
            travel. Embrace sustainability with hybrid technology for
            eco-friendly and efficient rides. Our 300CC hybrid tricycles – where
            innovation meets efficiency, providing a distinctive and enjoyable
            riding experience.
          </p>
        </div>
        <div className="md:w-1/2 lg:w-2/5">
          <img src={sec} alt="" className="min-h-[55vh]"/>
        </div>
      </div>
    </div>
  );
};

export default DetailSecondIntro;
