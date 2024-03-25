import React from "react";
import "./button.css";

const Button = ({ title, type }) => {
  return (
    <div>
      <div className="container py-10">
        <button type={type} className="button text-primary button-3 flex justify-center items-center text-center">
          {title}
        </button>
      </div>
    </div>
  );
};

export default Button;
