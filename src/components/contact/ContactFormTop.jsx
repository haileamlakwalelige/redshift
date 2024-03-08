import React from "react";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

const ContactFormTop = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-center md:justify-between items-center py-2 px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="flex gap-4">
          <div className="h-[50px] flex justify-center items-center w-[50px] rounded-full bg-secondary">
            <LuPhone size={20} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-secondary text-[16px] md:text-[20px] lg:text-[22px] mt-2">
              +1259 496 4846
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-[50px] flex justify-center items-center w-[50px] rounded-full bg-secondary">
            <CiMail size={20} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-secondary text-[16px] md:text-[20px] lg:text-[22px] mt-2">
              redsricycle123@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormTop;
