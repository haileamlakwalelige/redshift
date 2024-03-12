import React from "react";
import cars from "../../assets/cars.gif";

const Cars = () => {
  return (
    <div className="mt-10">
      <img src={cars} alt="" className="w-screen pb-10" />
    </div>
  );
};

export default Cars;
