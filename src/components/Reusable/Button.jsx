import React from "react";
import carImage from "../../assets/found3.gif"; // Adjust the path to your image file
import "./button.css"; // Import CSS file for styling

function Button() {
  return (
   <div className="flex justify-center items-center">
    <div className="car-animation-container">
      <div className="content-container flex items-center red duration-300  justify-center  text-white">
        <button className="hover-button red py-2 px-2 hover:px-0 hover:pl-2 text-center">Hover Me</button>
        <div className="car-container red min-w-[50px] py-1.5 px-0">
          <img src={carImage} alt="Car" className="car-image " />
        </div>
      </div>
    </div>
   </div> 
  );
}

export default Button;
